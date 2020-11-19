import React, { useState } from 'react';
import axios from 'axios';
import { Button, Paper, TextField, Icon, IconButton } from '@material-ui/core';

import './TopicForm.css';

const TopicForm = () => {
    const [inputFields, setInputFields] = useState(
        {
            username: 'Student',
            subject: '',
            message: '',
            url: [],
            tags: []
        }
    )
    const [newUrl, setNewUrl] = useState('')

    const addUrl = () => {
        if (newUrl === '') { return null }
        let url = Array.from(inputFields.url)
        url.push(newUrl)
        setNewUrl('')
        setInputFields({ ...inputFields, url })
    }
    const deleteUrl = (idx) => {
        let url = Array.from(inputFields.url)
        url.splice(idx, 1)
        setInputFields({ ...inputFields, url })
    }

    const addTags = event => {
        if (event.target.value === '') { return null }
        let tags = Array.from(inputFields.tags)
        tags.push(event.target.value)
        event.target.value = "";
        setInputFields({ ...inputFields, tags })
    };

    const removeTags = indexToRemove => {
        let tags = Array.from(inputFields.tags)
        tags.splice(indexToRemove, 1)
        setInputFields({ ...inputFields, tags })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.put('http://localhost:5000/topic', inputFields)
        console.log('data: ', res.data)
        console.log('input: ', inputFields)
    }

    return (
        <Paper>
            <h3>New Topic</h3>
            <div className="form">
                <TextField
                    id='title'
                    name='subject'
                    label='Subject'
                    variant='standard'
                    autoFocus={true}
                    value={inputFields.subject}
                    onChange={(e) => setInputFields({ ...inputFields, subject: e.target.value })}
                    required />
                <TextField
                    id='message'
                    name='message'
                    label='Message'
                    multiline={true}
                    variant='standard'
                    value={inputFields.message}
                    onChange={(e) => setInputFields({ ...inputFields, message: e.target.value })}
                    required />
                {inputFields.url.length > 0 && inputFields.url.map((url, idx) => (
                    <div key={url} className='url_list blue' href={url} target='_blank' rel='noopener noreferrer'>
                        <Icon style={{ paddingRight: 10 }}>link</Icon>
                        {url}
                        <div style={{ flex: 1 }} />
                        <IconButton aria-label="delete">
                            <Icon fontSize="small" onClick={() => deleteUrl(idx)}> delete</Icon>
                        </IconButton>
                    </div>
                ))}
                <div>
                    <TextField
                        id='url'
                        name="url"
                        label='URL'
                        variant='standard'
                        value={newUrl}
                        onChange={(e) => setNewUrl(e.target.value)} />
                    <button onClick={addUrl} className='add-url'>+</button>
                </div>
                <div className="tags-input">
                    <ul id="tags">
                        {inputFields.tags.length > 0 && inputFields.tags.map((tag, index) => (
                            <li key={index} className="tag">
                                <span className='tag-title'>{tag}</span>
                                <span className='tag-close-icon'
                                    onClick={() => removeTags(index)}
                                >x</span>
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                        placeholder="Press enter to add tags"
                    />
                </div>
                <Button
                    className="submit-button"
                    variant="contained"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                    color="secondary"
                    onClick={handleSubmit} >
                    Send
                </Button>
            </div>
        </Paper>
    )
}

export default TopicForm