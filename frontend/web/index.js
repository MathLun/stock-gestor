
const { protocol, hostname, port } = window.location
const url = `${protocol}//${hostname}${(port == undefined && ':' + port) || undefined}`
const url_handler = url.replace("undefined", "")
console.log(url_handler)