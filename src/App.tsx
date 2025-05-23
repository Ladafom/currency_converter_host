import { lazy, Suspense } from 'react';
import './App.css'
  
const CurrencyConverter = lazy(() => import('currencyConverter/App'));
const Currencies = lazy(() => import('currencies/App'));

function App() {

  return (
    <div className='host'>
      <div className='logo'>
        <img src='/assets/logo.svg'/>
        <h1>Конвертер валют</h1>
      </div>
      <Suspense fallback={<div>Loading Microfrontend...</div>}>
        <CurrencyConverter />
        <Currencies/>
      </Suspense>
      <p>*Обновление каждый день в 16:00 по CET (UTC+1) </p>
    </div>
  );
}

export default App;