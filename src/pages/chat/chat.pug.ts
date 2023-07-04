const template = `
#main-wrapper
    !=side
    main#main
        if (noChatData)
            .intro Выберите чат, чтобы отправить сообщение
        else
            .chat 
                !=header
                !=main
                !=footer
`;

export default template;
