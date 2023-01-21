import React from "react";
import StartBubbles from "../components/StartBubbles"
import i18n from "../i18n/i18n";
import policeIcon from "../resources/icons/police.svg";
import legalIcon from "../resources/icons/legal.svg";
import communityIcon from "../resources/icons/community.svg";
import UserBubble from "../components/UserBubble";
import Navigator from "../components/Navigator";

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
        delay: 700,
        trigger: "information.routePreliminary"
    },
    {
        id: 'information.routePreliminary',
        component: <Navigator route="/lilo/assessment"/>,
        end: true
    },
    {
        id: 'information.police',
        component: <UserBubble text={i18n.t('chatbot.information.police')}/>,
        delay: 700,
        trigger: 'information.forwardPolice'
    },
    {
        id: 'information.legal',
        component: <UserBubble text={i18n.t('chatbot.information.legal')}/>,
        delay: 700,
        trigger: 'information.forwardLegal'
    },
    {
        id: 'information.community',
        component: <UserBubble text={i18n.t('chatbot.information.community')}/>,
        delay: 700,
        trigger: 'information.forwardCommunity'
    },
    {
        id: 'information.forwardPolice',
        message: i18n.t('chatbot.information.forward'),
        trigger: "information.routePolice",
    },
    {
        id: 'information.forwardLegal',
        message: i18n.t('chatbot.information.forward'),
        trigger: "information.routeLegal"
    },
    {
        id: 'information.forwardCommunity',
        message: i18n.t('chatbot.information.forward'),
        trigger: "information.routeCommunity"
    },
    {
        id: 'information.routePolice', //todo: add real route
        component: <Navigator route="/lilo/policeresources"/>,
        delay: 2000,
        end: true
    },
    {
        id: 'information.routeLegal', //todo: add real route
        component: <Navigator route="/lilo/legalresources"/>,
        delay: 2000,
        end: true
    },
    {
        id: 'information.routeCommunity',
        component: <Navigator route="/lilo/communityresources"/>,
        delay: 2000,
        end: true
    }
];

export default flow;