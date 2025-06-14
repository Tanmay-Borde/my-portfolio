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
        brief: `
        - Led System Integration Roadmap & Zero‑Downtime Patches: Spearheaded the merger of Cohesity and Arctera platforms by defining the integration roadmap, scoping priority patches and hot‑fixes, and coordinating cross‑functional rollout—achieving seamless ISMO convergence with 100% business continuity and zero SLA breaches.
        - Architected & Delivered High‑Priority Features: Owned the end‑to‑end lifecycle for critical issues and new feature requests: formulated technical architecture, drove detailed edge‑case and negative testing plans, and managed sprint prioritization, cutting production incidents by 35% and accelerating time‑to‑fix by 50%.
        - Productized VEMS–SFDC Integration: Defined requirements, planned data‑migration strategy, and built secure, versioned RESTful APIs to sync VEMS workflows with Salesforce CRM. Collaborated with PMO and QA to validate deliverables against TSA compliance, enabling a 25% faster service‑order turnaround.
        - AI‑Driven Pricing Optimization Engine (MCP + LLM): Shaping the product vision, conducting market research, and prototyping an LLM‑powered pricing engine forecast to reduce extreme discounting and manual adjustments by 40%, improve forecast accuracy by 20%, and establish a scalable, data‑driven pricing strategy framework saving $500k annually.
        - Chatbot MVP for IT Service Automation: Leading the research, requirements gathering, and Azure cloud architecture for an AI chatbot that leverages LLMs to automate IT‑issue triage. Designed metrics dashboards to track a projected 50% reduction in turnaround time (TAT) and drive continuous improvement through user feedback loops.
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
        brief: `
                - Designed & Launched Central SaaS Provisioning Portal: Architected a ReactJS + Spring Boot + OracleDB platform from concept to production, defining product requirements, prioritizing backlog items, and coordinating sprints resulting in a 60% boost in operational efficiency.
                - Defined & Orchestrated End‑to‑End BizApps Integration: Crafted the integration roadmap for core BizApps across Order‑to‑Entitlement workflows. Led requirement workshops, managed feature roll‑outs, and synchronized maintenance releases, ensuring on‑time delivery for multiple system implementation projects.
                - Led Cross‑Functional Agile Teams: Championed techno‑functional design discussions, facilitated stakeholder demos, and drove RCA and troubleshooting sessions with Business, Sustaining, QA, and PMO teams. Established CI/CD pipelines and Agile rituals to slash time‑to‑market and maintain zero critical defects in production.
                - Spearheaded Subscription Transformation with Zuora: Owned the feature development and technical design for integrating on‑prem BizApps with a cloud‑based billing platform (Zuora). This initiative uplifted quarterly subscription revenue by 20% and delivered a scalable foundation for future monetization features.
                - Engineered Cloud Migration & Microservices Optimization: Migrated the VEMS notification module to Azure, simplifying data flow and cutting operating costs by 35%. Architected and optimized RESTful Java microservices and Oracle objects for the Support Portal & Download Center, accelerating API throughput and page-load times by 30%.
                - Established Automated Testing & Version Control Best Practices: Streamlined code migrations, standardized Git workflows, and automated SIT cases raising test coverage by 40% and reducing manual QA effort by 50%, thereby improving release confidence and cadence.
                `,
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
        brief: `
                - Led ML‑Driven Resume Screening Product: Spearheaded the end‑to‑end design and delivery of a Python‑based, machine‑learning resume filtration system partnering with HR to define product requirements, select algorithms, and iterate on models resulting in a 30% improvement in candidate processing throughput and a 40% reduction in manual review effort.
                - Drove Order‑to‑Entitlement Workflow Analysis: Conducted in‑depth business‑process mapping across Order Management to Product Entitlement domains, translating stakeholder pain points into clear feature specifications. This facilitated prioritization and accelerated BizApps enhancements, cutting time‑to‑market for new capabilities by 25%.
                - Owned Release Management & Maintenance for Customer‑Facing Apps: Managed sprint planning, hot‑fix prioritization, and maintenance releases for business‑critical web applications. Coordinated cross‑functional teams QA, support, and DevOps to achieve 99.9% uptime and reduce average issue‑resolution time by 35%.
                - Feature Development for O2C BizApps: Owned Frontend + Backend Development (ReactJS, Spring Boot, Oracle Database) of VAP, OMCC, GTM, VEMS and PH business facing WebApps.
                `,
        placement: 'left',
        skills: ['Java', 'Spring-Boot', 'React', 'Oracle-DB', 'PLSQL', 'REST-API', 'Agile-Development']
    },
    {
        id: 'job1',
        title: 'Technical Product Lead',
        company: '[Freelancing]',
        tenure: 'JUN 2019 - DEC 2021',
        companyLogo: '/Freelancing.png',
        highlights: 'Tech Lead',
        brief: `
                - Spearheaded End‑to‑End Prototype Development: Led the full product lifecycle of a hardware product from concept and industrial design to functional MVP and patent‑ready prototype reducing time‑to‑prototype by 30%.
                - Defined Product Requirements & Technical Specs: Collaborated with end users and stakeholders to map feature priorities, authored detailed mechanical, electrical, and electronics requirements, and managed iterative design sprints.
                - Optimized Supply Chain & Cost Structure: Negotiated with 5+ suppliers to source high‑grade battery cells, PCBs, and enclosure materials achieving a 20% reduction in BOM costs without compromising quality.
                - Managed Manufacturing & QA Processes: Conducted on‑site vendor audits and pilot production runs; established testing protocols that yielded a sub‑2% defect rate and ensured compliance with safety and durability standards.
                - Authored Comprehensive Documentation: Produced technical specification sheets, CAD drawings, test reports, and design‑iteration logs to support a successful patent filing and streamline handoff to manufacturing.
                - Filed & Defended Patent Application: Prepared and submitted the patent application for the wearable power bank; navigated the examination process, addressed office actions in hearings, and secured grant crafting robust claims to ensure long‑term defensibility.
                - Drove Stakeholder Engagement & Feedback Loops: Presented prototypes and roadmaps to investors, advisors, and potential customers; incorporated market insights to refine feature set and bolster product‑market fit.
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