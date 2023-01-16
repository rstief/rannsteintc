import React from "react";
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import flow from "../chatbot-flow/flow";
import botAvatar from "../resources/botAvatar.svg";
import i18n from "i18next";

const msgDelay: number = 700;
const font: string = 'Raleway';

const config = {
    //functional
    steps: flow,
    cache: false, //todo: can be used, bugs out when you refresh between bot steps
    //delays
    botDelay: msgDelay,
    customDelay: msgDelay,
    userDelay: msgDelay,
    //style
    avatarStyle: {background: '#FFF', borderRadius: '50%'},
    botAvatar: botAvatar,
    hideUserAvatar: true,
    bubbleStyle: {maxWidth: 'calc(100% - 94px)', overflowWrap: 'break-word'},
    bubbleOptionStyle: {background: '#FFF', color: '#000', borderRadius: '18px 18px 0px 18px', fontFamily: font},
    headerComponent: <div style={{height: '10px'}}/>,
    placeholder: i18n.t('chatbot.messagePlaceholder'),
    style: {height: '100%', width: '390px'},
    customStyle: {all: 'unset'}
}

const theme = {
    background: 'linear-gradient(180deg, rgb(154,178,185) 0%, rgb(178,198,204) 35%, rgb(247,250,250) 100%)',
    //background: 'linear-gradient(180deg, rgba(45,94,110,0.48) 0%, rgba(48,100,117,0.37) 35%, rgba(56,118,138,0.04) 100%)',
    fontFamily: font,
    botBubbleColor: '#2D5E6E',
    botFontColor: '#FFF',
    userBubbleColor: '#5993A5',
    userFontColor: '#FFF',
};

function ConfiguredChatBot() {
    return(
        <ThemeProvider theme={theme}>
            <ChatBot {...config} />
        </ThemeProvider>
    )
}

export default ConfiguredChatBot;