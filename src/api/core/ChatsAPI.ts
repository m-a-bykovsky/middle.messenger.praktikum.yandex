import GimmeResponse from '../../utils/gimmeResponse';
import { BASE, ENDPOINTS } from './cosntants';
import { createChatRequest, chatsRequest } from '../models/chatsDto';
import { chatsUsersRequest } from '../models/chatsUsersDto';

const chatsEndpoints = ENDPOINTS.chats;

export default class ChatsAPI {
    private _gimmeResponse: GimmeResponse;

    constructor() {
        this._gimmeResponse = new GimmeResponse(BASE);
    }

    getChats(data?: chatsRequest) {
        return this._gimmeResponse.get(
            chatsEndpoints.chats,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data
            }
        );
    }

    createChat(data: createChatRequest) {
        return this._gimmeResponse.post(
            chatsEndpoints.chats,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data
            }
        );
    }

    addUsersToChat(data: chatsUsersRequest) {
        return this._gimmeResponse.put(
            chatsEndpoints.users,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                data
            }
        );
    }

    deleteUsersFromChat(data: chatsUsersRequest) {
        return this._gimmeResponse.delete(
            chatsEndpoints.users,
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
