import React, { useState, useEffect } from 'react';
import { Toolbar, InputBase, Tab, Tabs, Chip, Icon } from '@material-ui/core';
import './SearchTools.scss';

function SearchTools({ topics }) {
    const [tabsValue, setTabsValue] = useState(0);
    const [toolsOpened, toggleTools] = useState(false);

    useEffect(() => {
        const searchTools = document.querySelector('.SearchTools');
        const filterIcon = document.querySelector('.filter-icon-mobile');
        const forum = document.querySelector('.Forum');

        if(toolsOpened) {
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
    }, [toolsOpened]);

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

    return (
        <div className='ToolbarContainer'>

            <Toolbar className='SearchTools'>

                <div className='SearchTools-row1'>
                    <div className='chip-filters'>
                        <Chip label='Mongo'/>
                        <Chip label='Node' className='chip-active'/>
                        <Chip label='Javascript'/>
                    </div> 
                    <InputBase 
                        onChange={filterTopics} 
                        className='SearchBar' 
                        placeholder='Search...' 
                        inputProps={{'aria-label': 'search'}} 
                    />
                </div> 

                <Tabs className='Tabs' value={tabsValue} onChange={(e, newValue) => setTabsValue(newValue)}>
                    <Tab label='Recent topcis' onClick={sortByDate}/>
                    <Tab label='Popular topics' onClick={sortByPopularity}/>
                </Tabs>

            </Toolbar>

            <button type='button' className='filter-icon-mobile' onClick={() => toggleTools(!toolsOpened)}>
                <Icon>{ toolsOpened ? 'close' : 'filter_list'}</Icon>
            </button>
        </div>
    );
}

export default SearchTools;