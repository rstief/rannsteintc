import {Box, Typography} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';


const ResourcesBar = (props: any) => {
    const { t } = useTranslation();
    const backText = '< ' + t('back')
    const navigate = useNavigate();

    return (
        <Box display={'flex'} sx={{ justifyContent: 'start', backgroundColor: '#F7F8F9', borderRadius: '8px' }}>
            {/* <Link href={props.innerRef} color= 'secondary' alignSelf='center' ml='8px' underline='none'>
                 {backText}
            </Link> */}
            <Box onClick={() => {
                if (props.innerRef === '') {
                    console.log('going back 1')
                    navigate(-1)
                }
                navigate(props.innerRef)
            }
            }>
                <Typography color={'secondary'} fontWeight={'bold'} textAlign='left' ml='10px' mt='5px'>
                    {backText}
                </Typography>
            </Box>
            <Typography fontWeight={'bold'} textAlign='center' ml='50px' mt='5px'>
                {props.name}
            </Typography>
        </Box>
    )
}

export default ResourcesBar; 