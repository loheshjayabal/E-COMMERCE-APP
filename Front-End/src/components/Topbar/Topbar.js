import {
    Mic,
    Search,
    VideoCall,
    Apps,
    Notifications,
} from "@mui/icons-material";
const Topbar =()=>{
    return(<div className="topBar">
        <div className="topLeft">
            <img src="" className="logo" alt=""></img>
            <span className="logoText">VideoTube</span>
        </div>
        <div className="topCenter">
            <div className="topSearch">
                <input type="text" placeholder="Search"></input>
                <div className="topSearchIconContainer">
                    <Search className="topSearchIcon"></Search>

                </div>
                <Mic />

            </div>
        </div>
        <div className="topRight">
            <VideoCall className="topIcon" />
            <Apps className="topIcon" />
            <Notifications className="topIcon" />
            <img src="" className="topIcon" alt=""/>

        </div>
    </div>)
}

export default Topbar;