import {useMemo} from "react";

export const useSortedPosts = (posts: any,sort: any) => {
    const sortedPosts = useMemo(
        ()=>{
            if(sort){
                return [...posts].sort((a:any ,b:any) => a[sort].localeCompare(b[sort]))
            }
            return posts
        },[sort,posts]
    )
    return sortedPosts
}
export const usePosts = (posts:any,sort:any,search:any) => {
    const sortedPosts = useSortedPosts(posts,sort)
    const sortAndSerched = useMemo(()=>{
        return sortedPosts.filter((post:any) => post.title.toLowerCase().includes(search))
    },[search, sortedPosts])
    return sortAndSerched
}