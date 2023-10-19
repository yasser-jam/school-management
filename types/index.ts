export interface Student {
    id: number | null
    first_name: string
    last_name: string
    father_name: string
    address: string
    prev_mosques: string[] | [] | null
    saved_amount: number
    tested_amount: number
}

export interface Teacher {
    id: number | null
    first_name: string
    last_name: string
    father_name: string
    address: string
    prev_mosques: string[] | [] | null
    saved_amount: number
    tested_amount: number
    phone_number: string
    is_mojaz: boolean
    age: number
    password: string
    halakah: string | null
}

export interface Mosque {
    id: number
    name: string
}