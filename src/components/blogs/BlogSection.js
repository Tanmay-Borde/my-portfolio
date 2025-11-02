import React, { useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
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
import { useLocation } from 'react-router-dom';
import { Alert, CircularProgress, Snackbar, createTheme } from '@mui/material';
import { resolveAssetPath } from '../../utils/assetPaths';
import { BlogContainer, CardLink, StyledCard } from './BlogLayout';
import { isMobile } from 'react-device-detect';

const readerTheme = createTheme({
    typography: {
        body1: {
            color: 'rgba(255,255,255,0.92)',
            fontFamily: 'inherit',
            lineHeight: 1.9,
            fontSize: 18,
            marginBottom: 16,
            wordSpacing: 0.5,
        },
    },
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

const bodyFontSizes = { xs: 16, sm: 17, md: 18 };

const createMarkdownComponents = () => ({
    h1: ({ node: _node, ...props }) => (
        <Typography
            component="h1"
            sx={{
                margin: 0,
                marginBottom: 3,
                fontWeight: 700,
                fontSize: { xs: 26, sm: 30, md: 34 },
                lineHeight: 1.2,
                color: 'rgba(255,255,255,0.95)',
            }}
            {...props}
        />
    ),
    h2: ({ node: _node, ...props }) => (
        <Typography
            component="h2"
            sx={{
                margin: 0,
                marginBottom: 3,
                fontWeight: 700,
                fontSize: { xs: 22, sm: 24, md: 26 },
                lineHeight: 1.3,
                color: 'rgba(255,255,255,0.95)',
            }}
            {...props}
        />
    ),
    h3: ({ node: _node, ...props }) => (
        <Typography
            component="h3"
            sx={{
                margin: 0,
                marginBottom: 2.5,
                fontWeight: 600,
                fontSize: { xs: 20, sm: 21, md: 22 },
                lineHeight: 1.35,
                color: 'rgba(255,255,255,0.9)',
            }}
            {...props}
        />
    ),
    h4: ({ node: _node, ...props }) => (
        <Typography
            component="h4"
            sx={{
                margin: 0,
                marginBottom: 2,
                fontWeight: 600,
                fontSize: { xs: 18, sm: 19, md: 20 },
                lineHeight: 1.4,
                color: 'rgba(255,255,255,0.88)',
            }}
            {...props}
        />
    ),
    p: ({ node: _node, ...props }) => (
        <Typography
            component="p"
            sx={{
                margin: 0,
                marginBottom: 3,
                lineHeight: 1.9,
                fontSize: bodyFontSizes,
                color: 'rgba(255,255,255,0.9)',
                whiteSpace: 'pre-line',
                wordBreak: 'break-word',
            }}
            {...props}
        />
    ),
    ul: ({ node: _node, ...props }) => (
        <ul
            {...props}
            style={{
                paddingLeft: '1.1rem',
                margin: '0 0 1.2rem',
                lineHeight: 1.9,
                listStylePosition: 'outside',
            }}
        />
    ),
    li: ({ node: _node, ...props }) => (
        <Typography
            component="li"
            sx={{
                marginBottom: 1.5,
                fontSize: bodyFontSizes,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.9)',
            }}
            {...props}
        />
    ),
    img({ node: _node, ...props }) {
        const imagePath = props.src;
        const altText = props.alt;
        const maxWidth = isMobile ? '100%' : '80%';

        return (
            <img
                {...props}
                src={resolveAssetPath(imagePath)}
                alt={altText}
                style={{
                    display: 'block',
                    margin: '24px auto',
                    width: '100%',
                    maxWidth,
                    height: 'auto',
                    borderRadius: '16px',
                    boxShadow: '0 18px 45px rgba(15, 23, 42, 0.38)',
                }}
            />
        );
    },
});

const BlogSection = ({ contentJsonPath }) => {
    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [isCopied, setIsCopied] = useState(false);
    const [error, setError] = useState('');

    const markdownComponents = useMemo(() => createMarkdownComponents(), []);

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

    const togglePostExpansion = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, expanded: !post.expanded } : post
            )
        );
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}${contentJsonPath}`);

                if (!response.ok) {
                    throw new Error('Unable to fetch blog list.');
                }

                const data = await response.json();

                const postsWithContent = await Promise.all(
                    data.map(async (post) => {
                        const contentResponse = await fetch(`${process.env.PUBLIC_URL}${post.contentFile}`);

                        if (!contentResponse.ok) {
                            throw new Error(`Unable to load content for ${post.title}.`);
                        }

                        const content = await contentResponse.text();
                        return { ...post, content };
                    })
                );

                setPosts(postsWithContent);
            } catch (err) {
                setError(err.message || 'Something went wrong while loading blogs.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [contentJsonPath]);

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

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, [location.hash]);

    return (
        <>
            <BlogContainer
                sx={{
                    width: '100%',
                    minWidth: isMobile? 'auto' : 1000,
                    alignSelf: 'center',
                    px: { xs: 2, sm: 3, md: 0 },
                    pt: { xs: 2.5, sm: 3.5 },
                }}
            >
                {isLoading && (
                    <CircularProgress sx={{ alignSelf: 'center', mt: 8 }} />
                )}

                {!isLoading && error && (
                    <Alert severity='error'>{error}</Alert>
                )}

                {!isLoading && !error && posts.map((post) => (
                    <CardLink
                        to={`/blogs/${post.section}#post-${post.id}`}
                        key={post.id}
                    >
                        <StyledCard id={`post-${post.id}`} sx={{ color: 'white' }}>
                            <CardHeader
                                title={post.title}
                                titleTypographyProps={{ fontWeight: 600, color: 'white', fontSize: { xs: 20, sm: 22 } }}
                                subheader={`By ${post.author} • ${new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })} • ${post.readTime} min read`}
                                subheaderTypographyProps={{ color: 'rgba(255,255,255,0.72)', fontSize: { xs: 13, sm: 14 } }}
                                action={
                                    <IconButton
                                        onClick={(event) => {
                                            event.preventDefault();
                                            event.stopPropagation();
                                            handleCopy(`${window.location.origin}/my-portfolio/#/blogs/${post.section}#post-${post.id}`);
                                        }}
                                        sx={{ color: 'rgba(255,255,255,0.7)' }}
                                    >
                                        <ShareIcon />
                                    </IconButton>
                                }
                                sx={{ pb: 0 }}
                            />

                            <CardMedia
                                component="img"
                                sx={{
                                    mt:2,
                                    height: { xs: 220, sm: 260, md: 300 },
                                    minHeight: { xs: 220, sm: 260, md: 300 },
                                    objectFit: 'cover',
                                    flexShrink: 0,
                                }}
                                image={resolveAssetPath(post.imageURL)}
                                alt={post.credits}
                            />

                            <CardContent sx={{ pt: 2, pb: 1, px: { xs: 2.5, sm: 3 }, flexGrow: 1 }}>
                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                                    {`Image by ${post.credits}`}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 2, color: 'rgba(255,255,255,0.88)', lineHeight: 1.85, minHeight: { xs: 0, sm: 72 } }}>
                                    {post.summary}
                                </Typography>
                            </CardContent>

                            <CardActions disableSpacing sx={{ px: { xs: 1.5, sm: 2.5 }, py: 1, justifyContent: 'flex-end' }}>
                                <ExpandMore
                                    expand={post.expanded}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                        togglePostExpansion(post.id);
                                    }}
                                    aria-expanded={post.expanded}
                                    aria-label="show more"
                                    sx={{ color: 'rgba(255,255,255,0.7)' }}
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>

                            <Collapse in={post.expanded} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                                <CardContent sx={{ pt: 0, pb: 3, px: { xs: 2.5, sm: 3 } }}>
                                    <Typography theme={readerTheme} component="div" sx={{ color: 'rgba(255,255,255,0.92)', '& p': { mb: 2 } }}>
                                        <ReactMarkdown components={markdownComponents} children={post.content} />
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </StyledCard>
                    </CardLink>
                ))}
            </BlogContainer>
            <Snackbar open={isCopied} autoHideDuration={6000}>
                <Alert severity='success' variant='standard'>
                    {`Link Copied Successfully`}
                </Alert>
            </Snackbar>
        </>
    );
};

export default BlogSection;
