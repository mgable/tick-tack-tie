/*
 * action types
 */

export const SELECT_SQUARE = 'SELECT_SQUARE'

/*
 * action creators
 */

export function selectSquare(idx) {
  return { type: SELECT_SQUARE, idx }
}
