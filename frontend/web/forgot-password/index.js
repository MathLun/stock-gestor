import { openLink } from "../features/open_link.mjs";

const loginLink = openLink("/login")
document.getElementById("loginLink").href = loginLink

document.getElementById('submit').addEventListener('submit', async (e) => {
    e.preventDefault()
    
})