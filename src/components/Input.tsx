import React, {useRef, useState} from 'react';
import {Inp} from "./UI/AppUi"
import {Button, TextField} from "@mui/material";

const Input = (setPost: any) => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    const addNewPost = (e: any)=>{
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        console.log(newPost)
    }
    return (
            <Inp>
                <TextField
                    id="outlined-basic"
                    label="name"
                    variant="outlined"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <TextField id="outlined-basic"
                           label="body"
                           variant="outlined"
                           value={body}
                           onChange={e => setBody(e.target.value)}
                />
                <Button onClick={addNewPost} variant="outlined" color="success" size="large">create a post</Button>
            </Inp>
    );
};

export default Input;