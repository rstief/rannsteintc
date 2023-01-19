import React from "react";
import {Typography} from "@mui/material";
import OptionBubble from "./OptionBubble";

const styleGrid = {display:'grid', gridTemplateRows: 'repeat(2, 1fr)', gridTemplateColumns: 'repeat(4, 1fr)', width: '100%', height: '100%'};
const styleHeader = {gridRow: '1', gridColumn: '1 / end', textAlign: 'left', paddingBottom: '4px', fontSize: '14px'}
const styleText = {gridRow: '2', gridColumn: '1 / 4', textAlign: 'left', alignSelf: 'center', paddingRight: '4px', fontSize: '12px'};
const styleImage = {gridRow: '2', gridColumn: '4', maxWidth: '100%', maxHeight: '100%', justifySelf: 'stretch', alignSelf: 'stretch'}


function ImageBubble(props: any) {
    return(
        <OptionBubble onClick={props.onClick}>
            <div style={styleGrid}>
                <Typography sx={styleHeader}>{props.header}</Typography>
                <Typography sx={styleText}>{props.text}</Typography>
                <img src={props.image} alt={props.imageAlt} style={styleImage}/>
            </div>
        </OptionBubble>
    )
}

export default ImageBubble;