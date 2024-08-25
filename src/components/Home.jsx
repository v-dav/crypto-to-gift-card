import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import USDInput from './USDInput';
import CryptoConverter from './CryptoConverter';
import GiftCardGallery from './GiftCardGallery';
import SearchResults from './SearchResults';
import MatchingGiftCards from './MatchingGiftCards';

function Home({
	usdAmount,
	selectedCrypto,
	matchingCards,
	foundCards,
	handleUsdChange,
	handleCryptoChange,
	handleSearch
}) {
	return (
		<>
			<WelcomeMessage />
			<Header onCryptoChange={handleCryptoChange} onSearch={handleSearch} />
			<main className="main-content">
				<USDInput value={usdAmount} onChange={handleUsdChange} />
				<CryptoConverter usdAmount={parseFloat(usdAmount)} selectedCrypto={selectedCrypto} />
				<MatchingGiftCards cards={matchingCards} usdAmount={usdAmount} />
				<SearchResults foundCards={foundCards} />
				<GiftCardGallery />
			</main>
		</>
	);
}

export default Home;
