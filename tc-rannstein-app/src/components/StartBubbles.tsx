import React from "react";
import ImageBubble from "./ImageBubble";
import OptionBubble from "./OptionBubble";
import {Typography} from "@mui/material";


function StartBubbles(props: any) {

    return(
        <div style={{padding: '0px 12px 12px 12px'}}>
            <div>
                <OptionBubble style={{display: 'block', width: '100%'}}
                              onClick={() => {
                                  props.triggerNextStep({trigger: props.largeBubble.trigger})
                              }}>
                    <Typography sx={{fontWeight: 'bold'}}>{props.largeBubble.header}</Typography>
                    <Typography sx={{fontSize: '12px'}}>{props.largeBubble.text}</Typography>
                </OptionBubble>
            </div>
            <div style={{display: 'flex', gap: '8px', paddingTop: '8px'}}>
                <ImageBubble
                    header={props.bubble1.header}
                    text={props.bubble1.text}
                    image={props.bubble1.image}
                    imageAlt={props.bubble1.imageAlt}
                    onClick={() => {
                        props.triggerNextStep({trigger: props.bubble1.trigger})
                    }}
                />
                <ImageBubble
                    header={props.bubble2.header}
                    text={props.bubble2.text}
                    image={props.bubble2.image}
                    imageAlt={props.bubble2.imageAlt}
                    onClick={() => {
                        props.triggerNextStep({trigger: props.bubble2.trigger})
                    }}
                />
                <ImageBubble
                    header={props.bubble3.header}
                    text={props.bubble3.text}
                    image={props.bubble3.image}
                    imageAlt={props.bubble3.imageAlt}
                    onClick={() => {
                        props.triggerNextStep({trigger: props.bubble3.trigger})
                    }}
                />
            </div>
        </div>
    )
}

export default StartBubbles;