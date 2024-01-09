import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import { ChakraProvider } from '@chakra-ui/react'

import store from "./rtk/store/store.js";
import { Provider } from "react-redux";
import { PrimeReactProvider } from "primereact/api";

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <React.StrictMode>
      <PrimeReactProvider>
        {/* <ChakraProvider> */}
        <App />
        {/* </ChakraProvider> */}
      </PrimeReactProvider>
    </React.StrictMode>
  </Provider>,
)
