import React from 'react';
import './App.scss';
import { ImageList, ImageListItem, ImageListItemBar} from '@mui/material';

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
        <h4>
          While most people have their quarter life crisis at 25, Nate has decided to delay his until he is 40 years old. This effectively increases his lifespan to 160 years. Come celebrate his 25th of 160 years at <a href="https://maps.app.goo.gl/2CFMeS1FPeYj1kLr5">25 Watson St, Cambridge MA</a> on May 12th from 9:00p - 11:00p! You are encouraged to come dressed as your favorite Year of Nate; See below for outfit ideas. <p></p> <i>Bowties will be available on a first-come, first-served basis.</i>
        </h4>
      </div>
     <ImageList variant='woven' gap={10} cols={width < 500 ? 1 : (width < 1000 ? 2 : 3)}>
      {images.map((image) => {
        const title = image.replace(/(z)|([a-z]?\..*\..*)|(\/.*\/)/gm,'').replace(/-00|-0|-/gm,' ');
        return (
          <ImageListItem key={image}>
            <img
              src={`${image}`}
              srcSet={`${image}`}
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
