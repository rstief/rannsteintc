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


function PreliminaryResult(props: any) {

    const [paragraphs, setParagraphs] = useState([""]);
    useEffect( () => {
        const steps = props.steps;
        let paragraphs: string[] = [];
        let p: string = "";
        for(let i in steps) {
            let choice = steps[i].value;
            if(typeof choice !== "undefined" && typeof steps[i].metadata !== "undefined") {
                p = steps[i].metadata.paragraphs[choice];
                if(typeof p !== "undefined") {
                    paragraphs.push(p);
                }
            }
        }
        paragraphs = paragraphs.flat(1);
        setParagraphs(paragraphs);
        console.log(paragraphs);
    }, []);

        return(
        <div>
            <div>
            {paragraphs.map((number, index) => {
                return <ParagraphResult key={index} paragraph={number}/>
            })}
            </div>
        </div>
    );
}


function ParagraphResult(props:any) {
    return(
        <div style={{paddingBottom:'20px'}}>
            <Typography style={{paddingBottom:'6px', fontSize:'16px'}}>{i18n.t(`paragraphs.${props.paragraph}.title`)}</Typography>
                <Accordion sx={{backgroundColor: '#FFF', marginBottom: '2px'}} square={true} disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: '#2D5E6E'}}/>}>
                        <Typography color='#2D5E6E' fontWeight='bold' fontSize='13px'>{i18n.t('navbar.police.key')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: '#37474F', padding: "0"}}>
                        <div className="buttonPadding" style={{color:'#FFF'}}>
                            {i18n.t('chatbot.resourcesAccordion.sorryPolice')}
                        </div>
                        <Divider sx={{borderBottomWidth: 1.5, background:'#FFF'}}/>
                        <Link href='../../lilo/legalresources' target="_blank" color='#FFF' underline='none'>
                            <div className="buttonPadding">
                                {i18n.t('navbar.police.l2')}
                            </div>
                        </Link>
                    </AccordionDetails>
                </Accordion>
            <div>
                <Accordion sx={{backgroundColor: '#FFF', marginBottom: '2px'}} square={true} disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: '#2D5E6E'}}/>}>
                        <Typography color='#2D5E6E' fontWeight='bold'
                                    fontSize='13px'>{i18n.t('navbar.legal.key')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: '#37474F', padding: "0"}}>
                        <div className="buttonPadding" style={{color:'#FFF'}}>
                            {i18n.t('chatbot.resourcesAccordion.sorryLegal')}
                        </div>
                        <Divider sx={{borderBottomWidth: 1.5, background:'#FFF'}}/>
                        <Link href='../../lilo/legalresources' target="_blank" color='#FFF' underline='none'>
                            <div className="buttonPadding">
                                {i18n.t('navbar.legal.l2')}
                            </div>
                        </Link>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div>
                <Accordion sx={{backgroundColor: '#FFF', marginBottom: '2px'}} square={true} disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: '#2D5E6E'}}/>}>
                        <Typography color='#2D5E6E' fontWeight='bold'
                                    fontSize='13px'>{i18n.t('navbar.community.key')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: '#37474F', padding: "0"}}>
                        <CommunityContent paragraph={props.paragraph}/>
                    </AccordionDetails>
                </Accordion>
            </div>
            </div>
    );
}

function CommunityContent(props:any) {
    function filter(paragraph: string) {
        console.log(paragraph);
        if(["223", "224-1", "245", "250"].includes(paragraph)) {
            return "Physical Violence";
        }
        if(["177", "184i"].includes(paragraph)) {
            return "Sexual Violence";
        }
        return "All"
    }

    function getResources(filter:string) {
        let resourceList = [];
        for(let i in organisationList) {
            if(organisationList[i].tags.includes(filter)) {
                resourceList.push(organisationList[i]);
                //get at most three organizations
                if(resourceList.length >= 3) {
                    break;
                }
            }
        }
        return resourceList
    }


    return(
        <div>
            <div className="buttonPadding" style={{color:'#FFF'}}>
            {filter(props.paragraph) === "All" ? i18n.t("chatbot.resourcesAccordion.orgsMiss"): i18n.t("chatbot.resourcesAccordion.orgsHit")}
            </div>
            <Divider sx={{borderBottomWidth: 1.5, background:'#FFF'}}/>
            {getResources(filter(props.paragraph)).map((org, index) => {
                return <Link href={`../../lilo/communityorg/${org.id}`} target="_blank" color='#FFF' underline='none'>
                    <div className="buttonPadding" style={{display:"flex", alignItems:"center" }}>
                        <div >
                            {org.fullName}
                        </div>
                    <ArrowIcon/>
                    </div>
                </Link>
            })}
        </div>

    );
}

export default PreliminaryResult;