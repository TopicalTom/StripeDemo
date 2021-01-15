import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import './App.scss';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/product/:id" component={Product} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
