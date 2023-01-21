import { Box, Typography } from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import communityfriendship from '../../assets/communityfriendship.svg'
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import organisationList from '../../data/organizations.json'

const CommunityOrgPage = () => {

    let { orgId } = useParams();

    console.log(orgId);

    return (
        <Box>
            <ResourcesBar innerRef='/lilo/communityresources' name='Community Resources'></ResourcesBar>
            <Box display={'flex'} height='20%' marginLeft='8px' marginRight='8px' mb='10px' sx={{ justifyContent: 'space-between' }}>
                <img src={communityfriendship} className='communityfriendimage' alt='intro' />
                <Typography m='8px' fontSize='13px'>
                    Fachstelle gegen sexualisierte gewalt an Frauen {orgId}
                </Typography>
            </Box>
            <Divider sx={{marginLeft: '30px', marginRight:'30px'}} />
            <Box height='50%' ml='20px' mr='20px' pb='5px' pl='10px' pr='10px' sx={{ boxShadow: 4, borderRadius: '10px' }}>
                <Typography m='8px' fontSize='13px'>
                    Location
                </Typography>
                <Typography m='8px' fontSize='13px'>
                    Telefon
                </Typography>
                <Box pr='5px' pl='5px' sx={{border:1, borderColor:'black', borderRadius: '10px'}}>
                    <Typography m='5px' fontSize='10px'>
                        Lara is a rape crisis and counselling centre that offers assistance to women and girls over the age of 14 who have been raped, sexually abused, and/or sexually harassed
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    Programms & Services
                </Typography>
            </Box>
        </Box>
    )
}

export default CommunityOrgPage; 