import "./Topbar.css"
import {Search, Person, Chat, Notifications} from '@material-ui/icons'
export default  function Topbar(){
    return(
      <div className="TopContainer">
      <div className="topLeft">
      <span className="logo">Interact Hub</span>

      </div>
      <div className="topCenter">
        <div className="search">
            <Search className="searchIcon"/>
            <input placeholder="Search for friend , post or video " className="searchInput" />
        </div>
      </div>
      <div className="topRight">
      <div className="topLinks">
        <span className="topLink">Homepage</span>
        <span className="topLink">Timeline</span>
      </div>
      <div className="topIcons">
        <div className="topIconsItem">
            <Person/>
            <span className="topIconBadge">1</span>
        </div>
        <div className="topIconsItem">
            <Chat/>
            <span className="topIconBadge">2</span>
        </div>
        <div className="topIconsItem">
            <Notifications/>
            <span className="topIconBadge">3</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" srcset="" className="topImage" />

      </div>


      </div>
    )
}