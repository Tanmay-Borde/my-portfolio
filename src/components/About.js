import { Avatar, Backdrop, BottomNavigation, BottomNavigationAction, Button, Card, CardContent, CardMedia, Chip, Container, Divider, Grid, IconButton, Slide, Stack } from "@mui/material";
import * as React from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { isMobile } from 'react-device-detect';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import Dialog from '@mui/material/Dialog';
import { MilitaryTech } from "@mui/icons-material";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CloseIcon from '@mui/icons-material/Close';

const about = {
    name: 'Tanmay Borde',
    briefOverview: `A Technology Enthusiast, passionate about problem-solving and innovation, using technology as a tool to create an impact.
                    With over 2+ years of experience in Full Stack Web Development, I have a proven track record of working end-to-end on critical system implementation projects.
                    Successfully contributed for multiple projects encompassing business facing critical web applications from Order Management to Product Entitlement.
                    As a curious and detail-oriented techno-functional geek with strong technical, business, and presentation skills, my goal is to gain valuable industry experience and drive innovation in both hardware and software domains.`,
    programmingLanguages: ['Java', 'PLSQL', 'JavaScript', 'TypeScript', 'Python'],
    databases: ['Oracle-DB', 'JSON-Server'],
    frameworks: ['Spring-Boot', 'React', 'Angular'],
    tools: ['REST-API', 'Git'],
    methodologies: ['Agile-Development']
}

const certifications = [
    {
        id: 'c1',
        title: 'Lean Six Sigma White Belt',
        issuedDate: 'Issued May 2024',
        url: 'https://drive.google.com/file/d/1zkkdDoRuo4y8wRtN5wi3im_P_qehiGdp/view?usp=drivesdk'
    },
    {
        id: 'c2',
        title: 'AI for Business Leaders',
        issuedDate: 'Issued Apr 2024',
        url: 'https://www.udemy.com/certificate/UC-e4fec80f-57d7-4f3d-994d-6cea9f260c59/'
    },
    {
        id: 'c3',
        title: 'The Complete PLSQL Bootcamp',
        issuedDate: 'Issued Dec 2023',
        url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-0c756df9-e190-428f-acf9-10c69daa5901.pdf'
    },
    {
        id: 'c4',
        title: 'Git-The Complete Guide',
        issuedDate: 'Issued Aug 2022',
        url: 'https://www.udemy.com/certificate/UC-57253988-9f24-4556-a977-de61a9c6aa2b/'
    },
    {
        id: 'c5',
        title: 'Java Full Stack-Spring Boot & React',
        issuedDate: 'Issued Jun 2022',
        url: 'http://ude.my/UC-1f4e67cc-6394-4698-85b0-077d6d35687c'
    },
    {
        id: 'c6',
        title: 'Introduction to DevOps & SRE',
        issuedDate: 'Issued Dec 2021',
        url: 'https://courses.edx.org/certificates/6a26b745178b44499af6491a72340bb1'
    },
    {
        id: 'c7',
        title: 'Front-End JS Framework-Angular',
        issuedDate: 'Issued Jul 2021',
        url: 'https://coursera.org/share/23d81ed7a2163d82f43df0d62a96ceb7'
    },
    {
        id: 'c8',
        title: 'IBM-Introduction to AI',
        issuedDate: 'Issued Feb 2021',
        url: 'https://www.coursera.org/account/accomplishments/certificate/Y6GRLEBBB33E'
    },
    {
        id: 'c9',
        title: 'Exec Briefing- AI & LLMs',
        issuedDate: 'Issued Apr 2024',
        url: 'https://www.udemy.com/certificate/UC-73572894-eb99-4baf-9d46-9eb5e2085e7c/'
    },
    {
        id: 'c10',
        title: 'UOM-Beginners Guide for Python',
        issuedDate: 'Issued Jan 2021',
        url: 'https://www.coursera.org/account/accomplishments/certificate/EJC2K39G3KDG'
    },
]

const honors = [
    {
        id: 'RP1',
        title: 'Research Paper Presentation',
    },
    {
        id: 'RP2',
        title: 'Research Paper Presentation',
    },
    {
        id: 'RP3',
        title: 'Seminar Competition',
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

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function About() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const [view, setView] = React.useState('');
    const filetype = 'docx'
    const file_url = 'https://docs.google.com/document/d/1xiuDjQRr6vCYP9wvctCO4CM5xerXb1kkQ0hklAgA4QE'

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (imgDetails) => {
        setOpen(true);
        setView(imgDetails);
    }

    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                {!isMobile && (
                    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="About me"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            <Tab icon={<PersonIcon />} {...a11yProps(0)} />
                            <Tab icon={<CodeIcon />} {...a11yProps(1)} />
                            <Tab icon={<SchoolIcon />} {...a11yProps(2)} />
                            <Tab icon={<MilitaryTech />} {...a11yProps(3)} />
                            <Tab icon={<EmojiEventsIcon />} {...a11yProps(4)} />
                            <Tab icon={<ContactPageIcon />} {...a11yProps(5)} />
                            <Tab icon={<ContactPhoneIcon />} {...a11yProps(6)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350 }}>
                                <Card variant='outlined' raised='true' sx={{ width: '100%', minHeight: 350, flexGrow: 1 }}>
                                    <CardContent sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {`Hey, I'm ${about.name}`}
                                        </Typography>
                                        <Typography variant="body2" color='inherit'>
                                            {about.briefOverview.split('\n').map((line, i) => (
                                                <ul key={i} style={{ listStyle: 'disc', paddingLeft: 2 }}>{line}<br /></ul>
                                            ))}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350 }}>
                                <Card variant='outlined' raised='true' sx={{ width: '100%', minHeight: 350 }}>
                                    <CardContent sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'center' }}>
                                        <Box sx={{ maxHeight: 300, flexFlow: 1, flexWrap: 'wrap' }}>
                                            <Divider>Programming Languages</Divider>
                                            <Stack p={1} direction='row' spacing={2} justifyContent={"center"}>
                                                {about.programmingLanguages.map((programmingLanguage, index) => (
                                                    <Grid item xs={12} md={4} key={index}>
                                                        <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${programmingLanguage}.png`} />} label={programmingLanguage} />
                                                    </Grid>
                                                ))
                                                }
                                            </Stack>
                                            <Divider>Frameworks</Divider>
                                            <Stack p={1} direction='row' spacing={2} justifyContent={"center"}>
                                                {about.frameworks.map((framework, index) => (
                                                    <Grid item xs={12} md={4} key={index}>
                                                        <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${framework}.png`} />} label={framework} />
                                                    </Grid>
                                                ))
                                                }
                                            </Stack>
                                            <Divider>Database</Divider>
                                            <Stack p={1} direction='row' spacing={2} justifyContent={"center"}>
                                                {about.databases.map((database, index) => (
                                                    <Grid item xs={12} md={4} key={index}>
                                                        <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${database}.png`} />} label={database} />
                                                    </Grid>
                                                ))
                                                }
                                            </Stack>
                                            <Divider>Tools</Divider>
                                            <Stack p={1} direction='row' spacing={2} justifyContent={"center"}>
                                                {about.tools.map((tool, index) => (
                                                    <Grid item xs={12} md={4} key={index}>
                                                        <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${tool}.png`} />} label={tool} />
                                                    </Grid>
                                                ))
                                                }
                                            </Stack>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350 }}>
                                <Card variant='outlined' sx={{ width: '100%', minHeight: 350 }}>
                                    <Paper
                                        sx={{
                                            p: 1,
                                            margin: 'auto',
                                            maxWidth: '100%',
                                            flexGrow: 1,
                                            color: 'inherit'
                                        }}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <ButtonBase
                                                    href="https://mitwpu.edu.in/"
                                                    target="_blank"
                                                    sx={{ width: 120, height: 120 }}
                                                    rel="noopener noreferrer">
                                                    <Img height={100} width={100} alt="mit-wpu" src={`${process.env.PUBLIC_URL}/content/images/mit-wpu.png`} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <a href="https://mitwpu.edu.in/"
                                                            target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
                                                            <Typography gutterBottom variant='h6' component="div">
                                                                {`MIT World Peace University`}
                                                            </Typography>
                                                        </a>
                                                        <Typography variant="body2" gutterBottom>
                                                            {`Master's Degree, Computer Science.`}
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            {`2020 - 2022`}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {`2nd prize for debate competition • Host for International Reserach Paper Conference.`}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid><br />
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <ButtonBase href="http://www.unipune.ac.in/" target="_blank" sx={{ width: 120, height: 120 }} rel="noopener noreferrer">
                                                    <Img height={100} width={100} alt="sppu" src={`${process.env.PUBLIC_URL}/content/images/sppu.jpg`} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={2}>
                                                    <Grid item xs>
                                                        <a href="http://www.unipune.ac.in/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
                                                            <Typography gutterBottom variant='h6' component="div">
                                                                {`Modern College of Arts, Science & Commerce`}
                                                            </Typography>
                                                        </a>
                                                        <Typography variant="body2" gutterBottom>
                                                            {`Bachelor's Degree, Computer Science.`}
                                                        </Typography>
                                                        <Typography variant="body2" gutterBottom>
                                                            {`2017 - 2020`}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {`Bagged 1st prize in Seminar Competition on AI • Author for college magazine.`}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Card>
                            </Box>
                        </TabPanel >
                        <TabPanel value={value} index={3} overflow={'auto'} maxHeight={1000}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350 }}>
                                <Grid container spacing={2} direction='row' flexWrap={'wrap'}>
                                    {certifications.map((certification, index) => (
                                        <Grid key={index} item xs={6} spacing={2}>
                                            <Card key={index} sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}>
                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                                        <Typography component="div" variant="h6">
                                                            {certification.title}
                                                        </Typography>
                                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                                            {certification.issuedDate}
                                                        </Typography>
                                                    </CardContent>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                        <IconButton aria-label="redirect" href={certification.url} target="_blank">
                                                            <OpenInNewIcon fontSize="small" />
                                                        </IconButton>
                                                        <IconButton aria-label="view" onClick={() => handleOpen(certification.title)}>
                                                            <FullscreenIcon fontSize="small" />
                                                        </IconButton>
                                                    </Box>
                                                </Box>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ width: 150, cursor: 'pointer' }}
                                                    image={`${process.env.PUBLIC_URL}/content/images/${certification.title}.jpg`}
                                                    alt={certification.title}
                                                    onClick={() => handleOpen(certification.title)}
                                                />
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGrow: 1, minWidth: 1000, width: '100%', maxHeight: 350, minHeight: 350 }}>
                                {honors.map((certificate, index) => (
                                    <ImageButton
                                        focusRipple
                                        onClick={() => handleOpen(certificate.id)}
                                        key={certificate.title}
                                        style={{
                                            width: '30%',
                                        }}
                                    >
                                        <ImageSrc style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/content/images/${certificate.id}.jpg)` }} />
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
                                                {certificate.title}
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
                                    <img className='contain' alt='v' style={{
                                        height: isMobile ? '200%' : '100%',
                                        width: isMobile ? '100%' : '50%',
                                    }}
                                        src={`${process.env.PUBLIC_URL}/content/images/${view}`} />
                                </Backdrop>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <Button variant="outlined" onClick={handleOpen}>
                                Open Resume
                            </Button>
                            <Dialog
                                fullScreen
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Transition}
                            >
                                <AppBar sx={{ position: 'relative' }}>
                                    <Toolbar>
                                        <IconButton
                                            edge="start"
                                            color="inherit"
                                            onClick={handleClose}
                                            aria-label="close"
                                        >
                                            <CloseIcon />
                                        </IconButton>
                                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                            Tanmay's Resume
                                        </Typography>
                                        <Button autoFocus color="inherit" onClick={handleClose}>
                                            Download
                                        </Button>
                                    </Toolbar>
                                </AppBar>
                                <iframe className={filetype} width='100%' height='100%' frameborder="0" src={`${file_url}`}></iframe>
                            </Dialog>
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            CONTACT ME
                        </TabPanel>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                            onClick={handleClose}
                        >
                            <img className='contain' alt={view} style={{
                                height: '100%',
                                width: '50%',
                            }}
                                src={`${process.env.PUBLIC_URL}/content/images/${view}.jpg`} />
                        </Backdrop>
                    </Box >
                )
                }
                {
                    isMobile && (
                        <>
                            <Box width={'100%'} sx={{ minHeight: 500, justifyContent: 'center' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab icon={<PersonIcon />} {...a11yProps(0)} />
                                        <Tab icon={<CodeIcon />} {...a11yProps(1)} />
                                        <Tab icon={<SchoolIcon />} {...a11yProps(2)} />
                                        <Tab icon={<MilitaryTech />} {...a11yProps(3)} />
                                    </Tabs>
                                </Box>
                                <TabPanel value={value} index={0} >
                                    <Card variant='outlined' raised='true' sx={{ width: '100%', minHeight: 350, flexGrow: 1 }}>
                                        <CardContent sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {`Hey, I'm ${about.name}`}
                                            </Typography>
                                            <Typography variant="body2" color='inherit'>
                                                {about.briefOverview.split('\n').map((line, i) => (
                                                    <ul key={i} style={{ listStyle: 'disc', paddingLeft: 2 }}>{line}<br /></ul>
                                                ))}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Card variant='outlined' raised='true' sx={{ width: '100%', display: 'flex', flexGrow: 1, minHeight: 500, minWidth: 350 }}>
                                        <CardContent sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'center' }}>
                                            <Box sx={{ maxHeight: 300, flexFlow: 1, flexWrap: 'wrap' }}>
                                                <Divider>Programming Languages</Divider>
                                                <Stack p={1} direction='row' spacing={2} display={'flex'} flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
                                                    {about.programmingLanguages.map((programmingLanguage, index) => (
                                                        <Grid item xs={12} md={4} key={index} p={1}>
                                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${programmingLanguage}.png`} />} label={programmingLanguage} />
                                                        </Grid>
                                                    ))
                                                    }
                                                </Stack>
                                                <Divider>Frameworks</Divider>
                                                <Stack p={1} direction='row' spacing={2} display={'flex'} flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
                                                    {about.frameworks.map((framework, index) => (
                                                        <Grid item xs={12} md={4} key={index} p={1}>
                                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${framework}.png`} />} label={framework} />
                                                        </Grid>
                                                    ))
                                                    }
                                                </Stack>
                                                <Divider>Database</Divider>
                                                <Stack p={1} direction='row' spacing={2} display={'flex'} flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
                                                    {about.databases.map((database, index) => (
                                                        <Grid item xs={12} md={4} key={index} p={1}>
                                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${database}.png`} />} label={database} />
                                                        </Grid>
                                                    ))
                                                    }
                                                </Stack>
                                                <Divider>Tools</Divider>
                                                <Stack p={1} direction='row' spacing={2} display={'flex'} flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
                                                    {about.tools.map((tool, index) => (
                                                        <Grid item xs={12} md={4} key={index} p={1}>
                                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${tool}.png`} />} label={tool} />
                                                        </Grid>
                                                    ))
                                                    }
                                                </Stack>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Card variant='outlined' raised='true' sx={{ width: '100%', display: 'flex', flexGrow: 1, minHeight: 500, minWidth: 350 }}>
                                        <Grid container spacing={1} direction='column' flexWrap={'wrap'} >
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <ButtonBase
                                                        href="https://mitwpu.edu.in/"
                                                        target="_blank"
                                                        sx={{ width: 120, height: 120 }}
                                                        rel="noopener noreferrer">
                                                        <Img height={100} width={100} alt="mit-wpu" src={`${process.env.PUBLIC_URL}/content/images/mit-wpu.png`} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs>
                                                            <a href="https://mitwpu.edu.in/"
                                                                target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
                                                                <Typography gutterBottom variant='h6' component="div">
                                                                    {`MIT WPU`}
                                                                </Typography>
                                                            </a>
                                                            <Typography variant="body2" gutterBottom>
                                                                {`Master's Degree, Computer Science.`}
                                                            </Typography>
                                                            <Typography variant="body2" gutterBottom>
                                                                {`2020 - 2022`}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {`2nd prize for debate competition • Host for International Reserach Paper Conference.`}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid><br />
                                            <Grid container spacing={1}>
                                                <Grid item>
                                                    <ButtonBase href="http://www.unipune.ac.in/" target="_blank" sx={{ width: 120, height: 120 }} rel="noopener noreferrer">
                                                        <Img height={100} width={100} alt="sppu" src={`${process.env.PUBLIC_URL}/content/images/sppu.jpg`} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs>
                                                            <a href="http://www.unipune.ac.in/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
                                                                <Typography gutterBottom variant='h6' component="div">
                                                                    {`Modern College of Arts, Science & Commerce`}
                                                                </Typography>
                                                            </a>
                                                            <Typography variant="body2" gutterBottom>
                                                                {`Bachelor's Degree, Computer Science.`}
                                                            </Typography>
                                                            <Typography variant="body2" gutterBottom>
                                                                {`2017 - 2020`}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                {`Bagged 1st prize in Seminar Competition on AI • Author for college magazine.`}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    Item Four
                                </TabPanel>
                            </Box>
                        </>
                    )
                }
            </Container >
        </>
    )
}