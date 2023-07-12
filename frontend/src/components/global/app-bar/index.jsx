import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import InboxIcon from '@mui/icons-material/MoveToInbox'

import useAppBar from './app-bar.duck'

const BotAppBar = () => {
  const { openState, handleToggleOpenState, setOpenState } = useAppBar()

  return (
    <>
      <Drawer
        anchor="left"
        open={openState}
        onClose={() => {
          setOpenState(false)
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => {
            setOpenState(false)
          }}
        >
          <List>
            <ListItem>
              <Link to="/home">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </Link>
              <Link to="/dashboard">
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleToggleOpenState}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {'Charter Rewards Application'}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default BotAppBar
