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

const BusinessBlogs = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        console.log('Component mounted.')
        const fetchPosts = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/content/BusinessBlogs.json`);
            const data = await response.json();

            const postsWithContent = await Promise.all(
                data.map(async (post) => {
                    const contentResponse = await fetch(`${process.env.PUBLIC_URL}${post.contentFile}`);
                    const content = await contentResponse.text();
                    return { ...post, content };
                })
            );

            setPosts(postsWithContent);
        };

        fetchPosts();
    }, []);

    const handleExpandClick = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, expanded: !post.expanded } : post
            )
        );
    };

    return (
        <>
            <div style={{ display: 'grid', alignItems: 'center' }}>
                {posts.map((post) => (
                    <Card key={post.id} sx={{ marginBlock: 1, }} >
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
                            height={post.expanded ? 400 : 100}
                            image={`${process.env.PUBLIC_URL}${post.imageURL}`}
                            alt={post.credits}
                        />
                        <Typography fontSize={5}>Image by {post.credits}</ Typography>
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
                ))}
            </div>
        </>
    );
};

export default BusinessBlogs;