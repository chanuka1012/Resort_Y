import { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import biteImage from '../assets/images/bite.jpg'
import chipsImage from '../assets/images/chips.jpg'
import ginBottleImage from '../assets/images/ginBottle.jpg'
import resortImage1 from '../assets/images/image1.jpg'
import resortImage2 from '../assets/images/image2.jpg'
import resortImage3 from '../assets/images/image3.jpg'
import resortImage4 from '../assets/images/image4.jpg'
import resortImage5 from '../assets/images/image5.jpg'
import resortImage6 from '../assets/images/image6.jpg'
import mojitoImage from '../assets/images/mojito.jpg'
import saladImage from '../assets/images/salard.jpg'
import './Pages.css'

const galleryImages = [
	{
		image: resortImage1,
		alt: 'A view from Yakdessagala Resort',
		caption: 'At Yakdessagala',
	},
	{
		image: resortImage2,
		alt: 'A view from the resort',
		caption: 'Explore the resort',
	},
	{
		image: resortImage3,
		alt: 'A resort experience at Yakdessagala',
		caption: 'Make a day of it',
	},
	{
		image: resortImage4,
		alt: 'A view from Yakdessagala Resort',
		caption: 'A day at Yakdessagala',
	},
	{
		image: resortImage5,
		alt: 'A resort experience at Yakdessagala',
		caption: 'Time together',
	},
	{
		image: resortImage6,
		alt: 'A view from the resort',
		caption: 'The resort',
	},
	{
		image: biteImage,
		alt: 'A bite to share',
		caption: 'A bite to share',
	},
	{
		image: chipsImage,
		alt: 'A plate of chips',
		caption: 'Something to snack on',
	},
	{
		image: saladImage,
		alt: 'A fresh salad',
		caption: 'Fresh and colorful',
	},
	{
		image: mojitoImage,
		alt: 'A mojito',
		caption: 'BYOB refreshment',
	},
	{
		image: ginBottleImage,
		alt: 'A gin bottle',
		caption: 'Bring your own',
	},
]

function Gallery() {
	const [selectedImage, setSelectedImage] = useState(null)

	useEffect(() => {
		if (!selectedImage) return undefined
		function closeOnEscape(event) {
			if (event.key === 'Escape') setSelectedImage(null)
		}
		window.addEventListener('keydown', closeOnEscape)
		return () => window.removeEventListener('keydown', closeOnEscape)
	}, [selectedImage])

	return (
		<main className="interior-page gallery-page">
			<section className="page-intro" aria-labelledby="gallery-title">
				<p className="eyebrow">CELEBRATE · PLAY · UNWIND</p>
				<h1 id="gallery-title">A day at Yakdessagala.</h1>
				<p>A few glimpses of celebrations, outdoor fun, and poolside time.</p>
			</section>

			<section className="gallery-content page-width" aria-label="Restaurant and food photographs">
				<SectionTitle eyebrow="THE RESORT" title="Find your kind of day." />
				<div className="full-gallery-grid">
					{galleryImages.map((image, index) => (
						<button
							className={`full-gallery-item full-gallery-item-${index + 1}`}
							key={image.image}
							type="button"
							aria-label={`View image: ${image.caption}`}
							onClick={() => setSelectedImage(image)}
						>
							<img src={image.image} alt={image.alt} loading="lazy" />
							<span>{image.caption}</span>
						</button>
					))}
				</div>
			</section>

			{selectedImage && (
				<div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.caption} onClick={(event) => {
					if (event.target === event.currentTarget) setSelectedImage(null)
				}}>
					<button className="lightbox-close" type="button" aria-label="Close image" onClick={() => setSelectedImage(null)}>×</button>
					<img src={selectedImage.image} alt={selectedImage.alt} />
					<p>{selectedImage.caption}</p>
				</div>
			)}
		</main>
	)
}

export default Gallery
