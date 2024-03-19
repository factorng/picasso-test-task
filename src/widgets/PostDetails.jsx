/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './PostDetails.css';

export function PostDetails({ data, handleButtonClick }) {
  if (!data.id) return <h3>Загрузка...</h3>;

  return (
    <div className="post">
      <p>
        Номер:
        {data.id}
      </p>
      <p>
        Заголовок:
        {data.title}
      </p>
      <p className="post__description">
        Описание:
        {data.body}
      </p>
      <Link to="/">
        <button onClick={() => handleButtonClick()} type="button">Назад</button>
      </Link>
    </div>
  );
}
