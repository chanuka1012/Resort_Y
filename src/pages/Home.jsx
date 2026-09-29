import './Home.css'
import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import { menuItems } from '../data/menu.js'
import resortImage1 from '../assets/images/image1.jpg'
import resortImage2 from '../assets/images/image2.jpg'
import resortImage3 from '../assets/images/image3.jpg'
import resortImage4 from '../assets/images/image4.jpg'
import resortImage5 from '../assets/images/image5.jpg'
import resortImage6 from '../assets/images/image6.jpg'

const menuPreviewItems = menuItems.filter(({ id }) => (
	['chicken-fried-rice', 'chicken-kottu', 'watalappan'].includes(id)
))

const experiences = [
	{
		eyebrow: 'CELEBRATE',
		name: 'Make it a day to remember.',
		copy: 'Birthday, engagement, family, or office party: bring your people and make the day yours.',
		image: resortImage2,
		alt: 'A celebration table prepared for a special gathering',
	},
	{
		eyebrow: 'PLAY',
		name: 'A little more adventure.',
		copy: 'Bring the family, gather your friends, and enjoy a day at the adventure park.',
		image: resortImage3,
		alt: 'A green forest path for an outdoor adventure',
	},
	{
		eyebrow: 'UNWIND',
		name: 'Poolside, at your pace.',
		copy: 'Cool off in the swimming pool or settle into a cabana and take the day slowly.',
		image: resortImage4,
		alt: 'A resort swimming pool ready for a sunny day',
	},
]

const galleryImages = [
	{
		image: resortImage5,
		alt: 'A celebration table prepared for a special gathering',
	},
	{
		image: resortImage6,
		alt: 'A resort swimming pool ready for a sunny day',
	},
	{
		image: resortImage3,
		alt: 'A green forest path for an outdoor adventure',
	},
]

function Home() {
	return (
		<main className="home-page">
			<section className="home-hero" id="home" aria-labelledby="hero-title">
				<div className="home-hero-copy">
					<p className="eyebrow">WELCOME TO YAKDESSAGALA</p>
					<h1 id="hero-title">Celebrate.<br />Play. Unwind.</h1>
					<p className="home-hero-description">
						Bring your favourite people for a party, an adventure, or an easy poolside day at Yakdessagala.
					</p>
					<div className="home-hero-actions">
						<Link className="home-button home-button-primary" to="/reservation">
							Plan your visit <span aria-hidden="true">↗</span>
						</Link>
						<Link className="home-button home-button-secondary" to="/about">
							Explore the resort
						</Link>
					</div>
					<p className="home-hero-note"><span /> Birthday, engagement, family & office parties welcome</p>
				</div>

				<figure className="home-hero-image">
					<img
						src={resortImage1}
						alt="A swimming pool at a resort on a sunny day"
						fetchPriority="high"
					/>
					<figcaption><span>CELEBRATE · PLAY · UNWIND</span><span>Yakdessagala Resort</span></figcaption>
				</figure>
			</section>

			<section className="welcome-band" aria-label="Things to enjoy at Yakdessagala">
				<div className="welcome-item"><span>01</span><p>Parties for every occasion</p></div>
				<div className="welcome-item"><span>02</span><p>Adventure park & swimming pool</p></div>
				<div className="welcome-item"><span>03</span><p>Cabanas & BYOB</p></div>
			</section>

			<section className="experiences-preview" aria-labelledby="experiences-title">
				<div className="section-heading">
					<div>
						<p className="eyebrow">MAKE A DAY OF IT</p>
						<h2 id="experiences-title">Your kind of gathering.</h2>
					</div>
					<p>Celebrate together, try something active, or slow down beside the pool.</p>
				</div>
				<div className="experience-grid">
					{experiences.map((experience) => (
						<article className="experience-card" key={experience.eyebrow}>
							<div className="experience-image">
								<img src={experience.image} alt={experience.alt} loading="lazy" />
							</div>
							<div className="experience-copy">
								<p className="eyebrow">{experience.eyebrow}</p>
								<h3>{experience.name}</h3>
								<p>{experience.copy}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="byob-band" aria-labelledby="byob-title">
				<div>
					<p className="eyebrow">BRING YOUR OWN</p>
					<h2 id="byob-title">Your celebration, your way.</h2>
				</div>
				<p>Yakdessagala is a BYOB venue. Bring your own beverages and enjoy your gathering your way.</p>
			</section>

			<section className="menu-preview" id="menu" aria-labelledby="menu-title">
				<div className="section-heading">
					<div>
						<p className="eyebrow">WHEN YOU’RE READY TO EAT</p>
						<h2 id="menu-title">Something for the table.</h2>
					</div>
					<p>Sample menu highlights. Please check with us for current dishes and prices.</p>
				</div>
				<div className="menu-category-grid">
					{menuPreviewItems.map((item, index) => (
						<article className="menu-category" key={item.id}>
							<div className="menu-category-image">
								<img src={item.image} alt={item.alt} loading="lazy" />
								<span>0{index + 1}</span>
							</div>
							<h3>{item.name}</h3>
						</article>
					))}
				</div>
				<Button to="/menu" className="home-menu-link">See the sample menu <span aria-hidden="true">→</span></Button>
			</section>

			<section className="home-story" id="about" aria-labelledby="story-title">
				<div className="story-inner">
					<div className="story-image">
						<img
							src={resortImage5}
							alt="A poolside cabana at a resort"
							loading="lazy"
						/>
					</div>
					<div className="story-copy">
						<p className="eyebrow">A PLACE FOR YOUR PEOPLE</p>
						<h2 id="story-title">Bring everyone<br />together.</h2>
						<p>
							From birthday and engagement parties to family celebrations and office gatherings,
							Yakdessagala gives your group room to celebrate, play, and unwind.
						</p>
						<Link className="text-link" to="/reservation">Ask about a gathering <span aria-hidden="true">→</span></Link>
					</div>
				</div>
			</section>

			<section className="gallery-preview" id="gallery" aria-labelledby="gallery-title">
				<div className="section-heading gallery-heading">
					<div>
						<p className="eyebrow">THE RESORT</p>
						<h2 id="gallery-title">A little look around.</h2>
					</div>
					<p>Picture your party, your pool day, or your next day out.</p>
				</div>
				<div className="gallery-grid">
					{galleryImages.map(({ image, alt }, index) => (
						<div className={`gallery-image gallery-image-${index + 1}`} key={image}>
							<img src={image} alt={alt} loading="lazy" />
						</div>
					))}
				</div>
			</section>

			<section className="visit-invitation" id="reservations" aria-labelledby="visit-title">
				<p className="eyebrow">MAKE A MOMENT OF IT</p>
				<div className="visit-invitation-content">
						<h2 id="visit-title">Your day out is waiting.</h2>
					<Link className="visit-button" to="/reservation">
						Plan your visit <span aria-hidden="true">↗</span>
					</Link>
				</div>
			</section>

			<section className="find-us-section" id="contact" aria-labelledby="location-title">
				<div className="location-content">
					<div className="location-intro">
						<p className="eyebrow">COME FIND US</p>
										<h2 id="location-title">Your next day out<br />starts here.</h2>
						<p className="intro-copy">We look forward to welcoming you to Yakdessagala Resort.</p>
						<a
							className="directions-button"
							href="https://www.google.com/maps/search/?api=1&query=Yakdessagala+Resort"
							target="_blank"
							rel="noreferrer"
						>
							<span>Open in Google Maps</span><span aria-hidden="true">↗</span>
						</a>
						<p className="location-name"><span aria-hidden="true">⌖</span> Yakdessagala Resort</p>
					</div>

					<div className="map-frame" aria-label="Map showing Yakdessagala Resort">
						<iframe
							title="Yakdessagala Resort location map"
							src="https://maps.google.com/maps?q=Yakdessagala%20Resort&output=embed"
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
						<div className="place-marker" aria-hidden="true">
							<span className="marker-image"><img src="/yakdessagala.jpg" alt="" /></span>
							<span className="marker-point" />
						</div>
						<div className="map-caption"><span className="map-caption-dot" /> YAKDESSAGALA RESORT</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
