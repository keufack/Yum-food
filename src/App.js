import Category from "./Category";
import Delivery from "./Delivery";
import Featured from "./Featured";
import Footer from "./Footer";
import Meal from "./Meal";
import NewsLetter from "./NewsLetter";
import TopNav from "./TopNav";
import TopPicks from "./TopPicks";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Category />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
