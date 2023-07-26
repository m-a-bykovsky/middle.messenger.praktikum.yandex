const template = `
side#side.chatlist
    .chatlist__header
        nav 
            a.extra(href="/profile") Профиль 
        !=searchInput
    .chatlist__content
        !=current
        each chat in others
            !=chat
`;

export default template;
