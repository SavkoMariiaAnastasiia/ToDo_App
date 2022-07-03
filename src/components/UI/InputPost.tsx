import React, {useState} from 'react';
import {Inp} from "./AppUi";
import {Button, TextField} from "@mui/material";

const InputPost = ({create}: any) => {
    const [post,setPost] = useState({title:"",body:""})

    const addNewPost = (e: any)=>{
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:"",body:""})
    }

    return (
            <form>
                <Inp>
                    <TextField
                        id="outlined-basic"
                        label="name"
                        variant="outlined"
                        value={post.title}
                        onChange={e => setPost({...post, title: e.target.value})}
                    />
                    <TextField id="outlined-basic"
                               label="body"
                               variant="outlined"
                               value={post.body}
                               onChange={e => setPost({...post, body: e.target.value})}
                    />
                    <Button onClick={addNewPost} variant="outlined" color="success" size="large">create a post</Button>
                </Inp>
            </form>
    )
}

export default InputPost