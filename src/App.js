import { DigitalClock } from './components/DigitalClock';
import Header from './components/Header';
import StopWatch from './components/StopWatch';
import Timer from './components/Timer';

function App() {
	return (
		<div className="flex-grow w-full flex justify-center items-start bg-[#121212]">
			<DigitalClock />
		</div>
	);
}

export default App;
