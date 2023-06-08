import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function DeletePopup ({ setDeleteMode, handleDelete, cardId }) {
    return (
      <div className="delete-confirmation">
        <div className="delete-box">
          <p>Are you sure you want to delete?</p>
          <FontAwesomeIcon onClick={() => setDeleteMode(false)} icon={faX} />
        </div>
        <div className="checkbox">
          <button className="nocheckbox" onClick={() => setDeleteMode(false)}>
            Cancel
          </button>
          <button className="yescheckbox" onClick={() => handleDelete(cardId)}>
            Delete
          </button>
        </div>
      </div>
    );
  }

  export default DeletePopup;