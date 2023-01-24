import {Box, Divider, Typography} from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import lawyerimage from '../../assets/lawyer.svg'
import lawyer1 from '../../assets/lawyer1.svg';
import lawyer2 from '../../assets/lawyer2.svg';
import court from '../../assets/court.svg';
import coins from '../../assets/coins.svg';
import benefit from '../../assets/benefit.svg';
import loan from '../../assets/loan.svg';
import {useTranslation} from 'react-i18next';

const LegalResourcesLawyerPage = () => {
    const { t } = useTranslation();

    return (
        <Box display={'flex'} flexDirection='column' justifyContent='center' >
            <ResourcesBar name={t('resourcesbar.law')} innerRef='/lilo/legalresources'/>
            <Box display={'flex'} height='100px' borderRadius='20px' borderColor='secondary.main' marginLeft='8px' marginRight='8px' mt='10px' mb='10px' sx={{ border: 1, justifyContent: 'space-between', backgroundColor: '#348DAA' }}>
                <Typography m='8px' fontSize='20px' color={'white'}>
                    Hiring a Lawyer & Prosecuting
                </Typography>
                <img src={lawyerimage} className='lawyerimage' alt='lawyer' />
            </Box>
            <Box mb={'10px'}>
                <Typography fontWeight='bold' m='15px'>
                    When do you engage with a lawyer:
                </Typography>
                <Divider sx={{ margin: '10px' }} />
                <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                    <Box alignSelf={'center'} height='50%' pr='8px'>
                        <img src={lawyer1} className='lawyerimage' alt='lawyer' >
                        </img>
                    </Box>
                    <Typography m='9px' fontSize={'14px'} >
                        When filing an official police report, you are allowed to have a lawyer present. In some special cases, the state will even pay for a lawyer to assist you during questioning
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                    <Box alignSelf={'center'} height='50%' pr='8px'>
                        <img src={lawyer2} className='lawyerimage' alt='lawyer' >
                        </img>
                    </Box>
                    <Typography m='9px' fontSize={'14px'} >
                        If you have filed a report, you would most likely need to testify in court. Hence you would need a laywer.
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                    <Box alignSelf={'center'} height='50%' pr='8px'>
                        <img src={court} className='lawyerimage' alt='lawyer' >
                        </img>
                    </Box>
                    <Typography m='9px' fontSize={'14px'} >
                        You can join the prosecution as a “private accessory prosecutor” if you are the victim of a crime like rape, sexual abuse or attempted murder, or if the crime resulted in the death of a close relative
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    How do I pay for my lawyer:
                </Typography>
                <Divider sx={{ margin: '10px' }} />
                <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                    <Box alignSelf={'center'} height='50%' pr='8px'>
                        <img src={coins} className='lawyerimage' alt='lawyer' >
                        </img>
                    </Box>
                    <Typography m='9px' fontSize={'14px'} >
                        Hiring a lawyer can be costly. If the defendant is guilty, he or she must pay your lawyer’s fees. However not everybody who is found guilty is able to cover these costs so you may have to pay some of the fees yourself
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                    <Box alignSelf={'center'} height='50%' pr='8px'>
                        <img src={benefit} className='lawyerimage' alt='lawyer' >
                        </img>
                    </Box>
                    <Typography m='9px' fontSize={'14px'} >
                        Under certain exceptional circumstances, you can ask the court to appoint you a lawyer paid for by the state (e.g. victim of a violent or sexual offence)
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection='row' paddingLeft={'20px'} paddingRight={'20px'}>
                    <Box alignSelf={'center'} height='50%' pr='8px'>
                        <img src={loan} className='lawyerimage' alt='lawyer' >
                        </img>
                    </Box>
                    <Typography m='9px' fontSize={'14px'} >
                        You can also ask the court to help you pay for legal advice in other cases (e.g. you do not earn a lot of money, or you have the right to act as a private accessory prosecutor
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default LegalResourcesLawyerPage; 