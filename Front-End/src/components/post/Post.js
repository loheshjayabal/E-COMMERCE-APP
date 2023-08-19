import "./Post.css"

const Post = ()=>{
    return(<div className="post">
        <div className="postImgContainer">
            <img src="" className="postImage"></img>
            <span className="postDuration">12:00</span>
        </div>
        <div className="postInfoContainer">
            <img className="postAvatar" src=""></img>
            <div className="postInfo">
                <span className="postTitle">Sky Diving from Outer space</span>
                <span className="postChannel">Kakashi channel</span>
                <span className="postDetails">1k views . 12weeks </span>
            </div>
        </div>

    </div>)
}

export default Post;