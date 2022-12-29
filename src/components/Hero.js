import React from 'react';
import './Hero.css';
import heroTitleImage from '../assets/maniac-title.png';

function Hero() {
	const movieData = [
		{
			title: 'Maniac',
			year: '2018',
			image: heroTitleImage,
			seasons: '1',
			gender: 'TV Comedies',
			description:
				'Two struggling strangers connect during a mind-bending pharmaceutical trial involving a doctor with mother issues and an emotionally complex computer.',
			starring: 'Emma Stone, Jonah Hill, Justin Theroux',
			creator: 'Patrick Somerville',
		},
	];

	return (
		<>
			<section className="hero-container">
				<div className="hero-content">
					<div className="hero-title">
						<img src={heroTitleImage} alt="" srcset="" />
					</div>

					<div className="hero-data">
						{movieData.map((movie) => (
							<div className="movie-cardinfo">
								<h1>{movie.title}</h1>
								<div className="movie-info">
									{movie.year} | {movie.seasons} | {movie.gender}
								</div>
								<p>{movie.description}</p>
								<div className="movie-cast">
									<div className="movie-starring">
										<p>Starring:</p>
										<p>{movie.starring}</p>
									</div>
									<div className="movie-creator">
										<p>Creator:</p>
										<p>{movie.creator}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
