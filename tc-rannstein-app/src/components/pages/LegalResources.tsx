import { Box, Typography } from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import lawyerimage from '../../assets/lawyer.svg'
import theft from '../../assets/theft.svg'
import fraud from '../../assets/fraud.svg'
import sexualharassment from '../../assets/sexualharassment.svg'
import sexualassault from '../../assets/sexualassault.svg'
import physicalassault from '../../assets/physicalassault.svg'
import cybercrime from '../../assets/cybercrime.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LegalResourcesPage = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const [filter, setFilter] = useState("All");

    const tags: string[] = ["All", "Right-Wing", "Racist", "Antisemitic Violence"];

    return (
        <Box display={'flex'} flexDirection='column' justifyContent='center' >
            <ResourcesBar name={t('resourcesbar.law')} innerRef=''></ResourcesBar>
            <Box onClick={() => {
                navigate('../legalresourceslawyer')
            }}
                display={'flex'} height='125px' borderRadius='20px' borderColor='secondary.main' marginLeft='8px' marginRight='8px' mt='10px' mb='10px' sx={{ border: 1, justifyContent: 'space-between', backgroundColor: '#348DAA' }}>
                <Typography m='8px' fontSize='20px' color={'white'}>
                {t('resources.law.imgexp')}
                </Typography>
                <img src={lawyerimage} className='intropageimages' alt='intro' />
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    {t('categories')}
                </Typography>
                <Typography m='9px' fontStyle={'italic'}>
                {t('resources.law.catexp')}
                </Typography>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                {t('sensitive')}
                </Typography>
                <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'space-evenly'}>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/sexualassault')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={sexualassault} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.sa')}</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/sexualharassment')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={sexualharassment} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.sh')}</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/physicalassault')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={physicalassault} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.pa')}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                {t('common')}
                </Typography>

                <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'space-evenly'}>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/cybercrime')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={cybercrime} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.cc')}</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/fraud')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={fraud} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.f')}</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/theft')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} overflow='clip' overflow-clip-margin='content-box' sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={theft} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.t')}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LegalResourcesPage; 