import { ClassNames } from "@emotion/react"
import {
    Menu,
    Home,
    Explore,
    Subscript,
    VideoLibrary,
} from "@mui/icons-material";

const Sidebar = ()=>{
    return (
        <div ClassName="sidebar">
            <div className="sidebarwrapper">
                <Menu />
                <div className="sidebarItem active">
                    <Home />
                    <span>Home</span>
                </div>
                <div className="sidebarItem">
                <Explore />
                <span>Explore</span>
                </div>
                <div className="idebarItem">
                    <Subscript />
                    <span>Subscription</span>
                </div>
                <div className="sidebarItem">
                    <VideoLibrary />
                    <span>Library</span>
                </div>
            </div>
            </div>

    )
}

export default Sidebar;