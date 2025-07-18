import { openLink } from "./features/open_link.mjs"

const dashboardLink = openLink('/dashboard')
//document.getElementById('dashboardLink').href = dashboardLink
console.log(dashboardLink)

const loginLink = openLink("/login")
document.getElementById('loginLink').href = loginLink