import { FriendListItemContainer, Status, Name } from "."

export default function FriendListItem({isOnline, avatar, name}) {
      return  <FriendListItemContainer className="item">
      <Status isOnline={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </FriendListItemContainer>}
    