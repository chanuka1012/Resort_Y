import { useState } from 'react'
import Button from '../components/Button.jsx'
import FoodCard from '../components/FoodCard.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { menuCategories, menuItems } from '../data/menu.js'
import './Pages.css'

const formatPrice = new Intl.NumberFormat('en-LK', {
	style: 'currency',
	currency: 'LKR',
	maximumFractionDigits: 0,
})

function Menu() {
	const [activeCategory, setActiveCategory] = useState('All')
	const [order, setOrder] = useState({})
	const visibleItems = activeCategory === 'All'
		? menuItems
		: menuItems.filter((item) => item.category === activeCategory)
	const orderedItems = menuItems.filter((item) => order[item.id] > 0)
	const orderCount = Object.values(order).reduce((total, quantity) => total + quantity, 0)
	const orderTotal = orderedItems.reduce((total, item) => total + item.price * order[item.id], 0)

	function changeQuantity(item, change) {
		setOrder((current) => {
			const nextQuantity = (current[item.id] ?? 0) + change
			const next = { ...current }
			if (nextQuantity <= 0) delete next[item.id]
			else next[item.id] = nextQuantity
			return next
		})
	}

	const orderMessage = [
		"Hello! I'd like to place an order:",
		...orderedItems.map((item) => `${item.name} x ${order[item.id]} - ${formatPrice.format(item.price * order[item.id])}`),
		`Estimated total: ${formatPrice.format(orderTotal)}`,
	].join('\n')

	return (
		<main className="interior-page menu-page">
			<section className="page-intro" aria-labelledby="menu-page-title">
				<p className="eyebrow">FROM OUR KITCHEN</p>
				<h1 id="menu-page-title">Find your new favourite.</h1>
				<p>Made to order, easy to share, and best enjoyed together.</p>
			</section>

			<div className="menu-content page-width">
				<div className="menu-main-column">
					<div className="category-filter" aria-label="Filter menu by category">
						{menuCategories.map((category) => (
							<button
								className={`category-filter-button${activeCategory === category ? ' is-active' : ''}`}
								key={category}
								type="button"
								aria-pressed={activeCategory === category}
								onClick={() => setActiveCategory(category)}
							>
								{category}
							</button>
						))}
					</div>

					<p className="sample-menu-note">Sample menu and LKR prices. Please confirm current items and prices with the restaurant.</p>

					<div className="food-grid">
						{visibleItems.map((item) => (
							<FoodCard
								item={item}
								key={item.id}
								quantity={order[item.id] ?? 0}
								onAdd={(selectedItem) => changeQuantity(selectedItem, 1)}
							/>
						))}
					</div>
				</div>

				<aside className="order-panel" aria-labelledby="order-title">
					<div className="order-panel-heading">
						<div>
							<p className="eyebrow">YOUR SELECTION</p>
							<h2 id="order-title">Your order</h2>
						</div>
						<span className="order-count" aria-label={`${orderCount} items`}>{orderCount}</span>
					</div>

					{orderedItems.length === 0 ? (
						<p className="empty-order">Your order is empty. Add a dish to get started.</p>
					) : (
						<ul className="order-list">
							{orderedItems.map((item) => (
								<li className="order-line" key={item.id}>
									<div className="order-line-copy">
										<strong>{item.name}</strong>
										<span>{formatPrice.format(item.price * order[item.id])}</span>
									</div>
									<div className="quantity-control" aria-label={`${item.name} quantity`}>
										<Button variant="counter" aria-label={`Remove one ${item.name}`} onClick={() => changeQuantity(item, -1)}>−</Button>
										<span>{order[item.id]}</span>
										<Button variant="counter" aria-label={`Add one ${item.name}`} onClick={() => changeQuantity(item, 1)}>+</Button>
									</div>
								</li>
							))}
						</ul>
					)}

					<div className="order-total">
						<span>Estimated total</span>
						<strong>{formatPrice.format(orderTotal)}</strong>
					</div>
					<WhatsAppButton className="order-whatsapp" message={orderMessage} disabled={orderCount === 0}>
						Send order
					</WhatsAppButton>
					{orderCount === 0 && <span className="order-help">Add a dish before sending your order.</span>}
				</aside>
			</div>

			<section className="menu-bottom-cta">
				<SectionTitle eyebrow="HERE TO HELP" title="Not sure what to choose?" description="Send us your question and we’ll help you decide." />
				<WhatsAppButton message="Hello! I have a question about the menu." />
			</section>
		</main>
	)
}

export default Menu
