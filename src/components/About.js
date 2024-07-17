import { Avatar, Card, CardContent, CardMedia, Chip, Container, Divider, Grid, IconButton, Stack } from "@mui/material";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { isMobile } from 'react-device-detect';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FitScreenIcon from '@mui/icons-material/FitScreen';

const about = {
    name: 'Tanmay Borde',
    briefOverview: `A Technology Enthusiast, passionate about problem-solving and innovation, using technology as a tool to create an impact and change the world.
                    With over 2+ years of experience in Full Stack Web Development, I have a proven track record of working end-to-end on critical system implementation projects.
                    Successfully contributed for multiple projects encompassing business facing critical web applications from OM to Product Entitlement.
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
        issuedDate: 'Issued May 2024'
    },
    {
        id: 'c2',
        title: 'AI for Business Leaders',
        issuedDate: 'Issued Apr 2024'
    },
    {
        id: 'c3',
        title: 'The Complete PLSQL Bootcamp',
        issuedDate: 'Issued Dec 2023'
    },
    {
        id: 'c4',
        title: 'Git-The Complete Guide',
        issuedDate: 'Issued Aug 2022'
    },
    {
        id: 'c5',
        title: 'Java Full Stack-Spring Boot & React',
        issuedDate: 'Issued Jun 2022'
    },
    {
        id: 'c6',
        title: 'Introduction to DevOps & SRE',
        issuedDate: 'Issued Dec 2021'
    },
    {
        id: 'c7',
        title: 'Front-End JS Framework-Angular',
        issuedDate: 'Issued Jul 2021'
    },
    {
        id: 'c8',
        title: 'IBM-Introduction to AI',
        issuedDate: 'Issued Feb 2021'
    },
    {
        id: 'c9',
        title: 'Exec Briefing- AI & LLMs',
        issuedDate: 'Issued Apr 2024'
    },
    {
        id: 'c10',
        title: 'UOM-Beginners Guide for Python',
        issuedDate: 'Issued Jan 2021'
    },
]

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    // const [val, setVal] = React.useState('recents');

    // const handleChange = (event: React.SyntheticEvent, newVal: string) => {
    //     setVal(newVal);
    // };

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


export default function About() {
    const [value, setValue] = React.useState(0);
    // const [open, setOpen] = React.useState(false);
    // const [view, setView] = React.useState('');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleOpen = (title) => {
    //     setView(true);
    //     setValue(title);
    // }

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
                            aria-label="Vertical tabs example"
                            sx={{ borderRight: 1, borderColor: 'divider', minWidth: 100 }}
                        >
                            <Tab label="Overview" {...a11yProps(0)} />
                            <Tab label="Skills" {...a11yProps(1)} />
                            <Tab label="Education" {...a11yProps(2)} />
                            <Tab label="Licenses" {...a11yProps(3)} />
                            <Tab label="Honors" {...a11yProps(4)} />
                            <Tab label="Milestones" {...a11yProps(5)} />
                            <Tab label="Resume" {...a11yProps(5)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <Box sx={{ display: 'flex', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350 }}>
                                <Card variant='outlined' raised='true' sx={{ minWidth: 1000, minHeight: 350, flexGrow: 1 }}>
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
                            <Box sx={{ display: 'flex', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350 }}>
                                <Card variant='outlined' raised='true' sx={{ minWidth: 1000, minHeight: 350 }}>
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
                            <Box sx={{ display: 'flex', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350 }}>
                                <Card variant='outlined' sx={{ minWidth: 1000, minHeight: 350 }}>
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
                            <Box sx={{ display: 'flex', flexGrow: 1, maxWidth: 1000, overflowY: 'auto', maxHeight: 350 }}>
                                <Grid container spacing={2} direction='row' flexWrap={'wrap'}>
                                    {certifications.map((certification, index) => (
                                        <Grid item xs={6} spacing={2}>
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
                                                        <IconButton aria-label="redirect">
                                                            <OpenInNewIcon fontSize="small" />
                                                        </IconButton>
                                                        <IconButton aria-label="view">
                                                            <FitScreenIcon fontSize="small" />
                                                        </IconButton>
                                                    </Box>
                                                </Box>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ width: 150 }}
                                                    image={`${process.env.PUBLIC_URL}/content/images/${certification.title}.jpg`}
                                                    alt={certification.title}
                                                />
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            Item Five
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            Item Six
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            Item Seven
                        </TabPanel>
                    </Box >
                )
                }
                {
                    isMobile && (
                        <Box p={1} sx={{ display: 'flex', justifyContent: 'center', pb: 5, pt: 10 }}>

                            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
                                <BottomNavigationAction
                                    label="Recents"
                                    value="recents"
                                    icon={<RestoreIcon />}
                                />
                                <BottomNavigationAction
                                    label="Favorites"
                                    value="favorites"
                                    icon={<FavoriteIcon />}
                                />
                                <BottomNavigationAction
                                    label="Nearby"
                                    value="nearby"
                                    icon={<LocationOnIcon />}
                                />
                                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                            </BottomNavigation>
                        </Box>
                    )
                }
            </Container >
        </>
    )
}
