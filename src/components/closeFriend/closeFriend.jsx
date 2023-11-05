import "./closeFriend.css"

export default function closeFriend({user}) {
  return (
    <li className="sideFriend">
                <img src={user.profilePicture} alt="" className="sideFriendImg" />
                <span className="sideFriendName">{user.username}</span>
            </li>
  )
}
