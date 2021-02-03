import React, { useState } from 'react';
import { Button, Paper, TextField, Icon, IconButton } from '@material-ui/core';
import { gql, useMutation } from '@apollo/client';
import './TopicForm.css';

const UPDATE_TOPIC = gql`
  mutation UpdateTopic($_id: ID!, $username: String, $subject: String, $body: String, $url: [String], $tags: [String]) {
    updateTopic(_id: $_id, username: $username, subject: $subject, body: $body, url: $url, tags: $tags) {
      subject
    }
  }
`;



const ModifyTopicForm = ({ close, articleData}) => {
  const [addTopic, { loading }] = useMutation(UPDATE_TOPIC);
  console.log(articleData)
  const { _id, username, subject, body, url, tags } = articleData;

  const [inputFields, setInputFields] = useState({
    _id,
    username,
    subject,
    body,
    url,
    tags,
  });

  const [newUrl, setNewUrl] = useState('');

  const addUrl = () => {
    if (newUrl === '') {
      return null;
    }
    let url = Array.from(inputFields.url);
    url.push(newUrl);
    setNewUrl('');
    setInputFields({ ...inputFields, url });
  };

  const deleteUrl = (idx) => {
    let url = Array.from(inputFields.url);
    url.splice(idx, 1);
    setInputFields({ ...inputFields, url });
  };

  const addTags = (event) => {
    if (event.target.value === '') {
      return null;
    }
    let tags = Array.from(inputFields.tags);
    tags.push(event.target.value);
    event.target.value = '';
    setInputFields({ ...inputFields, tags });
  };

  const removeTags = (indexToRemove) => {
    let tags = Array.from(inputFields.tags);
    tags.splice(indexToRemove, 1);
    setInputFields({ ...inputFields, tags });
  };

  const handleSubmit = () => {
    addTopic({ variables: inputFields });
    close();
  };

  return (
    <Paper style={{ width: '100%' }} className='flex_column'>
      <div
        className='flex_'
        style={{
          padding: 15,
          paddingLeft: 150,
          borderBottom: '1px solid #CCCCCC',
        }}
      >
        <h3>Modify Topic</h3>
        <div style={{ flex: 1 }} />
        <IconButton color='primary' onClick={() => close()}>
          <Icon className='lightgrey'>close</Icon>
        </IconButton>
      </div>

      {loading ? 'LOADING...' : ''}

      <div
        className='form flex_'
        style={{
          width: '100%',
          margin: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextField
          id='title'
          name='subject'
          label='Subject'
          variant='standard'
          autoFocus={true}
          value={inputFields.subject}
          onChange={(e) => setInputFields({ ...inputFields, subject: e.target.value })}
          required
          style={{ width: '70%', margin: 20 }}
        />
        <TextField
          id='message'
          name='body'
          label='Message'
          multiline
          rows={4}
          variant='standard'
          value={inputFields.body}
          onChange={(e) => setInputFields({ ...inputFields, body: e.target.value })}
          required
          style={{ width: '70%', margin: 20 }}
        />
        <div style={{ maxHeight: 150, width: '70%', overflow: 'auto' }}>
          {inputFields.url.length > 0 &&
            inputFields.url.map((url, idx) => (
              <div key={url} className='url_list blue' href={url} target='_blank' rel='noopener noreferrer'>
                <Icon style={{ paddingRight: 10 }}>link</Icon>
                {url}
                <div style={{ flex: 1 }} />
                <IconButton aria-label='delete'>
                  <Icon fontSize='small' onClick={() => deleteUrl(idx)}>
                    delete
                  </Icon>
                </IconButton>
              </div>
            ))}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            width: '70%',
            margin: 20,
          }}
        >
          <TextField
            id='url'
            name='urls'
            label='URL'
            variant='standard'
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            style={{ width: '90%' }}
          />
          <div style={{ flex: 1 }} />
          <IconButton onClick={addUrl}>
            <Icon fontSize='small'>add</Icon>
          </IconButton>
        </div>
        <div className='tags-input' style={{ width: '70%', margin: 20 }}>
          <ul id='tags'>
            {inputFields.tags.length > 0 &&
              inputFields.tags.map((tag, index) => (
                <li key={index} className='tag'>
                  <span className='tag-title'>{tag}</span>
                  <span className='tag-close-icon' onClick={() => removeTags(index)}>
                    x
                  </span>
                </li>
              ))}
          </ul>
          <input type='text' onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)} placeholder='Press enter to add tags' />
        </div>
        <Button
          className='submit-button'
          variant='contained'
          style={{ marginTop: '20px', marginBottom: '20px' }}
          color='secondary'
          onClick={handleSubmit}
        >
          Send
        </Button>
      </div>
    </Paper>
  );
};

export default ModifyTopicForm;
