import {Box, Typography} from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import lawyerimage from '../../assets/lawyer.svg'
import theft from '../../assets/theft.svg'
import fraud from '../../assets/fraud.svg'
import sexualharassment from '../../assets/sexualharassment.svg'
import sexualassault from '../../assets/sexualassault.svg'
import physicalassault from '../../assets/physicalassault.svg'
import cybercrime from '../../assets/cybercrime.svg'
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const ReportingCrime = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Box display={'flex'} flexDirection='column' justifyContent='center' >
            <ResourcesBar name={t('resourcesbar.police')} innerRef=''/>
            <Box display={'flex'} justifyContent='center' flexDirection={'row'} >
                <Box onClick={() => {
                    navigate('../notimplemented')
                }}
                    display={'flex'} flexDirection='column' height='125px' width={'175px'} borderRadius='20px' marginLeft='8px' marginRight='8px'
                    mt='10px' mb='10px' overflow={'clip'} sx={{ border: 1, justifyContent: 'space-between', backgroundColor: '#348DAA' }}>
                    <Typography m='8px' fontSize='16px' color={'white'} fontWeight='bold'>
                        {t('resources.report.file')}
                    </Typography>
                    <Box>
                        <Typography m='9px' fontSize={'9px'} fontStyle={'italic'}>
                        {t('resources.report.insurance')}
                        </Typography>
                        <img src={lawyerimage} className='lawyerimage' alt='intro' />
                    </Box>
                </Box>
                <Box onClick={() => {
                    navigate('../notimplemented')
                }}
                    display={'flex'} flexDirection='column' height='125px' width={'175px'} borderRadius='20px' marginLeft='8px' marginRight='8px'
                    mt='10px' mb='10px' overflow={'clip'} sx={{ border: 1, justifyContent: 'space-between', backgroundColor: '#348DAA' }}>
                    <Typography m='8px' fontSize='16px' color={'white'} fontWeight='bold'>
                    {t('resources.report.template')}
                    </Typography>
                    <Box>
                        <Typography m='9px' fontSize={'9px'} fontStyle={'italic'}>
                        {t('resources.report.store')}
                        </Typography>
                        <img src={lawyerimage} className='lawyerimage' alt='intro' />
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                {t('categories')}
                </Typography>
                <Typography m='9px' ml='15px' fontStyle={'italic'}>
                {t('resources.report.catexp')}
                </Typography>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                {t('sensitive')}
                </Typography>
                <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'space-evenly'}>
                    <Box width={'125px'} height={'125px'} display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/sexualassault')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={sexualassault} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.sa')}</Typography>
                    </Box>
                    <Box width={'125px'} height={'125px'} display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/sexualharassment')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={sexualharassment} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.sh')}</Typography>
                    </Box>
                    <Box width={'125px'} height={'125px'} display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/physicalassault')
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
                    <Box width={'125px'} height={'125px'} display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/cybercrime')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={cybercrime} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.cc')}</Typography>
                    </Box>
                    <Box width={'125px'} height={'125px'} display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/fraud')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={fraud} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>{t('crimes.f')}</Typography>
                    </Box>
                    <Box width={'125px'} height={'125px'} display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/theft')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
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

export default ReportingCrime; 