import React, {useEffect, useState} from "react";
import i18n from "../i18n/i18n";
import organisationList from '../data/organizations.json'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    FormControl,
    Link,
    MenuItem, Select, SelectChangeEvent,
    Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowIcon from '@mui/icons-material/KeyboardArrowRight';


function SexualAssaultResult(props: any) {

    const [indications, setIndications] = useState([""]);
    useEffect( () => {
        const steps = props.steps;
        let indications: string[] = [];
        let p: string = "";
        for(let i in steps) {
            let choice = steps[i].value;
            if(typeof choice !== "undefined" && typeof steps[i].metadata !== "undefined") {
                p = steps[i].metadata.indications[choice];
                if(typeof p !== "undefined") {
                    indications.push(p);
                }
            }
        }
        indications = indications.flat(1);
        setIndications(indications);
    }, []);

    return(
            <div>
                {indications.map((indication, index) => {
                    return <div key={index}>
                        {i18n.t(`chatbot.seekHelp.sexualAssaultResult.${indication}`)}<br/><br/>
                    </div>
                })}
                {i18n.t(`chatbot.seekHelp.sexualAssaultResult.1`)}<br/><br/>
                {i18n.t(`chatbot.seekHelp.sexualAssaultResult.2`)}
            </div>
    );
}

export default SexualAssaultResult;