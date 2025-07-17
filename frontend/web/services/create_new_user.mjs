import userRepo from '../repos/users.mjs'

export const createNewUser = async ({ _id, username, email, password, role }) => {
    try {
        await userRepo.save({ _id, username, email, password, role})
        console.log('Usuario cadastrado com sucesso!')
    } catch (e) {
        console.error('Erro ao cadastrar um novo usuario')
    }
}