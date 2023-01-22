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

const ReportingCrime = () => {
    const navigate = useNavigate();

    return (
        <Box display={'flex'} flexDirection='column' justifyContent='center' >
            <ResourcesBar name='Reporting Crime & What To Do' innerRef='/lilo/assessment'></ResourcesBar>
            <Box display={'flex'} justifyContent='center' flexDirection={'row'} >
                <Box onClick={() => {
                    navigate('../legalresourceslawyer')
                }}
                    display={'flex'} flexDirection='column' height='125px' width={'175px'} borderRadius='20px' marginLeft='8px' marginRight='8px'
                    mt='10px' mb='10px' overflow={'clip'} sx={{ border: 1, justifyContent: 'space-between', backgroundColor: '#348DAA' }}>
                    <Typography m='8px' fontSize='16px' color={'white'} fontWeight='bold'>
                        File an Official Criminal Complaint
                    </Typography>
                    <Box>
                        <Typography m='9px' fontSize={'9px'} fontStyle={'italic'}>
                            *Can be used for Insurance
                        </Typography>
                        <img src={lawyerimage} className='lawyerimage' alt='intro' />
                    </Box>
                </Box>
                <Box onClick={() => {
                    navigate('../legalresourceslawyer')
                }}
                    display={'flex'} flexDirection='column' height='125px' width={'175px'} borderRadius='20px' marginLeft='8px' marginRight='8px'
                    mt='10px' mb='10px' overflow={'clip'} sx={{ border: 1, justifyContent: 'space-between', backgroundColor: '#348DAA' }}>
                    <Typography m='8px' fontSize='16px' color={'white'} fontWeight='bold'>
                        Crime Reporting Template
                    </Typography>
                    <Box>
                        <Typography m='9px' fontSize={'9px'} fontStyle={'italic'}>
                            *To store first-hand witness account
                        </Typography>
                        <img src={lawyerimage} className='lawyerimage' alt='intro' />
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    Categories
                </Typography>
                <Typography m='9px' fontStyle={'italic'}>
                    View the local law procedures taken by the police for the different types of crimes
                </Typography>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    Sensitive Crimes
                </Typography>
                <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'space-evenly'}>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/sexualassault')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={sexualassault} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Sexual Assault</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/sexualharassment')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={sexualharassment} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Sexual Harassment</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/physicalassault')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={physicalassault} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Physical Assault</Typography>
                    </Box>
                </Box>

            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    Common Crimes:
                </Typography>

                <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'space-evenly'}>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/cybercrime')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={cybercrime} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Cyber Crime</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/fraud')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={fraud} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Fraud</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../procedures/theft')
                    }}>
                        <Box m={'4px'} p='5px' alignSelf='center' width={'65px'} height={'65px'} overflow='clip' overflow-clip-margin='content-box' sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={theft} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Theft</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ReportingCrime; 