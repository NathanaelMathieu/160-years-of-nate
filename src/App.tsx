import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { ImageList, ImageListItem, IconButton, ImageListItemBar} from '@mui/material';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
  return r.keys().map(r) as string[];
}

const images: string[] = importAll(require.context('./images', false, /\.(png|jpe?g|svg|heic|JPE?G)$/));

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => setWidth(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  return (
    <div className='App'>
      <div className='Header'>
        Most people have their quarter life crisis between the ages of 20 and 30 years old. Bucking that trend, Nate has decided to delay his quarter life crisis until he is 40 years old. This effectively increases his lifespan to 160 years. In celebration of his 24th/160 years, or 3/20th life party, Nate would like to invite you to 91 Rogers Ave, Somerville MA on May 13th from 8:00p - 11:00p. You are encouraged to come as your favorite year from the 160 Years of Nate. See below for outfit ideas.
      </div>
     <ImageList variant='woven' gap={10} cols={width < 500 ? 1 : (width < 1000 ? 2 : 3)}>
      {images.map((image) => {
        const title = image.replace(/([a-z]?\..*\..*)|(\/.*\/)/gm,'').replace(/-00|-0|-/gm,' ');
        return (
          <ImageListItem key={image}>
            <img
              src={`${image}?fit=crop&auto=format`}
              srcSet={`${image}?fit=crop&auto=format&dpr=2 2x`}
              alt={title}
              loading='lazy'
            />
            <ImageListItemBar
              title={title}
            />
          </ImageListItem>
      )})}
     </ImageList>
    </div>
  );
}

export default App;
