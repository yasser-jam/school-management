import { Mosque } from '~/types/index';
import { defineStore } from "pinia";

export const useMosqueStore = defineStore('mosque', () => {
      
    const mosques = ref<Mosque[]>([])
    const list = async () => {
        try {

            const res = await api('students/all') as Mosque[]
            mosques.value = res

        } catch (error) {
            console.log(error);
            throw error
        }
    }

    return {
        list,
        mosques
    }
})