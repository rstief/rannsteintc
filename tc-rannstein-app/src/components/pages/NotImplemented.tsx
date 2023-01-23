import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import i18n from '../../i18n/i18n';

const NotImplementedPage = () => {
    const navigate = useNavigate();
    return (
        <Box>
            <Box display={'flex'} sx={{ justifyContent: 'start', backgroundColor: '#F7F8F9', borderRadius: '8px' }}>
                <Box onClick={() => {
                    navigate(-1)
                }} alignSelf='center' ml='8px'>
                    <Typography color={'black'}>
                        {"< " + i18n.t("back")}
                    </Typography>
                </Box>
                <Typography fontWeight={'bold'} textAlign='center' ml='50px' mt='5px'>
                    {i18n.t("notImplemented")}
                </Typography>
            </Box>
        </Box>
    )
}

export default NotImplementedPage; 