import { Box, Typography } from "@mui/material"
import ConfiguredChatBot from "../ConfiguredChatBot";
import {informationFlow} from "../../chatbot-flow/flow";


const InfoPage = () => {
    return(
        <Box sx={{display: 'flex', flexDirection: 'column', height:'calc(100% - 56px)'}}>
            <Typography align='center' fontWeight='bold' mt='20px' color='#263238'>
                Chat with Lilo, our A.I. Law Expert or view our other Resources
            </Typography>
            <ConfiguredChatBot steps={informationFlow} width="100%" height="100%"/>
        </Box>
    )
}

export default InfoPage;