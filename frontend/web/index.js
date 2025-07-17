
const { protocol, hostname, port } = window.location
const url = `${protocol}//${hostname}${(port == undefined && ':' + port) ?? undefined}`.replace(":", "")
console.log(url)