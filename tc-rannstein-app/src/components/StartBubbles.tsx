import React from "react";
import ImageBubble from "./ImageBubble";
import fistIcon from "../resources/questionMarkIcon.svg";


function StartBubbles(props: any) {
    return(
        <div style={{display: 'flex', gap: '8px', paddingLeft: '12px', paddingRight: '12px'}}>
            <ImageBubble
                firstLine='A crime has happened ...'
                secondLine= "I don't know what to do"
                image={fistIcon}
                imageAlt='nothing to see here :)'
                onClick={()=>{
                    //todo: trigger flow
                    console.log('trigger flow: ')}}
            />
            <ImageBubble
                firstLine='A crime has happened ...'
                secondLine= 'I dont know what to do'
                image={fistIcon}
                imageAlt='nothing to see here :)'
                onClick={()=>{
                    //todo: trigger flow
                    console.log('XD')}}
            />
            <ImageBubble
                firstLine='A crime has happened ...'
                secondLine= 'I dont know what to do'
                image={fistIcon}
                imageAlt='nothing to see here :)'
                onClick={()=>{
                    //todo: trigger flow
                    console.log('XD')}}
            />
        </div>
    )
}

export default StartBubbles;