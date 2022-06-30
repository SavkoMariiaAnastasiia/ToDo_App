import React, {useState} from "react"
import {Appp} from "./UI/AppUi"
import PostList from "./components/PostList";
import {Button, TextField } from "@mui/material";


function App() {
    const [posts,setPost] = useState([
        {id:1,title:"Study posts",body:"description"},
        {id:2,title:"Study posts 2",body:"description"},
        {id:3,title:"Study posts 3",body:"description"},
    ])
    const [posts2,setPost2] = useState([
        {id:1,title:"Work posts",body:"description"},
        {id:2,title:"Work posts 2",body:"description"},
        {id:3,title:"Work posts 3",body:"description"},
    ])
    return (
        <Appp>

                <TextField id="outlined-basic" label="name" variant="outlined" />
                <TextField id="outlined-basic" label="body" variant="outlined" />
                <Button variant="outlined" color="success" size="large">create a post</Button>
            <PostList posts={posts} title={"To Do list stady"}/>
            <PostList posts={posts2} title={"To Do list work"}/>
        </Appp>
    );
}

export default App;