import React from "react";
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
import states from "../data/states.json";
import i18n from "../i18n/i18n";

function ResourcesAccordion(props: any) {
    return (
        <div>
            <div>
                <Accordion sx={{backgroundColor: '#FFF', marginBottom: '2px'}} square={true} disableGutters={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{color: '#2D5E6E'}}/>}>
                        <Typography color='#2D5E6E' fontWeight='bold'
                                    fontSize='14px'>{i18n.t('navbar.police.key')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: '#37474F', padding: "0"}}>
                        <Link href='../lilo/notimplemented' target="_blank" color='#FFF' underline='none'>
                            <div className="buttonPadding">
                                {i18n.t('navbar.police.l1')}
                            </div>
                        </Link>
                        <Divider sx={{borderBottomWidth: 1.5, background:'#FFF'}}/>
                        <Link href='../../lilo/reportcrime' target="_blank" color='#FFF' underline='none'>
                            <div className="buttonPadding">
                                {i18n.t('navbar.police.l2')}
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
                                    fontSize='14px'>{i18n.t('navbar.legal.key')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: '#37474F', padding: "0"}}>
                        <Link href='../lilo/notimplemented' target="_blank" color='#FFF' underline='none'>
                            <div className="buttonPadding">
                                {i18n.t('navbar.legal.l1')}
                            </div>
                        </Link>
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
                                    fontSize='14px'>{i18n.t('navbar.community.key')}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{backgroundColor: '#37474F', padding: "0"}}>
                        <div className="buttonPadding">
                            <Link href='../../lilo/communityresources' target="_blank" color='#FFF' underline='none'>
                                {i18n.t('navbar.community.l1')}
                            </Link>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}

export default ResourcesAccordion;