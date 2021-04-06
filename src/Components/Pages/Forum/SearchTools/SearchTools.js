import React, { useState, useEffect } from 'react';
import { Toolbar, InputBase, Tab, Tabs, Chip, Icon } from '@material-ui/core';
import './SearchTools.scss';

function SearchTools() {
    const [tabsValue, setTabsValue] = useState(0);
    const [toolsOpened, toggleTools] = useState(false);

    useEffect(() => {
        const searchTools = document.querySelector('.SearchTools');
        const filterIcon = document.querySelector('.filter-icon-mobile');

        if(toolsOpened) {
            if (searchTools && filterIcon) {
                searchTools.classList.add('show-search-tools');
                filterIcon.classList.add('show-search-tools');
            }
        } else if (searchTools && filterIcon) {
            searchTools.classList.remove('show-search-tools');
            filterIcon.classList.remove('show-search-tools');
        }
    }, [toolsOpened]);

    return (
        <div className="ToolbarContainer">

            <Toolbar className="SearchTools">

                <div className="SearchTools-row1">
                    <div className="chip-filters">
                        <Chip label="Mongo"/>
                        <Chip label="Node" className="chip-active"/>
                        <Chip label="Javascript"/>
                    </div> 
                    <InputBase className="SearchBar" placeholder="Search..." inputProps={{'aria-label': 'search'}} />
                </div> 

                <Tabs className="Tabs" value={tabsValue} onChange={(e, newValue) => setTabsValue(newValue)}>
                    <Tab label="Recent topcis"/>
                    <Tab label="Popular topics"/>
                </Tabs>

            </Toolbar>

            <button type="button" className="filter-icon-mobile" onClick={() => toggleTools(!toolsOpened)}>
                <Icon>{ toolsOpened ? 'close' : 'filter_list'}</Icon>
            </button>
        </div>
    );
}

export default SearchTools;