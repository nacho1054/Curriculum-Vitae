import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function NestedList() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            HABILIDADES
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>

          </ListItemIcon>
          <ListItemText primary="Front end" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>

          </ListItemIcon>
          <ListItemText primary="Back end" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>

          </ListItemIcon>
          <ListItemText primary="Bases de datos" />
        </ListItemButton>
      </List>
    );
  }