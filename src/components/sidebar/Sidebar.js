import  './sidebar.css'
import {RssFeed, PlayCircleFilled, School, Event, WorkOutline, HelpOutline, Bookmark, Group, MessageOutlined} from "@material-ui/icons"
import {Users} from "../../dummyData"
import CloseFriend from '../closeFriend/closeFriend';

export default function sidebar() {
  return (
    <div className='side'>
      <div className="sideWrapper">
        <ul className="sideList">
            <li className="sideListItem">
            <RssFeed className='sideIcon'/>
            <span className="sideListItemText">Feed</span>

            </li>
            <li className="sideListItem">
            <MessageOutlined className='sideIcon'/>
            <span className="sideListItemText">Chats</span>

            </li>
            <li className="sideListItem">
            <PlayCircleFilled className='sideIcon'/>
            <span className="sideListItemText">Videos</span>

            </li>
            <li className="sideListItem">
            <Group className='sideIcon'/>
            <span className="sideListItemText">Groups</span>

            </li>
            <li className="sideListItem">
            <Bookmark className='sideIcon'/>
            <span className="sideListItemText">Bookmarks</span>

            </li>
            <li className="sideListItem">
            <HelpOutline className='sideIcon'/>
            <span className="sideListItemText">Questions</span>

            </li>
            <li className="sideListItem">
            <WorkOutline className='sideIcon'/>
            <span className="sideListItemText">Jobs</span>

            </li>
            <li className="sideListItem">
            <Event className='sideIcon'/>
            <span className="sideListItemText">Events</span>

            </li>
            <li className="sideListItem">
            <School className='sideIcon'/>
            <span className="sideListItemText">Courses</span>

            </li>
        </ul>
        <button className="sideButton">Show More</button>
        <hr className="sideHr" />
        <ul className="sideFriendList">
           
            {Users.map(u => (
                <CloseFriend key={u.id} user={u}/>
            ))}
        </ul>
      </div>


    </div>
  );
}
