import Navbar from './components/Navbar';
import Card from './components/Card';
import travelData from './data.js';

function App() {
  const cardElements = travelData.map((item) => {
    return <Card
      key={item.id}
      item={item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {cardElements}
      </div>
    </div>
  );
}

export default App;
