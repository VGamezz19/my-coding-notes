import { React } from './deps.ts';
// import './style.css'
declare global {
	namespace JSX {
		interface IntrinsicElements {
			button: any;
			div: any;
			h1: any;
			p: any;
			img: any;
		}
	}
}
const App = () => {
	return (
		<div className='app'>
			<h1>Waaassaaaaaaaaaappppppppp</h1>
			<img src={'./wassup.jpg'} />
		</div>
	);
};
export default App;
