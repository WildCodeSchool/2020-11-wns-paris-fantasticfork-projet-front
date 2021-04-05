import { React, useEffect } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { userMenu } from './menus';

export default function UserMenu ({ isOpened, showMenu, anchorRef, logoutFunc }) {

  useEffect(() => {
    if(anchorRef) {
      const arrow = anchorRef.current;
      if(isOpened) arrow.classList.add('rotate');
      else arrow.classList.remove('rotate'); 
    }
  }, [isOpened, anchorRef]);

  return (
    <div>
      <Menu
        id="simple-menu"
        anchorEl={anchorRef.current}
        keepMounted
        open={isOpened}
        onClose={() => showMenu(false)}
        anchorOrigin={{  vertical: "bottom", horizontal: "right" }}
        getContentAnchorEl={null}
      >
        {userMenu.map((item) =>
            item.text === 'Logout'
            ? <MenuItem key={item.link} onClick={() => { showMenu(false); logoutFunc() }}>{item.text}</MenuItem>
            : <MenuItem key={item.link} onClick={() => showMenu(false)}>{item.text}</MenuItem>
        )}
      </Menu>
    </div>
  );
}