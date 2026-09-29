import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
	{ label: 'Home', to: '/' },
	{ label: 'Menu', to: '/menu' },
	{ label: 'About', to: '/about' },
	{ label: 'Gallery', to: '/gallery' },
	{ label: 'Reservations', to: '/reservation' },
	{ label: 'Contact', to: '/contact' },
]

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	function closeMenu() {
		setIsMenuOpen(false)
	}

	return (
		<header className="site-header">
			<Link className="brand" to="/" aria-label="Yakdessagala Resort home" onClick={closeMenu}>
				<img src="/yakdessagala.jpg" alt="" />
				<span>Yakdessagala <small>RESORT</small></span>
			</Link>

			<nav
				id="primary-navigation"
				className={`primary-nav${isMenuOpen ? ' is-open' : ''}`}
				aria-label="Primary navigation"
			>
				{navLinks.map(({ label, to }) => (
					<NavLink
						className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
						end={to === '/'}
						key={label}
						to={to}
						onClick={closeMenu}
					>
						{label}
					</NavLink>
				))}
			</nav>

			<Link className="nav-order" to="/menu" onClick={closeMenu}>
				Order Now <span aria-hidden="true">↗</span>
			</Link>

			<button
				className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
				type="button"
				aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
				aria-expanded={isMenuOpen}
				aria-controls="primary-navigation"
				onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
			>
				<span />
				<span />
				<span />
			</button>
		</header>
	)
}

export default Navbar
