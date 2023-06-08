import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircleXmark,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function EditCard(props) {
  const {
    first,
    onCardClick,
    isExpanded,
    picture,
    defaultValue,
    onSubmit,
  } = props;
  const accordionIconClass = isExpanded
    ? "accordion-icon reversed"
    : "accordion-icon";

  const [cardState, setCardState] = useState(
    defaultValue || {
      gender: "",
      country: "",
      description: "",
      age: "",
      picture,
      first
    }
  );

  const [errorMessage, setErrorMessage] = useState("");
  const handleDelete = (e) => {
    e.preventDefault();
    setCardState(null);
  };



const handleSubmit = (e) => {
    e.preventDefault();
    if (
      cardState.age.trim() === "" ||
      cardState.gender.trim() === "" ||
      cardState.country.trim() === "" ||
      cardState.description.trim() === ""
    ) {
      const errorMessage = "Please fill in all fields";
      setErrorMessage(errorMessage);
      return;
    }
  
    onSubmit(cardState);
    console.log(cardState);
  };
    const handleChange = (e) => {
        setCardState((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
        }));
    };

  if (!cardState) {
    return null;
  }

  return (
    <div>
      <div className="card edit-card">
        <div className="top-section">
          <div className="user">
            <img className="user-icon" src={picture} alt="" />
            <h2 className="first-name">{first}</h2>
          </div>
          <FontAwesomeIcon
            className={accordionIconClass}
            icon={faChevronDown}
            onClick={onCardClick}
          />
        </div>
        <div className="middle-section">
          <div className="Age">
            <h4>Age</h4>
            <input
              value={cardState.age}
              name="age"
              type="number"
              onChange={handleChange}
            ></input>
          </div>

          <div className="gender edit-gender">
            <h4>Gender</h4>
            <div className="gender-input">
              <select
                className="edit"
                name="gender"
                value={cardState.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
                <option value="Rather not say">Rather not say</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="country edit-country">
            <h4>Country</h4>
            <input
              className="edit"
              type="text"
              pattern="[^\d]*"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\d/g, "");
              }}
              name="country"
              value={cardState.country}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="description-section edit-description">
          <h2>Description</h2>
          <textarea
            className="description"
            name="description"
            value={cardState.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="bottom-section">
          <FontAwesomeIcon
            className="delete"
            icon={faCircleXmark}
            onClick={handleDelete}
          />
          <FontAwesomeIcon
            className="save"
            icon={faCircleCheck}
            onClick={handleSubmit}
          />
        </div>
        {errorMessage && <h1 className="error-msg">{errorMessage}</h1>}
      </div>
    </div>
  );
}

export default EditCard;
