const template = `
side#side.chatlist
    .chatlist__header
        nav 
            a.extra(href="/") Профиль 
        !=searchInput
    .chatlist__content
        !=current
        !=others
`;

export default template;
