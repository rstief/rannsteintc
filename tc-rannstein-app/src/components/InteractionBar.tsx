

// This is used for the redo and export chat functionalities

import { Box, Button } from "@mui/material";

const InteractionBar = () => {
    return (
        <Box sx={{display:'flex', justifyContent: 'space-evenly', marginBottom: '20px', marginTop: '10px'}}>
            <Button
                color='secondary'
                sx={{backgroundColor: 'lightgrey'}}
                onClick={() => {
                    console.log("test")
                }}>
                Redo Chat
            </Button>
            <Button
                color='secondary'
                sx={{backgroundColor: 'lightgrey'}}
                onClick={() => {
                    console.log("tsete")
                }}>
                Export Chat
            </Button>
        </Box>
    )
}

export default InteractionBar; 