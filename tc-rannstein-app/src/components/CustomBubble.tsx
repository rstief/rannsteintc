import React from "react";
import {Typography} from "@mui/material";


const style = {
    background: '#FFF',
    color: '#000',
    fontSize: '14px',
    fontFamily: 'Raleway',
    borderRadius: '18px 18px 0px 18px',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 15%)',
    padding: '12px',
    border: 0,
    '&:hover': { //todo fix this with some css, styled-components, ...
        opacity: '0.7'
    }
}

//todo probably bad ...
function CustomBubble(props: any) {
    return(
        <button className="CustomBubble" style={style} onClick={()=>{console.log(props.image)}}>
            <Typography>{props.firstLine}</Typography>
            <div>
                <Typography>{props.secondLine}</Typography>
                <img src={props.image} alt={props.imageAlt}/>
            </div>
        </button>
    )
}

export default CustomBubble;