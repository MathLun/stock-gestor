import storage from "../libs/storage.mjs"

const userRepo = []
const data = await storage.getData({ storageName: "users" })
const users = JSON.parse(data)

const save = async (user) => {
    userRepo.push(user)
    await storage.saveData({ storageName: "users", data: JSON.stringify(userRepo) })
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
