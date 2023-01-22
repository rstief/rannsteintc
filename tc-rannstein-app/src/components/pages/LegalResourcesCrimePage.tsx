import { Box, Typography } from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import sexualharassment from '../../assets/sexualharassment.svg'
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';

const LegalResourcesCrimePage = () => {
    const { t, i18n } = useTranslation();
    let { crime } = useParams();
    console.log(crime);

    return (
        <Box>
            <ResourcesBar innerRef='/lilo/legalresources' name={t('resourcesbar.law')}></ResourcesBar>
            <Box display={'flex'} height='20%' marginLeft='8px' marginRight='8px' mt={'10px'} mb='10px' sx={{ justifyContent: 'start' }}>
                <Box height={'10%'} alignSelf='center' justifyContent={'center'}>
                    <img src={sexualharassment} className='communityfriendimage' alt='intro' />
                </Box>
                <Box ml={'5px'}>
                    <Typography m='4px' fontSize='20px' fontWeight={'bold'}>
                        Sexual Assault
                    </Typography>
                    <Typography m='4px' fontSize='14px' fontStyle={'italic'} >
                        Division 13: Section 177
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{ marginLeft: '30px', marginRight: '30px' }} />
            <Box m='10px' pr='5px' pl='5px' sx={{ border: 1, borderColor: 'black', borderRadius: '10px' }}>
                <Typography m='5px' fontSize='16px' fontWeight={'bold'}>
                    Definition:
                </Typography>
                <Typography m='5px' fontSize='12px' fontStyle={'italic'}>
                    Any form of sexual act performed on another person against their will
                </Typography>
            </Box>
            <Typography m='10px' fontSize='10px' fontStyle={'italic'} >
                Taken from: https://www.gesetze-im-internet.de
            </Typography>
            <Typography m={'14px'}>
                (1) Whoever, against a person’s discernible will, performs sexual acts on that person or has that person perform sexual acts on them, or causes that person to perform or acquiesce to sexual acts being performed on or by a third person incurs a penalty of imprisonment for a term of between six months and five years.
            </Typography>
        </Box>
    )
}

export default LegalResourcesCrimePage; 