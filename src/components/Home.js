import * as React from 'react';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import { Alert, AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Dialog, Divider, Grid, IconButton, Snackbar, Stack, Toolbar, Typography, Slide } from '@mui/material';
import { isMobile } from 'react-device-detect';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';

const embedded_resume = 'https://docs.google.com/document/d/e/2PACX-1vTryJQDskPq33vxEQFd6cjANxgBb9dcmSkzBODBZM7YSpqL5mz8mwjsyrlZAbcK1m-eSrqAZ5SyLBQz/pub?embedded=true';
const shareable_resume = 'https://docs.google.com/document/d/1xiuDjQRr6vCYP9wvctCO4CM5xerXb1kkQ0hklAgA4QE/edit?usp=sharing';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [isCopied, setIsCopied] = React.useState(false);
    const [featuredBlogs, setFeaturedBlogs] = React.useState([]);
    const [featuredFeeds, setFeaturedFeeds] = React.useState([]);
    const [featuredQuotes, setFeaturedQuotes] = React.useState([]);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

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
            </Dialog>
        )
    };

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false
    }

    React.useEffect(() => {
        const fetchHomePageContent = async () => {
            const featuredFeedsContent = await fetch(`${process.env.PUBLIC_URL}/content/FeaturedFeeds.json`);
            const featuredFeeds = await featuredFeedsContent.json();
            const featuredBlogsContent = await fetch(`${process.env.PUBLIC_URL}/content/FeaturedPosts.json`);
            const featuredBlogs = await featuredBlogsContent.json();
            const featuredQuotesContent = await fetch(`${process.env.PUBLIC_URL}/content/Quotes.json`);
            const featuredQuotes = await featuredQuotesContent.json();

            setFeaturedFeeds(featuredFeeds);
            setFeaturedBlogs(featuredBlogs);
            setFeaturedQuotes(featuredQuotes);
        };

        fetchHomePageContent();

    }, []);

    return (
        <>
            {/* FEATURED POSTS */}
            <Container sx={{ mt: 1, mb: 1 }}>
                <div className="slider-container">
                    <Typography variant='h4' component="div">
                        {`Featured Blogs`}
                    </Typography>
                    <Typography variant='subtitle2' color={'lightgrey'} mb={1}>
                        {`Better understanding of the world, one question at a time!`}
                    </Typography>
                    <Slider {...settings}>
                        {featuredBlogs.map((post) => (
                            <Link to={`/blogs/${post.section}`}>
                                <Card sx={{ minHeight: 300, maxHeight: 300 }}>
                                    <Box sx={{ position: 'relative', height: '100%' }}>
                                        {/* <CardActionArea href={`${process.env.PUBLIC_URL}#/blogs/${post.section}#post-${post.id}`}> */}
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image={`${process.env.PUBLIC_URL}${post.imageURL}`}
                                                alt="image post"
                                            />
                                            <CardContent sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: '15px',
                                                background: 'linear-gradient(to top, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0))'
                                            }}>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                    {post.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                                                    {post.summary}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Box>
                                </Card>
                            </Link>
                        ))}
                    </Slider>
                </div>
                <Divider flexItem='true' variant='middle' sx={{ mt: 2 }} />

                {/* WEEKLY FEEDS */}

                {!isMobile && (
                    <Grid container spacing={1} direction={isMobile ? 'column' : 'row'} mt={1}>
                        <Grid item xs={6}>
                            <Box mb={1}>
                                <Typography variant='h6' component="div">
                                    {`Weekly feeds`}
                                </Typography>
                            </Box>
                            <Slider {...settings}>
                                {featuredFeeds.map((feed) => (
                                    <Link to={'/feeds'}>
                                        <Card sx={{ minHeight: 300, maxHeight: 300 }}>
                                            <Box sx={{ position: 'relative', height: '100%' }}>
                                                <CardActionArea>
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
                                                        padding: '15px',
                                                        background: 'linear-gradient(to top, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0))'
                                                    }}>
                                                        <Typography gutterBottom variant="h6" component="div" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                            {feed.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                                                            {feed.summary}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Box>
                                        </Card>
                                    </Link>
                                ))}
                            </Slider>
                        </Grid>

                        {/* QUOTES */}

                        <Grid item xs={6}>
                            <Box mb={1}>
                                <Typography variant='h6' component="div">
                                    {`Profound Quotes`}
                                </Typography>
                            </Box>
                            <Slider {...settings}>
                                {featuredQuotes.map((quote) => (
                                    <Card sx={{ minHeight: 300, maxHeight: 300 }}>
                                        <Box sx={{ position: 'relative', height: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image={quote.imageURL}
                                                alt="image post"
                                            />
                                            <CardContent sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: '15px',
                                                background: 'linear-gradient(to top, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0))'
                                            }}>
                                                <Typography gutterBottom variant="body1" component="div" fontStyle={'italic'} sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                    {'"'}{quote.quote}{'"'}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                                                    {'- '}{quote.author}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                    </Card>
                                ))}
                            </Slider>
                        </Grid>
                    </Grid >
                )}

                {isMobile && (
                    <>
                        {/*MOBILE VIEW: WEEKLY FEEDS */}
                        <div className="slider-container">
                            <Box mb={1}>
                                <Typography variant='h6' component="div">
                                    {`Weekly Feeds`}
                                </Typography>
                            </Box>
                            <Slider {...settings}>
                                {featuredFeeds.map((feed) => (
                                    <Link to={'/feeds'}>
                                        <Card sx={{ minHeight: 300, maxHeight: 300 }}>
                                            <Box sx={{ position: 'relative', height: '100%' }}>
                                                <CardActionArea href={feed.source}>
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
                                                        padding: '15px',
                                                        background: 'linear-gradient(to top, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0))'
                                                    }}>
                                                        <Typography gutterBottom variant="h5" component="div" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                            {feed.title}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary" sx={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 1)' }}>
                                                            {feed.summary}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Box>
                                        </Card>
                                    </Link>
                                ))}
                            </Slider>
                        </div>
                        {/* MOBILE VIEW: PROFOUND QUOTES */}
                        <div className="slider-container">
                            <Box mb={1}>
                                <Typography variant='h6' component="div">
                                    {`Profound Quotes`}
                                </Typography>
                            </Box>
                            <Slider {...settings}>
                                {featuredQuotes.map((quote) => (
                                    <Card sx={{ minHeight: 300, maxHeight: 300 }}>
                                        <Box sx={{ position: 'relative', height: '100%' }}>
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image={quote.imageURL}
                                                alt="image post"
                                            />
                                            <CardContent sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                padding: '15px',
                                                background: 'linear-gradient(to top, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0))'
                                            }}>
                                                <Typography gutterBottom variant="body1" component="div" fontStyle={'italic'} sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 2)' }}>
                                                    {'"'}{quote.quote}{'"'}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                                                    {'- '}{quote.author}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                    </Card>
                                ))}
                            </Slider>
                        </div>
                    </>
                )}
                <Divider flexItem='true' variant='middle' sx={{ mt: 2 }} />
                <Typography variant='h6' component="div" sx={{ display: 'flex', justifyContent: 'space-evenly', flexGrow: 1 }}>
                    {`Quick Links`}
                </Typography>
                <Stack
                    spacing={4}
                    direction={isMobile ? 'column' : 'row'}
                    sx={{
                        display: 'flex',
                        justifyContent: isMobile ? 'space-evenly' : 'center',
                        alignItems: 'center',
                        flexGrow: 1,
                        mt: 3
                    }}>
                    <Link onClick={handleOpenDialog}>
                        < Typography variant='button' style={{ textDecoration: 'none', color: 'ButtonHighlight' }}>
                            {`My Resume`}
                            <ArrowOutwardIcon fontSize='inherit' />
                        </Typography>
                    </Link>
                    <Link to={'/about'}>
                        <Typography variant='button' style={{ textDecoration: 'none', color: 'ButtonHighlight' }}>
                            {`About me`}
                            <ArrowOutwardIcon fontSize='inherit' />
                        </Typography>
                    </Link>
                    <Link to={'/experience'}>
                        <Typography variant='button' style={{ textDecoration: 'none', color: 'ButtonHighlight' }}>
                            {`Recent Experience`}
                            <ArrowOutwardIcon fontSize='inherit' />
                        </Typography>
                    </Link>
                    <Link to={'/projects'}>
                        <Typography variant='button' style={{ textDecoration: 'none', color: 'ButtonHighlight' }}>
                            {`Recent Projects`}
                            <ArrowOutwardIcon fontSize='inherit' />
                        </Typography>
                    </Link>
                    {fullScreenDialogBox()}
                </Stack >
            </Container >
        </>
    );
}