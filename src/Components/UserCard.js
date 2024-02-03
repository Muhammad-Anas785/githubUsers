import React from "react";

const UserCard = (props) => {
  const { allData } = props;
  const { image, firstName, lastName, age, gender, email } = allData;
  return (
    <div className="user-card">
      <div className="user-img">
        <img src={image} alt="" className="avatar" />
      </div>
      <div className="card-content">
        <h3 className="user-name">{firstName +" "+lastName}</h3>
        <h5 className="user-details">Age: {age}</h5>
        <h5 className="user-details">Gender: {gender}</h5>
        <h5 className="user-details">Email: {email}</h5>
      </div>
    </div>
  );
};
export default UserCard;
