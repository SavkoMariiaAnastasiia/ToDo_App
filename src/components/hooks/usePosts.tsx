import {useMemo} from "react";

export const useSortedItems = (item: any, status: any) => {
    const sortedItems = useMemo(
        ()=>{
            if (status==="in process"){
                [...item].filter(function (e) {
                    console.log(!e.check)
                    return !e.check;
                })
                console.log("jdhsfkshb")
            }
            if (status==="done"){
                [...item].filter(function (e) {
                    return e.check;
                })
            }
            if (status==="all"){
                [...item].filter(function (e) {
                    return item;
                })
            }
            else return item;
        },[status,item]
    )
    return sortedItems
}
export const usePosts = (item:any,status:any,search:any) => {
    const sortedPosts = useSortedItems(item,status)
    const sortAndSerched = useMemo(()=>{
        return sortedPosts.filter((post:any) => post.title.toLowerCase().includes(search))
    },[search, sortedPosts])
    return sortAndSerched
}