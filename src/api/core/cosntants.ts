export const BASE = 'https://ya-praktikum.tech/api/v2';

export const ENDPOINTS = {
    auth: {
        signIn: '/auth/signin',
        signUp: '/auth/signup',
        users: '/auth/user',
        logout: '/auth/logout',
    },
    chats: {
        /** @GET получить список чатов
         * @POST создать чат */
        chats: '/chats',
        /** @PUT добавить пользователя в чат
         * @DELETE удалить пользователя из чата */
        users: '/chats/users'

    },
    users: {
        profile: 'user/profile',
        avatar: 'user/profile/avatar',
        password: 'user/password'
    },
};
