import React, {useState} from "react"
import {Appp} from "./components/UI/AppUi"
import PostList from "./components/PostList";
import InputPost from "./components/UI/InputPost";


function App() {
    const [posts,setPosts] = useState([
        {id:1,title:"Study posts",body:"description"},
        {id:2,title:"Study posts 2",body:"description"},
        {id:3,title:"Study posts 3",body:"description"},
    ])

    const createPost = (newPost: any) => {
        setPosts([...posts, newPost])
    }
    const deletePost = (post: any) => {
        setPosts(posts.filter(p => p.id !==post.id))
    }


    return (
        <Appp>
            <InputPost create={createPost}/>
            <PostList remove={deletePost} posts={posts} title={"To Do list stady"}/>
        </Appp>
    );
}

export default App;