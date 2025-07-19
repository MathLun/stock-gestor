import userRepo from '../repos/user_repo.mjs'

export const listUsers = async () => {
    const users = await userRepo.getAll()
    return users
}