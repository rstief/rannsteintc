import i18n from "../i18n/i18n";

export default [
    {
        id: '0',
        message: i18n.t("hello-msg"),
        trigger: '1',
    },
    {
        id: '1',
        user: true,
        trigger: '2'
    },
    {
        id: '2',
        message: i18n.t("second-msg"),
        end: true
    },
];