import Header from './components/head';
import Body from './components/body';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
function App() {
  return (
    <ChakraProvider>
    <Header/>
    <Body/>
    </ChakraProvider>
  );
}

export default App;
