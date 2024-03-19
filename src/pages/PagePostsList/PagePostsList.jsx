import React from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useGetAllPostsQuery } from '../../processes/api';
import { Post } from '../../widgets/Post';

export function PagePostsList() {
  const [end, setEnd] = React.useState(10);
  const { data = [], isLoading } = useGetAllPostsQuery({ start: 0, end });

  const loadMore = (_, to) => {
    setEnd(to + 1);
  };

  if (isLoading) return <h3>Загрузка...</h3>;

  return (
    <InfiniteLoader
      isItemLoaded={({ index }) => !!data[index]}
      itemCount={100}
      loadMoreItems={loadMore}
      width={500}
      height={700}
    >
      {({ onItemsRendered, ref }) => (
        <List
          itemData={data}
          itemCount={100}
          onItemsRendered={onItemsRendered}
          ref={ref}
          itemSize={200}
          height={600}
          width={500}
        >
          {({ index, style }) => <Post data={data[index]} style={style} isLoading={isLoading} />}
        </List>
      )}
    </InfiniteLoader>
  );
}

export default PagePostsList;
