import { Link } from 'react-router-dom'
import { siteInfo } from '../data/site.js'

const footerLinks = [
	{ label: 'Home', to: '/' },
	{ label: 'Menu', to: '/menu' },
	{ label: 'About', to: '/about' },
	{ label: 'Gallery', to: '/gallery' },
	{ label: 'Reservations', to: '/reservation' },
	{ label: 'Contact', to: '/contact' },
]

function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-content">
				<div className="footer-brand-block">
					<Link className="footer-brand" to="/" aria-label="Yakdessagala Resort home">
						<img src="/yakdessagala.jpg" alt="" />
						<span>Yakdessagala <small>RESORT</small></span>
					</Link>
					<p>Parties, adventure, pool days, and time together.</p>
				</div>

				<nav className="footer-navigation" aria-label="Footer navigation">
					<h2 className="footer-label">EXPLORE</h2>
					<div className="footer-link-list">
						{footerLinks.map(({ label, to }) => (
							<Link to={to} key={label}>{label}</Link>
						))}
					</div>
				</nav>

				<div className="footer-location">
					<h2 className="footer-label">FIND US</h2>
					<p>Yakdessagala Resort</p>
					<a
						className="footer-directions"
						href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.mapQuery)}`}
						target="_blank"
						rel="noreferrer"
					>
						Get directions <span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>

			<div className="footer-bottom">
				<span>© {new Date().getFullYear()} Yakdessagala Resort</span>
				<span>We’ll see you soon.</span>
			</div>
		</footer>
	)
}

export default Footer
