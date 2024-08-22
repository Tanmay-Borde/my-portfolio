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
import { Alert, Box, CircularProgress, Snackbar } from '@mui/material';
import { isMobile } from 'react-device-detect';

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

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', width: '100%', minWidth: isMobile ? '100%' : 1000 }}>
                {isLoading ? (
                    <CircularProgress sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} />
                ) : (
                    <>
                        {
                            posts.map((post) => (
                                <Link to={`#post-${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
                                    <Card key={post.id} id={`post-${post.id}`} >
                                        <CardHeader
                                            title={post.title}
                                            subheader={`${new Date(post.date).toLocaleDateString()} • ${post.readTime} min read`}
                                            action={
                                                <IconButton onClick={() => handleCopy(`${window.location.origin}#/blogs/${post.section}#post-${post.id}`)}> <ShareIcon /> </IconButton>
                                            }
                                        />
                                        <CardMedia
                                            component="img"
                                            height={post.expanded ? 400 : 200}
                                            image={`${process.env.PUBLIC_URL}${post.imageURL}`}
                                            alt={post.credits}
                                        />
                                        <Typography fontSize={5}>{`Image by`} {post.credits}</ Typography>
                                        <CardHeader subheader={post.summary} />
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
                                        <Collapse in={post.expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>
                                                    <ReactMarkdown children={post.content} />
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card >
                                </Link>
                            ))
                        }
                    </>
                )}
            </Box>
            <Snackbar open={isCopied} autoHideDuration={6000}>
                <Alert severity='success' variant='standard'>
                    {`Link Copied Successfully`}
                </Alert>
            </Snackbar>
        </>
    );
};

export default HumanityBlogs;