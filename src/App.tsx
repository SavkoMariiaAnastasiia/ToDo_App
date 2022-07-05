import React, {useState} from "react"
import {Appp} from "./components/UI/AppUi"
import PostList from "./components/PostList";
import InputPost from "./components/UI/InputPost";
import Modal from "./components/UI/Modal";
import {usePosts} from "./components/hooks/usePosts";


function App() {
    const [item,setItem] = useState([
        {id:1,title:"aaaa",body:"description",check:false},
        {id:2,title:"bbbbb",body:"description",check:false},
    ])
    const statusItem = (status: any) => {
        return status
    }
    const [filtitem,setFiltitem] = useState([...item])
    const [selectSort, setSelectSort]=useState("")
    const [search, setSearch]=useState("")
    const sortAndSerched = usePosts(item,statusItem,search)


    const createItem = (newPost: any) => {
        setItem([...item, newPost])
    }

    const deleteItem = (post: any) => {
        setItem(item.filter(p => p.id !==post.id))
    }

    return (
        <Appp>
            <Modal/>
            <InputPost create={createItem}/>
            <PostList
                status={statusItem}
                remove={deleteItem} posts={sortAndSerched} title={"To Do list stady"}
                value={search} onChange={(e :any) => setSearch(e.target.value)}
            />
        </Appp>
    );
}

export default App;