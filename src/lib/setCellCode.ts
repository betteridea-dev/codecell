export default function setCellCode(cellId: string, code: string, devMode = false) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const iframe: any = document.getElementById(`${cellId}`);
    if (!iframe) return console.error(`Cell with id ${cellId} not found`);
    if (iframe.contentWindow != null) {
        const host = devMode ? "*" : "https://ide.betteridea.dev";
        iframe.contentWindow.postMessage({ action: "set_code", code }, host);
    }
}