import Button from './Button.jsx'

const priceFormatter = new Intl.NumberFormat('en-LK', {
	style: 'currency',
	currency: 'LKR',
	maximumFractionDigits: 0,
})

function FoodCard({ item, quantity = 0, onAdd }) {
	return (
		<article className="food-card">
			<div className="food-card-image">
				<img src={item.image} alt={item.alt} loading="lazy" />
				{item.label && <span className="food-card-label">{item.label}</span>}
			</div>
			<div className="food-card-content">
				<div className="food-card-heading">
					<h3>{item.name}</h3>
					<span>{priceFormatter.format(item.price)}</span>
				</div>
				<p>{item.description}</p>
				<Button className="food-card-add" variant="text" onClick={() => onAdd(item)}>
					{quantity > 0 ? `Add another (${quantity} in order)` : 'Add to order'}
					<span aria-hidden="true">+</span>
				</Button>
			</div>
		</article>
	)
}

export default FoodCard
