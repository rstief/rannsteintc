import React from "react";
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import flow from "../chatbot-flow/flow";
import botAvatar from "../resources/botAvatar2.svg";
import userAvatar from "../resources/tempUserAvatar.png";

const msgDelay: number = 700;

const config = {
    steps: flow,
    botDelay: msgDelay,
    customDelay: msgDelay,
    userDelay: msgDelay,
    botAvatar: botAvatar,
    avatarStyle: {}, //todo: maybe we can style this?,
    userAvatar: userAvatar, //todo: use a real user avatar
    cache: false, //todo: we can use this, BUT bugs out when you refresh between bot steps
}

const theme = {
    background: '#F7F8F9', //todo: maybe we can do this nicer
    fontFamily: 'Arial', //todo: add raleway
    headerBgColor: '#F7F8F9', //todo: this is a cringe workaround
    headerFontColor: '#F7F8F9', //todo: this is a cringe workaround
    headerFontSize: '15px',
    botBubbleColor: '#2D5E6E',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#263238',
};

function ConfiguredChatBot() {
    return(
        <ThemeProvider theme={theme}>
            <ChatBot {...config} />
        </ThemeProvider>
    )
}

export default ConfiguredChatBot;