import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import logo from '../logo.svg';
import '../App.css';

const Page1 = ({ onRouteChange }) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonGroup size="large"  variant="contained" color="primary" aria-label="contained primary button group">
          <Button disabled>Page1</Button>
          <Button onClick={() => onRouteChange('page2')} page='page2'>Page2</Button>
          <Button onClick={() => onRouteChange('page3')} page='page3'>Page3</Button>
        </ButtonGroup>
      </header>
    </div>
  )
}

export default Page1;