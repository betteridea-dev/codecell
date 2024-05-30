import { useEffect, useState } from "react";
import { connect } from "@permaweb/aoconnect"

async function getResults(process: string, cursor = "") {
    const ao = connect();

    const r = await ao.results({
        process,
        from: cursor,
        sort: "DESC",
        limit: 10,
    })

    if (r.edges.length > 0) {
        const newCursor = r.edges[r.edges.length - 1].cursor;
        const results = r.edges.map((e) => e.node);
        return { cursor: newCursor, results };
    } else {
        return { cursor, results: [] };
    }
}


export default function CodeCell({ cellId,
    appName,
    code = "print('Hello AO!')",
    devMode = false,
    width = "100%",
    height = "300px",
    className = "",
    style = {},
    onAOProcess = (pid: string) => { },
    onNewMessage = (msgs: any[]) => { },
    onInbox = (inbox: any) => { }
}: {
    cellId: string;
    appName: string;
    code?: string;
    devMode?: boolean;
    width?: string;
    height?: string;
    className?: string;
    style?: React.CSSProperties;
    onAOProcess?: (pid: string) => void;
    onNewMessage?: (msgs: any[]) => void;
    onInbox?: (inbox: any) => void;
}) {
    // const [myAoId, setMyAoId] = useState<string>("")
    // const [intrvlId, setIntrvlId] = useState<number>(0)
    const url = new URL(devMode ? "http://localhost:3000/codecell" : "https://ide.betteridea.dev/codecell");

    url.searchParams.append("app-name", appName);
    url.searchParams.append("code", code);

    useEffect(() => {
        const callback = async (e: any) => {
            if (e.data.action == "set_process") {
                if (!e.data.process) return
                onAOProcess(e.data.process);
                // setMyAoId(e.data.process)
                sessionStorage.setItem("cell-ao-id", e.data.process)
            } else if (e.data.action == "inbox") {
                if (!e.data.data) return
                onInbox(e.data.data)
            }
        };

        window.removeEventListener("message", callback);
        window.addEventListener("message", callback);
        return () => window.removeEventListener("message", callback);
    }, [])

    useEffect(() => {
        if (!sessionStorage.getItem("cell-ao-id")) return
        // clearInterval(intrvlId)
        clearInterval(parseInt(sessionStorage.getItem("interval")! as string))
        async function fetchNewInboxMsg() {
            const localCursor = sessionStorage.getItem("cursor") || ""
            const r = await getResults(sessionStorage.getItem("cell-ao-id") as string, localCursor)
            console.log(r.cursor)
            if (!localCursor) // if ran for first time, dont fetch old stuff
                return sessionStorage.setItem("cursor", r.cursor)

            if (r.cursor != sessionStorage.getItem("cursor")) {
                sessionStorage.setItem("cursor", r.cursor)
                if (r.results.length > 0) {
                    // console.log(r.results)
                    onNewMessage(r.results)
                }
            }

        }

        sessionStorage.setItem("interval", setInterval(fetchNewInboxMsg, 2500).toString())

        return () => clearInterval(parseInt(sessionStorage.getItem("interval")! as string))
    }, [])


    return <iframe
        id={cellId}
        src={url.toString()}
        width={width}
        height={height}
        className={className}
        style={{ ...style, backgroundColor: "black !important", borderRadius: "7px", border: "1px solid #222" }}
    // referrerPolicy="no-referrer"
    />
}