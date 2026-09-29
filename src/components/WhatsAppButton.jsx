import { siteInfo } from '../data/site.js'
import Button from './Button.jsx'

function WhatsAppButton({ message, children = 'Order on WhatsApp', className = '', disabled = false, ...props }) {
	const classes = `whatsapp-button ${className}`.trim()
	if (disabled) {
		return <Button className={classes} disabled {...props}>{children}</Button>
	}

	const phone = siteInfo.whatsappNumber.replace(/\D/g, '')
	const target = phone ? `https://wa.me/${phone}` : 'https://wa.me/'
	const href = `${target}?text=${encodeURIComponent(message)}`

	return (
		<Button
			className={classes}
			href={href}
			target="_blank"
			rel="noreferrer"
			{...props}
		>
			<span className="whatsapp-mark" aria-hidden="true">W</span>
			{children}
			<span aria-hidden="true">↗</span>
		</Button>
	)
}

export default WhatsAppButton
