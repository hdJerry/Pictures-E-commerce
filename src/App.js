import React from 'react';
import prd from './helpers/functions';
import { onValue } from '@firebase/database';
import { Wrapper } from './components/GlobalStyles';
import NavBar from './components/navbar';
import PhotoOfTheDay from './components/PhotoOfTheDay';
import MainContent from './components/MainContent';

function App() {

  const [products, setProducts] = React.useState([]);
  const [fetching, setFetching] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      onValue(prd, (snapshot) => {
        setProducts(snapshot.val());
        setFetching(false);
      })
    }
    return () => mounted = false;
  },[])
  return (
    <Wrapper>
        <NavBar />
        <PhotoOfTheDay />
        <MainContent data={products} fetching={fetching} />
    </Wrapper>
  );
}

export default App;
