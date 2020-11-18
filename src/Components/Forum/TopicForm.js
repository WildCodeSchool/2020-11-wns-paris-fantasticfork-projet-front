import React, { useState } from 'react';
import { Button, Paper, TextField } from '@material-ui/core';

import './TopicForm.css';

const TopicForm = () => {
    const [inputFields, setInputFields] = useState(
        [{
            subject: '',
            message: '',
            url: ''
        }]
    )

    const handleChange = (index, e) => {
        const values = [...inputFields]
        values[index][e.target.name] = e.target.value
        setInputFields(values)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Paper>
            <h3>New Topic</h3>
            <form onSubmit={handleSubmit}>
                {inputFields.map((field, index) => (
                    <div key={index} className="form">
                        <TextField 
                            id='title' 
                            name='subject' 
                            label='Subject' 
                            variant='standard' 
                            autoFocus={true} 
                            value={inputFields.subject} 
                            onChange={(e) => handleChange(index, e)}
                            required  />
                        <TextField 
                            id='message' 
                            name='message' 
                            label='Message' 
                            multiline={true} 
                            variant='standard' 
                            value={inputFields.message} 
                            onChange={(e) => handleChange(index, e)}
                            required />
                        <TextField 
                            id='url' 
                            name="url" 
                            label='URL' 
                            variant='standard'
                            value={inputFields.url} 
                            onChange={(e) => handleChange(index, e)} />
                        <Button
                            className="submit-button"
                            variant="contained"
                            color="secondary"
                            type="submit"
                            onClick={handleSubmit} >
                                Send
                        </Button>
                    </div>
                ))}
            </form>
        </Paper>
    )
}

export default TopicForm