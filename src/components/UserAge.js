import React from "react";

import React from "react";

const UserAge = (props) => {
  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="age edit-age">
      <h4>Age</h4>
      {/* <h3>{calculateAge(props.dateOfBirth)} Years/</h3> */}
      <input  className="age-value" type="text" value={calculateAge(props.dateOfBirth)} readOnly />
    </div>
  );
};

export default UserAge;
