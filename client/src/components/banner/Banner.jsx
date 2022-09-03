
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://imgs.search.brave.com/YUGLYGxdSRCcVth62gdW1cHT3CXfzbhlmbIFucpEiH8/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/Qlc5S1NoRnBqajdC/ckUxbW5pMHN3SGFF/SyZwaWQ9QXBp) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 90px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
color:#FFFFFF;

`;

const Banner = () => {

    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Create your space</SubHeading>
        </Image>
    )
}

export default Banner;
