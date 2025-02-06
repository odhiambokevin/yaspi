import axios from "axios";

//get works
const getWorks = async ()=>{
    const res = await axios.get("http://yaspi-be.vercel.app/api/v1/works/all/");
    return res.data
}

const worksApi = {getWorks}

export default worksApi;