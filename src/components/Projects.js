import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Avatar, Chip, Container, Stack } from '@mui/material';
import { isMobile } from 'react-device-detect';

export default function Projects() {
    console.log(isMobile ? 'Mobile device' : 'Desktop');
    return (
        <>
            <Container sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} direction={isMobile ? 'column' : 'row'} flexWrap={'wrap'} >
                        <Grid item xs={6}>
                            <Card sx={{ minHeight: 200, flexGrow: 1 }} >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Polarized Opinion Viewer using ML
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    </Typography>
                                    <Typography variant="body2">
                                        {`Combats echo chambers. Analyzes polarizng sentiment across sources to empower informed decisions on any topic.`}
                                    </Typography>
                                    <Stack spacing={2} padding={2} direction={isMobile ? 'column' : 'row'} flexGrow={1} marginBottom="auto" >
                                        <Grid item xs={12} >
                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/Python.png`} />} label="Python" />
                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/Java.png`} />} label="JAVA" />
                                        </Grid>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card sx={{ minHeight: 200 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        Developer's Sandbox
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    </Typography>
                                    <Typography variant="body2">
                                        {`All-in-one kickstarter wesite for beginner developers. Choose your language & get everything you need to code in minutes - tools, environments, step-by-step guides.`}
                                    </Typography>

                                    <Stack padding={2} direction={isMobile ? 'column' : 'row'} flexDirection={isMobile ? 'column' : 'row'} spacing={2}>
                                        <Grid spacing={2} item xs={12} >
                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/HTML.png`} />} label="HTML" />
                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/Java.png`} />} label="JAVA" />
                                        </Grid>
                                    </Stack>

                                </CardContent>
                            </Card>
                            <Card sx={{ minHeight: 200, flexGrow: 1, marginTop: 2 }} >
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {`ML Algorithm Recommender`}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    </Typography>
                                    <Typography variant="body2">
                                        {`Guides beginners to choose optimal algorithms for their datasets.`}
                                    </Typography>
                                    <Stack spacing={2} padding={2} direction={isMobile ? 'column' : 'row'} flexGrow={1} marginBottom="auto" >
                                        <Grid item xs={12} >
                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/Python.png`} />} label="Python" />
                                            <Chip avatar={<Avatar src={`${process.env.PUBLIC_URL}/content/images/Java.png`} />} label="JAVA" />
                                        </Grid>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </>
    );
}
