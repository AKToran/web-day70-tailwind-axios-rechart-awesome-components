
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/Nav/DaisyNav'
import NavBar from './Components/Nav/NavBar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

const pricingPromise = fetch("pricingData.json").then(res => res.json());


function App() {
  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>
      </header>

      <main className='p-20'>
        <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <PricingOptions pricingPromise ={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
