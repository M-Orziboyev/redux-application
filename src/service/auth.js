import axios from "./api"

const AuthService = { 
    async userRegister(user) {
        const response = axios.post('/users', {user})
        return (await response).data
    },
    async userLogin() {
        // const response = axios.get('/login')
    },
    async getUser() {
        // const response = axios.get('/user')
    }
}


export default AuthService