import React from "react";
import StartBubbles from "../components/StartBubbles"
import i18n from "../i18n/i18n";
import policeIcon from "../resources/icons/police.svg";
import legalIcon from "../resources/icons/legal.svg";
import communityIcon from "../resources/icons/community.svg";
import UserBubble from "../components/UserBubble";

const startBubblesProps = {
    largeBubble: {
        header:  i18n.t('chatbot.information.helloAnswer.preliminary.header'),
        text: i18n.t('chatbot.information.helloAnswer.preliminary.text'),
        trigger: 'information.preliminary'
    },
    bubble1: {
        header: i18n.t('chatbot.information.helloAnswer.police.header'),
        text: "",
        image: policeIcon,
        imageText: "",
        trigger: 'information.police'
    },
    bubble2: {
        header: i18n.t('chatbot.information.helloAnswer.legal.header'),
        text: "",
        image: legalIcon,
        imageText: "",
        trigger: 'information.legal'
    },
    bubble3: {
        header: i18n.t('chatbot.information.helloAnswer.community.header'),
        text: "",
        image: communityIcon,
        imageText: "",
        trigger: 'information.community'
    },
}

const flow: any[] = [
    {
        id: 'information.hello1',
        message: i18n.t('chatbot.information.hello1'),
        trigger: 'information.hello2'
    },
    {
        id: 'information.hello2',
        message: i18n.t('chatbot.information.hello2'),
        trigger: 'information.helloAnswer'
    },
    {
        id: 'information.helloAnswer',
        component: <StartBubbles {...startBubblesProps}/>,
        replace: true,
        delay: 10
    },
    {
        id: 'information.preliminary',
        component: <UserBubble text={i18n.t('chatbot.information.preliminary')}/>,
        trigger: "preliminary.hello2"
    },
    {
        id: 'information.police',
        component: <UserBubble text={i18n.t('chatbot.information.police')}/>,
        trigger: 'information.forwardPolice'
    },
    {
        id: 'information.legal',
        component: <UserBubble text={i18n.t('chatbot.information.legal')}/>,
        trigger: 'information.forwardLegal'
    },
    {
        id: 'information.community',
        component: <UserBubble text={i18n.t('chatbot.information.community')}/>,
        trigger: 'information.forwardCommunity'
    },
    {
        id: 'information.forwardPolice', //todo: trigger some re-routing
        message: i18n.t('chatbot.information.forward'),
        end: true
    },
    {
        id: 'information.forwardLegal', //todo: trigger some re-routing
        message: i18n.t('chatbot.information.forward'),
        end: true
    },
    {
        id: 'information.forwardCommunity', //todo: trigger some re-routing
        message: i18n.t('chatbot.information.forward'),
        end: true
    },
];

export default flow;