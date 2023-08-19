import Post from "../post/Post";
import "./Feed.css"

const Feed = ()=>{

    // const [isLoading, setIsLoading]=useState(true);
    // const [videos, setVideos]=useState();

    // useEffect(()=>{
    //     const getVideos= async()=>{
    //         setIsLoading(true)
    //         try{
    //             const res= await axios.get('api')
    //             setVideos(res.data)

    //         }catch(err){
    //             setIsLoading(false)
    //         }
    //     }

    // },[])

    //console.log(videos)
    return(<div className="feed">
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
    </div>)
}

export default Feed;