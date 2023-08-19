import Delivery from "./Delivery";
import Featured from "./Featured";
import Meal from "./Meal";
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
    </div>
  );
}

export default App;
