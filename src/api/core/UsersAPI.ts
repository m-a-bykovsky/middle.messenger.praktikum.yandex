import GimmeResponse from '../../utils/gimmeResponse';
import { userAvatar } from '../models/usersAvatarDto';
import { changePasswordRequest } from '../models/usersPasswordDto';
import { userRequest } from '../models/usersProfileDto';
import { BASE, ENDPOINTS } from './cosntants';

const usersEndpoints = ENDPOINTS.users;

export default class UsersAPI {
    private _gimmeResponse: GimmeResponse;

    constructor() {
        this._gimmeResponse = new GimmeResponse(BASE);
    }

    editProfile(data: userRequest) {
        return this._gimmeResponse.put(
            usersEndpoints.profile,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data
            }
        );
    }

    editAvatar(data: userAvatar) {
        return this._gimmeResponse.put(
            usersEndpoints.avatar,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data
            }
        );
    }

    editPassword(data: changePasswordRequest) {
        return this._gimmeResponse.put(
            usersEndpoints.password,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data
            }
        );
    }
}
