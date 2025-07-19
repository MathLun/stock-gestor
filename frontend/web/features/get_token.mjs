import storage from "../libs/storage.mjs"

export const getToken = async () => {
    const token = await storage.getData({ storageName: "token"})
    return token
}