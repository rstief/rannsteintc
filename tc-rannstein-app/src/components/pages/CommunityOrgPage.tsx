import { Box, Chip, Typography } from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import communityfriendship from '../../assets/communityfriendship.svg'
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import organisationList from '../../data/organizations.json'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import { width } from '@mui/system';

interface org {
    id: String
    shortName: string,
    fullName: string,
    description: string,
    state: string,
    address: {
        street: string,
        city: string
    },
    phone: string,
    link: string,
    tags: string[],
    services: string[]
}

const CommunityOrgPage = () => {

    let { orgId } = useParams();
    const detailOrg: org | any = organisationList.find(item => item.id === orgId)
    console.log(orgId);
    return (
        <Box>
            <ResourcesBar innerRef='/lilo/communityresources' name='Community Resources'></ResourcesBar>
            <Box display={'flex'} height='20%' marginLeft='8px' marginRight='8px' mb='10px' sx={{ justifyContent: 'space-between'}}>
                <img src={communityfriendship} className='communityfriendimage' alt='intro' width='15%' />
                <Typography width='85%' m='8px' fontSize='13px' >
                    {detailOrg.fullName}
                </Typography>
            </Box>
            <Divider sx={{ marginLeft: '30px', marginRight: '30px' }} />
            <Box height='50%' ml='20px' mr='20px' pb='5px' pl='10px' pr='10px' sx={{ boxShadow: 4, borderRadius: '10px' }}>
                <Box display={'flex'} pt='5px' justifyContent={'space-evenly'}>
                    <Chip sx={{ justifyContent: 'center' }} icon={<LocationOnIcon />} />
                    <Chip icon={<CallIcon />} />
                    <Chip icon={<LanguageIcon />} />
                </Box>
                <Typography m='8px' fontSize='13px'>
                    {detailOrg.address.street + detailOrg.address.city}
                </Typography>
                <Typography m='8px' fontSize='13px'>
                    {detailOrg.phone}
                </Typography>
                <Box pr='5px' pl='5px' sx={{ border: 1, borderColor: 'black', borderRadius: '10px' }}>
                    <Typography m='5px' fontSize='10px'>
                        {detailOrg.description}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography fontWeight='bold' m='15px'>
                    Programms & Services
                </Typography>
                {
                    <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'center'}>
                        {detailOrg.services.map(
                            (item: string[], index: any, array: org[]) => 
                            <Box m={'4px'} width={'100px'} height={'100px'} sx={{ border: 1, backgroundColor: '#38768A'}} borderColor={'black'} borderRadius='15px' >
                                <Typography m={'4px'} color='white'>{item}</Typography>
                            </Box>
                        )}
                    </Box>
                }
            </Box>
        </Box>
    )
}

export default CommunityOrgPage; 