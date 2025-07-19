import storage from "../libs/storage.mjs"

export const saveToken = async (token) => {
    await storage.saveData({ storageName: "token", data: token })
}