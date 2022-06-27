import Card from './components/cards/Card';
import Header from './components/header/Header';
import "./scss/App.scss";
import {data} from "./helper/data";

const App = () => {
  return (
    <div>
      <Header/>
      <Card data={data}/>
    </div>
  )
}

export default App