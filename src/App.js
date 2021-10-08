import './App.css';
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';


function App(props) {

	const [inputValue, setInputValue] = useState('');

	const inputChange = event => {
		setInputValue(event.target.value);
	}

	const { clickButton, newValue } = props;

	return (
		<div className="App" style={{ paddingTop: '10px' }}>
			<input
				onChange={inputChange}
				type='text'
				value={inputValue} />
			<button
				onClick={() => clickButton(inputValue)}>
				Alterar
			</button>
			<h1>{newValue}</h1>
		</div>
	);
}

const mapStateToProps = store => ({
	newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
