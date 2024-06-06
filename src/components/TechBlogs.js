import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReactMarkdown from 'react-markdown';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Divider, Stack } from '@mui/material';

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

const TechBlog = () => {
    const [posts, setPosts] = useState([]);
    // const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, expanded: !post.expanded } : post
            )
        );
    };

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`${process.env.PUBLIC_URL}/content/TechBlogs.json`);
            const data = await response.json();

            const postsWithContent = await Promise.all(
                data.map(async (post) => {
                    const contentResponse = await fetch(`${process.env.PUBLIC_URL}/content/contentFiles/TB1.md`);
                    const content = await contentResponse.text();
                    console.log("post: ", post)
                    console.log("contentResponse: ", contentResponse);
                    console.log("content: ", content);
                    return { ...post, content };
                })
            );

            setPosts(postsWithContent);
        };

        fetchPosts();
    }, []);


    // useEffect(() => {
    //     fetch(`${ process.env.PUBLIC_URL } / content / TechBlogs.json`)
    //         .then(response => response.json())
    //         .then(data => setPosts(data))
    //         .catch(err => console.error('Error fetching posts:', err));
    // }, []);

    return (
        <>
            <div style={{ display: 'grid' }}>
                {posts.map((post) => (
                    <Card key={post.id} sx={{ maxWidth: 500, marginBlock: 2 }} >
                        <CardHeader
                            title={post.title}
                        />
                        {/* <Stack> <Typography fontSize={12} margin={1}> | {post.readTime} min read </Typography> </Stack> */}
                        <span style={{ margin: 10 }}>
                            <p><small>{new Date(post.date).toLocaleDateString()} ● {post.readTime} min read</small></p>
                        </span>
                        <CardMedia
                            component="img"
                            height={100}
                            image="https://source.unsplash.com/random?wallpapers"
                            alt="Paella dish"
                        />
                        <CardHeader subheader={post.summary} />
                        {/* <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <ReactMarkdown children={post.content} />
                            </Typography>
                        </CardContent> */}
                        <CardActions disableSpacing>
                            {/* <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton> */}
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
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

export default TechBlog;