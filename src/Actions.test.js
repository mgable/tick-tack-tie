
import toJson from 'enzyme-to-json';

import { rewindHistory, selectSquare } from './actions';



describe('Actions', () => {
	test('correctly makes rewind history', () => {
		expect(rewindHistory()).toMatchSnapshot();
	});

	test('correctly makes select Square', () => {
		expect(selectSquare(1)).toMatchSnapshot();
	})
	
});
