import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import './SideBar.css';
function SideBar() {
  return (
    <div className='SideBar'>
      <List disablePadding dense>
      <ListItem button> 
        <ListItemText className='listSideBar'>Dashboard</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText className='listSideBar'>Billing</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText className='listSideBar'>Settings</ListItemText>
      </ListItem>
      </List>
    </div>
  )
}

export default SideBar