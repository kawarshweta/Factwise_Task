import React, { useState } from "react";
import UserAge from "./UserAge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTrashCan,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import DeletePopup from "./DeletePopup";

function Card(props) {
  const {
    first,
    dob,
    gender,
    country,
    description,
    onCardClick,
    isExpanded,
    picture,
    editCard,
    cardId,
    age,
    deleteCard,
  } = props;

  const accordionIconClass = isExpanded
    ? "accordion-icon reversed"
    : "accordion-icon";

  const [deleteMode, setDeleteMode] = useState(false);

  const handleDelete = (cardId) => {
    // console.log("cardId", cardId);
    deleteCard(cardId);
    console.log("user deleted", cardId);
  };

  const isAdult = dob >= 18;

  return (
    <div>
      <div className={`card ${isExpanded ? "expanded" : ""}`}>
        <div className="top-section">
          <div className="user">
            <img className="user-icon" src={picture} alt="" />
            <h2>{first}</h2>
          </div>
          <FontAwesomeIcon
            className={accordionIconClass}
            icon={faChevronDown}
            onClick={onCardClick}
          />
        </div>

        {isExpanded && (
          <>
            <div className="middle-section">
              {dob ? (
                <div className="user-age-container">
                  <UserAge dateOfBirth={dob} />
                </div>
              ) : (
                <div>
                  <h1>Age</h1>
                  <div className="age-card">{age}</div>
                </div>
              )}
              <div className="gender">
                <h4>Gender</h4>
                <h3>{gender}</h3>
              </div>
              <div className="country">
                <h4>Country</h4>
                <input type="text" value={country} />
              </div>
            </div>
            <div className="description-section">
              <h2>Description</h2>
              <textarea className="description" value={description}></textarea>
            </div>
            <div className="bottom-section">
              {deleteMode ? (
                <DeletePopup
                  setDeleteMode={setDeleteMode}
                  handleDelete={handleDelete}
                  cardId={cardId}
                />
              ) : (
                <>
                  <FontAwesomeIcon
                    className="trash-icon"
                    icon={faTrashCan}
                    onClick={() => setDeleteMode(true, cardId)}
                  />
                  {!isAdult && (
                    <FontAwesomeIcon
                      className="edit-icon"
                      icon={faPen}
                      onClick={() => editCard(cardId)}
                    />
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
