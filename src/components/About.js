import { Alert, Avatar, Backdrop, BottomNavigation, BottomNavigationAction, Card, CardContent, CardMedia, Chip, Container, Divider, Grid, IconButton, Slide, Snackbar, Stack, Tooltip } from "@mui/material";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { isMobile } from 'react-device-detect';
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
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useLocation } from "react-router-dom";

const embedded_resume = 'https://docs.google.com/document/d/e/2PACX-1vR3dfE3q4ErM6irOs6DLsjyONaHcv7vry6s6MrJich7EbQgysXRgU01wezXvWlLnRiYtrM9ayn2dCfB/pub?embedded=true';
const shareable_resume = 'https://docs.google.com/document/d/1YmjxjvBkpyTCGKpMIzn-PQv_UOXEU4Nth5PAS2Alvjg/edit?usp=sharing';
const portfolio_link = 'https://tanmay-borde.github.io/my-portfolio/';

const about = {
    name: 'Tanmay Borde',
    briefOverview: `Tech Enthusiast | Patent Holder | Innovator | The Product Guy!
    A solution oriented software developer with 3+ years of experience in Full-Stack Web Development, dedicated to leveraging latest technologies as a powerful tool for problem-solving and innovation. I have a proven track record of working on end-to-end system implementation, where I have successfully contributed to multiple projects focused on business-facing web applications, encompassing business flow from Order Management to Product Entitlement.
    My strong technical skills are complemented by my functional understanding of business needs, allowing me to create user-centric products that enhance operational efficiency. As a curious and detail-oriented techno-functional professional, I have a knack for building and creating things with craftsmanship. I thrive on tackling complex challenges and driving impactful solutions with first principles thinking and evolving mental models.
    My key attributes include agility, adaptability, and a commitment to continuous learning, with a focus on growth and value addition. Outside of my work I read, write and listen to music.`,
    programmingLanguages: ['Java', 'PLSQL', 'JavaScript', 'TypeScript', 'Python'],
    databases: ['Oracle-DB', 'JSON-Server', 'MySQL', 'Redis'],
    frameworks: ['Spring-Boot', 'React', 'Angular', 'REST-API'],
    tools: ['Docker', 'Kubernetes', 'Git', 'Agile-Development', 'Product Development']
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
        title: 'Introduction to Containers, Docker, K8s & OpenShift',
        issuedDate: 'Issued January 2025',
        url: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7F21JGWA4L6I/CERTIFICATE_LANDING_PAGE~7F21JGWA4L6I.jpeg'
    },
    {
        id: 'c3',
        title: 'AI for Business Leaders',
        issuedDate: 'Issued Apr 2024',
        url: 'https://www.udemy.com/certificate/UC-e4fec80f-57d7-4f3d-994d-6cea9f260c59/'
    },
    {
        id: 'c4',
        title: 'The Complete PLSQL Bootcamp',
        issuedDate: 'Issued Dec 2023',
        url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-0c756df9-e190-428f-acf9-10c69daa5901.pdf'
    },
    {
        id: 'c5',
        title: 'Git-The Complete Guide',
        issuedDate: 'Issued Aug 2022',
        url: 'https://www.udemy.com/certificate/UC-57253988-9f24-4556-a977-de61a9c6aa2b/'
    },
    {
        id: 'c6',
        title: 'Java Full Stack-Spring Boot & React',
        issuedDate: 'Issued Jun 2022',
        url: 'http://ude.my/UC-1f4e67cc-6394-4698-85b0-077d6d35687c'
    },
    {
        id: 'c7',
        title: 'Introduction to DevOps & SRE',
        issuedDate: 'Issued Dec 2021',
        url: 'https://courses.edx.org/certificates/6a26b745178b44499af6491a72340bb1'
    },
    {
        id: 'c8',
        title: 'Front-End JS Framework-Angular',
        issuedDate: 'Issued Jul 2021',
        url: 'https://coursera.org/share/23d81ed7a2163d82f43df0d62a96ceb7'
    },
    {
        id: 'c9',
        title: 'IBM-Introduction to AI',
        issuedDate: 'Issued Feb 2021',
        url: 'https://www.coursera.org/account/accomplishments/certificate/Y6GRLEBBB33E'
    },
    {
        id: 'c10',
        title: 'Exec Briefing- AI & LLMs',
        issuedDate: 'Issued Apr 2024',
        url: 'https://www.udemy.com/certificate/UC-73572894-eb99-4baf-9d46-9eb5e2085e7c/'
    },
    {
        id: 'c11',
        title: 'UOM-Beginners Guide for Python',
        issuedDate: 'Issued Jan 2021',
        url: 'https://www.coursera.org/account/accomplishments/certificate/EJC2K39G3KDG'
    },
]

const honors = [
    {
        id: 'RP1',
        title: 'Research Paper Presentation',
        issuedDate: 'Issued Feb 2022'
    },
    {
        id: 'RP2',
        title: 'Research Paper Presentation',
        issuedDate: 'Issued Feb 2022'
    },
    {
        id: 'RP3',
        title: 'Seminar Competition',
        issuedDate: 'Issued Feb 2020'
    },
    {
        id: 'Seed',
        title: 'Seed Certification',
        issuedDate: 'Issued July 2018'
    }
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
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openContactCard, setOpenContactCard] = React.useState(false);
    const [view, setView] = React.useState('');
    const [isCopied, setIsCopied] = React.useState(false);
    const location = useLocation();

    React.useEffect(() => {
        const handleHashChange = () => {
            window.scrollTo(0, 0);
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);

        };
    }, [location.hash]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = (imgDetails) => {
        setOpen(true);
        setView(imgDetails);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenContactCard = () => {
        setOpenContactCard(true);
    };

    const handleCloseContactCard = () => {
        setOpenContactCard(false);
    }

    const handleCopy = (copy_link) => {
        navigator.clipboard.writeText(copy_link)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 6000);
            })
            .catch(err => {
                setIsCopied(false);
                console.error('Failed to copy: ', err);
            });
    };

    const fullScreenContactCard = () => {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, width: '100%', alignItems: 'center', margin: 1 }}>
                <Dialog
                    fullScreen
                    open={openContactCard}
                    onClose={handleCloseContactCard}
                    TransitionComponent={Transition}>
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloseContactCard}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 1, flex: 1 }} variant="h6" component="div">
                                {`Tanmay's Contact Card`}
                            </Typography>
                            <IconButton onClick={() => handleCopy(portfolio_link)}>
                                <ShareIcon />
                            </IconButton>
                            <Snackbar open={isCopied} autoHideDuration={6000}>
                                <Alert severity='success' variant='standard'>
                                    {`Link Copied Successfully`}
                                </Alert>
                            </Snackbar>
                        </Toolbar>
                    </AppBar>
                    <Card variant='elevation' sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component='div' variant='h5'>
                                    {about.name}
                                </Typography>
                                <Typography variant='subtitle2' color='text.secondary' component={'div'} p={0.2}>
                                    {`Techologist | Software Developer`}
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 2, p: 1 }}>
                                <Stack direction="row" spacing={0.8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <IconButton href="https://www.linkedin.com/in/tanmay-borde/" underline="none" target="_blank">
                                        <Tooltip title='LinkedIn' placement='top' arrow>
                                            <LinkedInIcon />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton href="https://x.com/tanmay_borde?s=21" underline="none" target="_blank">
                                        <Tooltip title='X (Twitter)' placement='top' arrow>
                                            <XIcon />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton href="https://github.com/Tanmay-Borde" underline="none" target="_blank">
                                        <Tooltip title='GitHub' placement='top' arrow>
                                            <GitHubIcon />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton href={`${process.env.PUBLIC_URL}#/blogs`} underline="none" target="_blank">
                                        <Tooltip title='Blogs' placement='top' arrow>
                                            <ArticleIcon />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton href={shareable_resume} underline="none" target="_blank">
                                        <Tooltip title='Resume' placement='top' arrow>
                                            <ContactPageIcon />
                                        </Tooltip>
                                    </IconButton>
                                </Stack>
                            </Box>
                            <Divider flexItem='true' variant='middle' />
                            <CardContent>
                                <Stack direction="row" spacing={0.8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <IconButton href="mailto:tanmayborde64@gmail.com?subject=Hi from the Portfolio" underline="none" target="_blank">
                                        <Tooltip title='E-mail' placement='top' arrow>
                                            <EmailIcon fontSize="small" />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton href="https://wa.me/918668286922" target="_blank">
                                        <Tooltip title='WhatsApp' placement="top" arrow>
                                            <WhatsAppIcon fontSize="small" />
                                        </Tooltip>
                                    </IconButton>
                                    <IconButton href="https://tanmay-borde.github.io/my-portfolio/" underline="none" >
                                        <Tooltip title='Portfolio' placement='top' arrow>
                                            <AccountCircleIcon fontSize="small" />
                                        </Tooltip>
                                    </IconButton>
                                </Stack>
                            </CardContent>
                        </Box>
                        <Divider orientation='vertical' flexItem='true' variant='middle' />
                        <CardMedia component='img' sx={{ p: 2, maxWidth: 200, maxHeight: 250, pt: 3 }} image={`${process.env.PUBLIC_URL}/content/images/profile_pic.png`} />
                    </Card>
                </Dialog>
            </Box>
        )
    }

    const fullScreenDialogBox = () => {
        return (
            <Dialog
                fullScreen
                open={openDialog}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseDialog}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 1, flex: 1 }} variant="h6" component="div">
                            {`Tanmay's Resume`}
                        </Typography>
                        <IconButton onClick={() => handleCopy(shareable_resume)}>
                            <ShareIcon />
                        </IconButton>
                        <IconButton href={shareable_resume} target="_blank">
                            <DownloadIcon />
                        </IconButton>
                        <Snackbar open={isCopied} autoHideDuration={6000}>
                            <Alert severity='success' variant='standard'>
                                {`Link Copied Successfully`}
                            </Alert>
                        </Snackbar>
                    </Toolbar>
                </AppBar>
                <iframe title="Tanmay's Resume" align='center' width={'100%'} height={'100%'} src={embedded_resume} />
            </Dialog >
        )
    };

    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', height: '100%' }}>
                {!isMobile && (
                    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', justifyContent: 'space-evenly' }}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="About me"
                            sx={{ borderRight: 1, borderColor: 'divider', display: 'flex' }}
                        >
                            <Tooltip title='Overview' placement='left' arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, -14],
                                                },
                                            },
                                        ],
                                    },
                                }}
                            >
                                <Tab sx={{ pt: 4 }} icon={<PersonIcon />} {...a11yProps(0)} />
                            </Tooltip>
                            <Tooltip title='Skills' placement='left' arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, -14],
                                                },
                                            },
                                        ],
                                    },
                                }}>
                                <Tab sx={{ pt: 4 }} icon={<CodeIcon />} {...a11yProps(1)} />
                            </Tooltip>
                            <Tooltip title='Education' placement='left' arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, -14],
                                                },
                                            },
                                        ],
                                    },
                                }}>
                                <Tab sx={{ pt: 4 }} icon={<SchoolIcon />} {...a11yProps(2)} />
                            </Tooltip>
                            <Tooltip title='Certificates' placement='left' arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, -14],
                                                },
                                            },
                                        ],
                                    },
                                }}>
                                <Tab sx={{ pt: 4 }} icon={<MilitaryTech />} {...a11yProps(3)} />
                            </Tooltip>
                            <Tooltip title='Honors' placement='left' arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, -14],
                                                },
                                            },
                                        ],
                                    },
                                }}>
                                <Tab sx={{ pt: 4 }} icon={<EmojiEventsIcon />} {...a11yProps(4)} />
                            </Tooltip>
                            <Tooltip title='Resume' placement='left' arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, -14],
                                                },
                                            },
                                        ],
                                    },
                                }}>
                                <Tab sx={{ pt: 4 }} icon={<ContactPageIcon />} {...a11yProps(5)} />
                            </Tooltip>
                            <Tooltip title='Contact' placement='left' arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [
                                            {
                                                name: 'offset',
                                                options: {
                                                    offset: [0, -14],
                                                },
                                            },
                                        ],
                                    },
                                }}>
                                <Tab sx={{ pt: 4 }} icon={<ContactPhoneIcon />} {...a11yProps(6)} />
                            </Tooltip>
                        </Tabs>
                        {/* OVERVIEW */}
                        <TabPanel value={value} index={0}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 500, width: '100%', minHeight: 500 }}>
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
                        {/* SKILLS */}
                        <TabPanel value={value} index={1}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, overflowY: 'auto', maxHeight: 350, width: '100%', minWidth: 1000, minHeight: 500 }}>
                                <Card variant='outlined' raised='true' sx={{ display: 'flex', flexWrap: 'wrap', overflowY: 'auto', width: '100%', minHeight: 350, justifyContent: 'center', p: 2 }}>
                                    <CardContent sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'center' }}>
                                        <Box sx={{ maxHeight: 300, flexFlow: 1, flexWrap: 'wrap' }}>
                                            <Divider flexItem='true' variant='middle'>{`Programming Languages`}</Divider>
                                            <Stack p={3} direction='row' spacing={3} justifyContent={"center"}>
                                                {about.programmingLanguages.map((programmingLanguage, index) => (
                                                    <Grid item xs={12} md={4} key={index}>
                                                        <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${programmingLanguage}.png`} />} label={programmingLanguage} />
                                                    </Grid>
                                                ))
                                                }
                                            </Stack>
                                            <Divider>{`Frameworks`}</Divider>
                                            <Stack p={3} direction='row' spacing={3} justifyContent={"center"}>
                                                {about.frameworks.map((framework, index) => (
                                                    <Grid item xs={12} md={4} key={index}>
                                                        <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${framework}.png`} />} label={framework} />
                                                    </Grid>
                                                ))
                                                }
                                            </Stack>
                                            <Divider>{`Database`}</Divider>
                                            <Stack p={3} direction='row' spacing={3} justifyContent={"center"}>
                                                {about.databases.map((database, index) => (
                                                    <Grid item xs={12} md={4} key={index}>
                                                        <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${database}.png`} />} label={database} />
                                                    </Grid>
                                                ))
                                                }
                                            </Stack>
                                            <Divider>{`Tools & Methodologies`}</Divider>
                                            <Stack p={3} direction='row' spacing={3} justifyContent={"center"}>
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
                        {/* EDUCATION */}
                        <TabPanel value={value} index={2}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, width: '100%', minWidth: 1000, minHeight: 500, pr: 20, pl: 2 }}>
                                <Timeline
                                    position='left'
                                    sx={{
                                        [`& .${timelineItemClasses.root}:before`]: {
                                            flex: 0,
                                            padding: 0,
                                        },
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        pt: 8,
                                        pl: 3
                                    }}
                                >
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>{`2022`}</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>{`2017`}</TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                                <Card variant='elevation' sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Card variant='outlined' raised='true' sx={{ p: 2 }} >
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
                                        </Grid>
                                    </Card>
                                    <Card variant='outlined' raised='true' sx={{ p: 2 }}>
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
                                    </Card>
                                </Card>
                            </Box>
                        </TabPanel >
                        {/* CERTIFICATIONS */}
                        <TabPanel value={value} index={3} overflow={'auto'} maxHeight={1000}>
                            <Box sx={{
                                display: 'flex', flexWrap: 'wrap', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350, minHeight: 500, '-ms-overflow-style': 'none',
                                'scrollbar-width': 'none',
                            }}>
                                <Grid container spacing={2} direction='row' flexWrap={'wrap'}>
                                    {certifications.map((certification, index) => (
                                        <Grid key={index} item xs={6} spacing={2}>
                                            <Card key={index} sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, minHeight: 170 }}>
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
                                                    sx={{ width: 180, cursor: 'pointer' }}
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
                        {/* HONORS */}
                        <TabPanel value={value} index={4}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexGrow: 1, minWidth: 1000, width: '100%', maxHeight: 350, minHeight: 500, alignItems: 'center' }}>
                                {honors.map((certificate, index) => (
                                    <ImageButton
                                        focusRipple
                                        onClick={() => handleOpen(certificate.id)}
                                        key={certificate.title}
                                        style={{
                                            width: '20%',
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
                                    <img className='contain' alt="Honors" style={{
                                        height: isMobile ? '200%' : '100%',
                                        width: isMobile ? '100%' : '50%',
                                    }}
                                        src={`${process.env.PUBLIC_URL}/content/images/${view}`} />
                                </Backdrop>
                            </Box>
                        </TabPanel>
                        {/* RESUME */}
                        <TabPanel value={value} index={5}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexGrow: 1, width: '100%', minWidth: 1000, minHeight: 500 }}>
                                <Tabs
                                    orientation="vertical"
                                    variant="scrollable"
                                    value={value}
                                    aria-label="Resume Options"
                                    sx={{ borderRight: 1, borderColor: 'divider' }}
                                >
                                    <Tab icon={<ShareIcon fontSize='small' />} onClick={() => handleCopy(shareable_resume)} />
                                    <Snackbar open={isCopied} autoHideDuration={6000}>
                                        <Alert severity='success' variant='standard'>
                                            {`Link Copied Successfully`}
                                        </Alert>
                                    </Snackbar>
                                    <Tab icon={<FullscreenIcon fontSize='small' />} onClick={handleOpenDialog} />
                                    <Tab icon={<DownloadIcon fontSize='small' />} href={shareable_resume} target='_blank' />
                                </Tabs>
                                <iframe title="Tanmay's Resume" loading='lazy' width={'900'} height={'500'} src={embedded_resume} />
                            </Box>
                        </TabPanel>
                        {/* CONTACT CARD */}
                        <TabPanel value={value} index={6}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, width: '100%', minWidth: 1000, alignItems: 'center', minHeight: 500 }}>
                                <Card variant='elevation' sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component='div' variant='h5'>
                                                {about.name}
                                            </Typography>
                                            <Typography variant='subtitle2' color='text.secondary' component={'div'} p={0.2}>
                                                {`Techologist | Software Developer`}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 2 }}>
                                            <Stack direction="row" spacing={0.8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton href="https://www.linkedin.com/in/tanmay-borde/" underline="none" target="_blank">
                                                    <Tooltip title='LinkedIn' placement='top' arrow>
                                                        <LinkedInIcon />
                                                    </Tooltip>
                                                </IconButton>
                                                <IconButton href="https://x.com/tanmay_borde?s=21" underline="none" target="_blank">
                                                    <Tooltip title='X (Twitter)' placement='top' arrow>
                                                        <XIcon />
                                                    </Tooltip>
                                                </IconButton>
                                                <IconButton href="https://github.com/Tanmay-Borde" underline="none" target="_blank">
                                                    <Tooltip title='GitHub' placement='top' arrow>
                                                        <GitHubIcon />
                                                    </Tooltip>
                                                </IconButton>
                                                <IconButton href={`${process.env.PUBLIC_URL}#/blogs`} underline="none" target="_blank">
                                                    <Tooltip title='Blogs' placement='top' arrow>
                                                        <ArticleIcon />
                                                    </Tooltip>
                                                </IconButton>
                                                <IconButton href={shareable_resume} underline="none" target="_blank">
                                                    <Tooltip title='Resume' placement='top' arrow>
                                                        <ContactPageIcon />
                                                    </Tooltip>
                                                </IconButton>
                                            </Stack>
                                        </Box>
                                        <Divider flexItem='true' variant='middle' />
                                        <CardContent>
                                            <Stack direction="row" spacing={0.8} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <IconButton href="mailto:tanmayborde64@gmail.com?subject=Hi from the Portfolio" underline="none" target="_blank">
                                                    <Tooltip title='E-mail' placement='top' arrow>
                                                        <EmailIcon fontSize="small" />
                                                    </Tooltip>
                                                </IconButton>
                                                <IconButton href="https://wa.me/918668286922" target="_blank">
                                                    <Tooltip title='WhatsApp' placement="top" arrow>
                                                        <WhatsAppIcon fontSize="small" />
                                                    </Tooltip>
                                                </IconButton>
                                                <IconButton href="https://tanmay-borde.github.io/my-portfolio/" underline="none" target="_blank">
                                                    <Tooltip title='Portfolio' placement='top' arrow>
                                                        <AccountCircleIcon fontSize="small" />
                                                    </Tooltip>
                                                </IconButton>
                                            </Stack>
                                        </CardContent>
                                    </Box>
                                    <Divider orientation='vertical' flexItem='true' variant='middle' />
                                    <CardMedia component='img' sx={{ p: 1, width: 180 }} image={`${process.env.PUBLIC_URL}/content/images/Tanmay_Portfolio.JPG`} />
                                </Card>
                            </Box>
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
                        {fullScreenDialogBox()}
                    </Box >
                )
                }
                {
                    isMobile && (
                        <>
                            <Box width={'100%'} sx={{ minHeight: 500, justifyContent: 'center' }}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs value={value} onChange={handleChange} aria-label="About me tabs" >
                                        <Tab icon={<PersonIcon />} {...a11yProps(0)} />
                                        <Tab icon={<CodeIcon />} {...a11yProps(1)} />
                                        <Tab icon={<SchoolIcon />} {...a11yProps(2)} />
                                        <Tab icon={<MilitaryTech />} {...a11yProps(3)} />
                                    </Tabs>
                                </Box>
                                {/* OVERVIEW */}
                                <TabPanel value={value} index={0} >
                                    <Box sx={{ minHeight: 800 }}>
                                        <Card variant='outlined' raised='true' sx={{ width: '100%', flexGrow: 1 }}>
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
                                            <Box>
                                                <BottomNavigation
                                                    showLabels
                                                >
                                                    <BottomNavigationAction onClick={handleOpenDialog} label="Resume" icon={<ContactPageIcon />} />
                                                    <BottomNavigationAction onClick={handleOpenContactCard} label="Contact" icon={<ContactPhoneIcon />} />
                                                </BottomNavigation>
                                            </Box>
                                        </Card>
                                    </Box>
                                </TabPanel>
                                {/* SKILLS */}
                                <TabPanel value={value} index={1}>
                                    <Box sx={{ minHeight: 900 }}>
                                        <Card variant='outlined' raised='true' sx={{ width: '100%', flexGrow: 1, minHeight: 800 }}>
                                            <CardContent sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'center' }}>
                                                <Box sx={{ maxHeight: 300, flexFlow: 1, flexWrap: 'wrap' }}>
                                                    <Divider>{`Programming Languages`}</Divider>
                                                    <Stack p={2} direction='row' spacing={2} display={'flex'} flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
                                                        {about.programmingLanguages.map((programmingLanguage, index) => (
                                                            <Grid item xs={12} md={4} key={index} p={1}>
                                                                <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${programmingLanguage}.png`} />} label={programmingLanguage} />
                                                            </Grid>
                                                        ))
                                                        }
                                                    </Stack>
                                                    <Divider>{`Frameworks`}</Divider>
                                                    <Stack p={2} direction='row' spacing={2} display={'flex'} flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
                                                        {about.frameworks.map((framework, index) => (
                                                            <Grid item xs={12} md={4} key={index} p={1}>
                                                                <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${framework}.png`} />} label={framework} />
                                                            </Grid>
                                                        ))
                                                        }
                                                    </Stack>
                                                    <Divider>{`Database`}</Divider>
                                                    <Stack p={2} direction='row' spacing={2} display={'flex'} flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
                                                        {about.databases.map((database, index) => (
                                                            <Grid item xs={12} md={4} key={index} p={1}>
                                                                <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${database}.png`} />} label={database} />
                                                            </Grid>
                                                        ))
                                                        }
                                                    </Stack>
                                                    <Divider>{`Tools & Methodologies`}</Divider>
                                                    <Stack p={2} direction='row' spacing={2} display={'flex'} flexGrow={1} flexWrap={'wrap'} justifyContent={'center'}>
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
                                    </Box>
                                </TabPanel>
                                {/* EDUCATION */}
                                <TabPanel value={value} index={2} sx={{ minHeight: 800 }}>
                                    <Box sx={{ minHeight: 800 }}>
                                        <Card variant='outlined' raised='true' sx={{ width: '100%', flexGrow: 1 }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Grid container spacing={1} direction='column'>
                                                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Grid item>
                                                            <ButtonBase
                                                                href="https://mitwpu.edu.in/"
                                                                target="_blank"
                                                                sx={{ width: 120, height: 120 }}
                                                                rel="noopener noreferrer">
                                                                <Img height={100} width={100} alt="mit-wpu" src={`${process.env.PUBLIC_URL}/content/images/mit-wpu.png`} />
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid item xs={12} sm container p={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Grid item xs container direction="column" spacing={2}>
                                                                <Grid item xs>
                                                                    <a href="https://mitwpu.edu.in/"
                                                                        target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
                                                                        <Typography gutterBottom variant='h5' component="div">
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
                                                    </Grid>
                                                    <Divider />
                                                    <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
                                                        <Grid item>
                                                            <ButtonBase href="http://www.unipune.ac.in/" target="_blank" sx={{ width: 120, height: 120 }} rel="noopener noreferrer">
                                                                <Img height={100} width={100} alt="sppu" src={`${process.env.PUBLIC_URL}/content/images/sppu.jpg`} />
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid item xs={12} sm container p={1}>
                                                            <Grid item xs container direction="column" spacing={2}>
                                                                <Grid item xs>
                                                                    <a href="http://www.unipune.ac.in/" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }} rel="noopener noreferrer">
                                                                        <Typography gutterBottom variant='h6' component="div">
                                                                            {`Modern College of ASC (Pune University)`}
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
                                                    <Divider />
                                                </Grid>
                                            </Box>
                                        </Card>
                                    </Box>
                                </TabPanel>
                                {/* CERTIFICATIONS */}
                                <TabPanel value={value} index={3}>
                                    <Box sx={{ minHeight: 800 }}>
                                        <Card variant='outlined' raised='true' sx={{ width: '100%', minHeight: 800, flexGrow: 1 }}>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, overflowY: 'auto', minHeight: 800, flexDirection: 'column' }}>
                                                <Grid container spacing={2} direction='column' flexWrap={'wrap'}>
                                                    {certifications.map((certification, index) => (
                                                        <Grid key={index} item xs={6} spacing={2}>
                                                            <Card key={index} sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, minHeight: 170 }}>
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
                                                                    sx={{ width: 180, cursor: 'pointer' }}
                                                                    image={`${process.env.PUBLIC_URL}/content/images/${certification.title}.jpg`}
                                                                    alt={certification.title}
                                                                    onClick={() => handleOpen(certification.title)}
                                                                />
                                                            </Card>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        </Card>
                                        <Divider flexItem='true' variant='middle' sx={{ pt: 3 }}>{`HONORS`}</Divider><br />
                                        <Card variant='outlined' raised='true' sx={{ width: '100%', minHeight: 800, flexGrow: 1 }}>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', minHeight: 800, flexDirection: 'column' }}>
                                                <Grid container spacing={2} direction='column' flexWrap={'wrap'}>
                                                    {honors.map((honor, index) => (
                                                        <Grid key={index} item xs={6} spacing={2}>
                                                            <Card key={index} sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, minHeight: 170 }}>
                                                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                                                        <Typography component="div" variant="h6">
                                                                            {honor.title}
                                                                        </Typography>
                                                                        <Typography variant="subtitle2" color="text.secondary" component="div">
                                                                            {honor.issuedDate}
                                                                        </Typography>
                                                                    </CardContent>
                                                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                                                        <IconButton aria-label="view" onClick={() => handleOpen(honor.id)}>
                                                                            <FullscreenIcon fontSize="small" />
                                                                        </IconButton>
                                                                    </Box>
                                                                </Box>
                                                                <CardMedia
                                                                    component="img"
                                                                    sx={{ width: 180, cursor: 'pointer' }}
                                                                    image={`${process.env.PUBLIC_URL}/content/images/${honor.id}.jpg`}
                                                                    alt={honor.title}
                                                                    onClick={() => handleOpen(honor.id)}
                                                                />
                                                            </Card>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Box>
                                        </Card>
                                    </Box>
                                </TabPanel>
                                <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open={open}
                                    onClick={handleClose}
                                >
                                    <img className='contain' alt={view} style={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                        src={`${process.env.PUBLIC_URL}/content/images/${view}.jpg`} />
                                </Backdrop>
                                {fullScreenDialogBox()}
                                {fullScreenContactCard()}
                            </Box>
                        </>
                    )
                }
            </Container >
        </>
    )
}