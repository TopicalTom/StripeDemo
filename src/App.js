import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MainSection from './components/MainSection/MainSection';
import FeaturedCollection from './components/FeaturedCollection/FeaturedCollection';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <MainSection />
            <FeaturedCollection />
        </div>
    );
}

export default App;
