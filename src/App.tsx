import React, {useMemo, useState} from "react"
import {Appp} from "./components/UI/AppUi"
import PostList from "./components/PostList";
import InputPost from "./components/UI/InputPost";


function App() {
    const [posts,setPosts] = useState([
        {id:1,title:"aaaa",body:"description"},
        {id:2,title:"bbbbb",body:"description"},
        {id:3,title:"ccccc",body:"description"},
    ])

    const [selectSort, setSelectSort]=useState("")
    const [search, setSearch]=useState("")

    const sortedPosts = useMemo(
        ()=>{
            if(selectSort){
                return [...posts].sort((a:any ,b:any) => a[selectSort].localeCompare(b[selectSort]))
            }
            return posts
        },[setSelectSort,posts]
    )
    const sortAndSerched = useMemo(()=>{
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search))
    },[search, sortedPosts])

    const createPost = (newPost: any) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post: any) => {
        setPosts(posts.filter(p => p.id !==post.id))
    }

    const sortPost = (sort: any) => {
        setSelectSort(sort)
    }

    return (
        <Appp>
            <InputPost create={createPost}/>
            <PostList
                remove={deletePost} posts={sortAndSerched} title={"To Do list stady"}
                value={search} onChange={(e :any) => setSearch(e.target.value)}
            />
        </Appp>
    );
}

export default App;