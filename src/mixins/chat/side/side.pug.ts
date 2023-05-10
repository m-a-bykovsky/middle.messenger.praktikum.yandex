const template = `
side.chatlist
    .chatlist__header
        nav 
            a.extra(href="../profile/profile.pug") Профиль 
        !=searchInput
    .chatlist__content
        !=current
        !=others
`;

export default template;
