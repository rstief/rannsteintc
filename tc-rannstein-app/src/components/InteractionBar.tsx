

// This is used for the redo and export chat functionalities

import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const InteractionBar = () => {
    const { t, i18n } = useTranslation();

    return (
        <Box sx={{display:'flex', justifyContent: 'space-evenly', marginBottom: '20px', marginTop: '10px'}}>
            <Button
                color='secondary'
                sx={{backgroundColor: 'lightgrey'}}
                onClick={() => {
                    console.log("test")
                }}>
                {t('interactionbar.redo')}
            </Button>
            <Button
                color='secondary'
                sx={{backgroundColor: 'lightgrey'}}
                onClick={() => {
                    console.log("tsete")
                }}>
                {t('interactionbar.export')}
            </Button>
        </Box>
    )
}

export default InteractionBar; 