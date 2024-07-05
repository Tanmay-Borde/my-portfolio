import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Avatar, Card, CardContent, Chip, Divider, Stack, Tooltip, useMediaQuery } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

const experiences = [
    {
        id: 'job1',
        title: 'Assoc. IT Developer',
        company: 'Veritas',
        tenure: 'JUN 2022 - Present',
        companyLogo: '/Veritas.png',
        highlights: 'Responsible for the development of multiple existing business facing critical web applications encompassing business flow from OM to Product Entitlement.',
        brief: `Successfully delivered multiple critical projects for various webapps encompassing business flow from Order Management to Product Entitlement.
            Worked on both front-end and back-end development including troubleshooting, debugging and patch fixing.
            Successfully designed and implemented high-performance Java microservices for the company's entitlement management system, improving business efficiency by 30%.
            Database Management: Designed and Optimized Oracle DB for efficient interaction with Java Web Microservices and UI optimizing the backend by 20%.
            Agile Development: Successfully implemented Agile methodologies for iterative development and project management.
            Key Achievements: Played a pivotal role in understanding and delivering a critical business transformation and system implementation projects.
            Led the retrofitting of multiple web applications, streamlining system integration and contributing to a stable and reliable solution for User Acceptance Testing (UAT).
            Demonstrated strong analytical skills by simulating live business orders alongside the ERP system.
            Implemented CI/CD (Continuous Integration and Continuous Delivery) for efficient application development.
            Fostered effective collaboration with cross-functional teams by actively participating in requirement gathering, knowledge transfer, reporting, and brainstorming sessions.
            Actively participated in requirement gathering, ideation, brainstorming sessions, and business demos to ensure project success.
            Other Activities: Developed a Machine Learning-based internal application for the HR department during a Hackathon. This application streamlined the hiring process, resulting in a 20% reduction in time to hire.`,
        placement: 'left',
        skills: ['Java', 'Spring-Boot', 'React', 'Angular', 'PLSQL', 'REST-API', 'Oracle-DB', 'Oracle-EBS', 'Agile-Development']
    },
    {
        id: 'job2',
        title: 'Intern Masters level',
        company: 'Veritas',
        tenure: 'JAN 2022 - JUN 2022',
        companyLogo: '/Veritas.png',
        highlights: 'Played a major role in designing and developing a webapp that played a pivotal role in the system implemetation project of the company.',
        brief: `Designed and developed a brand new webapp for business users from scratch that boosted their business process efficiency by 40%.
        Cross team collaboration for requirement gathering, business demos and presentations.
        Key Achievement: Our team's presentation was well received and spotlighted by the Tower Lead.
        Active participation in various extra curricular activities of the company and hosting a live virtual show.`,
        placement: 'right',
        skills: ['Java', 'Spring-Boot', 'React', 'Oracle-DB', 'PLSQL', 'REST-API', 'Agile-Development']
    }
]

export default function Experience() {
    const [expanded, setExpanded] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const mobileBreakpoint = 'md';
    const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint})`);

    const handleChange = (panel) => (event, isExpanded) => {
        setOpen(true);
        setExpanded(isExpanded ? panel : false);
    };

    const handleTooltipClose = () => {
        setOpen(false);
    };

    return (
        <>
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
                                    disableHoverListener={isMobile}
                                // disableFocusListener
                                // disableHoverListener
                                >
                                    <Typography>
                                        {experience.title}
                                    </Typography>
                                </Tooltip>
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
                                    <Box sx={{ maxHeight: 300, overflowY: 'auto' }}>
                                        <Stack direction={isMobile ? 'column' : 'row'} spacing={1}>
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

        </>
    )
}