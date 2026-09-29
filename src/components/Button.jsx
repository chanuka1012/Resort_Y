import { Link } from 'react-router-dom'

function Button({
	children,
	className = '',
	href,
	to,
	variant = 'primary',
	type = 'button',
	...props
}) {
	const classes = `button button-${variant} ${className}`.trim()

	if (to) {
		return <Link className={classes} to={to} {...props}>{children}</Link>
	}

	if (href) {
		return <a className={classes} href={href} {...props}>{children}</a>
	}

	return <button className={classes} type={type} {...props}>{children}</button>
}

export default Button
