import storage from "../libs/storage.mjs"

const data = await storage.getData({ storageName: "users" })
const users = JSON.parse(data)

const save = async (user) => {
    const data = JSON.stringify(user)
    await storage.saveData({ storageName: "users", data: data })
}

const getById = async (id) => {
    const user = users.find(u => u._id === id)
    return user
}

const getByEmail = async (email) => {
    const user = users.find(u => u.email === email)
    return user
}

const getAll = async () => {
    return users
}

export default { save, getById, getByEmail, getAll }
