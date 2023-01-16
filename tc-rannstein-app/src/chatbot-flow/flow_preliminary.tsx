import React from "react";
import i18n from "../i18n/i18n";

const flow: any[] = [
    {
        id: 'preliminary.hello1',
        message: i18n.t('chatbot.preliminary.hello1'),
        trigger: 'preliminary.hello2'
    },
    {
        id: 'preliminary.hello2',
        message: i18n.t('chatbot.preliminary.hello2'),
        trigger: 'preliminary.hello3'
    },
    {
        id: 'preliminary.hello3',
        message: i18n.t('chatbot.preliminary.hello3'),
        trigger: 'preliminary.helloAnswer'
    },
    {
        id: 'preliminary.helloAnswer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.helloAnswer'), trigger: 'error'} //todo
        ],
    }
];

export default flow;