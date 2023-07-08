const template = `
.chat-preview(class=className)
    .chat-preview__avatar
        !=avatar
    .chat-preview__last-message.message
        .message__author=msgAuthor
        if (isSelf)
            .message__text <span style="font-weight: bolder">Вы: </span>#{msgLast}
        else
            .message__text=msgLast
    .chat-preview__update-time=msgUpdateTime
    if (msgNewCounter)
        .chat-preview__new-messages-counter=msgNewCounter
`;

export default template;
