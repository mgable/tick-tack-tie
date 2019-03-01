import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';


const mockStore = configureStore();
const initialState = {}

const store = mockStore(initialState);

describe('App ', () => {
	test('renders without crashing', () => {
		const wrapper = shallow(<Provider store={store}><App /></Provider>)
		const component = wrapper.dive();
		expect(toJson(component)).toMatchSnapshot();
	})
	
});
