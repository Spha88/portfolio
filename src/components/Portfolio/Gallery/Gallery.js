import React from 'react';
import { images } from './GalleryItemList';
import Container from '../../UI/Container/Container';
import classes from './Gallery.module.css';

const Gallery = () => {

    return (
        <Container>
            <h2>Gallery</h2>
            <div className={classes.Gallery} id="gallery"> {
                images.map( (image, index) => {
                    return (
                        <figure key={image.url}>
                            <img src={image.url} alt={`portfolio item ${index}`}/>
                        </figure>
                    );
                })
            }</div>
        </Container>
    )
}

export default Gallery;


