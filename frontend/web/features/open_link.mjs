export const openLink = (route) => {
    const { protocol, hostname, port } = window.location
    const url = `${protocol}//${hostname}${port ?  ':' + port + '/frontend/web' : undefined}${route}/index.html`
    const url_handler = url.replace("undefined", "")
    return url_handler
}