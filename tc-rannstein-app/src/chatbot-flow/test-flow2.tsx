import i18n from "../i18n/i18n";


const flow: any[] = [
    {
        id: '3',
        message: i18n.t("third-msg"),
        trigger: '4',
    },
    {
        id: '4',
        user: true,
        trigger: '5'
    },
    {
        id: '5',
        message: i18n.t("fourth-msg"),
        trigger: '6'
    },
    {
        id: '6',
        message: 'ich red noch ein bisschen damit es scrollt',
        trigger: '7'
    },
    {
        id: '7',
        message: ':)',
        end: true
    },
];
export default flow;