import React, { useState } from "react";
import axios from "axios";
import DeleteArticle from "./DeleteArticle";

const Article = ({ article }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState();

  const handleEdit = (e) => {
    e.preventDefault();

    const data = {
      pseudo: article.author,
      date: article.date,
      content: editedContent,
    };

    if (editedContent) {
      axios
        .put("http://localhost:3003/articles/" + article.id, data)
        .then(() => {
          setIsEditing(false);
        });
    }
  };

  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  return (
    <div className="article">
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posté le {dateParser(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea
          onChange={(e) => setEditedContent(e.target.value)}
          autoFocus
          defaultValue={editedContent ? editedContent : article.content}
        ></textarea>
      ) : (
        <p>{editedContent ? editedContent : article.content}</p>
      )}
      <div className="btn-container">
        {isEditing ? (
          <button onClick={handleEdit}>Valider</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <DeleteArticle id={article.id} />
      </div>
    </div>
  );
};

export default Article;
