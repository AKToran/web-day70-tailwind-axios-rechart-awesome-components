import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./Components/Nav/DaisyNav";
import NavBar from "./Components/Nav/NavBar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultsChart from "./Components/ResultsChart/ResultsChart";
import MarksChart from "./Components/ResultsChart/MarksChart";
import axios from "axios";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

const marksPromise = axios.get("resultsData.json");

function App() {
  return (
    <>
      <header>
        {/* <DaisyNav></DaisyNav> */}
        <NavBar></NavBar>
      </header>

      <main className="p-20">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
      <ResultsChart></ResultsChart>
      
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>
    </>
  );
}

export default App;
