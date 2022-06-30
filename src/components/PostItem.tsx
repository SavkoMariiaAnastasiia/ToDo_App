import React from 'react';
import {Button} from "@mui/material";
import {Root} from "../UI/AppUi";

const PostItem = (props: any) => {
    return (
        <div>
            <Root>
                <div>
                    <strong>{props.post.id}. {props.post.title} </strong>
                    <br/>{props.post.body}</div>
                <Button variant="outlined" color="error" size="small">delete</Button>
            </Root>
        </div>
    );
};

export default PostItem;