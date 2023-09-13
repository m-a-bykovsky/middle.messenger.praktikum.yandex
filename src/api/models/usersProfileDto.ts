/** Change user profile
 * @method PUT
 * @response userResponse
 */
export type userRequest = {
    /** First name */
    first_name: string,
    /** Second name */
    second_name: string,
    /** Display Name */
    display_name: string,
    /** User login - unique */
    login: string,
    /** Email */
    email: string,
    /** Phone */
    phone: string,
}
/** @example
 * { "id": 123,
 * "first_name": "Petya",
 * "second_name": "Pupkin",
 * "display_name": "Petya Pupkin",
 * "phone": "+79001001100",
 * "login": "userLogin",
 * "avatar": "/path/to/avatar.jpg",
 * "email": "string@ya.ru" }
 */
export type userResponse = {
    /** User id */
    id: number,
    /** First name */
    first_name: string,
    /** Second name */
    second_name: string,
    /** Display Name */
    display_name: string,
    /** User login - unique */
    login: string,
    /** Email */
    email: string,
    /** Phone */
    phone: string,
    /** Avatar */
    avatar: string,
}
