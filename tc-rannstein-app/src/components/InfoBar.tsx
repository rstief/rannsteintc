import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const InfoBar = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Typography align='center' mt='20px' mb='10px' sx={{ fontWeight: 'bold' }}>
        {t("assessment.howto1")}
      </Typography>
      <Typography align='center' ml='10px' mr='10px' mb='15px' fontSize='14px' sx={{ justifySelf: 'center', alignItems: "center", justifyContent: "center", align: 'center', fontStyle: 'italic' }}>
        {t("assessment.howto2")}
      </Typography>
    </Box>
  )
}

export default InfoBar; 