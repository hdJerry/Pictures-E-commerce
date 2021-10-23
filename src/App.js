import React from 'react';
import prd from './helpers/functions';
import { onValue } from '@firebase/database';
import Product from './components/Product';
import { Wrapper } from './components/GlobalStyles';
import NavBar from './components/navbar';
import PhotoOfTheDay from './components/PhotoOfTheDay';
import MainContent from './components/MainContent';

function App() {

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      onValue(prd, (snapshot) => {
        console.log(snapshot.val());
        setProducts(snapshot.val())
      })
    }
    return () => mounted = false;
  },[])
  return (
    <Wrapper>
        <NavBar />
        <PhotoOfTheDay />
        <MainContent data={products} />
    </Wrapper>
  );
}

export default App;
