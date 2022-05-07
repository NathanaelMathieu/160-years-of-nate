import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { ImageList, ImageListItem, IconButton, ImageListItemBar} from '@mui/material';

function importAll(r: __WebpackModuleApi.RequireContext): string[] {
  return r.keys().map(r) as string[];
}

const images: string[] = importAll(require.context('./images', false, /\.(png|jpe?g|svg|heic|JPE?G)$/));

function App() {
  return (
    <div className="App">
     <ImageList variant="woven" gap={10}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?fit=crop&auto=format`}
            srcSet={`${image}?fit=crop&auto=format&dpr=2 2x`}
            alt="image"
            loading="lazy"
          />
          <ImageListItemBar
            // position="below"
            title={image.replace(/([a-z]?\..*\..*)|(\/.*\/)/gm,"").replace(/-0|-/gm," ")}
          />
        </ImageListItem>
      ))}
     </ImageList>
    </div>
  );
}

export default App;
