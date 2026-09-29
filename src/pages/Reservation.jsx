import { useState } from 'react'
import SectionTitle from '../components/SectionTitle.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import './Pages.css'

function getLocalDateString(date) {
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	return `${year}-${month}-${day}`
}

function Reservation() {
	const [requestMessage, setRequestMessage] = useState('')
	const today = getLocalDateString(new Date())

	function handleSubmit(event) {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const fields = [
			`Name: ${formData.get('name')}`,
			`Phone: ${formData.get('phone')}`,
			`Occasion: ${formData.get('occasion')}`,
			`Interested in: ${formData.get('experience')}`,
			`Date: ${formData.get('date')}`,
			`Time: ${formData.get('time')}`,
			`Guests: ${formData.get('guests')}`,
			formData.get('email') ? `Email: ${formData.get('email')}` : '',
			formData.get('request') ? `Special request: ${formData.get('request')}` : '',
		].filter(Boolean)
		setRequestMessage(`Hello! I'd like to request a reservation.\n${fields.join('\n')}`)
	}

	return (
		<main className="interior-page reservation-page">
			<section className="page-intro" aria-labelledby="reservation-title">
				<p className="eyebrow">PARTIES, POOL DAYS & ADVENTURE</p>
				<h1 id="reservation-title">Let’s make a day of it.</h1>
				<p>Tell us what you’re planning and we’ll be in touch to discuss your visit.</p>
			</section>

			<section className="reservation-content page-width">
				<div className="reservation-form-wrap">
						<SectionTitle eyebrow="PLAN YOUR VISIT" title="What are you celebrating?" description="Send an enquiry for a birthday, engagement, family or office party, or a day at the resort. Your request isn’t confirmed until the team replies." />
					<form className="reservation-form" onSubmit={handleSubmit}>
						<label>
							<span>Your name</span>
							<input name="name" autoComplete="name" required />
						</label>
						<label>
							<span>Phone number</span>
							<input name="phone" type="tel" autoComplete="tel" required />
						</label>
						<label>
							<span>Occasion</span>
							<select name="occasion" defaultValue="Birthday party" required>
								<option>Birthday party</option>
								<option>Engagement party</option>
								<option>Family party</option>
								<option>Office party</option>
								<option>Day visit</option>
								<option>Other gathering</option>
							</select>
						</label>
						<label>
							<span>Interested in</span>
							<select name="experience" defaultValue="Party or gathering" required>
								<option>Party or gathering</option>
								<option>Adventure park</option>
								<option>Swimming pool</option>
								<option>Cabana</option>
								<option>A combination of experiences</option>
							</select>
						</label>
						<label>
							<span>Email <small>OPTIONAL</small></span>
							<input name="email" type="email" autoComplete="email" />
						</label>
						<label>
							<span>Number of guests</span>
							<select name="guests" defaultValue="2" required>
								{Array.from({ length: 12 }, (_, index) => index + 1).map((number) => (
									<option key={number} value={number}>{number} {number === 1 ? 'guest' : 'guests'}</option>
								))}
								<option value="13+">13 or more guests</option>
							</select>
						</label>
						<label>
							<span>Date</span>
							<input name="date" type="date" min={today} required />
						</label>
						<label>
							<span>Preferred time</span>
							<input name="time" type="time" required />
						</label>
						<label className="form-field-wide">
							<span>Anything we should know? <small>OPTIONAL</small></span>
							<textarea name="request" rows="4" placeholder="Guest count, cabana enquiry, or other details" />
						</label>
							<button className="button button-primary form-submit" type="submit">Prepare enquiry <span aria-hidden="true">→</span></button>
					</form>

					{requestMessage && (
						<div className="reservation-confirmation" aria-live="polite">
							<div>
									<h3>Your enquiry is ready.</h3>
									<p>Continue in WhatsApp to send it to the team. They’ll follow up about availability and details.</p>
							</div>
							<WhatsAppButton message={requestMessage}>Send request</WhatsAppButton>
						</div>
					)}
				</div>
				<aside className="reservation-aside">
					<p className="eyebrow">GOOD TO KNOW</p>
					<h2>Bring your own beverages.</h2>
					<p>Yakdessagala is a BYOB place. Send us your plans and the team can follow up about availability and arrangements.</p>
				</aside>
			</section>
		</main>
	)
}

export default Reservation
