import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleView from './ArticleView';

const initSchema = {
  username: '',
  subject: '',
  body: '',
  date: '',
  url: [],
  tags: [],
  responses: [
    {
      date: '',
      name: '',
      message: '',
    },
  ],
};

function Article({ match }) {
  const [heart, setHeart] = useState(false);
  const [toggle, setToggle] = useState(true);
  // const [toggleWrite, setToggleWrite] = useState(false);
  const [topic, setTopic] = useState(initSchema);
  const [newMessage, setNewMessage] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topic/${match.params.id}`)
      .then((res) => {
        setTopic(res.data.body);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  useEffect(() => {
    if (newMessage) {
      axios
        .get(`http://localhost:5000/topic/${match.params.id}`)
        .then((res) => {
          console.log(res.data.body);
          setTopic(res.data.body);
          // setToggleWrite(false);
        })
        .catch((err) => console.log(err));
    }
  }, [newMessage, match.params.id]);

  return (
    <div>
      <ArticleView
        data={topic}
        heart={heart}
        toggle={toggle}
        // toggleWrite={toggleWrite}
        setHeart={() => setHeart(!heart)}
        setToggle={() => setToggle(!toggle)}
        // setToggleWrite={() => setToggleWrite(true)}
        setNewMessage={() => setNewMessage(true)}
      />
    </div>
  );
}

export default Article;
