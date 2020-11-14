import { Button, ButtonGroup, Container } from '@material-ui/core';
import { useEffect } from 'react';
import { Invoke } from './ripcord/rpc';

import './App.css';

function App() {
  useEffect(() => Invoke('start').catch(err => console.error(err)));
  return (
  <Container maxWidth="sm">
    <h1>Ripcord</h1>
    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button>North</Button>
      <Button>East</Button>
      <Button>South</Button>
      <Button>West</Button>
      <Button>Up</Button>
      <Button>Down</Button>
    </ButtonGroup>
  </Container>
  );
}

export default App;
