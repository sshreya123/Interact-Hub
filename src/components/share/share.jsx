import "./share.css"
import {PermMedia,Label, Room, EmojiEmotions} from '@material-ui/icons'

export default function share() {
  return (
    <div className="share">
        <div className="shareWrapper">
        <div className="top">
        <img className="ProfileImg" src="/assets/person/1.jpeg" alt="" srcset="" />
    <input placeholder="What's in your mind ? " className="shareInput" />

        </div>
        <hr className="shareHr" />
        <div className="bottom">
        <div className="options">
            <div className="option">
            <PermMedia htmlColor="tomato" className="Icon"/>
                <span className="optionText">Photo or Video</span>
            </div>
            <div className="option">
            <Label htmlColor="blue" className="Icon"/>
                <span className="optionText">Tag</span>
            </div>
            <div className="option">
            <Room  htmlColor="green" className="Icon"/>
                <span className="optionText">Location</span>
            </div>
            <div className="option">
            <EmojiEmotions  htmlColor="goldenrod" className="Icon"/>
                <span className="optionText">Feelings</span>
            </div>
        </div>
        <button className="shareButton">Share</button>
        </div>

        </div>


  
      
    </div>
  )
}
