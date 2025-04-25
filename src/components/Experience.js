import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Avatar, Card, CardContent, Chip, Container, Divider, Stack } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { useLocation } from 'react-router-dom';

const experiences = [
    {
        id: 'job4',
        title: 'Software Engineer-1',
        company: 'Cohesity',
        tenure: 'DEC 2024 - Present',
        companyLogo: '/cohesity_logo.png',
        highlights: 'Enterprise Applications Development',
        brief: `- Priority patches and hot-fixes for Cohesity and Arctera system applications as part of the merger and ISMO system integration project with minimal downtime and business impact.
                - Critical development and extended support for issue resolution, technical architecture planning, edge case and negative testing, high priority code fixes and feature development.
                - Developed backend services for VEMS to Salesforce integration, planning data migration and crafting secure REST APIs to support TSA deliverables.
                - Currently working on researching and developing an AI-driven Pricing Optimization Engine (MCP + LLM) that will reduce extreme discounting and manual pricing adjustments by 40%, improve forecast accuracy by 20% and enable a cost effective and intelligence driven pricing strategy.
                - Working on building an AI based chatbot using Azure cloud + LLM that will boost TAT for IT related issue resolution by 50%.
`,
        placement: 'right',
        skills: ['Java', 'Spring-Boot', 'Angular', 'PLSQL', 'REST-API', 'Oracle-DB', 'Agile-Development', 'Python']
    },
    {
        id: 'job3',
        title: 'Assoc. IT Developer',
        company: 'Veritas',
        tenure: 'JUN 2022 - Present',
        companyLogo: '/veritas_logo.png',
        highlights: 'Responsible for the development of critical business facing web applications encompassing business flow from OM to Product Entitlement.',
        brief: `- Architected & delivered a central SaaS provisioning portal (ReactJS + Spring Boot + Oracle DB) from scratch, boosting operational efficiency by 60%.
                - Integrated core BizApps (VAP, OMCC, GTM, VEMS, PH) across business flow from Order Management to Product Entitlement workflows. Led regular maintenance releases and timely feature roll-outs for multiple system implementation projects.
                - Proactive cross team collaboration with business and sustain teams for techno-functional design discussions, issue resolutions, RCA, troubleshooting, requirement gathering, priority code/bug fixes, Knowledge transfer, presentation and stakeholder demos using CI/CD and Agile Methodologies.
                - System integration and full stack development of BizApps with cloud based billing platform Zuora that uplifted quarterly revenue by 20% as part of the subscription transformation project.
                - Migrated on-prem VEMS notification module to cloud, simplifying data flow and cutting operating costs by 35%.
                - Engineered robust RESTful Java microservices and optimized Oracle objects for the Veritas Support Portal & Download Center by accelerating page loads and API throughput by 30%.
                - Worked on code migrations, streamlined version control and automated manual SIT cases to enhance test coverage by 40% and slashing manual QA efforts.`,
        placement: 'right',
        skills: ['Java', 'Spring-Boot', 'React', 'Angular', 'PLSQL', 'REST-API', 'Oracle-DB', 'Oracle-EBS', 'Agile-Development']
    },
    {
        id: 'job2',
        title: 'Intern Masters level',
        company: 'Veritas',
        tenure: 'JAN 2022 - JUN 2022',
        companyLogo: '/veritas_logo.png',
        highlights: 'Played a major role in designing and developing a webapp that played a pivotal role in the system implemetation project of the company.',
        brief: `- Developed a Machine Learning based resume filtration system using Python and ML Algo that boosted hiring efficiency by 30% and reduced manual efforts of the recruitment team.
                - Learning & understanding business flow from Order Management to Product Entitlement for feature development of the BizApps.
                - Development and maintainence release for business facing webapps for issue resolution through debugging, hotfixes, and maintenance.`,
        placement: 'left',
        skills: ['Java', 'Spring-Boot', 'React', 'Oracle-DB', 'PLSQL', 'REST-API', 'Agile-Development']
    },
    {
        id: 'job1',
        title: 'Technical Product Lead',
        company: '[Freelancing]',
        tenure: 'JUN 2019 - DEC 2021',
        companyLogo: '/Freelancing.png',
        highlights: 'Played a major role in designing and developing a webapp that played a pivotal role in the system implemetation project of the company.',
        brief: `- Spearheaded the end-to-end development of a wearable power bank prototype, transforming the concept into a tangible product ready for pitching and patent filing.
                - Directed the complete product lifecycle, from ideation and designing to manufacturing and implementation, ensuring technical feasibility and innovative solutions.
                - Managed materials and components sourcing, negotiating with suppliers and optimizing costs for high-quality resources.
                - Conducted vendor and factory visits, coordinating with manufacturers to align product specifications and production processes.
                - Designed, developed, and tested electrical, mechanical, and electronic components, ensuring compliance with safety, durability, and performance standards.
                - Created and maintained detailed project documentation, including technical specifications, design iterations, and testing results, to support the patent application process.
                - Actively pitched the prototype to stakeholders, showcasing its innovative features and market potential, while incorporating feedback to refine the product.
`,
        placement: 'left',
        skills: ['Agile-Development', 'Product Development', 'Prototyping', 'Product Roadmap']
    }
]

export default function Experience() {
    const [expanded, setExpanded] = React.useState('');
    // const [open, setOpen] = React.useState(false);
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
        // setOpen(true);
        setExpanded(isExpanded ? panel : false);
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
                                            src={`${process.env.PUBLIC_URL}/content/images/${experience.companyLogo}`}
                                            width={35}
                                            height={35}
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
                                        <Typography>
                                            {experience.title}
                                        </Typography>
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