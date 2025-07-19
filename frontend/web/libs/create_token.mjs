import { SignJWT } from 'https://esm.sh/jose'
import { secretKey } from '../contants/secret_key.mjs'

export const createToken = async (payload) => {
    const token = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey)

    return token
}