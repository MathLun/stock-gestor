import userRepo from "../repos/users.mjs"

export const getUserById = async (id) => {
    const user = await userRepo.getById(id)
    return user
}