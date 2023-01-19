import flow_seekHelp from './flow_seekHelp';
import flow_preliminary from './flow_preliminary';
import flow_information from './flow_information';
import i18n from "../i18n/i18n";

const empty: any[] = []
const errorFlow: any[] = [
    {
        id: 'error',
        message: i18n.t('chatbot.errorMessage'),
        end: true
    }
];
const flow: any[] = empty.concat(
    flow_seekHelp,
    flow_preliminary,
    errorFlow
);

export default flow;