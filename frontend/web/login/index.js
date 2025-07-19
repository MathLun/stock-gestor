import { authToken } from "../features/auth_token.mjs";
import { compare } from "../features/compare.mjs";
import { openLink } from "../features/open_link.mjs";
import { redirectPage } from "../features/redirect_page.mjs";
import { refreshPage } from "../features/refresh_page.mjs";
import { saveToken } from "../features/save_token.mjs";
import { createToken } from "../libs/create_token.mjs";
import { getUserByEmail } from "../services/get_user_by_email.mjs";

window.onload = async () => {
    try {
        const token = await authToken()
        if (token) {
            redirectPage('/dashboard')    
        } else {
            loginForm()
        }   
    } catch(e) {
        console.error("ONload não verificado")
    }
}

const homeLink = openLink('/')
document.getElementById('homeLink').href = homeLink

const forgotPasswordLink = openLink('/forgot-password')
document.getElementById('forgotPasswordLink').href = forgotPasswordLink

const registerLink = openLink('/register')
document.getElementById('registerLink').href = registerLink

const loginForm = () => {
    document.getElementById('submit').addEventListener('submit', async (e) => {
        e.preventDefault()
        try {
            const email = document.getElementById('email').value
            const password = document.getElementById('password').value
            const user = await getUserByEmail(email)
            const isPasswordValid = await compare(user.password, password)
            const payload = { _id: user._id, email: user.email, role: user.role }
            const token = await createToken(payload)

            if (!user || !isPasswordValid) {
                refreshPage()
                console.error(user.error)
            } else {
                await saveToken(String(token))
                redirectPage('/dashboard')
            }
        } catch (e) {
            console.error(e)
        }
    })
}