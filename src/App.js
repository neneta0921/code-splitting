import React, { useState } from 'react';

import './App.css';

import Page1 from './components/Page1';
// import Page2 from './components/Page2';
// import Page3 from './components/Page3';

function App() {
  const [route, setRoute] = useState('page1');
  const [component, setComponent] = useState('')

  const onRouteChange = (event) => {
    const page = event.currentTarget.getAttribute('page')
    setRoute(page);
    if (page === 'page1') {
      setComponent('')
    } else if (page === 'page2') {
      import('./components/Page2').then((Page2) => {
        console.log(Page2.default);
        setComponent(Page2.default)
      })
    } else if (page === 'page3') {
      import('./components/Page3').then((Page3) => {
        setComponent(Page3.default)
      })
    }
  }

  // if (route === 'page1') {
  //   return <Page1 routeChange={() => onRouteChange} />
  // } else if (route === 'page2') {
  //   return <Page2 routeChange={() => onRouteChange} />
  // } else if (route === 'page3') {
  //   return <Page3 routeChange={() => onRouteChange} />
  // }
  let Page = component
  if (route === 'page1') {
    return  <Page1 routeChange={() => onRouteChange} />
  } else {
    return <Page  routeChange={() => onRouteChange} />
  }
}

export default App;
