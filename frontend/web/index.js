import { openLink } from "./features/open_link.mjs"
import { authToken } from './features/auth_token.mjs'
import { redirectPage } from './features/redirect_page.mjs'

window.onload = async () => {
    const token = await authToken()
    if (token) {
        redirectPage('/dashboard')
    }
}

const dashboardLink = openLink('/dashboard')
document.getElementById('dashboardLink').href = dashboardLink
console.log(dashboardLink)

const loginLink = openLink("/login")
document.getElementById('loginLink').href = loginLink
