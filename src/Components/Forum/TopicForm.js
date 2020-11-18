import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

import './TopicForm.css';

const TopicForm = () => {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <h3>New Topic</h3>
            <Paper elevation={2} style={{ margin: "10px 20px" }}>
                <form className="form">
                    <TextField id='title' label='Title' variant='standard' autoFocus={true} required onChange={(e) => setTitle(e.target.value)} />
                    <TextField id='message' label='Message' multiline={true} variant='standard' required onChange={(e) => setMessage(e.target.value)} />
                    <TextField id='url' label='URL' variant='standard' onChange={(e) => setUrl(e.target.value)} />
                    <input type="submit" className="submit-button" value="Envoyer" />
                </form>
            </Paper>
        </div>
    )
}

export default TopicForm