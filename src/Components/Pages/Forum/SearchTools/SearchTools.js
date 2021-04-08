import React, { useState, useEffect } from 'react';
import { Toolbar, InputBase, Tab, Tabs, Icon, Fab, Button } from '@material-ui/core';
import './SearchTools.scss';

function SearchTools({ topics, modalOpen }) {
    const [tabsValue, setTabsValue] = useState(0);
    const [toolsOpened, toggleTools] = useState(true);

    function sortByDate() {
        const _topics = [...topics.get].sort((a, b) => b.createdAt - a.createdAt);
        topics.set(_topics);
    }

    function sortByPopularity() {
        const _topics = [...topics.get].sort((a, b) => b.like - a.like);
        topics.set(_topics);
    }

    function filterTopics(e) {
        const searchedString = e.target.value.toLowerCase();

        if (e.target.value === '') topics.set(topics.list);
        else {
            const displayedTopics = [];

            topics.list.forEach((topic) => {
                const subject = topic.subject.toLowerCase();
                const body = topic.body.toLowerCase();

                if (subject.includes(searchedString) || body.includes(searchedString)) {
                    displayedTopics.push(topic);
                }
            });
            topics.set(displayedTopics);
        }
    }

    function toggleSearchTools(opened) {
        const searchTools = document.querySelector('.SearchTools');
        const filterIcon = document.querySelector('.filter-icon-mobile');
        const forum = document.querySelector('.Forum');

        if(opened) {
            if (searchTools && filterIcon) {
                searchTools.classList.add('show-search-tools');
                filterIcon.classList.add('move-filter-icon');
                forum.classList.add('forum-translate');
            }
        } else if (searchTools && filterIcon) {
            searchTools.classList.remove('show-search-tools');
            filterIcon.classList.remove('move-filter-icon');
            forum.classList.remove('forum-translate');

        }
    }


    useEffect(() => {
        toggleSearchTools(toolsOpened);
    }, [toolsOpened]);

    return (
        <div className='ToolbarContainer'>

            <Toolbar className='SearchTools'>

                <div className='SearchTools-row1'>
                    <Button variant='contained' color='primary' onClick={() => modalOpen(true)}>
                    Ask a question
                    </Button>
                    <InputBase 
                        onChange={filterTopics} 
                        className='SearchBar' 
                        placeholder='Search...' 
                        inputProps={{'aria-label': 'search'}} 
                    />
                </div> 

                <Tabs className='Tabs' value={tabsValue} onChange={(e, newValue) => setTabsValue(newValue)}>
                    <Tab label='Recent topics' onClick={sortByDate}/>
                    <Tab label='Popular topics' onClick={sortByPopularity}/>
                </Tabs>

            </Toolbar>

            <Fab className='filter-icon-mobile' onClick={() => toggleTools(!toolsOpened)}>
                <Icon>{ toolsOpened ? 'close' : 'filter_list'}</Icon>
            </Fab>
        </div>
    );
}

export default SearchTools;