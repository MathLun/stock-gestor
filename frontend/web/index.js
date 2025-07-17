
const { protocol, hostname, port } = window.location
console.log(`${protocol}//${hostname}${(port !== undefined && ':' + port)?? undefined}`)