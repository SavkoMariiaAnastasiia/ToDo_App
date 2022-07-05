import {useMemo} from "react";

export const useSortedItems = (items: Array<any>, status: string) => {
    const sortedItems = useMemo(() => {
        if (status === 'in process') {
            return items.filter(item => !item.check);
        }
        if (status === 'done') {
            return items.filter(item => item.check);
        }
        if (status === 'all') {
            return items;
        }
        return items;
    }, [status, items]);

    return sortedItems;
};
export const usePosts = (item:any,status:any,search:any) => {
    const sortedPosts = useSortedItems(item,status)
    const sortAndSerched = useMemo(()=>{
        return sortedPosts.filter((post:any) => post.title.toLowerCase().includes(search))
    },[search, sortedPosts])
    return sortAndSerched
}