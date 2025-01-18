import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Avatar, Chip, Container, Stack } from '@mui/material';
import { isMobile } from 'react-device-detect';
import Link from '@mui/material/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useLocation } from 'react-router-dom';

const projects = [
    {
        projectId: 'pid1',
        projectTitle: 'Personal Blogfolio Website.',
        projectBrief: 'Dynamic SPA Portfolio website hosted on GitHub pages with dynamic JSON content loading.',
        skills: ['React', 'REST-API', 'JSON-Server', 'Git']
    },
    {
        projectId: 'pid1',
        projectTitle: 'Multi-container Docker Application.',
        projectBrief: 'Simple multi-container Docker application with React front-end and Java Backend.',
        skills: ['Docker', 'React', 'Java', 'Git']
    },
    {
        projectId: 'pid1',
        projectTitle: 'Polarized Opinion Viewer using ML.',
        projectBrief: 'Combats echo chambers. Analyzes polarizng sentiment across sources to empower informed decisions on any topic.',
        skills: ['Python', 'REST-API', 'Machine-Learning']
    },
    {
        projectId: 'pid2',
        projectTitle: 'Developers Sandbox.',
        projectBrief: 'All-in-one kickstarter wesite for beginner developers. Choose your language & get everything you need to code in minutes - tools, environments, step-by-step guides.',
        skills: ['HTML', 'CSS', 'Bootstrap', 'JSP']
    },
    {
        projectId: 'pid3',
        projectTitle: 'ML Algorithm Recommender.',
        projectBrief: 'Guides beginners to choose optimal Machine Learning algorithm for their datasets.',
        skills: ['Python', 'Machine-Learning']
    },
    {
        projectId: 'pid4',
        projectTitle: 'Consumer Behaviour Analysis.',
        projectBrief: 'R programming mini project developed for consumer behaviour analysis for pre and post product development phase.',
        skills: ['R-Programming']
    },
    {
        projectId: 'pid5',
        projectTitle: 'Carbon Footprint Calculator.',
        projectBrief: 'The software is developed for the Census Department of India with the sole purpose of effective nationwide outreach regarding the ecological issues and collect data.',
        skills: ['Java']
    },
    {
        projectId: 'pid6',
        projectTitle: 'SPA Website for a Restaurant.',
        projectBrief: 'A Single Page Application website for a Restaurant. The website utilizes JSON-Server for dynamic data retrieval and storage, ensuring a seamless user experience.',
        skills: ['Angular', 'JSON-Server']
    },
]

export default function Projects() {
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
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Box margin={1}>
                    <Grid container spacing={1} direction={isMobile ? 'column' : 'row'} flexWrap={'wrap'}>
                        {projects.map((project, index) => (
                            <Grid item xs={6} spacing={2}>
                                <Card key={index} sx={{ minHeight: 200 }}>
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {project.projectTitle}
                                        </Typography>
                                        <Typography variant="body2" mt={1}>
                                            {project.projectBrief}
                                        </Typography>
                                        <Box sx={{ alignItems: 'flex-end', pb: 0, mt: 'auto' }}>
                                            <Grid sx={{ alignItems: 'flex-end', pb: 0, mt: 1 }}>
                                                <Stack spacing={1} padding={1} direction='row' sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', mt: 'auto' }}>
                                                    {project.skills.map((skill, index) => (
                                                        <Grid item direction={isMobile ? 'column' : 'row'}>
                                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${skill}.png`} />} label={skill} />
                                                        </Grid>
                                                    ))}
                                                </Stack>
                                            </Grid>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container >
            <Link href="https://github.com/Tanmay-Borde?tab=repositories" underline="none" target="_blank">View more projects...<ArrowOutwardIcon fontSize='small' /></Link>
        </>
    );
}