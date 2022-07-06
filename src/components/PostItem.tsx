import React, {useState} from 'react';
import {Checkbox} from "@mui/material";
import {Icons, Item, Status} from "./UI/AppUi";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeadLine from "./UI/DeadLine";

const PostItem = (props: any) => {
    const [statusCheck,setStatusCheck]=useState({
        status:"Status: in process",color:"orange"
    })

    const checked = () => {
        props.post.check = !props.post.check;
        if(props.post.check){
            setStatusCheck({status: "Status: finished", color:"olivedrab"})
        }
        else {
            setStatusCheck({ status:"Status: in process",color:"orange"})
        }
        return props.post.check
    }

    return (
        <Item>
            <div>
                <strong>{props.number}. {props.post.title} </strong>
                <br/>{props.post.body}</div>
            <div>
                <DeadLine/>
                <Status color={statusCheck.color}>{statusCheck.status}</Status>
                <Icons>
                <Checkbox icon={<TaskAltIcon />} checkedIcon={<TaskAltIcon />} color={"success"} onClick={checked}/>
            <IconButton
                onClick={() => props.remove(props.post)} color={"error"}>
                <DeleteIcon />
            </IconButton>
                </Icons>
            </div>
        </Item>
    );
};

export default PostItem;