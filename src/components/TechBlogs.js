import React, { useEffect, useRef, useState } from 'react';
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
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Box, CircularProgress, Container } from '@mui/material';

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

const TechBlogs = () => {
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const { path } = useParams();
    const elementRef = useRef(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/content/TechBlogs.json`);
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
                const elementId = hash.slice(1);
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.error(`Element ${elementId} not found.`);
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
            <Container sx={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%', mt: 1, flexGrow: 1, minHeight: 800 }}>
                {console.log(path)}
                {isLoading ? (
                    <CircularProgress sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} />
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1, minHeight: 800 }}>
                        {
                            posts.map((post) => (
                                <Link to={`#post-${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
                                    <Card key={post.id} id={`post-${post.id}`} ref={elementRef}>
                                        <CardHeader
                                            title={post.title}
                                            subheader={`${new Date(post.date).toLocaleDateString()} • ${post.readTime} min read`}
                                            action={
                                                <IconButton aria-label="share">
                                                    <ShareIcon />
                                                </IconButton>
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
                    </Box>
                )}
            </Container>
        </>
    );
};

export default TechBlogs;