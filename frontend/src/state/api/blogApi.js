import axios from "axios";

//get blogs
const getBlogs = async ()=>{
    const res = await axios.get("http://yaspi-be.vercel.app/api/v1/blogs/all/");
    return res.data
}

const blogApi = {getBlogs}

export default blogApi;