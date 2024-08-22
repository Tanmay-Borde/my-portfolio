import { Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Container, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Slider from 'react-slick';
import { styled } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { useLocation } from 'react-router-dom';

const highlightedFeed = [
    {
        id: "HF1",
        section: "highlighted-feeds",
        title: "The Made by Google Pixel 9 launch event kicks off tomorrow.",
        date: "2024-06-01",
        tags: [],
        summary: "Pixel Buds Pro 2 and two Pixel Watch 3 sizes could be in the mix.",
        imageURL: "https://s.yimg.com/ny/api/res/1.2/MAU.ltFGuIV9ClvhSYECVA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2024-07/5d30ff50-502c-11ef-b7dd-34182c5d4914",
        metaDescription: [],
        relatedPosts: [],
        source: "https://www.engadget.com/the-made-by-google-pixel-9-launch-event-kicks-off-tomorrow-heres-what-we-expect-160338624.html",
        featured: true
    },
    {
        id: "HF2",
        section: "highlighted-feeds",
        title: "Smartwatch shipments see sharp decline in India",
        date: "2024-06-01",
        tags: [],
        summary: "India’s smartwatch market dipped by as much as 30% YoY in Q2, according to analysts",
        imageURL: "https://techcrunch.com/wp-content/uploads/2024/08/boat-ultima-select.jpg",
        metaDescription: [],
        relatedPosts: [],
        source: "https://techcrunch.com/2024/08/09/smartwatches-shipments-see-sharp-decline-in-india/",
        featured: true
    },
]

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Feeds = () => {
    const [feedsData, setFeedsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const theme = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleHashChange = () => {
            window.scrollTo(0, 0);
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);

        };
    }, [location.hash]);

    useEffect(() => {
        const fetchFeeds = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/content/Feeds.json`);
            const data = await response.json();
            setFeedsData(data);
            setIsLoading(false);
        };
        fetchFeeds();
    }, []);

    const featuredFeeds = feedsData.filter(feed => feed.featured);
    const feeds = feedsData.filter(feed => feed.featuredFeed);
    // const highlightedFeeds = feedsData.filter(feed => feed.highlightedFeed);
    const topFeeds = feedsData.filter(feed => feed.topFeed);

    return (
        <>
            {/* HEADER SECTION */}
            <Container sx={{ mt: 1, mb: 1 }}>
                {/* FEATURED FEEDS */}
                {isLoading ? (
                    <CircularProgress sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} />
                ) : (
                    <div className="slider-container">
                        <Typography variant='h4' component="div">
                            {`Featured Feeds`}
                        </Typography>
                        <Typography variant='subtitle2' color={'lightgrey'} mb={1}>
                            {`Techno-Business updates in the spotlight!`}
                        </Typography>
                        <Slider
                            arrows={false}
                            infinite={true}
                            asNavFor={slider2}
                            ref={(slider) => setSlider1(slider)}
                            autoplay={true}
                            autoplaySpeed={4000}>
                            {featuredFeeds.map((feed) => (
                                <>
                                    <Card sx={{ width: '100%', minHeight: 200 }}>
                                        <CardActionArea href={feed.source} target='_blank'>
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image={feed.imageURL}
                                                alt="image post"
                                            />
                                            <CardContent sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: '16px',
                                                background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
                                            }}>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                    {feed.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                                                    {feed.summary}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </>
                            ))}
                        </Slider>
                        <Slider
                            asNavFor={slider1}
                            className="image-carousel-secondary"
                            ref={(slider) => setSlider2(slider)}
                            slidesToShow={isMobile ? 2 : 3}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            arrows={false}
                        >
                            {feeds.map((feed) => (
                                <Grid container spacing={1} mt={1}>
                                    <Grid item>
                                        <Card sx={{ width: '100%' }}>
                                            <Box sx={{ position: 'relative', height: '100%' }}>
                                                <CardActionArea href={feed.source} target='_blank'>
                                                    <CardMedia
                                                        component="img"
                                                        height="150"
                                                        image={feed.imageURL}
                                                        alt="image post"
                                                    />
                                                    <CardContent sx={{
                                                        position: 'absolute',
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        padding: '16px',
                                                        background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))'
                                                    }}>
                                                        <Typography gutterBottom variant="body2" fontWeight={500} component="div" marginBottom={0} sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                            {feed.title}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Box>
                                        </Card>
                                    </Grid>
                                </Grid>
                            ))}
                        </Slider>
                    </div>
                )}
                <Divider flexItem='true' variant='middle' sx={{ mt: 2 }} />

                {/* DESKTOP VIEW: MAIN SECTION */}
                {!isMobile && (
                    <Grid container spacing={1} direction={isMobile ? 'column' : 'row'} mt={1}>
                        {/* HIGHLIGHTS */}
                        <Grid item xs={6} md={8}>
                            <Box mb={1}>
                                <Typography variant='h6' component="div">
                                    {`Highlights of the week`}
                                </Typography>
                            </Box>
                            <Slider
                                arrows={false}
                                infinite={true}
                                autoplay={true}
                                autoplaySpeed={4000}>
                                {highlightedFeed.map((feed) => (
                                    <Card sx={{ width: '100%', minHeight: 200, maxHeight: 300 }}>
                                        <CardActionArea href={feed.source} target='_blank'>
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image={feed.imageURL}
                                                alt="image post"
                                            />
                                            <CardContent sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: '16px',
                                                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))',
                                                [theme.breakpoints.down('sm')]: {
                                                    padding: '8px',
                                                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))'
                                                }
                                            }}>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                    {feed.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                                                    {feed.summary}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                ))}
                            </Slider>
                        </Grid>
                        {/* TOP STORIES */}
                        <Grid item xs={6} md={4}>
                            <Box mb={1}>
                                <Typography variant='h6' component="div">
                                    {`Top Stories`}
                                </Typography>
                            </Box>
                            <Box sx={{
                                overflowX: 'hidden',
                                overflowY: 'scroll',
                                '-ms-overflow-style': 'none',
                                'scrollbar-width': 'none',
                                maxHeight: 300
                            }}>
                                <Grid container spacing={1} direction={'column'}>
                                    {topFeeds.map((topFeed) => (
                                        <Grid item>
                                            <Card>
                                                <CardActionArea href={topFeed.source} target='_blank'>
                                                    <Grid container spacing={2}>
                                                        <Grid item>
                                                            <ButtonBase sx={{ width: 120, height: 120 }}>
                                                                <Img alt="image" src={topFeed.imageURL} />
                                                            </ButtonBase>
                                                        </Grid>
                                                        <Grid item xs={12} sm container>
                                                            <Grid item xs container direction="column" spacing={2}>
                                                                <Grid item xs>
                                                                    <Typography gutterBottom variant="subtitle1" component="div">
                                                                        {topFeed.title}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                )}

                {/* MOBILE VIEW: MAIN SECTION */}

                {isMobile && (
                    <>
                        <Box mb={1}>
                            <Typography variant='h6' component="div">
                                {`Highlights of the week`}
                            </Typography>
                        </Box>
                        <Slider
                            arrows={false}
                            infinite={true}
                            autoplay={true}
                            autoplaySpeed={4000}>
                            {highlightedFeed.map((feed) => (
                                <Card sx={{ width: '100%', minHeight: 200, maxHeight: 300 }}>
                                    <CardActionArea href={feed.source} target='_blank'>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={feed.imageURL}
                                            alt="image post"
                                        />
                                        <CardContent sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            padding: '16px',
                                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))',
                                            [theme.breakpoints.down('sm')]: {
                                                padding: '8px',
                                                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0))'
                                            }
                                        }}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                {feed.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                                                {feed.summary}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                        </Slider>

                        {/* MOBILE VIEW: TOP STORIES */}

                        <Box mb={1}>
                            <Typography variant='h6' component="div">
                                {`Top Stories`}
                            </Typography>
                        </Box>

                        <Box sx={{
                            overflowX: 'hidden',
                            overflowY: 'scroll',
                            '-ms-overflow-style': 'none',
                            'scrollbar-width': 'none',
                            maxHeight: 300,
                            width: '100%',
                        }}>
                            <Grid container spacing={1} direction={'row'}> {/* Change to row for horizontal scrolling */}
                                {topFeeds.map((topFeed) => (
                                    <Grid item key={topFeed.id} xs={12} sm={6} md={4} lg={3}> {/* Responsive sizing */}
                                        <Card sx={{ mb: 1 }}> {/* Add margin for spacing */}
                                            <CardActionArea href={topFeed.source} target='_blank'>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={4}> {/* Adjust image width based on grid */}
                                                        <ButtonBase sx={{ width: '100%', height: '100%' }}>
                                                            <Img alt="image" src={topFeed.imageURL} />
                                                        </ButtonBase>
                                                    </Grid>
                                                    <Grid item xs={8}> {/* Adjust text area based on grid */}
                                                        <Grid container direction="column" spacing={2}>
                                                            <Grid item xs>
                                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                                    {topFeed.title}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </>
                )}
            </Container >
        </>
    )

}

export default Feeds;