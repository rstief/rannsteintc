import {Box, Chip, Typography} from '@mui/material';
import ResourcesBar from '../ResourcesBar';
import communityfriendship from '../../assets/communityfriendship.svg'
import {useNavigate} from 'react-router-dom';
import organisationList from '../../data/organizations.json'
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

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

const CommunityPage = () => {

    const [filter, setFilter] = useState("All");
    const { t } = useTranslation();
    const tags: string[] = ["All", "Physical Violence", "Sexual Violence", "Domestic Violence", "Racially Motivated Violence"];

    return (
        <Box display={'flex'} flexDirection='column' justifyContent='center' >
            <ResourcesBar name={t('resourcesbar.community')} innerRef=''/>
            <Box display={'flex'} height='125px' borderRadius='20px' borderColor='secondary.main' marginLeft='8px' marginRight='8px' mt='10px' mb='20px' sx={{ border: 1, justifyContent: 'space-between' }}>
                <Typography m='8px' fontSize='13px'>
                    {t('communityexp')}
                </Typography>
                <img src={communityfriendship} className='intropageimages' alt='intro' />
            </Box>
            <Box display={'flex'} flexDirection='row' alignSelf='center' justifySelf='center' marginLeft='20px' marginRight='20px' height='100%' flexWrap={"wrap"} >
                {/* <Chip label="All" size={"small"} onClick={() => {
                    setFilter('All')
                }} /> */}
                {tags.map(
                    (item: string, index) => <Chip key={index} sx={{m:'2px'}} label={item} size={"small"} onClick={() => {
                        setFilter(item)
                    }
                    } />
                )}
            </Box>
            {organisationList.map(
                (item: org) => {
                    if (item.tags.includes(filter) || filter === 'All') {
                        return <CommunityItem key={item.id} id={item.id} />;
                    }
                }
            )}
        </Box>
    )
}

const CommunityItem = (props: any) => {
    const navigate = useNavigate();

    /// todo add json loader with props.id
    const detailOrg: org | any = organisationList.find(item => item.id === props.id)
    const services: string[] = detailOrg.services;
    // ["Advice", "Counseling centers", "Court Preparation"];
    const tags: string[] = detailOrg.tags;
    // ["All", "Racist Violence"]

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
            <Typography fontSize='10px' textOverflow={'ellipsis'} sx={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {servicesString}
            </Typography>
        )
    }

    return (
        <Box onClick={() => {
            navigate('../communityorg/' + props.id)
        }} display={'flex'} height='100px' borderRadius='20px' marginLeft='20px' marginRight='20px' mt='10px'
            sx={{ border: 1, justifyContent: 'space-between', boxShadow: 3, borderColor: 'white', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <Box height={'100px'} width={'35%'}>
                <img src={detailOrg.image !== "" ? detailOrg.image : communityfriendship} className='communityfriendimage' alt='intro' style={{objectFit:"contain"}}/>
            </Box>
            <Box pl={'10px'} pt='10px' height='100px' width={'65%'} >
                <Box pb='10px' height='15%' overflow={'hidden'}>
                    {
                        <div>
                            {tags.map(
                                (item, index) => <Chip key={index} sx={{ ml: '2px', mr: '2px' }} size='small' label={item} />
                            )}
                        </div>
                    }
                </Box>
                <Box display={'flex'} height='85%' sx={{ flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography mb='8px' fontSize='10px'>
                        {detailOrg.shortName}
                    </Typography>
                    {servicesRender()}
                </Box>

            </Box>
        </Box>
    )
}

export default CommunityPage; 