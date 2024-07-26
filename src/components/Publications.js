import * as React from 'react';
import '../App.css';
import { Backdrop, Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { isMobile } from 'react-device-detect';

const publications = [
    {
        id: 'PB1',
        imgPath: '/PB1.jpg',
        url: 'https://iprsearch.ipindia.gov.in/RQStatus/PatentCertificatePDF.aspx?AppNo=MjAyMDIxMDM0NDU0&FullPath=LVBhdGVudENlcnRpZmljYXRlMzEtMDUtMjAyNC5wZGY=',
        title: 'Patent',
        desc: 'Power Backup System (Patent No.: 540602)',
        width: '30%',
    },
    {
        id: 'PB2',
        imgPath: '/PB2.jpeg',
        url: 'https://ijsrcseit.com/home/issue/view/article.php?id=CSEITCN228610',
        title: 'Research Paper',
        width: '30%',
    },
    {
        id: 'PB3',
        imgPath: '/PB3.jpeg',
        url: 'https://ijsrcseit.com/home/issue/view/article.php?id=CSEITCN22869',
        title: 'Research Paper',
        width: '30%',
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 300,
    margin: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '2px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    // backgroundPosition: 'center 40%',
    height: '100%'
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexFlow: 'column',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

export default function Publications() {
    const [open, setOpen] = React.useState(false);
    const [view, setView] = React.useState('');
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (publication) => {
        const { imgPath } = publication;
        setOpen(true);
        setView(imgPath);
    };

    return (
        <>
            <Container sx={{ display: 'flex', padding: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                    {publications.map((publication, index) => (
                        <ImageButton
                            focusRipple
                            onClick={() => handleOpen(publication)}
                            key={publication.title}
                            style={{
                                width: publication.width,
                            }}
                        >
                            <ImageSrc style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/content/images${publication.imgPath})` }} />
                            <ImageBackdrop className="MuiImageBackdrop-root" />
                            <Image>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    sx={{
                                        position: 'relative',
                                        p: 4,
                                        pt: 2,
                                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                    }}
                                >
                                    {publication.title}
                                    <ImageMarked className="MuiImageMarked-root" />
                                </Typography>
                            </Image>
                        </ImageButton>
                    ))}
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                        onClick={handleClose}
                    >
                        <img className='contain' alt='View Publication' style={{
                            height: isMobile ? '200%' : '100%',
                            width: isMobile ? '100%' : '50%',
                        }}
                            src={`${process.env.PUBLIC_URL}/content/images/${view}`} />
                    </Backdrop>
                </Box>
            </Container >
        </>
    )
}