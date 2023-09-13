import { authUserResponse } from './authUserDto';

/** Create chat request
 * @method POST
*/
export type createChatRequest = {
    /** Chat title */
    title: string,
}

/** Get chats request *
 * @method GET
 * @response chatsResponse
 * */
export type chatsRequest = {
    /** The number of items to skip before starting to collect the result set */
    offset?: number,
    /** The numbers of items to return */
    limit?: number,
    /** Chat's title to filter by */
    title?: string,
}

/** Get chats response
 * @method GET
 * @example
 * { "id": 123,
 *  "title": "my-chat",
 *  "avatar": "/123/avatar1.jpg",
 *  "unread_count": 15,
 *  "created_by": 12345,
 *  "last_message": {
 *      "user": {
 *          "first_name": "Petya",
 *          "second_name": "Pupkin",
 *          "avatar": "/path/to/avatar.jpg",
 *          "email": "my@email.com",
 *          "login": "userLogin",
 *          "phone": "8(911)-222-33-22"
 *      },
 *      "time": "2020-01-02T14:22:22.000Z",
 *      "content": "this is message content"
 * }
 * } */
export type chatsResponse = {
    /** Chat id */
    id: number,
    /** Chat title */
    title: string,
    /** Chat avatar */
    avatar: string,
    /** Number of unread messages in chat for current user */
    unread_count: number,
    /** Last message information */
    last_message: {
        user: authUserResponse,
        /** Message timestamp */
        time: string,
        /** Message content */
        content: string,
    }
}
