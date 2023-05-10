const template = `
#main
    #{wrapperElement}.profile
        .profile__summary
            !=avatar
            if (mode=="read")
                h2 #{profileData.firstName}

        .profile__full
            !=profileMain
            if (mode == "write")
                !=profileSecurity
        
        if (mode=="read")
            nav.profile__settings
                a(href="./profile__edit-main.pug").extra Изменить данные
                a(href="../auth/signin.pug").warning Выйти
        else
            .profile__submit
                !=submitButton

    nav.backlink-wrapper
        a(href="/").backlink
            !=backlinkIcon
`;

export default template;
