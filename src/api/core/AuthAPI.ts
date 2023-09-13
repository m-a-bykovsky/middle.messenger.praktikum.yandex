import GimmeResponse from '../../utils/gimmeResponse';
import { BASE, ENDPOINTS } from './cosntants';

import { authSignUpRequest } from '../models/authSignUpDto';
import { authSignInRequest } from '../models/authSignInDto';

const authEndpoints = ENDPOINTS.auth;

export default class AuthAPI {
    private _gimmeResponse: GimmeResponse;

    constructor() {
        this._gimmeResponse = new GimmeResponse(BASE);
    }

    signUp(data: authSignUpRequest) {
        return this._gimmeResponse.post(
            authEndpoints.signUp,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data
            }
        );
    }

    signIn(data: authSignInRequest) {
        return this._gimmeResponse.post(
            authEndpoints.signIn,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data
            }
        );
    }

    user() {
        return this._gimmeResponse.get(
            authEndpoints.users,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        );
    }

    logout() {
        return this._gimmeResponse.post(
            authEndpoints.logout,
            {
                headers: {
                    Accept: 'application/json'
                }
            }
        );
    }
}
