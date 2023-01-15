import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Typography} from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";

function AccordionTest() {
    return(
        <div>
            <Accordion square={false} disableGutters={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Test</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    This is some text
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionTest;