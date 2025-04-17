import React from 'react'
import TeamMemberCard from './component/TeamMemberCard';

 const App = () => {
  return (
    <div>
      <h1>Team Member Card</h1>
      <TeamMemberCard
      Name="John Doe"
      Title="Software Engineer"
      />
      <TeamMemberCard
      Name="Doe John"
      Title="Mechanical Engineer"
      />
    </div>
  )
}
export default App;