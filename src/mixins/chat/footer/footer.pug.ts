const template = `
.chat__footer
    .new-message
        .new-message__attachment
            !=attachIcon
        form.new-message__input
            !=newMessageInput
            !=sendMessageButton
`;

export default template;
