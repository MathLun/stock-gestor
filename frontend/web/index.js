import { openLink } from "./features/open_link.mjs"

const dashboardLink = openLink('/frontend/web/dashboard')
document.getElementById('dashboardLink').href = dashboardLink

const loginLink = openLink("/frontend/web/login")
document.getElementById('loginLink').href = loginLink