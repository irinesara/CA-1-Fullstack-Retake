import React from 'react'

 const TeamMemberCard = ({Name,Title}) => {
  return (
    <div style={{
        border:'1px solid grey',
    }}>
        <h1>{Name}</h1>
        <p>{Title}</p>
    </div>
  )
}
export default TeamMemberCard;