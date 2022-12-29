import React from 'react';
import './MoreDetails.css'

function MoreDetails() {
    const box1 = {
        title: 'Watch offline',
        content: 'Available to download'
    }
    const box2 = {
        title: 'Genres',
        content: 'Sci-Fi TV, TV Dramas, TV Comedies, US TV Shows'
    }
    const box3 = {
        title: 'This show is...',
        content: 'Mind-Bending, Absurd'
    }
    const cast1 = {
        title: 'Cast',
        content: 'Emma Stone, Gabriel Byrne, Jemima Kirke'
    }
    const cast2 = {
        title: 'Cast',
        content: 'Jonah Hill, Sonoya Mizuno'
    }
    const cast3 = {
        title: 'Cast',
        content: 'Justin Theroux, Julia Garner'
    }
    const cast4 = {
        title: 'Cast',
        content: 'Sally Field, Billy Magnussen'
    }
    return (
        <>
            <div className='more-details'>
                <div className='more-details-title'>
                    <h2>More Details</h2>
                </div>
                <div className='more-details-grid-first'>
                    <div className='more-details-grid-child'>
                        <span className='more-details-info'>{box1.title}</span>
                        <p>{box1.content}</p>
                    </div>
                    <div className='more-details-grid-child'>
                        <span className='more-details-info'>{box2.title}</span>
                        <p>{box2.content}</p>
                    </div>
                    <div className='more-details-grid-child'>
                        <span className='more-details-info'>{box3.title}</span>
                        <p>{box3.content}</p>
                    </div>
                </div>
                <div className='more-details-grid-second'>
                    <div className='more-details-grid-child'>
                        <span className='more-details-info'>{cast1.title}</span>
                        <p>{cast1.content}</p>
                    </div>
                    <div className='more-details-grid-child'>
                        <p>{cast2.content}</p>
                    </div>
                    <div className='more-details-grid-child'>
                        <p>{cast3.content}</p>
                    </div>
                    <div className='more-details-grid-child'>
                        <p>{cast4.content}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MoreDetails;