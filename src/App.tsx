import React, {useState} from "react"
import {Appp} from "./components/UI/AppUi"
import PostList from "./components/PostList";
import InputPost from "./components/UI/InputPost";
import Modal from "./components/UI/Modal";
import {usePosts} from "./components/hooks/usePosts";


function App() {
    const [posts,setPosts] = useState([
        {id:1,title:"aaaa",body:"description"},
        {id:2,title:"bbbbb",body:"description"},
        {id:3,title:"ccccc",body:"description"},
    ])
    const [button,setButton] = useState([
        {id:11,text:"in the process",color:"warning",variant:"outlined"},
    ])
    const selectButton = () => {
      if(button[0]==={id:11,text:"in the process",color:"warning",variant:"outlined"}){
          button[0]={id:12,text:"finished",color:"success",variant:"Contained"}
      }
      else {
          button[0]={id:11,text:"in the process",color:"warning",variant:"outlined"}
      }
      return button
    }

    const [selectSort, setSelectSort]=useState("")
    const [search, setSearch]=useState("")
    const sortAndSerched = usePosts(posts,selectSort,search)


    const createPost = (newPost: any) => {
        setPosts([...posts, newPost])
    }

    const deletePost = (post: any) => {
        setPosts(posts.filter(p => p.id !==post.id))
    }

    return (
        <Appp>
            <Modal/>
            <InputPost create={createPost}/>
            <PostList
                button={button}
                remove={deletePost} posts={sortAndSerched} title={"To Do list stady"}
                value={search} onChange={(e :any) => setSearch(e.target.value)}
            />
        </Appp>
    );
}

export default App;