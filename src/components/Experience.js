import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Avatar, Card, CardContent, Chip, Container, Divider, Stack, Tooltip } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';

const experiences = [
    {
        id: 'job1',
        title: 'Assoc. IT Developer',
        company: 'Veritas',
        tenure: 'JUN 2022 - Present',
        companyLogo: '/Veritas.png',
        highlights: 'Responsible for the development of critical business facing web applications encompassing business flow from OM to Product Entitlement.',
        brief: `- Design & Development: Led the initiative to create robust web applications for business operations, achieving a 30% reduction in manual data entry tasks, ultimately saving the team an impressive 15 hrs/week.
- Architected Microservices: Designed and implemented high-performance RESTful Java microservices and an API gateway utilizing CI/CD practices within Agile frameworks, resulting in a 30% operational efficiency.
- Database Optimization: Enhanced Oracle Database interactions with Java microservices, leading to a 20% increase in backend performance for the order management application.
- Project Leadership: Led the implementation and integration of billing and notification modules, improving business process efficiency by 34% through streamlined workflows.
- Automation Initiatives: Collaborated closely with business teams to automate manual System Integration Testing (SIT), achieving a 40% increase in testing efficiency, significantly reducing time-to-market.
- Maintenance and Support: Conducted regular maintenance releases and bug fixes, enhancing application performance and user experience, while saving the company approximately $40k annually through efficient resource management.
`,
        placement: 'right',
        skills: ['Java', 'Spring-Boot', 'React', 'Angular', 'PLSQL', 'REST-API', 'Oracle-DB', 'Oracle-EBS', 'Agile-Development']
    },
    {
        id: 'job2',
        title: 'Intern Masters level',
        company: 'Veritas',
        tenure: 'JAN 2022 - JUN 2022',
        companyLogo: '/Veritas.png',
        highlights: 'Played a major role in designing and developing a webapp that played a pivotal role in the system implemetation project of the company.',
        brief: `- Full Stack Development: Developed a full-stack application for internal teams that streamlined order processing into a single cloud-based web application dashboard.
- Cross-Functional Collaboration: Engaged with 25 member downstream and upstream teams for requirement gathering, project ideation, design discussions, and delivered impactful business demos to stakeholders.
- Innovation in Hackathon: Participated in a company-wide hackathon to develop an AI-based application for HR that expedited the candidate selection process and made the overall process 20% more efficient.
- System integration: Worked on integrating a third party application that increased quarterly revenue by 15%.
- Troubleshooting Expertise: Executed full-stack development tasks including troubleshooting, hotfixing, and debugging web applications, ensuring timely project delivery and improving issue resolution by 36%.
`,
        placement: 'left',
        skills: ['Java', 'Spring-Boot', 'React', 'Oracle-DB', 'PLSQL', 'REST-API', 'Agile-Development']
    }
]

export default function Experience() {
    const [expanded, setExpanded] = React.useState('');
    const [open, setOpen] = React.useState(false);
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

    const handleChange = (panel) => (event, isExpanded) => {
        setOpen(true);
        setExpanded(isExpanded ? panel : false);
    };

    const handleTooltipClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Box sx={{ justifyContent: 'center', width: '100%', minHeight: isMobile ? 800 : 500 }}>
                    <Timeline position="alternate">
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent
                                    sx={{ m: 'auto 0' }}
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    {experience.tenure}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <img
                                            src={`${process.env.PUBLIC_URL}${experience.companyLogo}`}
                                            width={30}
                                            height={30}
                                            alt="Veritas Logo"
                                        />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <Typography variant="h6" component="span">
                                        {experience.company}
                                    </Typography>
                                    <Typography>
                                        {!isMobile && (
                                            <Tooltip
                                                arrow
                                                title={experience.highlights}
                                                placement={experience.placement}
                                                TransitionComponent={Fade}
                                                TransitionProps={{ timeout: 400 }}
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                                onClose={handleTooltipClose}
                                                open={open}
                                                disableFocusListener
                                            >
                                                <Typography>
                                                    {experience.title}
                                                </Typography>
                                            </Tooltip>
                                        )}
                                    </Typography>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline >
                    <Divider /><br />
                    {
                        experiences.map((experience, index) => (
                            <Accordion expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Key highlights
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}> {experience.title} </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography>
                                                Skills involved:
                                            </Typography><br />
                                            <Box sx={{ maxHeight: 300, overflowX: 'auto' }}>
                                                <Stack direction={'row'} spacing={1}>
                                                    {experience.skills.map((skill, index) => (
                                                        <Grid item xs={12} md={3} key={index}>
                                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/${skill}.png`} />} label={skill} />
                                                        </Grid>
                                                    ))
                                                    }
                                                </Stack>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                    <Typography variant='caption'>
                                        {experience.brief.split('\n').map((line, i) => (
                                            <ul key={i} style={{ listStyle: 'disc', paddingLeft: 20 }}>{line}<br /></ul>
                                        ))}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion >
                        ))
                    }
                </Box >
            </Container>
        </>
    )
}