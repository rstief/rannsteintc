import {Box, Chip, Typography} from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import {useParams} from 'react-router-dom';
import Divider from '@mui/material/Divider';
import sexualharassment from '../../assets/sexualharassment.svg'
import lawyer1 from '../../assets/lawyer1.svg';
import lawyer2 from '../../assets/lawyer2.svg';
import court from '../../assets/court.svg';
import {useTranslation} from 'react-i18next';

const ProceduresPage = () => {

    const { t } = useTranslation();
    let { key } = useParams();
    console.log(key);

    return (
        <Box>
            <ResourcesBar innerRef='/lilo/reportcrime' name={t('resourcesbar.police')}/>
            <Box display={'flex'} height='20%' marginLeft='10px' marginRight='8px' mt={'10px'} mb='10px' sx={{ justifyContent: 'start' }}>
                <Box height={'10%'} alignSelf='center' justifyContent={'center'}>
                    <img src={sexualharassment} className='communityfriendimage' alt='intro' />
                </Box>
                <Typography m='6px' fontSize='20px' fontWeight={'bold'}>
                    Sexual Assault
                </Typography>
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
            <Box>
                <Typography fontWeight='bold' mr='15px' m='10px'>
                    Types of Sexual Assault & Next Steps:
                </Typography>
                <Box display={'flex'} justifyContent={'start'} ml='10px '>
                    <Chip sx={{ m: '4px' }} label='Molestation' />
                    <Chip sx={{ m: '4px' }} label='Sexual Coercion' />
                    <Chip sx={{ m: '4px' }} label='Rape' />
                </Box>
                <Typography m='15px' fontSize={'14px'}>
                    If the crime just happen:
                    See a doctor/gynaecologist within 24 hours to have any injuries attended to and to gather physical evidence of the assault
                    The results of medical examination can be documented in case you decide to report the rape to the police
                    Keep any clothing, underwear or objects that carry evidence of the act of violence

                    If you do not have any evidence, do not fret, you can still seek help.
                </Typography>
                <Divider sx={{ m: '15px' }} />
                <Box mb={'10px'}>
                    <Typography fontWeight='bold' m='15px'>
                        Police Procedures:
                    </Typography>
                    <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                        <Box alignSelf={'center'} height='50%' pr='8px'>
                            <img src={lawyer1} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m='9px' fontSize={'14px'} >
                            If you want to report a crime, you should contact and/or go to the nearest police station.
                        </Typography>
                    </Box>
                    <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                        <Box alignSelf={'center'} height='50%' pr='8px'>
                            <img src={lawyer2} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m='9px' fontSize={'14px'} >
                            You can request for a female officer, if they make you more comfortable and are available at the station
                        </Typography>
                    </Box>
                    <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                        <Box alignSelf={'center'} height='50%' pr='8px'>
                            <img src={court} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m='9px' fontSize={'14px'} >
                            In most cases, you will need to provide your name and address, as well as a witness statement on what has happened
                        </Typography>
                    </Box>
                    <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                        <Box alignSelf={'center'} height='50%' pr='8px'>
                            <img src={court} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m='9px' fontSize={'14px'} >
                            This process might not be easy for you and that’s ok. You are allowed to bring somebody and a lawyer along when you are giving a statement
                        </Typography>
                    </Box>
                </Box>
                <Divider sx={{ m: '15px' }} />
                <Box mb={'10px'}>
                    <Typography fontWeight='bold' m='15px'>
                        Information to be Requested
                    </Typography>
                    <Typography m='15px' fontSize={'14px'} fontStyle='italic' >
                        If you are a victim, you can request for specific updates regarding the case as the authorities may not always send information automatically.
                    </Typography>
                    <Typography m='15px' fontSize={'14px'} >
                        These are the following updates you can request for from the police:
                    </Typography>
                    <Typography m='15px' fontSize={'14px'}>
                    Short document confirming that you have reported the crime to the authorities (this is commonly also requested for insurance purposes)
To be updated if the public prosecutor’s office decides to terminate the case 
If the case is taken to court, when and where the trial will take place, and what the defendant is accused of 
To be updated on the outcome of the trial (e.g. whether the defendant was found innocent or guilty)
To be updated on whether the person concerned is in custody 
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ProceduresPage; 