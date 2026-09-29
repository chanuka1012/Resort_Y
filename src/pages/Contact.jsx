import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { siteInfo } from '../data/site.js'
import './Pages.css'

function Contact() {
	const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(siteInfo.mapQuery)}&output=embed`
	const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.mapQuery)}`

	return (
		<main className="interior-page contact-page">
			<section className="page-intro" aria-labelledby="contact-title">
				<p className="eyebrow">COME SAY HELLO</p>
				<h1 id="contact-title">Let’s plan your day.</h1>
				<p>Ask us about a party, the adventure park, a swim, or a cabana visit.</p>
			</section>

			<section className="contact-content page-width">
				<div className="contact-details">
					<SectionTitle eyebrow="GET IN TOUCH" title="We’re here to help." description="Send us an enquiry about your gathering or day out at Yakdessagala." />
					<div className="contact-actions">
						<WhatsAppButton message="Hello! I have a question for Yakdessagala Resort." />
						<Link className="contact-reservation-link" to="/reservation">Make a reservation <span aria-hidden="true">→</span></Link>
					</div>
					{siteInfo.phone && <a className="contact-detail" href={`tel:${siteInfo.phone}`}>{siteInfo.phone}</a>}
					{siteInfo.email && <a className="contact-detail" href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>}
					<div className="contact-address">
						<span className="eyebrow">FIND US</span>
						<p>{siteInfo.name}</p>
						<a href={directionsUrl} target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a>
					</div>
					<div className="contact-byob">
						<p className="eyebrow">BYOB</p>
						<p>Bring your own beverages and enjoy your gathering your way.</p>
					</div>
				</div>

				<div className="contact-map">
					<iframe
						title={`${siteInfo.name} on Google Maps`}
						src={mapUrl}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</section>
		</main>
	)
}

export default Contact
