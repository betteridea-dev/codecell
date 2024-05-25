import { useEffect } from "react";


export default function CodeCell({ cellId,
    appName,
    code = "print('Hello AO!')",
    devMode = false,
    width = "100%",
    height = "300px",
    className = "",
    style = {},
    onAOProcess = (pid: string) => { }
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
}) {
    const url = new URL(devMode ? "http://localhost:3000/codecell" : "https://ide.betteridea.dev/codecell");

    url.searchParams.append("app-name", appName);
    url.searchParams.append("code", code);

    useEffect(() => {
        const callback = async (e: any) => {
            if (e.data.action == "set_process") {
                onAOProcess(e.data.process);
            }
        };

        window.removeEventListener("message", callback);
        window.addEventListener("message", callback);
        return () => window.removeEventListener("message", callback);
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