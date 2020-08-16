import { UserLogged, UserLoggedAction, USER_LOGGED } from './types'

export function userLogged(userLogged: UserLogged): UserLoggedAction {
    return {
        type: USER_LOGGED,
        payload: userLogged
    };
}
