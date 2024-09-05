import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';
import "./css/style.css"

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'start',
  marginTop: 85,
  marginLeft: 20
});

const ModalContent = styled(Box)({
  backgroundColor: 'white',
  padding: '20px',
  outline: 'none',
  width: '80%',
  maxWidth: '280px',
  borderRadius: 7
});

function Header(){
  const [open, setOpen] = useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" className='header'>
      <Toolbar>
        <IconButton
          edge="start"
          color="black"
          aria-label="menu"
          onClick={handleModalOpen}
          sx={{ display: { xs: 'block', lg: 'none', marginTop: 50 } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" className='logo'>
          PetExpress
        </Typography>
        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
          <Button className='buttonHeader spacingHeader'>Produtos</Button>
          <Button className='buttonHeader'>Serviços</Button>
          <Button className='buttonHeader'>Consultas</Button>
          <Button className='buttonLogin'>Entrar</Button>
        </Box>
        <StyledModal
          open={open}
          onClose={handleModalClose}
          aria-labelledby="menu-modal-title"
          aria-describedby="menu-modal-description"
        >
          <ModalContent>
            <List>
              <ListItem button onClick={handleModalClose} sx={{ fontFamily: 'Poppins-Bold' }}>
                <ListItemText primary="Produtos" />
              </ListItem>
              <ListItem className='buttonMenu' button onClick={handleModalClose}>
                <ListItemText primary="Serviços" />
              </ListItem>
              <ListItem className='buttonMenu' button onClick={handleModalClose}>
                <ListItemText primary="Consultas" />
              </ListItem>
              <ListItem button onClick={handleModalClose}>
                <ListItemText primary="Entrar" />
              </ListItem>
            </List>
          </ModalContent>
        </StyledModal>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
