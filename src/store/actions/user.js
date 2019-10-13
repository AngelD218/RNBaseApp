import { LOG_IN, LOG_OUT } from './actionTypes';

export const log_in = (user, pass) => {
    return {
        type: LOG_IN,
        user: user,
        pass: pass,
    };
}

export const log_out = () => {
    return {
        type: LOG_OUT
    };
}
