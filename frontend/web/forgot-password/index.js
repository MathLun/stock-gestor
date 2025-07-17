import { openLink } from "../features/open_link.mjs";

const loginLink = openLink("/frontend/web/login")
document.getElementById("loginLink").href = loginLink

document.getElementById('submit').addEventListener('submit', async (e) => {
    e.preventDefault()
    
})