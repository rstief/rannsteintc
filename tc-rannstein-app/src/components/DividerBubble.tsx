import styled from "styled-components";
import React from "react";


const InnerUserBubble = styled.div`
    background: #FFF;
    color: #000;
    fontFamily: Raleway;
    font-size: 14px;
    border: 0;
    border-radius: 18px 18px 18px 18px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 15%);
    padding: 12px;
    max-width: calc(100% - 82px);
    overflow-wrap: break-word;
`;

function DividerBubble(props: any) {
    return(
        <div style={{display: "flex", justifyContent: "center", paddingTop: "52px", paddingBottom: "12px"}}>
            <InnerUserBubble>{props.text}</InnerUserBubble>
        </div>
    );
}

export default DividerBubble;