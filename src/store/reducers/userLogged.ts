import { UserLoggedAction, USER_LOGGED, UserLoggedState } from '../actions/userLogged/types'

const INITIAL_STATE: UserLoggedState = {
    userLogged: {
        id: 0,
        cpf: '',
        account: {
            id: 0,
            amount_current: 0,
            amount_saving: 0,
            timestamp: 0
        },
        account_id: 0,
        email: '',
        fullname: '',
        phone: '',
        timestamp: 0
    },
}

export default function activity(state = INITIAL_STATE, action: UserLoggedAction) {
    if(action.type === USER_LOGGED) {
        return {
            ...state,
            userLogged: action.payload
        }
    }
    
    return state;
}