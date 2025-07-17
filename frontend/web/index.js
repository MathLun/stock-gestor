
const openLink = (route) => {
    const { protocol, hostname, port } = window.location
    const url = `${protocol}//${hostname}${(port != undefined && ':' + port) || undefined}${route}/index.html`
    const url_handler = url.replace("undefined", "")
    return url_handler
}

const url = openLink("/frontend/web/login")

document.getElementById('loginLink').href = url