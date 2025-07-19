import { authToken } from "../features/auth_token.mjs";
import { listUsers } from "../services/list_users.mjs";

const users = await listUsers()
console.log(users)
