import { Box, Chip, Typography } from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import communityfriendship from '../../assets/communityfriendship.svg'
import { useNavigate } from 'react-router-dom';

const CommunityPage = () => {
    return (
        <Box display={'flex'} flexDirection='column' justifyContent='center' >
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
            <Box display={'flex'} flexDirection='row' alignSelf='center' justifySelf='center' width='80%' height={'30px'}>
                <Chip label="All" size={"small"} onClick={() => {
                    console.log('test')
                }} />
                <Chip label="Clickable" size={"small"} onClick={() => {
                    console.log('test')
                }} />
                <Chip label="Clickable" size={"small"} onClick={() => {
                    console.log('test')
                }} />
            </Box>
            <CommunityItem id='1' />
            <CommunityItem id='2' />
            <CommunityItem id='3' />
            <CommunityItem id='4' />
        </Box>
    )
}

const CommunityItem = (props: any) => {
    const navigate = useNavigate();

    /// todo add json loader with props.id
    const services: string[] = ["Advice", "Counseling centers", "Court Preparation"];
    const tags: string[] = ["All", "Racist Violence"]

    function servicesRender(): JSX.Element {
        let servicesString = '';

        services.forEach((entry) => {
            if (entry === services.at(services.length - 1)) {
                servicesString = servicesString + entry;
            } else {
                servicesString = servicesString + entry + ' : ';
            }
        })

        return (
            <Typography fontSize='10px'>
                {servicesString}
            </Typography>
        )
    }

    return (
        <Box onClick={() => {
            navigate('../communityorg/' + props.id)
        }} display={'flex'} height='100px' borderRadius='20px' marginLeft='20px' marginRight='20px' mt='10px'
            sx={{ border: 1, justifyContent: 'space-between', boxShadow: 3, borderColor: 'white' }}>
            <Box height={'100%'} width={'35%'}>
                <img src={communityfriendship} className='communityfriendimage' alt='intro' />
            </Box>
            <Box pl={'10px'} pt='15px' height='100px' sx={{ flexGrow: 5 }}>
                <Box pb='10px' >
                    {
                        <div>
                            {tags.map(
                                (item, index, array) => <Chip sx={{ml:'4px', mr:'4px'}} size='small' label={item} />
                            )}
                        </div>
                    }
                    {/* <Chip size='small' label='Test' />
                    <Chip size='small' label='Test' />
                    <Chip size='small' label='Test' /> */}
                </Box>
                <Box display={'flex'} sx={{ flexDirection: 'column-reverse' }}>
                    {/* <Typography fontSize='10px'>
                        Test : Test : Test
                    </Typography> */}
                    {servicesRender()}
                    <Typography mb='8px' fontSize='10px'>
                        Lara
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default CommunityPage; 