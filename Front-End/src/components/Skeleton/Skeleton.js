export default function Skeleton({type}){
    //const COUNTER = 8;
    const FeedSkeleton = ()=>(
        <div className="postSk">
            <div className="postSkImage"></div>
            <div className="postSkInfo">
                <div className="postSkAvatar"></div>
                <div className="postSkDetails">
                    <div className="postSkText"></div>
                    <div className="postSkText sm"></div>
                </div>
            </div>
        </div>
    );
    if(type ==="feed") return Array(COUNTER).fill(<FeedSkeleton />)

    
}