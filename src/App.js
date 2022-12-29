import './App.css';

import TopNav from './components/TopNav';
import Hero from './components/Hero';
import JoinBar from './components/JoinBar';
import Videos from './components/Videos';
import Episodes from "./components/Episodes";
import MoreDetails from "./components/MoreDetails";
import MoreLikeThis from "./components/MoreLikeThis";
import ComingSoon from "./components/ComingSoon";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<TopNav />
			<Hero />
			<JoinBar />
			<Videos />
			<Episodes />
			<MoreDetails />
			<MoreLikeThis />
			<ComingSoon />
			<Footer />
		</div>
	);
}

export default App;
