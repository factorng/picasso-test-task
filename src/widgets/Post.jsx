/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export function Post({ data, style, isLoading }) {
  if (isLoading) return <h3>Загрузка...</h3>;

  if (!data) return <div style={style}>Loading...</div>;
  return (
    <div style={style} key={data.id} id={data.id}>
      {data.id}
      <h3>{data.title}</h3>
      <p>
        {data.body}
      </p>
      <Link to={`/post/${data.id}`}>
        <button type="button">Просмотр</button>
      </Link>
    </div>
  );
}
