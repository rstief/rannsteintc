import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotImplementedPage = () => {
    const navigate = useNavigate();
    const backText = '< Back'
    return (
        <Box>
            <Box display={'flex'} sx={{ justifyContent: 'start', backgroundColor: '#F7F8F9', borderRadius: '8px' }}>
                <Box onClick={() => {
                    navigate(-1)
                }} alignSelf='center' ml='8px'>
                    <Typography color={'black'}>
                        {backText}
                    </Typography>
                </Box>
                <Typography fontWeight={'bold'} textAlign='center' ml='50px' mt='5px'>
                    Not Implemented
                </Typography>
            </Box>
        </Box>
    )
}

export default NotImplementedPage; 