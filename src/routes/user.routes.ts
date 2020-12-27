import { Router } from 'express'
import deletePassword from '../utils/deletePassword'
import CreateUsersService from '../services/CreateUserService'

const usersRouter = Router()

usersRouter.post('/', async (request, response) => {
	const { name, email, password } = request.body

	const createUser = new CreateUsersService()

	const user = await createUser.execute({
		name,
		email,
		password
	})

	deletePassword(user)

	return response.json(user)
})


export default usersRouter
