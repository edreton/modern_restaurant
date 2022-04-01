import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
    const scrollRef = React.useRef(null);
    const galleryImages = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];
    
    const scroll = (direction) => {
        const currentScroll = scrollRef.current.scrollLeft;
        const scrollDistance = currentScroll + (direction === 'left' ? -300 : 300);
        scrollRef.current.scrollTo({ left: scrollDistance, behavior: 'smooth' });
    }

    return (
        <div className='app__gallery flex__center'>
            <div className="app__gallery-content">
                <SubHeading title="Instagram" />
                <h1 className="headtext__cormorant">Photo Gallery</h1>
                <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem' }}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
                <button type='button' className='custom__button'>View More</button>
            </div>

            <div className="app__gallery-images">
                <div className="app__gallery-images_container" ref={scrollRef}>
                    {galleryImages.map((image, index) => (
                        <div className='app__gallery-images_card flex__center' key={`galley_image-${index+1}`}>
                            <img src={image} alt="gallery" />
                            <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                <div className="app__gallery-images_arrows">
                    <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
                    <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
