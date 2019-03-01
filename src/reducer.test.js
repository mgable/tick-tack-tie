// Reducer to be tested
import reducers, { initialState } from './reducers';
import { SELECT_SQUARE, REWIND_HISTORY } from './actions';


describe('The reducer\'s ', () => {
	describe('initial state', () => {
		test('is correct', () => {
			const action = { type: 'dummy_action' };
			expect(reducers(undefined, action)).toEqual({app: initialState});
		});
	});

	describe('action select square', () => {
		const firstState = {"app":{"completed":false,"history":[[null,null,null,null,null,null,null,null,null]],"message":"The game continues","squares":[null,"X",null,null,null,null,null,null,null],"turn":1,"winner":false}}
		test('works correctly', () => {
			var action = { type: SELECT_SQUARE, idx: 1 };
			expect(reducers(undefined, action)).toEqual(firstState);
			action = { type: SELECT_SQUARE, idx: 2 };
			expect(reducers(firstState, action)).toEqual({"app":{"completed":false,"history":[[null,null,null,null,null,null,null,null,null], [null,"X",null,null,null,null,null,null,null]],"message":"The game continues","squares":[null,"X","O",null, null,null,null,null,null],"turn":2,"winner":false}});

		})
	});
});