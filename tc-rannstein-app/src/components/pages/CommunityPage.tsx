import { Box, Typography } from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import communityfriendship from '../../assets/communityfriendship.svg'

const CommunityPage = () => {
    return (
        <Box>
            <ResourcesBar name='Community Resources' innerRef='/lilo/assessment'></ResourcesBar>
            <Box display={'flex'} height='125px' borderRadius='20px' borderColor='secondary.main' marginLeft='8px' marginRight='8px' mb='80px' sx={{ border: 1, justifyContent: 'space-between' }}>
                <Typography m='8px' fontSize='13px'>
                    It’s not always easy to seek out police and legal help,
                    there are always other support
                    groups and organisations that
                    are here for you!
                </Typography>
                <img src={communityfriendship} className='intropageimages' alt='intro' />
            </Box>
            <CommunityItem/>
            <CommunityItem/>
            <CommunityItem/>
            <CommunityItem/>
        </Box>
    )
}

const CommunityItem = () => {
    return (
        <Box display={'flex'} height='100px' borderRadius='20px' marginLeft='20px' marginRight='20px' mt='10px' 
        sx={{ border: 1, justifyContent: 'space-between', boxShadow: 3, borderColor:'white'}}>
            <Box height={'100%'} width={'35%'}>
                <img src={communityfriendship} className='communityfriendimage' alt='intro' />
            </Box>
            <Box sx={{ flexGrow: 5 }}>
                <Box display={'flex'} sx={{ height:'100%', flexDirection:'column-reverse'}}>
                
                <Typography m='8px' fontSize='10px'>
                    Test : Test : Test
                </Typography>
                <Typography m='8px' fontSize='10px'>
                    Lara
                </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default CommunityPage; 