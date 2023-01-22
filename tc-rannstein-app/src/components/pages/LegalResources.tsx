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

const LegalResourcesPage = () => {
    const navigate = useNavigate();

    const [filter, setFilter] = useState("All");

    const tags: string[] = ["All", "Right-Wing", "Racist", "Antisemitic Violence"];

    return (
        <Box display={'flex'} flexDirection='column' justifyContent='center' >
            <ResourcesBar name='Local Laws' innerRef='/lilo/assessment'></ResourcesBar>
            <Box onClick={() => {
                navigate('../legalresourceslawyer')
            }}
                display={'flex'} height='125px' borderRadius='20px' borderColor='secondary.main' marginLeft='8px' marginRight='8px' mt='10px' mb='10px' sx={{ border: 1, justifyContent: 'space-between', backgroundColor: '#348DAA' }}>
                <Typography m='8px' fontSize='20px' color={'white'}>
                    Hiring a Lawyer & Prosecuting
                </Typography>
                <img src={lawyerimage} className='intropageimages' alt='intro' />
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    Categories
                </Typography>
                <Typography m='9px' fontStyle={'italic'}>
                    View the local law definition & actions that a victim can take to compensate from their perpetrator
                </Typography>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    Sensitive Crimes
                </Typography>
                {
                    <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'space-evenly'}>
                        <Box display={'flex'} flexDirection={'column'} onClick={() => {
                            navigate('../legalcrimeresources/sexualassault')
                        }}>
                            <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                                <img src={sexualassault} className='lawyerimage' alt='lawyer' >
                                </img>
                            </Box>
                            <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Sexual Assault</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} onClick={() => {
                            navigate('../legalcrimeresources/sexualharassment')
                        }}>
                            <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                                <img src={sexualharassment} className='lawyerimage' alt='lawyer' >
                                </img>
                            </Box>
                            <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Sexual Harassment</Typography>
                        </Box>
                        <Box display={'flex'} flexDirection={'column'} onClick={() => {
                            navigate('../legalcrimeresources/physicalassault')
                        }}>
                            <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                                <img src={physicalassault} className='lawyerimage' alt='lawyer' >
                                </img>
                            </Box>
                            <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Physical Assault</Typography>
                        </Box>
                    </Box>
                }
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    Common Crimes:
                </Typography>

                <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'space-evenly'}>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/cybercrime')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={cybercrime} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Cyber Crime</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/fraud')
                    }}>
                        <Box m={'4px'} alignSelf='center' width={'65px'} height={'65px'} sx={{ border: 1, backgroundColor: '#D9D9D9' }} borderColor={'black'} borderRadius='15px'>
                            <img src={fraud} className='lawyerimage' alt='lawyer' >
                            </img>
                        </Box>
                        <Typography m={'4px'} align='center' color='black' fontSize={'11px'}>Fraud</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} onClick={() => {
                        navigate('../legalcrimeresources/theft')
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

export default LegalResourcesPage; 