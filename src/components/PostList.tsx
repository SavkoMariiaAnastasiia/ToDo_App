import React from 'react';
import PostItem from "./PostItem";
import SortBySelect from "./UI/SortBySelect";

const PostList = ({posts,title, remove}: any) => {
    return (
        <div>
            <h1>{title}</h1>
            <SortBySelect/>
            {posts.map((post: any, index: number) =>
                <PostItem remove={remove} number={index+1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;