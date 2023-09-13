/** Add/Delete users to chat
 * @method PUT/DELETE
 * @return 200 Ok
 */
export type chatsUsersRequest = {
    /** @ask ??? */
    users: Array<number>,
    /** Chat Id */
    chatId: number,
}
