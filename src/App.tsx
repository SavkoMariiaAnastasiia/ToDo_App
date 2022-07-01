import React, {useState} from "react"
import {Appp} from "./components/UI/AppUi"
import PostList from "./components/PostList";
import Input from "./components/Input";


function App() {
    const [posts,setPost] = useState([
        {id:1,title:"Study posts",body:"description"},
        {id:2,title:"Study posts 2",body:"description"},
        {id:3,title:"Study posts 3",body:"description"},
    ])
    return (
        <Appp>
            <form>
            <Input/>
            </form>
            <PostList posts={posts} title={"To Do list stady"}/>
        </Appp>
    );
}

export default App;