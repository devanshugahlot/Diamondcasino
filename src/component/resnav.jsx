import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import BasicSelect from './Dropdown';
    
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

 

  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const CustomComponent = ({ onClick }) => (
    <BasicSelect onClick={onClick} />
  );
  const handleListItemClick = (text) => {
    // Add your logic to navigate to the corresponding page
    switch (text) {
      case 'Home':
        navigate('/'); // Replace '/home' with your actual home route
        break;
      case 'About':
        navigate('/About'); // Replace '/about' with your actual about route
        break;
        // case 'Tournament':
        //  navigate('/Tournament'); 
        // break;

        case 'AllGames':
        navigate('/AllGames'); // Replace '/about' with your actual about route
        break;

        case 'Contact':
        navigate('/Contact'); // Replace '/about' with your actual about route
        break;
      // Add more cases for other menu items
      default:
        break;
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , backgroundColor:"#110E2D"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List>
  {['Home', 'About',  'AllGames', 'Contact'].map((text, index) => (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={() => handleListItemClick(text)}>
        <ListItemText primary={text} sx={{ color: 'white' }} />
      </ListItemButton>
    </ListItem>
  ))}
  {/* Conditionally render the custom component for 'AllGames' */}
  {['Home', 'About',  'AllGames', 'Contact'].map((text, index) => (
    text === 'AllGames' ? (
      <BasicSelect key={text} onClick={() => handleListItemClick(text)} />
    ) : null
  ))}
</List>

      <Divider />
    </Box>
 
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{fontSize:"36px", color:"black"}} onClick={toggleDrawer(anchor, true)}><TfiMenu/> </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
              

            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
