import userRepo from "../repos/user_repo.mjs"

export const getUserById = async (id) => {
    const user = await userRepo.getById(id)
    return user
}