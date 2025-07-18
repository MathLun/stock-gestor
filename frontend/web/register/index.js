import { openLink } from "../features/open_link.mjs"
import { createNewUser } from "../services/create_new_user.mjs"

const homeLink = openLink('/')
document.getElementById('homeLink').href = homeLink

const loginLink = openLink('/login')
document.getElementById('loginLink'). href = loginLink

document.getElementById('submit').addEventListener('submit', async (e) => {
    e.preventDefault()

    const _id = 1
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const role = document.getElementById('role').value  
    await createNewUser({ _id, username, email, password, role })
})

