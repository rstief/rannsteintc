import React from "react";
import ImageBubble from "../components/ImageBubble";
import OptionBubble from "../components/OptionBubble";
import fistIcon from '../resources/questionMarkIcon.svg';
import {Typography} from "@mui/material";

function StartBubbles() {
    return(
        <div style={{padding: '0px 12px 12px 12px'}}>
            <div>
                <OptionBubble style={{display: 'block', width: '100%'}}>
                    <Typography>Title</Typography>
                    <Typography>Lower Text :)</Typography>
                </OptionBubble>
            </div>
            <div style={{display: 'flex', gap: '8px', paddingTop: '8px'}}>
                <ImageBubble
                    firstLine='A crime has happened ...'
                    secondLine= "I don't know what to do"
                    image={fistIcon}
                    imageAlt='nothing to see here :)'
                    onClick={()=>{
                        console.log('XD')}}
                />
                <ImageBubble
                    firstLine='A crime has happened ...'
                    secondLine= 'I dont know what to do'
                    image={fistIcon}
                    imageAlt='nothing to see here :)'
                    onClick={()=>{
                        console.log('XD')}}
                />
                <ImageBubble
                    firstLine='A crime has happened ...'
                    secondLine= 'I dont know what to do'
                    image={fistIcon}
                    imageAlt='nothing to see here :)'
                    onClick={()=>{
                        console.log('XD')}}
                />
            </div>
        </div>
    );
}

const flow: any[] = [
    {
        id: 'seek-help-01',
        component: <StartBubbles/>,
    }
];

export default flow;