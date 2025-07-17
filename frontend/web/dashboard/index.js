import { listUsers } from "../services/list_users.mjs";

const users = await listUsers()
console.log(users)
