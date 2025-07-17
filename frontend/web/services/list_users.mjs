import userRepo from '../repos/users.mjs'

export const listUsers = async () => {
    const users = await userRepo.getAll()
    return users
}