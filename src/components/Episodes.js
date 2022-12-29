import React from 'react';
import './Episodes.css';
import ep1 from '../assets/episodes/ep1.jpg';
import ep2 from '../assets/episodes/ep2.jpg';
import ep3 from '../assets/episodes/ep3.jpg';
import ep4 from '../assets/episodes/ep4.jpg';
import ep5 from '../assets/episodes/ep5.jpg';
import ep6 from '../assets/episodes/ep6.jpg';
import ep7 from '../assets/episodes/ep7.jpg';
import ep8 from '../assets/episodes/ep8.jpg';
import ep9 from '../assets/episodes/ep9.jpg';
import ep10 from '../assets/episodes/ep10.jpg';



const EpisodeCard = () => {
    const EpisodesInfo = [
        {
            title: '1. The Chosen One!',
            episodeImage: ep1,
            length: '41',
            description: 'Diagnosed with schizophrenia, Owen is the black sheep of the wealthy Milgrim clan. After losing his job, he enrolls in an experimental drug trial.',
        },
        {
            title: '2. Windmills!',
            episodeImage: ep2,
            length: '47',
            description: 'When her pilfered stash of pills runs out, troubled Annie tries to quit -- but ends up blackmailing her way into the Neberdine study.',
        },
        {
            title: '3. Having a Day',
            episodeImage: ep3,
            length: '42',
            description: 'Muramoto notices irregularities in Annie and Owen\'s data. He questions Owen, who recalls the worst night of his life: his brother\'s engagement party.',
        },
        {
            title: '4. Furs by Sebastian',
            episodeImage: ep4,
            length: '38',
            description: 'After taking the B pill, Annie and Owen find themselves on 1980s Long Island entangled in a strange caper involving a lemur.',
        },
        {
            title: '5. Exactly Like You',
            episodeImage: ep5,
            length: '40',
            description: 'Annie and Owen are Arlie and Ollie, grifters attending a séance at the mysterious Neberdine mansion in the 1940s.',
        },
        {
            title: '6. Larger Structural Issues',
            episodeImage: ep6,
            length: '40',
            description: 'Azumi tells James the whole truth about the study\'s snags and urges him to call his estranged mother, an esteemed therapist.',
        },
        {
            title: '7. Ceci N\'est Pas Une Drill',
            episodeImage: ep7,
            length: '27',
            description: 'Owen and Annie take the C pill. No longer connected, he belongs to a Mafia family, and she\'s a medieval guide hired by an ailing elf princess.',
        },
        {
            title: '8. The Lake of the Clouds',
            episodeImage: ep8,
            length: '29',
            description: 'Annia and Ellia continue their quest, and Owen\'s mafioso father pressures him to protect the family. Greta counsels a bereaved Gertie.',
        },
        {
            title: '9. Utangatta',
            episodeImage: ep9,
            length: '45',
            description: 'Owen and Annie meet again as a disgraced Icelandic spy and a CIA operative who helps him. Greta implores James to shut down the trial.',
        },
        {
            title: '10. Option C',
            episodeImage: ep10,
            length: '38',
            description: 'After the subjects are discharged, James and Azumi face Neberdine\'s CEO. Owen and Annie part ways -- until a startling headline sparks a reunion.',
        },
    ]

    return (
        <>
            {
                EpisodesInfo.map((episode, index) => {
                    return(
                        <div className='episodeCard' key={index}>
                            <img src={episode.episodeImage} alt={episode.title} />
                            <div className='episodeTitleBox'>
                                <h3>{episode.title}</h3>
                                <p>{episode.length}m</p>
                            </div>
                            <div className='episodeCard__info'>
                                <p>{episode.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}



function Episodes() {
    return (
        <>
            <div className='episodes'>
                <div className='series-title'>
                    <h2 className='titleSection'>Episodes</h2>
                    <span>|</span>
                    <h2 className='movieName'>Maniac</h2>
                </div>
                <div className='typeOfSeries'>
                    <p>Limited Series</p>
                </div>
                <div className='seriesYear'>
                    <p>Release year: 2018</p>
                </div>
                <div className='seriesDescription'>
                    <p>Two struggling strangers connect during a mind-bending pharmaceutical trial involving a doctor with mother issues and an emotionally complex computer.</p>
                </div>

                <div className='episode-cards-grid'>
                    <EpisodeCard />
                </div>
            </div>
        </>
    );
}

export default Episodes;