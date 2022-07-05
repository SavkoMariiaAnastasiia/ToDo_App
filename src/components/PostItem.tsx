import React from 'react';
import {Button} from "@mui/material";
import {Root} from "./UI/AppUi";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const PostItem = (props: any) => {
    console.log(props.button.text)
    return (
        <Root>
            <div>
                <strong>{props.number}. {props.post.title} </strong>
                <br/>{props.post.body}</div>
            <div>
                <Button variant="outlined" color="warning" size="small">{props.button.text}</Button>
            <IconButton
                onClick={() => props.remove(props.post)}>
                <DeleteIcon />
            </IconButton>
            </div>
        </Root>
    );
};

export default PostItem;