import { openLink } from "../features/open_link.mjs";

const homeLink = openLink('/frontend/web')
document.getElementById('homeLink').href = homeLink

const forgotPasswordLink = openLink('/frontend/web/forgot-password')
document.getElementById('forgotPasswordLink').href = forgotPasswordLink

const registerLink = openLink('/frontend/web/register')
document.getElementById('registerLink').href = registerLink