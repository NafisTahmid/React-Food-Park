import './App.css';
import Carousel from './Components/Carousel/Carousel';
import LogoSearchBar from './Components/LogoSearchBar/LogoSearchBar';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';
import TopBanner from './Components/TopBanner/TopBanner';
import breakfastData from './Components/Data/breakfastData';
import topFoodData from './Components/Data/topFoodData';

function App() {
  return (
    <section>
        <Navbar/ >
        <LogoSearchBar/ >
        <Carousel />
        <TopBanner />
        {/* <Breakfast />
        <TopFoods /> */}
        <Products title="BREAKFAST" productsData={breakfastData}/>
        <Products title="INDIAN" productsData={topFoodData}/>
    </section>
  );
}

export default App;
