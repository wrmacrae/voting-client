import {fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from './reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = fromJS({});
    const action = {
      type: 'SET_STATE',
      state: fromJS({
        vote: {
          pair: ['Frozen', 'Coco'],
          tally: {'Frozen': 2}
        }
      })
    }
    const nextState = reducer(undefined, action);

    expect(nextState).to.eql(fromJS({
        vote: {
          pair: ['Frozen', 'Coco'],
          tally: {'Frozen': 2}
        }
      }))
  });

  it('handles VOTE by setting hasVoted', () => {
    const initialState = fromJS({
      pair: ['Frozen', 'Coco'],
      tally: {'Frozen': 1}
    });
    const action = {
      type: 'VOTE',
      entry: 'Frozen'
    }
    const nextState = reducer(initialState, action);

    expect(nextState).to.eql(fromJS({
        vote: {
          pair: ['Frozen', 'Coco'],
          tally: {'Frozen': 2},
          hasVoted: true          
        }
      }))
  });
});