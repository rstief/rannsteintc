import React from "react";
import StartBubbles from "../components/StartBubbles"
import i18n from "../i18n/i18n";
import fistIcon from "../resources/icons/fist.svg";
import xIcon from "../resources/icons/x.svg";
import questionMarkIcon from "../resources/icons/questionMark.svg";
import UserBubble from "../components/UserBubble";

const startBubblesProps = {
    largeBubble: {
        header:  i18n.t('chatbot.seekHelp.helloAnswer.preliminary.header'),
        text: i18n.t('chatbot.seekHelp.helloAnswer.preliminary.text'),
        trigger: 'seekHelp.preliminary'
    },
    bubble1: {
        header: i18n.t('chatbot.seekHelp.helloAnswer.crime.header'),
        text: i18n.t('chatbot.seekHelp.helloAnswer.crime.text'),
        image: questionMarkIcon,
        imageText: "",
        trigger: 'seekHelp.crime'
    },
    bubble2: {
        header: i18n.t('chatbot.seekHelp.helloAnswer.sexualAssault.header'),
        text: i18n.t('chatbot.seekHelp.helloAnswer.sexualAssault.text'),
        image: xIcon,
        imageText: "",
        trigger: 'seekHelp.sexualAssault'
    },
    bubble3: {
        header: i18n.t('chatbot.seekHelp.helloAnswer.physicalAssault.header'),
        text: i18n.t('chatbot.seekHelp.helloAnswer.physicalAssault.text'),
        image: fistIcon,
        imageText: "",
        trigger: 'seekHelp.physicalAssault'
    },
}

const flow: any[] = [
    {
        id: 'seekHelp.hello1',
        message: i18n.t('chatbot.seekHelp.hello1'),
        trigger: 'seekHelp.hello2'
    },
    {
        id: 'seekHelp.hello2',
        message: i18n.t('chatbot.seekHelp.hello2'),
        trigger: 'seekHelp.helloAnswer'
    },
    {
        id: 'seekHelp.helloAnswer',
        component: <StartBubbles {...startBubblesProps}/>,
        replace: true,
        delay: 10
    },
    {
        id: 'seekHelp.preliminary',
        component: <UserBubble text={i18n.t('chatbot.seekHelp.preliminary')}/>,
        delay: 700,
        trigger: "preliminary.divider"
    },
    {
        id: 'seekHelp.crime',
        component: <UserBubble text={i18n.t('chatbot.seekHelp.crime')}/>,
        delay: 700,
        trigger: "error" //todo
    },
    {
        id: 'seekHelp.physicalAssault',
        component: <UserBubble text={i18n.t('chatbot.seekHelp.physicalAssault')}/>,
        delay: 700,
        trigger: "error" //todo
    },
    {
        id: 'seekHelp.sexualAssault',
        component: <UserBubble text={i18n.t('chatbot.seekHelp.sexualAssault')}/>,
        delay: 700,
        trigger: "error" //todo
    },

];

export default flow;