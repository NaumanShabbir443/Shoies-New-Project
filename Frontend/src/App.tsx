import './App.scss';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Routing from "./Frontend/Routing";
import { Provider } from 'react-redux';
import store from "./Redux-Toolkit/ConfigureStore/Store.tsx"
// Slick 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {


  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  )
}

export default App
