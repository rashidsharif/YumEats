import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Featured></Featured>
      <Delivery></Delivery>
      <TopPicks></TopPicks>
      <Meal></Meal>
      <Categories></Categories>
      <NewsLetter></NewsLetter>
      <Footer></Footer>

    </div>
  );
}

export default App;
