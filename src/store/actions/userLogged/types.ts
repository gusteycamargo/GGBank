export const USER_LOGGED = 'USER_LOGGED'

export interface UserLogged {
    id: number
    fullname: string
    account_id: number
    cpf: string
    email: string
    phone: string
    account: Account
    timestamp: number
}

export interface UserLoggedState {
    userLogged: UserLogged
}

export interface Account {
    id: number
    amount_current: number
    amount_saving: number
    timestamp: number
}

export interface UserLoggedAction {
    type: typeof USER_LOGGED
    payload: UserLogged
}