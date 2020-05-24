import {fromJS} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
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
    return setState(state, action.state)
  case 'VOTE':
    return vote(state, action.entry)
  }
  return state;
}