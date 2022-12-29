import React from 'react';
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import './Videos.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Videos() {
	const movie = 'Maniac';
	const trailerVideos = [
		{
			title: 'Maniac: Limited Series (Trailer)',
			thumbnail: img1,
		},
		{
			title: 'Maniac: Limited Series (Teaser)',
			thumbnail: img2,
		},
		{
			title: 'Trailer: Reflections',
			thumbnail: img3,
		},
		{
			title: 'Trailer: Connections',
			thumbnail: img4,
		},
	];

	const [trailer1, setTrailer1] = useState(false);
	const [trailer2, setTrailer2] = useState(false);
	const [trailer3, setTrailer3] = useState(false);
	const [trailer4, setTrailer4] = useState(false);

	const openTrailer1 = () => {
		setTrailer1(!trailer1);
		//set overflow to hidden when video is open
	};

	const openTrailer2 = () => {
		setTrailer2(!trailer2);
	};

	const openTrailer3 = () => {
		setTrailer3(!trailer3);
	};

	const openTrailer4 = () => {
		setTrailer4(!trailer4);
	};

	// slider scroll left button
	const [isMoved, setIsMoved] = useState(false);

	const listRef = useRef();

	const handleClick = (direction) => {
		setIsMoved(true);
		const list = listRef.current;
		const { scrollLeft } = list;
		if (direction === 'left') {
			list.scrollLeft = scrollLeft - 1000;
			// set behavior smooth
			list.scrollBehavior = 'smooth';
		} else {
			list.scrollLeft = scrollLeft + 1000;

			// set behavior smooth
			list.scrollBehavior = 'smooth';
		}
	};

	// hide scroll button when scroll is at the end of the list

	return (
		<>
			<div className="videos-container">
				<div className="videos-title">
					<h2 className="title-section">Videos</h2>
					<span>|</span>
					<h2 className="title-movie">{movie}</h2>
				</div>
				<div className="videos-thumbnails">
					<button
						className="left"
						onClick={() => handleClick('left')}
						style={{ display: !isMoved && 'none' }}
					>
						<IoIosArrowBack />
					</button>
					<div className="trailer-container" ref={listRef}>
						<div className="trailer-video">
							<div className="trailer-video-thumbnail" onClick={openTrailer1}>
								<img
									src={trailerVideos[0].thumbnail}
									alt={trailerVideos[0].title}
								/>
							</div>
							<div className="trailer-video-title">
								<h3>{trailerVideos[0].title}</h3>
							</div>
						</div>
						<div className="trailer-video">
							<div className="trailer-video-thumbnail" onClick={openTrailer2}>
								<img
									src={trailerVideos[1].thumbnail}
									alt={trailerVideos[1].title}
								/>
							</div>
							<div className="trailer-video-title">
								<h3>{trailerVideos[1].title}</h3>
							</div>
						</div>
						<div className="trailer-video">
							<div className="trailer-video-thumbnail" onClick={openTrailer3}>
								<img
									src={trailerVideos[2].thumbnail}
									alt={trailerVideos[2].title}
								/>
							</div>
							<div className="trailer-video-title">
								<h3>{trailerVideos[2].title}</h3>
							</div>
						</div>
						<div className="trailer-video">
							<div className="trailer-video-thumbnail" onClick={openTrailer4}>
								<img
									src={trailerVideos[3].thumbnail}
									alt={trailerVideos[3].title}
								/>
							</div>
							<div className="trailer-video-title">
								<h3>{trailerVideos[3].title}</h3>
							</div>
						</div>
					</div>
					<button className="right" onClick={() => handleClick('right')}>
						<IoIosArrowForward />
					</button>
				</div>
			</div>

			{trailer1 && (

				<div className="trailer-video-modal" onClick={openTrailer1}>
					<div className="close-modal" onClick={openTrailer1}>
						<div className="trailer-video-modal-content">
							<ReactPlayer url="https://www.youtube.com/watch?v=L6cDDmk-O5A" />
						</div>
					</div>
				</div>
			)}

			{trailer2 && (
				<div className="trailer-video-modal" onClick={openTrailer2}>
					<div className="close-modal" onClick={openTrailer2}>
						<div className="trailer-video-modal-content">
							<ReactPlayer url="https://www.youtube.com/watch?v=dQZPp5ED1VI" />
						</div>
					</div>
				</div>
			)}

			{trailer3 && (
				<div className="trailer-video-modal" onClick={openTrailer3}>
					<div className="close-modal" onClick={openTrailer3}>
						<div className="trailer-video-modal-content">
							<ReactPlayer url="https://www.youtube.com/watch?v=5NSMBd6Y_J0" />
						</div>
					</div>
				</div>
			)}

			{trailer4 && (


				<div className="trailer-video-modal" onClick={openTrailer4}>
					<div className="close-modal" onClick={openTrailer4}>
						<div className="trailer-video-modal-content">
							<ReactPlayer url="https://www.youtube.com/watch?v=gzjD65c_8wU" />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Videos;
