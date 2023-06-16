import React, { useState } from "react";
import { createRoot } from "react-dom";

import Card from "./src/components/Card";
import EditCard from "./src/components/EditCard";
import celebrities from "./src/utils/celebrities";

const App = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [openEditCard, setOpenEditCard] = useState(false);
  const [cardToEdit, setCardToEdit] = useState(null);
  const [openDeleteCard, setOpenDeleteCard] = useState(false);

  const handleCardClick = (cardId) => {
    setExpandedCard((prevState) => (prevState === cardId ? null : cardId));
  };

  const handleEditCard = (cardId) => {
    setCardToEdit(cardId);
    setOpenEditCard(true);
  };

  const setCardToDelete = (cardId) => {
    const filteredCelebrities = celebrities.filter((celebrity) => celebrity.id !== cardId);
    setOpenDeleteCard(false);
  };

  const handleDeleteCard = (cardId) => {
    setCardToDelete(cardId);
    setOpenDeleteCard(true);
  };

  const handleSubmit = (updatedCard) => {
    celebrities[cardToEdit] = updatedCard;
    setOpenEditCard(false);
  };

  return (
    <div>
       <h1>Factwise Assessment</h1>
      {openEditCard && cardToEdit !== null && (
        <EditCard
          key={cardToEdit}
          {...celebrities[cardToEdit]}
          onCardClick={() => setOpenEditCard(false)}
          onSubmit={handleSubmit}
        />
      )}

      {celebrities.map((card, index) => (
        <Card
          editCard={() => handleEditCard(index)}
          key={card.id}
          {...card}
          isExpanded={expandedCard === card.id}
          onCardClick={() => handleCardClick(card.id)}
          deleteCard={() => handleDeleteCard(card.id)}
        />
      ))}
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
