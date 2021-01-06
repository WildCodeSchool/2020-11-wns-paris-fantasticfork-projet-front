import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';

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

function ArticleContainer({ match }) {
  const [topic, setTopic] = useState(initSchema);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topic/${match.params.id}`)
      .then((res) => {
        setTopic(res.data.body);
      })
      .catch((err) => console.log(err));
  }, [match.params.id]);

  const loadNewMessage = () => {
    console.log('executed');
    axios
      .get(`http://localhost:5000/topic/${match.params.id}`)
      .then((res) => {
        console.log(res.data.body);
        setTopic(res.data.body);
      })
      .catch((err) => console.log(err));
  };

  return <Article data={topic} setNewMessage={() => loadNewMessage()} />;
}

export default ArticleContainer;
