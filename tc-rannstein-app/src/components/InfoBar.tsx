import { Box, Typography } from "@mui/material";

const InfoBar = () => {
    return(
        <Box>
          <Typography align='center' mt='20px' mb='10px' sx={{ fontWeight: 'bold'}}>
            How to use our Crime Preliminary Assessment!
          </Typography>
          <Typography align='center' ml='10px' mr='10px' mb='15px' fontSize='14px' sx={{ justifySelf: 'center', alignItems: "center", justifyContent: "center", align: 'center', fontStyle: 'italic'  }}>
            Answer a few quick questions for us to narrow down on the specific crime and the recommended help
          </Typography>
        </Box>
    )
}

export default InfoBar; 