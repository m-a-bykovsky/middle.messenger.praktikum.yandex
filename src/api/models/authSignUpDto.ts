/** Sign up (create user)
 * @method POST
 * @return signUpResponse
 */
export type authSignUpRequest = {
    /** First name */
    first_name: string,
    /** Second name */
    second_name: string,
    /** User login - unique */
    login: string,
    /** Email /^\S+@\S+$/ */
    email: string,
    /** Password */
    password: string,
    /** Phone /^((8|+7)[- ]?)?((?\d{3})?[- ]?)?[\d- ]{7,10}$/ */
    phone: string
}

export type signUpResponse = {
    /** Created User ID */
    id: number;
}
