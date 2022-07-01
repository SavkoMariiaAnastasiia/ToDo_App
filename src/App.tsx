import React, {useState} from "react"
import {Appp, Inp} from "./components/UI/AppUi"
import PostList from "./components/PostList";
import Input from "./components/Input";
import {Button, TextField} from "@mui/material";


function App() {
    const [posts,setPost] = useState([
        {id:1,title:"Study posts",body:"description"},
        {id:2,title:"Study posts 2",body:"description"},
        {id:3,title:"Study posts 3",body:"description"},
    ])

    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    const addNewPost = (e: any)=>{
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        setPost([...posts,newPost])
    }
    return (
        <Appp>
            <form>
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
            </form>
            <PostList posts={posts} title={"To Do list stady"}/>
        </Appp>
    );
}

export default App;