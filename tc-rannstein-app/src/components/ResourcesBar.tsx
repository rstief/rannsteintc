import { Box, Button, Link, Typography } from '@mui/material';


const ResourcesBar = (props: any) => {
    const backText = '< Back'

    return (
        <Box display={'flex'} sx={{justifyContent:'start', backgroundColor:'#F7F8F9', borderRadius:'8px'}}>
            <Link href={props.innerRef} color= 'secondary' alignSelf='center' ml='8px' underline='none'>
                 {backText}
            </Link>
            <Typography textAlign='center' ml='50px' mt='5px'>
                {props.name}
            </Typography>
        </Box>
    )
}

export default ResourcesBar; 