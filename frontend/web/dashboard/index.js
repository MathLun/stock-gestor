import { authToken } from "../features/auth_token.mjs";
import { openLink } from "../features/open_link.mjs";
import { redirectPage } from "../features/redirect_page.mjs";
import { getUserById } from "../services/get_user_by_id.mjs";
import { listUsers } from "../services/list_users.mjs";

window.onload = async () => {
    try {
        const token = await authToken()
        if (!token) {
            redirectPage('/login')
        } else {
            const users = await listUsers()
            console.log(users)
        }
    } catch (e) {
        console.error(e)
    }
}

const brandLink = openLink('/dashboard')
document.getElementById('brandLink').href = brandLink

const myProfileLink = openLink('/dashboard/profile')
document.getElementById('my-profile').href = myProfileLink

const token = await authToken("token")
const user = await getUserById(token._id)
document.getElementById('profile-letter').innerText = String(user.username).charAt(0).toLocaleUpperCase()