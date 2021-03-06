import React from 'react';
import PostItem from "./PostItem";
import Search from "./UI/Search";
import SortBySelect from "./UI/SortBySelect";

const PostList = (props: any) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Search value={props.value} onChange={props.onChange} />
            <SortBySelect status={props.status} setStatus={props.setStatus} />
            {props.posts.map((post: any, index: any) => (
                <PostItem remove={props.remove} number={index + 1} post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;