# Crypto-to-Gift Card Converter
 A project idea whith an objective to align with Bitrefill's mission and tech stack. Designed to demonstrate my skills, interest, and understanding of Bitrefill's goals, tech stack and core business and show my consideration for the company's visual identity and my ability to create cohesive UI.

## Bitrefill
Bitrefill is a prominent player in the crypto-e-commerce space, facilitating the purchase of goods and services using cryptocurrency.

## Mission
To promote a circular crypto-economy, allowing users to bypass traditional banking systems and live entirely on crypto. The company is committed to making cryptocurrency a viable alternative to fiat currency. 

## Plateform
Bitrefill's platform supports various digital services like mobile top-ups, gift cards, and more, with a focus on making crypto practical for everyday use.


## Stack
- Single-page application created with React + Vite + MaterialUI (One of the most popular React UI libraries, Implements Google's Material Design, Extensive set of pre-built components, Good documentation and community support)
- CoinGecko public API for cryptocurrency prices (free and doesn't require authentication for basic price data)
- JSON file storing a mock list of gift cards. This simulates what one might get from a backend with a database, and provides a variety of gift cards across different categories, which you can use to populate your gift card selection tool. Each gift card object includes:
	- A unique ID
	- Name of the service
	- Category
	- Available denominations (values)
	- Currency (USD in this case, but could be expanded for other currencies)
	- An image URL (you'd need to replace these with actual URLs or local paths)
	- A brief description
- Deployed on 

## Design
- Bitrefill website style and color palette
- Dark theme
- Links to real gift cards
- Clean responsive interface for mobile and desktop
- Loading states for API calls
- Aims to be clean, user-friendly, and aligned with modern web design principles

## Features
- Users can select a cryptocurrency (e.g., Bitcoin, Ethereum) and enter an amount
- The app converts the crypto amount to USD in real-time
- Based on the USD value, it suggests gift cards that the user could purchase
 - Users can filter gift cards by category or search by name
 - Basic error handling

## Layout
    - Header with a logo (you could use a placeholder or create a simple one)
    - Main content area
    - Footer with basic information (e.g., "Created by [Your Name]")
    - Link to about README and Github
