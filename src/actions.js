/*
 * action types
 */

export const SELECT_SQUARE = 'SELECT_SQUARE'
export const REWIND_HISTORY = 'REWIND_HISTORY'

/*
 * action creators
 */

export function selectSquare(idx) {
  return { type: SELECT_SQUARE, idx }
}


export function rewindHistory() {
  return { type: REWIND_HISTORY }
}
