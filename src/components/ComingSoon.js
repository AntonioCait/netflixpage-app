import React from 'react';
import './ComingSoon.css';

function ComingSoon(props) {
    const comingSoonMovies = [
        {
            title: 'Sins of Our Mother',
            description: 'When Lori Vallow\'s kids vanished, the search for them unearthed a trail of suspicious deaths, a new husband who shared her doomsday views — and murder.',
        },
        {
            title: 'Broad Peak',
            description: 'After climbing Broad Peak mountain, Maciej Berbeka learns his journey to the summit is incomplete. 25 years later, he sets out to finish what he started.',
        },
        {
            title: 'Pokémon: The Arceus Chronicles',
            description: 'While investigating the legend of the mythical Pokémon Arceus, Ash, Goh and Dawn uncover a plot by Team Galactic that threatens the world.',
        },
        {
            title: 'Summer Job',
            description: 'In this reality competition series, 10 Gen Z participants think they\'re on a dream vacation — but to keep the fun going, they must find summer jobs.',
        },
        {
            title: 'Once Upon a Small Town',
            description: 'Against his wishes a veterinarian from the big city relocates to the countryside, where he meets a policewoman, a town insider with a friendly secret.',
        },
        {
            title: 'The Girls at the Back',
            description: 'After one of them is diagnosed with cancer, five friends devote their annual vacation to expanding their horizons, one bucket-list challenge at a time.',
        },
        {
            title: 'Aníkúlápó',
            description: 'After an affair with a queen leads to his demise, an eager traveler encounters a mystical bird with the power to give him another life.',
        },
        {
            title: 'Mirror, Mirror',
            description: 'Five employees grapple with their respective desires by arguing with themselves in the mirror, ahead of their cosmetic company\'s 50th anniversary party.',
        },
    ]
    return (
        <>
            <div className="coming-soon">
                <div className='coming-title'>
                    <h2>Coming Soon</h2>
                </div>
                <div className='coming-grid'>
                    {
                        comingSoonMovies.map((movie, index) => {
                            return(
                                <div className='coming-movie'>
                                    <h3>{movie.title}</h3>
                                    <p>{movie.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ComingSoon;