import {fromJS} from 'immutable';

function setState(state, newState) {
  const oldPair = state.getIn(['vote', 'pair']);
  const newPair = newState.getIn(['vote', 'pair']);
  if (state.get('hasVoted') === null || (oldPair && newPair && oldPair.toString() === newPair.toString())) {
    return state.merge(newState);
  }
  return state.delete('hasVoted').merge(newState);
}

function vote(state, entry) {
  const pair = state.getIn(['vote', 'pair']);
  if (pair && pair.includes(entry)) {
    return state.set('hasVoted', entry);
  } else {
    return state;
  }
}
export default function(state = fromJS({}), action) {
  switch(action.type) {
  case 'SET_STATE':
    return setState(state, fromJS(action.state))
  case 'VOTE':
    return vote(state, action.entry)
  default:
    return state;
  }
}