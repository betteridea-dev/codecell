import { useEffect, useState } from "react";
import { connect } from "@permaweb/aoconnect";
import toast, { Toaster } from 'react-hot-toast';

async function getResults(process: string, cursor = "") {
    const ao = connect();

    const r = await ao.results({
        process,
        from: cursor,
        sort: "ASC",
        limit: 999,
    });

    if (r.edges.length > 0) {
        const newCursor = r.edges[r.edges.length - 1].cursor;
        const results = r.edges.map((e) => e.node);
        return { cursor: newCursor, results };
    } else {
        return { cursor, results: [] };
    }
}

const stripAnsiCodes = (str: string): string => str.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");


export default function CodeCell({ cellId, appName, code = "print('Hello AO!')", devMode = false, nowallet = false, enableToasts = false, width = "100%", height = "300px", className = "", style = {}, onAOProcess = (pid: string) => { }, onNewMessage = (msgs: any[]) => { }, onInbox = (inbox: any) => { } }
    :
    { cellId: string; appName: string; code?: string; devMode?: boolean; nowallet?: boolean; enableToasts?: boolean; width?: string; height?: string; className?: string; style?: React.CSSProperties; onAOProcess?: (pid: string) => void; onNewMessage?: (msgs: any[]) => void; onInbox?: (inbox: any) => void }) {
    // const [myAoId, setMyAoId] = useState<string>("")
    // const [intrvlId, setIntrvlId] = useState<number>(0)
    const url = new URL(devMode ? "http://localhost:3000/codecell" : "https://ide.betteridea.dev/codecell");

    url.searchParams.append("app-name", appName);
    url.searchParams.append("code", code);
    if (nowallet) url.searchParams.append("nowallet", "true");


    useEffect(() => {
        const callback = async (e: any) => {
            if (e.data.action == "set_process" && e.data.appname == appName) {
                if (!e.data.process) return;
                onAOProcess(e.data.process);
                // setMyAoId(e.data.process)
                const ids = JSON.parse(sessionStorage.getItem("cell-ids") || "{}");
                ids[appName] = e.data.process;
                sessionStorage.setItem("cell-ids", JSON.stringify(ids));
            } else if (e.data.action == "inbox") {
                if (!e.data.data) return;
                onInbox(e.data.data);
            }
        };

        const localShowToasts = JSON.parse(sessionStorage.getItem("show-toasts") || "{}");
        localShowToasts[appName] = enableToasts;
        sessionStorage.setItem("show-toasts", JSON.stringify(localShowToasts));


        window.removeEventListener("message", callback);
        window.addEventListener("message", callback);
        return () => window.removeEventListener("message", callback);
    }, []);

    useEffect(() => {
        clearInterval(parseInt(sessionStorage.getItem("interval")! as string));

        async function fetchNewInboxMsg() {
            const ids = JSON.parse(sessionStorage.getItem("cell-ids") || "{}");
            const cursors = JSON.parse(sessionStorage.getItem("cursors") || "{}");
            Object.keys(ids).forEach(async (name) => {
                const localCursor = cursors[name];

                const r = await getResults(ids[name], localCursor || "");
                if (!localCursor) {
                    cursors[name] = r.cursor;
                    return sessionStorage.setItem("cursors", JSON.stringify(cursors));
                }

                if (r.cursor != cursors[name]) {
                    cursors[name] = r.cursor;
                    sessionStorage.setItem("cursors", JSON.stringify(cursors));
                    if (r.results.length > 0) {
                        onNewMessage(r.results);
                        const localShowToasts = JSON.parse(sessionStorage.getItem("show-toasts") || "{}");
                        console.log(name, localShowToasts[name], r.results)
                        if (localShowToasts[name]) {
                            r.results.forEach((msg) => {
                                if (msg.Output?.print) {
                                    console.log(msg.Output.data);
                                    toast((t) => (
                                        <div style={{ fontFamily: "monospace", cursor: "pointer" }} onClick={() => toast.dismiss(t.id)}>
                                            {stripAnsiCodes(msg.Output.data)}
                                        </div>
                                    ))
                                }
                            });

                        }
                    }
                }
            });
        }
        sessionStorage.setItem("interval", setInterval(fetchNewInboxMsg, 3000).toString());

        return () => clearInterval(parseInt(sessionStorage.getItem("interval")! as string));
    }, [appName, enableToasts]);

    return (
        <>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
            <iframe
                id={cellId}
                src={url.toString()}
                width={width}
                height={height}
                className={className}
                style={{ ...style, backgroundColor: "black !important", borderRadius: "7px", border: "1px solid #222" }}
            // referrerPolicy="no-referrer"
            />
        </>
    );
}
