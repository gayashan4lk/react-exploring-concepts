import './App.css';
import Article from './components/Article';
import Layout from './components/Layout';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Article />
				<Article />
			</Layout>
		</div>
	);
}

export default App;
