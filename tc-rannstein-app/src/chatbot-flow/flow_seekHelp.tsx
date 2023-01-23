import React from "react";
import StartBubbles from "../components/StartBubbles"
import i18n from "../i18n/i18n";
import fistIcon from "../assets/icons/fist.svg";
import xIcon from "../assets/icons/x.svg";
import questionMarkIcon from "../assets/icons/questionMark.svg";
import pdfIcon from "../assets/icons/pdf.svg"
import crimeGuideEn from "../assets/Guide_en.pdf";
import crimeGuideDe from "../assets/Guide_de.pdf";
import UserBubble from "../components/UserBubble";
import Navigator from "../components/Navigator";
import {Link, Typography} from "@mui/material";
import ResourcesAccordion from "../components/ResourcesAccordion";
import SexualAssaultResult from "../components/SexualAssaultResult";

const language = localStorage.getItem("language") ?? "en";
const crimeGuidePdf = language === "en" ? crimeGuideEn : crimeGuideDe;

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

function GuideBubble() {
    return(
        <div>
            {i18n.t('chatbot.seekHelp.crime1-1')}<br/><br/>
            {i18n.t('chatbot.seekHelp.crime1-2')}
        </div>
    );
}

function Sexual1Bubble() {
    return(
        <div>
            {i18n.t('chatbot.seekHelp.sexual1-1')}<br/><br/>
            {i18n.t('chatbot.seekHelp.sexual1-2')}
        </div>
    );
}



function PdfBubble() {
    return(
        <div>
            <Link href={crimeGuidePdf} download underline="none" sx={{display:'flex', alignItems: 'center'}}>
                <img src={pdfIcon} alt='Pdf Icon' style={{height:"40px", paddingRight:"8px"}}/>
                <div>
                    <Typography fontSize="14px">{i18n.t("chatbot.seekHelp.crimeGuide")}</Typography>
                    <Typography fontSize="11px">70kb</Typography>
                </div>
            </Link>
        </div>
    );
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
        trigger: "seekHelp.routePreliminary"
    },
    {
        id: 'seekHelp.routePreliminary',
        component: <Navigator route="/lilo/assessment"/>,
        end: true
    },
    {
        id: 'seekHelp.crime',
        component: <UserBubble text={i18n.t('chatbot.seekHelp.crime')}/>,
        delay: 700,
        trigger: "seekHelp.crimeDoPreliminary"
    },
    {
        id: 'seekHelp.crimeDoPreliminary',
        message: i18n.t('chatbot.seekHelp.crimeDoPreliminary'),
        trigger: "seekHelp.crimeDoPreliminaryAnswer"
    },
    {
        id: 'seekHelp.crimeDoPreliminaryAnswer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'seekHelp.routePreliminary'},
            {value:2, label: i18n.t('no'), trigger: 'seekHelp.crime1'},
        ],
    },
    {
        id: 'seekHelp.crime1',
        component: <GuideBubble/>,
        asMessage: true,
        trigger: "seekHelp.crime2"
    },
    {
        id: 'seekHelp.crime2',
        component: <PdfBubble/>,
        asMessage: true,
        trigger: "seekHelp.crime3"
    },
    {
        id: 'seekHelp.crime3',
        message: i18n.t('chatbot.seekHelp.crime3'),
        trigger: "seekHelp.crime3Answer"
    },
    {
        id: 'seekHelp.crime3Answer',
        options: [
            {value:1, label: i18n.t('chatbot.seekHelp.crime3Answer.resources'), trigger: 'seekHelp.crimeHelp'},
            {value:2, label: i18n.t('chatbot.seekHelp.crime3Answer.talk'), trigger: 'error'}, //todo: not for prototype
        ],
    },
    {
        id: 'seekHelp.crimeHelp',
        component: <ResourcesAccordion/>,
        asMessage: true,
        trigger: 'seekHelp.talk'
    },
    {
        id: 'seekHelp.physicalAssault',
        component: <UserBubble text={i18n.t('chatbot.seekHelp.physicalAssault')}/>,
        delay: 700,
        trigger: "error" //todo not for prototype
    },
    {
        id: 'seekHelp.sexualAssault',
        component: <UserBubble text={i18n.t('chatbot.seekHelp.sexualAssault')}/>,
        delay: 700,
        trigger: "seekHelp.sexual1"
    },
    {
        id: 'seekHelp.sexual1',
        component: <Sexual1Bubble/>,
        asMessage: true,
        trigger: "seekHelp.sexual2"
    },
    {
        id: 'seekHelp.sexual2',
        message: i18n.t('chatbot.seekHelp.sexual2'),
        trigger: "seekHelp.sexual3"
    },
    {
        id: 'seekHelp.sexual3',
        message: i18n.t('chatbot.seekHelp.sexual3'),
        trigger: "seekHelp.sexual3Answer"
    },
    {
        id: 'seekHelp.sexual3Answer',
        options: [
            {value:1, label: i18n.t('chatbot.seekHelp.sexual3Answer.yes'), trigger: 'seekHelp.sexual4'},
            {value:2, label: i18n.t('chatbot.seekHelp.sexual3Answer.no'), trigger: 'seekHelp.sexual4'},
        ],
        metadata: {'indications': {1: 'recent'}}
    },
    {
        id: 'seekHelp.sexual4',
        message: i18n.t('chatbot.seekHelp.sexual4'),
        trigger: "seekHelp.sexual4Answer"
    },
    {
        id: 'seekHelp.sexual4Answer',
        options: [
            {value:1, label: i18n.t('chatbot.seekHelp.sexual4Answer.stranger'), trigger: 'seekHelp.sexual5'},
            {value:2, label: i18n.t('chatbot.seekHelp.sexual4Answer.know'), trigger: 'seekHelp.sexual5'},
        ],
        metadata: {'indications': {2: 'know'}}
    },
    {
        id: 'seekHelp.sexual5',
        message: i18n.t('chatbot.seekHelp.sexual5'),
        trigger: "seekHelp.sexual5Answer"
    },
    {
        id: 'seekHelp.sexual5Answer',
        options: [
            {value:1, label: i18n.t('chatbot.seekHelp.sexual5Answer.yes'), trigger: 'seekHelp.sexual6'},
            {value:2, label: i18n.t('chatbot.seekHelp.sexual5Answer.no'), trigger: 'seekHelp.sexual6'},
        ],
        //todo idk what to write metadata: {'indications': {1: 'u18'}}
    },
    {
        id: 'seekHelp.sexual6',
        message: i18n.t('chatbot.seekHelp.sexual6'),
        trigger: "seekHelp.sexual6Answer"
    },
    {
        id: 'seekHelp.sexual6Answer',
        options: [
            {value:1, label: i18n.t('chatbot.seekHelp.sexual6Answer.yes'), trigger: 'seekHelp.sexual7'},
            {value:2, label: i18n.t('chatbot.seekHelp.sexual6Answer.no'), trigger: 'seekHelp.sexual7'},
        ],
        metadata: {'indications': {2: 'unsafe'}}
    },
    {
        id: 'seekHelp.sexual7',
        message: i18n.t('chatbot.seekHelp.sexual7'),
        trigger: "seekHelp.sexual7Answer"
    },
    {
        id: 'seekHelp.sexual7Answer',
        options: [
            {value:1, label: i18n.t('chatbot.seekHelp.sexual7Answer.yes'), trigger: 'seekHelp.sexual8'},
            {value:2, label: i18n.t('chatbot.seekHelp.sexual7Answer.no'), trigger: 'seekHelp.sexual8'},
        ],
        metadata: {'indications': {2: 'nobody'}}
    },
    {
        id: 'seekHelp.sexual8',
        message: i18n.t('chatbot.seekHelp.sexual8'),
        trigger: "seekHelp.sexualAssaultResult"
    },
    {
        id: 'seekHelp.sexualAssaultResult',
        component: <SexualAssaultResult/>,
        asMessage: true,
        delay: 2000,
        trigger: 'seekHelp.sexualAssaultResources'
    },
    {
        id: 'seekHelp.sexualAssaultResources',
        component: <ResourcesAccordion/>,
        asMessage: true,
        trigger: 'seekHelp.sexual10'
    },
    {
        id: 'seekHelp.sexual10',
        message: i18n.t('chatbot.seekHelp.sexual10'),
        trigger: "seekHelp.talk"
    },
    {
        id: 'seekHelp.talk',
        options: [
            {value:1, label: i18n.t('chatbot.seekHelp.talk'), trigger: 'error'},
        ],
    },


];

export default flow;