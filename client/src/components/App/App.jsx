import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import Home from '../Home/Home';
import ProductInfo from '../ProductInfo/ProductInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/catalog" exact component={Catalog} />
        <Route path="/catalog/:productId" component={ProductInfo} />
      </Switch>
    </Router>
  );
}

export default App;
