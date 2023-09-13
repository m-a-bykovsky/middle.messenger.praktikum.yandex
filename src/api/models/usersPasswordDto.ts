/** Change user password
 * @method PUT
 * @response 200 OK
 */
export type changePasswordRequest = {
    /** Old password */
    oldPassword: string,
    /** New password */
    newPassword: string,
}
