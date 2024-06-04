import React, { useEffect, useState } from 'react';

const TechBlog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/content/TechBlogs.json`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.error('Error fetching posts:', err));
    }, []);

    return (
        <>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} />
                    <p>{post.excerpt}</p>
                    <p><strong>Author:</strong> {post.author}</p>
                    {/* <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p> */}
                    {/* <p><strong>Tags:</strong> {post.tags.join(', ')}</p> */}
                    {/* <p><strong>Read Time:</strong> {post.readTime}</p> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
                    {/* <div>
                        <strong>Comments:</strong>
                        {post.comments.map(comment => (
                            <div key={comment.id}>
                                <p><strong>{comment.author}</strong>: {comment.content}</p>
                                <p><small>{new Date(comment.date).toLocaleDateString()}</small></p>
                            </div>
                        ))}
                    </div> */}
                </div>
            ))}
        </>
    );
};

export default TechBlog;