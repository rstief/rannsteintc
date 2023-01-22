import React from "react";
// @ts-ignore
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import botAvatar from "../resources/botAvatar.svg";
import i18n from "i18next";

const font: string = 'Raleway';

const config = {
    //functional
    cache: false, //todo: can be used, bugs out when you refresh between bot steps
    //delays
    botDelay: 1000,
    customDelay: 1000, //1k
    userDelay: 700, //700
    //avatar styles
    avatarStyle: {background: '#FFF', borderRadius: '50%'},
    botAvatar: botAvatar,
    hideUserAvatar: true,
    //bubbles and message box styles
    bubbleStyle: {maxWidth: 'calc(100% - 94px)', overflowWrap: 'break-word'},
    bubbleOptionStyle: {background: '#FFF', color: '#000', borderRadius: '18px 18px 0px 18px', fontFamily: font},
    customStyle: {all: 'unset'},
    placeholder: i18n.t('chatbot.messagePlaceholder'),
    //layout
    headerComponent: <div style={{height: '10px'}}/>,
    contentStyle: {flexGrow:'1'}, //chatbot scrollable part fills remaining space in flex layout
    style: {display: 'flex', flexDirection: 'column'},
    className: 'chatbotContainer'
}

const theme = {
    background: 'linear-gradient(180deg, #9AB2B9 0%, #B2C6CC 35%, #F7FAFA 100%)',
    //background: 'linear-gradient(180deg, rgba(45,94,110,0.48) 0%, rgba(48,100,117,0.37) 35%, rgba(56,118,138,0.04) 100%)',
    fontFamily: font,
    botBubbleColor: '#2D5E6E',
    botFontColor: '#FFF',
    userBubbleColor: '#5993A5',
    userFontColor: '#FFF',
};

function ConfiguredChatBot(props: any) {
    return(
        <ThemeProvider theme={theme}>
            <ChatBot {...config} steps={props.steps} style={{...config.style, height: props.height, width: props.width}}/>
        </ThemeProvider>
    )
}

export default ConfiguredChatBot;