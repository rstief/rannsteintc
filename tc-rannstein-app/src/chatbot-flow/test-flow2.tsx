import React from "react";
import CustomBubble from "../components/CustomBubble";
import botImg from '../resources/botAvatar.svg';


const flow: any[] = [
    {
        id: '3',
        component: <CustomBubble
            firstLine='Test'
            secondLine= 'Test2'
            image={botImg}
            imageAlt='nothing to see here :)'
        />,
        trigger: '6',
    },
    {
        id: '6',
        options: [
            { value: 1, label: 'Number 1', trigger: '7' },
            { value: 2, label: 'Number 2', trigger: '7' },
            { value: 3, label: 'Number 3', trigger: '7' },
        ],
    },
    {
        id: '7',
        user: true,
        end: true
    }
];
export default flow;