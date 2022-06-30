import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts,title}: any) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post: any) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;