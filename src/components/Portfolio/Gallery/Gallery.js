import React, { useEffect } from 'react';
import { images } from './GalleryItemList';
import Container from '../../UI/Container/Container';
import './Gallery.module.css';
import scrollreveal from 'scrollreveal';

const Gallery = () => {

    useEffect(() => {
        const options = { distance: '100%', delay: '500', origin: 'bottom', duration: '1000', reset: false }
        scrollreveal().reveal('#item', options)
    })

    return (
        <Container>
            <h2>Gallery</h2>
            <div className={" card-columns"} id="gallery"> {
                images.map((image, index) => {
                    return (
                        <figure key={index} className="card" id="item">
                            {image.url ?
                                <a href={image.url}><img src={image.src} alt={`portfolio item ${index}`} className="card-img-top" /></a>
                                : <img src={image.src} alt={`portfolio item ${index}`} className="card-img-top" />}

                            {image.caption ? (
                                <div className="card-body">
                                    <p className="card-text">{image.caption}</p>
                                </div>
                            ) : null}
                        </figure>
                    );
                })
            }</div>
        </Container>
    )
}

export default Gallery;
