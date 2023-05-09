import MainCarousel from "./MainCarousel";
import ShoppingList from './ShoppingList';
import Subscribe from "./Subscribe";

const Home = () => {
	return (
		<div className="Home">
			<MainCarousel />
			<ShoppingList />
			<Subscribe />
		</div>
	)
}

export default Home;