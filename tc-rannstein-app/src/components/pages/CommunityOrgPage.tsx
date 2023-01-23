import {Box, Chip, Typography} from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import communityfriendship from '../../assets/communityfriendship.svg'
import {useParams} from 'react-router-dom';
import Divider from '@mui/material/Divider';
import organisationList from '../../data/organizations.json'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import i18n from "../../i18n/i18n";

interface org {
    id: String
    shortName: string,
    fullName: string,
    image: string,
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
        <Box >
            <ResourcesBar innerRef='/lilo/communityresources' name={i18n.t('resourcesbar.community')}/>
            <Box key={1} display={'flex'} height='20%' marginLeft='30px' marginRight='30px' mt='10px' mb='10px' sx={{ justifyContent: 'space-between', alignItems: 'center'}}>
                <img src={detailOrg.image !== "" ? detailOrg.image : communityfriendship} className='communityfriendimage' alt='Organization Image' style={{width:'30%', maxWidth:'30%'}}/>
                <Typography width='70%' m='8px' fontSize='13px' fontWeight={'bold'}>
                    {detailOrg.fullName}
                </Typography>
            </Box>
            <Divider sx={{ marginLeft: '30px', marginRight: '30px'}} />
            <Box key={2} height='50%' mt='20px' ml='20px' mr='20px' pb='5px' pl='10px' pr='10px' sx={{ boxShadow: 4, borderRadius: '10px' }}>
                <Box display={'flex'} pt='5px' justifyContent={'space-evenly'}>
                    <Chip key={1} icon={<LocationOnIcon/>} sx={{'& .MuiChip-label': {padding: 0}, '& .MuiChip-icon': {padding: '6px', margin:0}}}/>
                    <Chip key={2} icon={<CallIcon />} sx={{'& .MuiChip-label': {padding: 0}, '& .MuiChip-icon': {padding: '6px', margin:0}}}/>
                    <Chip key={3} icon={<LanguageIcon/>} sx={{'& .MuiChip-label': {padding: 0}, '& .MuiChip-icon': {padding: '6px', margin:0}}}/>
                </Box>
                <Typography m='8px' fontSize='13px'>
                    {detailOrg.address.street+ ", " + detailOrg.address.city}
                </Typography>
                <Typography m='8px' fontSize='13px'>
                    {detailOrg.phone}
                </Typography>
                <Typography m='8px' fontSize='13px'>
                    <a href={detailOrg.link} target="_blank" rel="noreferrer" style={{color:"#38768A"}}>
                        {detailOrg.link}
                    </a>
                </Typography>
                <Box pr='5px' pl='5px' sx={{ border: 1, borderColor: 'black', borderRadius: '10px' }}>
                    <Typography m='5px' fontSize='10px'>
                        {detailOrg.description}
                    </Typography>
                </Box>
            </Box>
            <Box key={3}>
                <Typography fontWeight='bold' m='15px'>
                    Programms & Services
                </Typography>
                {
                    <Box display={'flex'} flexWrap='wrap' flexDirection='row' justifyContent={'center'}>
                        {detailOrg.services.map(
                            (item: string[], index: any) =>
                            <Box key={index} m={'4px'} width={'100px'} height={'100px'} sx={{ border: 1, backgroundColor: '#38768A', overflowWrap:'break-word'}} borderColor={'black'} borderRadius='15px' >
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