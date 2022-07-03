import React from 'react';
import {Button} from "@mui/material";
import {Root} from "./UI/AppUi";

const PostItem = (props: any) => {
    return (
            <Root>
                <div>
                    <strong>{props.number}. {props.post.title} </strong>
                    <br/>{props.post.body}</div>
                <Button
                    variant="outlined" color="error" size="small"
                    onClick={() => props.remove(props.post)}>delete</Button>
            </Root>
    );
};

export default PostItem;