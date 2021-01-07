import React, { useState } from 'react';
import ArticleView from './ArticleView';

function Article({ data, refresh }) {
  const [heart, setHeart] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [toggleWrite, setToggleWrite] = useState(false);

  return (
    <ArticleView
      data={data}
      heart={heart}
      setHeart={() => setHeart(!heart)}
      toggle={toggle}
      toggleWrite={toggleWrite}
      setToggle={() => setToggle(!toggle)}
      openToggleWrite={() => setToggleWrite(true)}
      closeToggleWrite={() => setToggleWrite(false)}
      refresh={() => refresh()}
    />
  );
}

export default Article;
