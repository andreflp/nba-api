interface User {
  email: string
  password?: string
}

export default function deletePassword(user: User) {
  delete user.password
}
