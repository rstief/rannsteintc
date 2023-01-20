import { Box, Typography } from "@mui/material"
import ConfiguredChatBot from "../ConfiguredChatBot";
import {informationFlow} from "../../chatbot-flow/flow";


const InfoPage = () => {
    return(
        <Box>
            <Typography align='center' fontWeight='bold' mt='20px' color='#263238'>
                Chat with Lilo, our A.I. Law Expert or view our other Resources
            </Typography>
            <Box>
                <ConfiguredChatBot steps={informationFlow} width="100%" height="600px"/>
            </Box>
        </Box>
    )
}

export default InfoPage;