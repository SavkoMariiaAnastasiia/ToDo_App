import React, {useState} from "react"
import {Appp, Bg} from "./components/UI/AppUi"
import PostList from "./components/PostList";
import InputPost from "./components/UI/InputPost";
import {usePosts} from "./components/hooks/usePosts";


function App() {
    const [item, setItem] = useState([
        { id: 1, title: 'Hello', body: 'This is your first task here', check: false },
    ]);
    const [statusItem, setStatusItem] = useState('all');
    const [search, setSearch] = useState('');
    const sortAndSearched = usePosts(item, statusItem, search);

    const createItem = (newPost: any) => {
        setItem([...item, newPost]);
    };

    const deleteItem = (post: any) => {
        setItem(item.filter(p => p.id !== post.id));
    };

    return (
        <Bg>
            <Appp>
                <InputPost create={createItem} />
                <PostList
                    status={statusItem}
                    setStatus={setStatusItem}
                    remove={deleteItem}
                    posts={sortAndSearched}
                    title={'To Do list study'}
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                />
            </Appp>
        </Bg>

    );
}

export default App;