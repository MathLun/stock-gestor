import userRepo from "../repos/user_repo.mjs"

export const getUserByEmail = async (email) => {
    try {
        const user = await userRepo.getByEmail(email)
        return user
    } catch (e) {
        return { error: "Erro ao buscar o usuario" }
    }
}