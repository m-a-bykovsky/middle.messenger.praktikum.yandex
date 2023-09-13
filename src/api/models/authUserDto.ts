/** Get user info
 * @method GET
 * @return authUserResponse
 * @example { "id": 123,
 * "first_name": "Petya",
 * "second_name": "Pupkin",
 * "display_name": "Petya Pupkin",
 * "phone": "+79001001100",
 * "login": "userLogin",
 * "email": "string@ya.ru",
 * "phone": "+79123456789"
 * "avatar": "/path/to/avatar.jpg",
 * } */
export type authUserResponse = {
    /** User id */
    id: number,
    /** First name */
    first_name: string,
    /** Second name */
    second_name: string,
    /** Display name */
    display_name: string,
    /** User login - unique */
    login: string,
    /** User email - unique */
    email: string,
    /** User phone */
    phone: string,
    /** Avatar */
    avatar: string

}
