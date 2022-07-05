import React from 'react';
import {Checkbox} from "@mui/material";
import {Root} from "./UI/AppUi";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const PostItem = (props: any) => {
    const chacked = () => {
        props.post.check = props.post.check !== true;
        console.log(props.post.check)
        return props.post.check
    }

    return (
        <Root>
            <div>
                <strong>{props.number}. {props.post.title} </strong>
                <br/>{props.post.body}</div>
            <div>
                <Checkbox icon={<TaskAltIcon />} checkedIcon={<TaskAltIcon />} color={"success"} onClick={chacked}/>

            <IconButton
                onClick={() => props.remove(props.post)} color={"error"}>
                <DeleteIcon />
            </IconButton>
            </div>
        </Root>
    );
};

export default PostItem;