import * as React from 'react';
import Container from '@mui/material/Container';
import Slider from 'react-slick';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { isMobile } from 'react-device-detect';

const FeaturedBlogs = [
    {
        "id": "TB1",
        "section": "tech-blogs",
        "title": "Why NVIDIA is pushing hard for on-device ML accelerators?",
        "readTime": "2",
        "date": "2024-06-01",
        "contentFile": "/content/contentFiles/TBMD/TB1.md",
        "author": "Tanmay Borde",
        "tags": [],
        "summary": "This is the summary of TB1 post.",
        "imageURL": "/content/images/TB1.jpg",
        "credits": "TechCrunch",
        "metaDescription": [],
        "relatedPosts": [],
        "sources": [],
    },
    {
        "id": "BB2",
        "section": "business-blogs",
        "title": "Business Post 2.",
        "readTime": "3",
        "date": "2024-06-01",
        "contentFile": "/content/contentFiles/BBMD/BB2.md",
        "author": "Tanmay Borde",
        "tags": "",
        "summary": "This is the summary of TB2 post.",
        "imageURL": "/content/images/TB2.jpg",
        "credits": "TechCrunch",
        "metaDescription": "",
        "relatedPosts": [
            "",
            ""
        ],
        "sources": [
            "",
            ""
        ]
    },
    {
        "id": "HB1",
        "section": "humanity-blogs",
        "title": "HB Post 1.",
        "readTime": "2",
        "date": "2024-06-01",
        "contentFile": "/content/contentFiles/HBMD/HB1.md",
        "author": "Tanmay Borde",
        "tags": [],
        "summary": "This is the summary of TB1 post.",
        "imageURL": "/content/images/TB1.jpg",
        "credits": "TechCrunch",
        "metaDescription": [],
        "relatedPosts": [],
        "sources": []
    },
]

export default function Home() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: isMobile ? false : true
    }

    return (
        <>
            <Container sx={{ mt: 1, mb: 1 }}>
                <div className="slider-container">
                    <Typography variant='h4' component="div">
                        {`Featured Blogs`}
                    </Typography>
                    <Typography variant='subtitle2' color={'lightgrey'} mb={1}>
                        {`Better understanding of the world, one question at a time!`}
                    </Typography>
                    <Slider {...settings}>
                        {FeaturedBlogs.map((post) => (
                            <Link href={`${process.env.PUBLIC_URL}#/blogs/${post.section}#post-${post.id}`} underline="none">
                                {console.log(`${process.env.PUBLIC_URL}#/blogs/${post.section}#post-${post.id}`)}
                                <Card sx={{ width: '100%' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={`${process.env.PUBLIC_URL}${post.imageURL}`}
                                            alt="image post"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {post.summary}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        ))}
                    </Slider>
                </div>
                <Grid container spacing={1} direction={isMobile ? 'column' : 'row'}>
                    <Grid item xs={6} width={'100%'}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {`Recent Learnings`}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6} width={'100%'}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {`Quotes`}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Grid>
                </Grid>
            </Container >
        </>
    );
}