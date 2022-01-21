import React from 'react';

function Profile() { 
  // we are putting variables in place of hard-coded values (avator and name) for dynamic use
  const firstName = "Amy"
  const lastName= "Mansell"
  const avatar = "/profile-hex.png"
  return (
    <aside>
    <div className="profile">
      <img className="profile__image" src={avatar} />
    </div>
    <br/>
    <div className="profile__name">
      <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
    </div>
  </aside>

  );
}

export default Profile;