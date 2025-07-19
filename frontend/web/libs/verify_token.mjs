import { jwtVerify } from 'https://esm.sh/jose'
import { secretKey } from '../contants/secret_key.mjs'

export const verifyToken = async (input) => {
    try {
        const token = await jwtVerify(input.token, secretKey)
        return token
    } catch (e) {
        console.error("Token invalido: " + e)
    }
}