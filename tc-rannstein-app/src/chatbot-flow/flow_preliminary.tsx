import React from "react";
import i18n from "../i18n/i18n";
import PreliminaryResult from "../components/PreliminaryResult";
import DividerBubble from "../components/DividerBubble";
import Navigator from "../components/Navigator";
import ResourcesAccordion from "../components/ResourcesAccordion";

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
            {value:1, label: i18n.t('chatbot.preliminary.helloAnswer'), trigger: 'preliminary.start'}
        ],
    },
    {
        id: 'preliminary.start',
        message: i18n.t('chatbot.preliminary.start'),
        trigger: 'preliminary.startAnswer'
    },
    {
        id: 'preliminary.startAnswer',
        options: [
            {value: 1, label: i18n.t('chatbot.preliminary.startAnswer.damaged'), trigger: 'preliminary.damaged1'},
            {value: 2, label: i18n.t('chatbot.preliminary.startAnswer.harmed'), trigger: 'preliminary.harmed1'},
            {value: 3, label: i18n.t('chatbot.preliminary.startAnswer.stolen'), trigger: 'preliminary.stolen1'},
        ],
        metadata: {'paragraphs': {1: ['303']}}
    },
    //damaged flow
    {
        id: 'preliminary.damaged1',
        message: i18n.t('chatbot.preliminary.damaged1'),
        trigger: 'preliminary.damaged1Answer',
    },
    {
        id: 'preliminary.damaged1Answer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.damaged1Answer.hurt'), trigger: 'preliminary.harmed3-1'},
            {value:2, label: i18n.t('chatbot.preliminary.damaged1Answer.stolen'), trigger: 'preliminary.damaged2-2'},
            {value:3, label: i18n.t('chatbot.preliminary.damaged1Answer.none'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {1: ['223'], 2: ['242']}}
    },
    {
        id: 'preliminary.damaged2-2',
        message: i18n.t('chatbot.preliminary.damaged2-2'),
        trigger: 'preliminary.damaged2-2Answer'
    },
    {
        id: 'preliminary.damaged2-2Answer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('no'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {1: ['244-3']}}
    },
    //harmed flow
    {
        id: 'preliminary.harmed1',
        message: i18n.t('chatbot.preliminary.harmed1'),
        trigger: 'preliminary.harmed1Answer'
    },
    {
        id: 'preliminary.harmed1Answer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.harmed1Answer.physically'), trigger: 'preliminary.harmed2-1'},
            {value:2, label: i18n.t('chatbot.preliminary.harmed1Answer.sexually'), trigger: 'preliminary.harmed2-2'},
            {value:3, label: i18n.t('chatbot.preliminary.harmed1Answer.verbally'), trigger: 'preliminary.harmed2-3'},
        ],
        metadata: {'paragraphs': {1: ['223'], 2: ['177', '184i'], 3: ['185']}}
    },
    {
        id: 'preliminary.harmed2-1',
        message: i18n.t('chatbot.preliminary.harmed2-1'),
        trigger: 'preliminary.harmed2-1Answer'
    },
    {
        id: 'preliminary.harmed2-1Answer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.harmed2-1Answer.damaged'), trigger: 'preliminary.harmed3-1'},
            {value:3, label: i18n.t('chatbot.preliminary.harmed2-1Answer.none'), trigger: 'preliminary.harmed3-1'},
            {value:2, label: i18n.t('chatbot.preliminary.harmed2-1Answer.stolen'), trigger: 'preliminary.harmed3-2'},
        ],
        metadata: {'paragraphs': {1: ['303']}}
    },
    {
        id: 'preliminary.harmed2-2',
        message: i18n.t('chatbot.preliminary.harmed2-2'),
        trigger: 'preliminary.harmed2-2Answer'
    },
    {
        id: 'preliminary.harmed2-2Answer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('no'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {1: ['223']}}
    },
    {
        id: 'preliminary.harmed2-3',
        message: i18n.t('chatbot.preliminary.harmed2-3'),
        trigger: 'preliminary.harmed2-3Answer'
    },
    {
        id: 'preliminary.harmed2-3Answer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.harmed2-3Answer.in-person'), trigger: 'preliminary.harmed3-3'},
            {value:2, label: i18n.t('chatbot.preliminary.harmed2-3Answer.online'), trigger: 'preliminary.harmed3-3'},
        ],
    },
    {
        id: 'preliminary.harmed3-1',
        message: i18n.t('chatbot.preliminary.harmed3-1'),
        trigger: 'preliminary.harmed3-1Answer'
    },
    {
        id: 'preliminary.harmed3-1Answer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('no'), trigger: 'preliminary.harmed4-1'},
        ],
        metadata: {'paragraphs': {1: ['224']}}
    },
    {
        id: 'preliminary.harmed3-2',
        message: i18n.t('chatbot.preliminary.harmed3-2'),
        trigger: 'preliminary.harmed3-2Answer'
    },
    {
        id: 'preliminary.harmed3-2Answer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('no'), trigger: 'preliminary.harmed4-2'},
        ],
        metadata: {'paragraphs': {1: ['250', '224'], 2: ['249']}}
    },
    {
        id: 'preliminary.harmed3-3',
        message: i18n.t('chatbot.preliminary.harmed3-3'),
        trigger: 'preliminary.harmed3-3Answer'
    },
    {
        id: 'preliminary.harmed3-3Answer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.harmed3-3Answer.insulted'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('chatbot.preliminary.harmed3-3Answer.threatened'), trigger: 'preliminary.done'},
            {value:3, label: i18n.t('chatbot.preliminary.harmed3-3Answer.reputation'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {2: ['241'], 3: ['186', '187']}}
    },
    {
        id: 'preliminary.harmed4-1',
        message: i18n.t('chatbot.preliminary.harmed4-1'),
        trigger: 'preliminary.harmed4-1Answer'
    },
    {
        id: 'preliminary.harmed4-1Answer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('no'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {1: ['224']}}
    },
    {
        id: 'preliminary.harmed4-2',
        message: i18n.t('chatbot.preliminary.harmed4-2'),
        trigger: 'preliminary.harmed4-2Answer'
    },
    {
        id: 'preliminary.harmed4-2Answer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('no'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {1: ['224']}}
    },
    //stolen flow
    {
        id: 'preliminary.stolen1',
        message: i18n.t('chatbot.preliminary.stolen1'),
        trigger: 'preliminary.stolen1Answer'
    },
    {
        id: 'preliminary.stolen1Answer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.stolen1Answer.hurt'), trigger: 'preliminary.harmed3-2'},
            {value:2, label: i18n.t('chatbot.preliminary.stolen1Answer.threatened'), trigger: 'preliminary.stolen2-2'},
            {value:3, label: i18n.t('chatbot.preliminary.stolen1Answer.none'), trigger: 'preliminary.stolen2-3'},
        ],
        metadata: {'paragraphs': {1: ['223']}}
    },
    {
        id: 'preliminary.stolen2-2',
        message: i18n.t('chatbot.preliminary.stolen2-2'),
        trigger: 'preliminary.stolen2-2Answer'
    },
    {
        id: 'preliminary.stolen2-2Answer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('no'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {1: ['250'], 2: ['249']}}
    },
    {
        id: 'preliminary.stolen2-3',
        message: i18n.t('chatbot.preliminary.stolen2-3'),
        trigger: 'preliminary.stolen2-3Answer'
    },
    {
        id: 'preliminary.stolen2-3Answer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.stolen2-3Answer.robbed'), trigger: 'preliminary.stolen3-1'},
            {value:2, label: i18n.t('chatbot.preliminary.stolen2-3Answer.scammed'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {1: ['242'], 2: '263'}}
    },
    {
        id: 'preliminary.stolen3-1',
        message: i18n.t('chatbot.preliminary.stolen3-1'),
        trigger: 'preliminary.stolen3-1Answer'
    },
    {
        id: 'preliminary.stolen3-1Answer',
        options: [
            {value:1, label: i18n.t('yes'), trigger: 'preliminary.done'},
            {value:2, label: i18n.t('no'), trigger: 'preliminary.done'},
        ],
        metadata: {'paragraphs': {1: ['303', '244-3']}}
    },
    {
        id: 'preliminary.done',
        component: <DoneBubble/>,
        asMessage: true,
        trigger: 'preliminary.resultNote',
        delay: 2000
    },
    {
        id: 'preliminary.resultNote',
        component: <ResultNoteBubble/>,
        asMessage: true,
        trigger: 'preliminary.result'
    },
    {
        id: 'preliminary.result',
        component: <PreliminaryResult/>,
        asMessage: true,
        "trigger": "preliminary.retry"
    },
    {
        id: 'preliminary.retry',
        message: i18n.t('chatbot.preliminary.retry'),
        trigger: 'preliminary.retryAnswer'
    },
    {
        id: 'preliminary.retryAnswer',
        options: [
            {value:1, label: i18n.t('chatbot.preliminary.retryAnswer.redo'), trigger: 'preliminary.routePreliminary'},
            {value:2, label: i18n.t('chatbot.preliminary.retryAnswer.talk'), trigger: 'error'}, //todo (not in this prototype)
        ],
    },
    {
        id: 'preliminary.routePreliminary',
        component: <Navigator route="/lilo/assessment"/>,
        end: true
    }

];

function DoneBubble() {

    return(
        <div>
            {i18n.t('chatbot.preliminary.done.1')}
            {i18n.t('chatbot.preliminary.done.2')}<br/><br/>
            {i18n.t('chatbot.preliminary.done.4')}<br/><br/>
            {i18n.t('chatbot.preliminary.done.5')}
        </div>
        //{i18n.t('chatbot.preliminary.done.3')}<br/><br/>
    );
}

function ResultNoteBubble() {
    return(
        <div>
            {i18n.t('chatbot.preliminary.resultNote.1')}<br/>
            <a href={i18n.t('chatbot.preliminary.resultNote.2') ?? ""} target="_blank" rel="noreferrer" style={{color:"black"}}>
                {i18n.t('chatbot.preliminary.resultNote.2')}
            </a>
        </div>
    );
}

export default flow;