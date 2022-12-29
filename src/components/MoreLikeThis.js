import React from 'react';
import img1 from '../assets/morelikethis/img1.jpg';
import img2 from '../assets/morelikethis/img2.jpg';
import img3 from '../assets/morelikethis/img3.jpg';
import img4 from '../assets/morelikethis/img4.jpg';
import img5 from '../assets/morelikethis/img5.jpg';
import img6 from '../assets/morelikethis/img6.jpg';
import img7 from '../assets/morelikethis/img7.jpg';
import img8 from '../assets/morelikethis/img8.jpg';
import img9 from '../assets/morelikethis/img9.jpg';
import img10 from '../assets/morelikethis/img10.jpg';
import img11 from '../assets/morelikethis/img11.jpg';
import img12 from '../assets/morelikethis/img12.jpg';

import './MoreLikeThis.css';

function MoreLikeThis(props) {
    const moviesImg = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
    return (
        <>
            <div className='more-like-this-container'>
                <div className='more-like-this-title'>
                    <h2>More Like This</h2>
                </div>
                <div className='more-like-this-img-grid'>
                    {
                        moviesImg.map((img, index) => {
                            return (
                                <div className='movie-img' key={index}>
                                    <img  src={img} alt="movie" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    );
}

export default MoreLikeThis;