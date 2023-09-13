/** Sign up (create user)
 * @method POST
 * @return 200 Ok
 */
export type authSignInRequest = {
    /** User login */
    login: string,
    /** Password */
    password: string,
}
