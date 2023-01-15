import i18n from "../i18n/i18n";

const flow: any[] = [
    {
        id: '2',
        message: i18n.t("second-msg"),
        trigger: '2.5'
    },
    {
        id: '2.5',
        message: "looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong text",
        trigger: '3'
    },
];
export default flow;