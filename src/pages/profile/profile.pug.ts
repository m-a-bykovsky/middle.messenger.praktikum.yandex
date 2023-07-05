const template = `
#main
    #{wrapperElement}.profile
        .profile__summary
            !=avatar
            if (mode=="read")
                h2 #{profileData.firstName}

        !=profileMain

    nav.backlink-wrapper
        a(href="/").backlink
            !=backlinkIcon
`;

export default template;
