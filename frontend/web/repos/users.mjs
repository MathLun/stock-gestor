import storage from "../libs/storage.mjs"

await storage.saveStorageName("users")
const users = await storage.getData()

const save = async (user) => {
    await storage.saveData(user)
}

const getById = async (id) => {
    const user = users.find(u => u._id === id)
    return user
}

const getAll = async () => {
    return users
}

export default { save, getById, getAll }
