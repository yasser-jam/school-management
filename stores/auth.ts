import { defineStore } from 'pinia';

import { api } from './../composables/api'
export const useAuthStore = defineStore('auth', () => {

    // maxAge after 6 months    
    const maxAge = 60 * 60 * 24 * 30 * 6

    const username = ref<string>('')
    const email = ref<string>('')
    const password = ref<string>('')

    const accessToken:any = useCookie('gateway.accessToken', { maxAge })

    const reset = () => {
        username.value = ''
        email.value = ''
        password.value = ''
    }

    const login = async () => {
        try {
            const res = await api('login', {
                method: 'POST',
                body: {
                    userName: username.value,
                    password: password.value
                }
            })

            accessToken.value = res

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    const signup = async () => {
        try {
            const res: any = await api('signup', {
                method: 'POST',
                body: {
                    userName: username.value,
                    password: password.value,
                    email: email.value
                }
            })

            accessToken.value = res.token
            
        } catch (error) {
            console.log(error);
            throw error
        }
    }


    const logout = async () => {
        try {

            accessToken.value = null

        } catch (error) {
            console.log(error);
        }
    }

    return {
        username,
        password,
        email,
        login,
        signup,
        reset,
        logout
    }
})