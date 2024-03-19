import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSelectedPost } from '../../shared/PostsSlice';
import { useGetPostByIdQuery } from '../../processes/api';
import { PostDetails } from '../../widgets/PostDetails';

export function PagePostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data = [] } = useGetPostByIdQuery(id);
  const handleButtonClick = () => dispatch(setSelectedPost(null));

  if (!data.id) return <h3>Загрузка...</h3>;

  return <PostDetails data={data} handleButtonClick={handleButtonClick} />;
}
