import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown';
import { Link, useLocation } from 'react-router-dom';
import { Alert, Box, CircularProgress, createTheme, Snackbar } from '@mui/material';
import { isMobile } from 'react-device-detect';
import { ThemeProvider } from 'styled-components';

const theme = createTheme({
    typography: {
        body1: {
            color: 'white',
            fontFamily: 'inherit',
            lineHeight: 2,
            fontSize: 16,
            marginBottom: 10,
            wordSpacing: 1
        },
        components: {
            MuiCardHeader: {
                defaultProps: {
                    title: {
                        color: 'white', // Example color for title
                    },
                },
                // Target the root element for overall styling
                styleOverrides: {
                    root: {
                        backgroundColor: 'inherit', // Example background color
                    },
                },
            },
        },
    }
});


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const HumanityBlogs = () => {
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [isCopied, setIsCopied] = React.useState(false);

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

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/content/HumanityBlogs.json`);
            const data = await response.json();

            const postsWithContent = await Promise.all(
                data.map(async (post) => {
                    const contentResponse = await fetch(`${process.env.PUBLIC_URL}${post.contentFile}`);
                    const content = await contentResponse.text();
                    return { ...post, content };
                })
            );

            setPosts(postsWithContent);
            setIsLoading(false);
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = location.hash;
            if (hash) {
                const element = document.getElementById(hash.slice(1));
                if (element) {
                    setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
                }
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [location]);

    const handleExpandClick = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, expanded: !post.expanded } : post
            )
        );
    };

    const MarkdownComponents = {
        img(image) {
            const imagePath = image.url || image.src;
            const altText = image.alt;
            const width = isMobile ? '70%' : '40%';
            const height = isMobile ? '70%' : '40%';
            return (
                <img
                    src={imagePath}
                    alt={altText}
                    width={width}
                    height={height}
                    style={{ display: 'block', margin: '0 auto' }}
                />
            );
        },
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', width: '100%', minWidth: isMobile ? '100%' : 1100 }}>
                    {isLoading ? (
                        <CircularProgress sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} />
                    ) : (
                        <>
                            {
                                posts.map((post) => (
                                    <Link to={`#post-${post.id}`} key={post.id} style={{ textDecoration: 'none' }} onClick={() => handleExpandClick(post.id)}>
                                        <Card key={post.id} id={`post-${post.id}`}>
                                            <CardHeader
                                                className="MuiCardHeader-root"
                                                title={post.title}
                                                subheader={`By ${post.author} • ${new Date(post.date).toLocaleDateString()} • ${post.readTime} min read`}
                                                action={
                                                    <IconButton onClick={() => handleCopy(`${window.location.origin}/my-portfolio/#/blogs/${post.section}#post-${post.id}`)}>
                                                        {console.log('location2: ', `${window.location.origin}/my-portfolio/#/blogs/${post.section}#post-${post.id}`)}
                                                        <ShareIcon />
                                                    </IconButton>
                                                }
                                            />
                                            <CardMedia
                                                component="img"
                                                height={post.expanded ? 400 : 200}
                                                image={post.imageURL}
                                                alt={post.credits}
                                            />
                                            <Typography fontSize={5}>{`Image by`} {post.credits}</ Typography>
                                            <CardHeader className="MuiCardHeader-root" subheader={post.summary} />
                                            <CardActions disableSpacing>
                                                <ExpandMore
                                                    expand={post.expanded}
                                                    onClick={() => handleExpandClick(post.id)}
                                                    aria-expanded={post.expanded}
                                                    aria-label="show more"
                                                    label="Read more"
                                                >
                                                    <ExpandMoreIcon />
                                                </ExpandMore>
                                            </CardActions>
                                            {post.expanded && <Collapse in={post.expanded} timeout="auto" unmountOnExit>
                                                <CardContent>
                                                    <Typography theme={theme}>
                                                        <ReactMarkdown
                                                            children={post.content}
                                                            components={MarkdownComponents} />
                                                    </Typography>
                                                </CardContent>
                                            </Collapse>}
                                        </Card >
                                    </Link>
                                ))
                            }
                        </>
                    )}
                </Box>
            </ThemeProvider >
            <Snackbar open={isCopied} autoHideDuration={6000} >
                <Alert severity='success' variant='standard'>
                    {`Link Copied Successfully`}
                </Alert>
            </Snackbar>
        </>
    );
};

export default HumanityBlogs;