import { Link } from 'react-router-dom'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import resortImage6 from '../assets/images/image6.jpg'
import './Pages.css'

const values = [
	{ number: '01', title: 'Adventure park', copy: 'Add a little action and make a day of exploring together.' },
	{ number: '02', title: 'Pool & cabanas', copy: 'Make a splash, then settle in and enjoy the slower side of the day.' },
	{ number: '03', title: 'BYOB gatherings', copy: 'Bring your own beverages and celebrate your way.' },
]

function About() {
	return (
		<main className="interior-page about-page">
			<section className="page-intro" aria-labelledby="about-title">
				<p className="eyebrow">A PLACE TO GATHER</p>
				<h1 id="about-title">A place to celebrate.</h1>
				<p>Parties, adventure, poolside afternoons, and room to bring everyone together.</p>
			</section>

			<section className="about-feature page-width">
				<div className="about-feature-image">
					<img
						src={resortImage6}
						alt="A swimming pool at a resort on a sunny day"
						loading="lazy"
					/>
				</div>
				<div className="about-feature-copy">
					<p className="eyebrow">ROOM FOR EVERY KIND OF DAY</p>
					<h2>Celebrate.<br />Play. Unwind.</h2>
					<p>
						Bring your friends and family for a birthday or engagement party, a family gathering,
						or an office celebration. Spend the day at the adventure park, cool off in the swimming
						pool, or relax in a cabana. Yakdessagala is a BYOB venue, so you can bring your own beverages.
					</p>
					<Button to="/reservation">Plan a gathering <span aria-hidden="true">→</span></Button>
				</div>
			</section>

			<section className="about-values">
				<div className="page-width">
					<SectionTitle eyebrow="MAKE IT YOUR DAY" title="A little something for everyone." />
					<div className="about-values-grid">
						{values.map((value) => (
							<article className="about-value" key={value.number}>
								<span>{value.number}</span>
								<h3>{value.title}</h3>
								<p>{value.copy}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="about-visit page-width">
				<div>
					<p className="eyebrow">BIRTHDAYS, ENGAGEMENTS, FAMILY & OFFICE PARTIES</p>
					<h2>Bring your people. We’ll be ready.</h2>
				</div>
				<Link className="button button-outline" to="/contact">Plan your visit <span aria-hidden="true">↗</span></Link>
			</section>
		</main>
	)
}

export default About
