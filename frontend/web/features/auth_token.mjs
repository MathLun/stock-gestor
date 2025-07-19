import { verifyToken } from "../libs/verify_token.mjs"
import { getToken } from "./get_token.mjs"

export const authToken = async () => {
    const token = await getToken()
    if (token) {
        const { payload } = await verifyToken({ token })
        return payload
    }
}
