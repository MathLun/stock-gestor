import { openLink } from "../features/open_link.mjs";

const homeLink = openLink('/')
document.getElementById('homeLink').href = homeLink

const forgotPasswordLink = openLink('/forgot-password')
document.getElementById('forgotPasswordLink').href = forgotPasswordLink

const registerLink = openLink('/register')
document.getElementById('registerLink').href = registerLink