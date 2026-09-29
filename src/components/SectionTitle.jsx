function SectionTitle({ eyebrow, title, description, className = '' }) {
	return (
		<div className={`section-heading ${className}`.trim()}>
			<div>
				{eyebrow && <p className="eyebrow">{eyebrow}</p>}
				<h2>{title}</h2>
			</div>
			{description && <p>{description}</p>}
		</div>
	)
}

export default SectionTitle
