export interface UserData {
    id: number
    username: string
    email: string
    avatar: string
    phone: string
    role: string
    status: number
    created_at: string
    updated_at: string
}

export interface LoginRequestData {
    username: string
    password: string
}