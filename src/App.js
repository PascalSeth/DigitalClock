import { DigitalClock } from './components/DigitalClock';
import StopWatch from './components/StopWatch';
import { Routes, Route } from "react-router-dom";
import Timer from './components/Timer';

function App() {
	return (
		<div className="flex-grow w-full flex justify-center items-start bg-[#121212]">
		
		<Routes> 
  <Route index element={<DigitalClock/>} />
<Route path='/' element={<DigitalClock/>} /> 
 <Route path='/stopwatch' element={<StopWatch/>} />
 <Route path='/timer' element={<Timer/>} />
 </Routes>

		</div>
	);
}

export default App;
