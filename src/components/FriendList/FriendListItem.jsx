import { FriendListItemContainer, StatusIsOffline, StatusIsOnline, Name } from "."

export default function FriendListItem({isOnline, avatar, name}) {
      return  <FriendListItemContainer className="item">
      {isOnline ? <StatusIsOnline></StatusIsOnline> : <StatusIsOffline></StatusIsOffline>}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </FriendListItemContainer>}
    