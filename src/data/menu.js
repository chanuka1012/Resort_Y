import biteImage from '../assets/images/bite.jpg'
import chipsImage from '../assets/images/chips.jpg'
import saladImage from '../assets/images/salard.jpg'
import mealImage1 from '../assets/images/image1.jpg'
import mealImage2 from '../assets/images/image2.jpg'
import mealImage3 from '../assets/images/image3.jpg'
import mealImage4 from '../assets/images/image4.jpg'
import mojitoImage from '../assets/images/mojito.jpg'
import vegeRoleImage from '../assets/images/vegerole1.jpg'

export const menuCategories = [
	'All',
	'Starters',
	'Rice',
	'Noodles',
	'Kottu',
	'Mains',
	'Desserts',
	'Drinks',
]

export const menuItems = [
	{
		id: 'vegetable-rolls',
		name: 'Vegetable rolls',
		category: 'Starters',
		description: 'Crisp golden rolls filled with spiced vegetables.',
		price: 850,
		image: vegeRoleImage,
		alt: 'Crisp vegetable rolls served as a starter',
	},
	{
		id: 'chicken-fried-rice',
		name: 'Chicken fried rice',
		category: 'Rice',
		description: 'Wok-tossed rice with chicken, vegetables, and egg.',
		price: 1850,
		image: mealImage1,
		alt: 'Chicken fried rice with vegetables',
		label: 'Guest favourite',
	},
	{
		id: 'vegetable-fried-rice',
		name: 'Vegetable fried rice',
		category: 'Rice',
		description: 'Fragrant wok-fried rice with seasonal vegetables and egg.',
		price: 1450,
		image: saladImage,
		alt: 'Vegetable fried rice served in a bowl',
		label: 'Vegetarian',
	},
	{
		id: 'chicken-kottu',
		name: 'Chicken kottu',
		category: 'Kottu',
		description: 'Chopped roti stir-fried with chicken, vegetables, and spice.',
		price: 1750,
		image: mealImage2,
		alt: 'A hearty bowl of stir-fried noodles',
		label: 'House favourite',
	},
	{
		id: 'vegetable-kottu',
		name: 'Vegetable kottu',
		category: 'Kottu',
		description: 'A colourful mix of chopped roti and fresh vegetables.',
		price: 1450,
		image: chipsImage,
		alt: 'A colourful vegetable dish',
		label: 'Vegetarian',
	},
	{
		id: 'chicken-noodles',
		name: 'Chicken noodles',
		category: 'Noodles',
		description: 'Wok-fried noodles with tender chicken and crisp vegetables.',
		price: 1750,
		image: mealImage3,
		alt: 'A bowl of noodles with vegetables',
	},
	{
		id: 'chicken-curry-meal',
		name: 'Chicken curry meal',
		category: 'Mains',
		description: 'A comforting chicken curry served with rice and accompaniments.',
		price: 1950,
		image: mealImage4,
		alt: 'A generous plated meal ready to share',
	},
	{
		id: 'watalappan',
		name: 'Watalappan',
		category: 'Desserts',
		description: 'A gently spiced coconut custard pudding.',
		price: 650,
		image: biteImage,
		alt: 'A chilled dessert ready to serve',
	},
	{
		id: 'fresh-lime',
		name: 'Fresh lime soda',
		category: 'Drinks',
		description: 'Fresh lime, sparkling soda, and a little sweetness.',
		price: 550,
		image: mojitoImage,
		alt: 'A refreshing citrus drink',
	},
]
