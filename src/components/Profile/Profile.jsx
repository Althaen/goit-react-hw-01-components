import { ProfileContainer, Avatar, Description, Name, Tag, Location, ProfileStats, ProfileStatsItem, Label, Quantity } from "./Profile.styled"
import PropTypes from 'prop-types'

export default function Profile({username, tag, location, avatar, stats:{followers, views, likes}}) {
  return <ProfileContainer className="profile">
  <Description className="description">
    <Avatar
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <Name className="name">{username}</Name>
    <Tag className="tag">@{tag}</Tag>
    <Location className="location">{location}</Location>
  </Description>

  <ProfileStats className="stats">
    <ProfileStatsItem>
      <Label className="label">Followers</Label>
      <Quantity className="quantity">{followers}</Quantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <Label className="label">Views</Label>
      <Quantity className="quantity">{views}</Quantity>
    </ProfileStatsItem>
    <ProfileStatsItem>
      <Label className="label">Profile</Label>
      <Quantity className="quantity">{likes}</Quantity>
    </ProfileStatsItem>
  </ProfileStats>
</ProfileContainer>
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: 
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
};