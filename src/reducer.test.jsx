import {fromJS} from 'immutable';

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
    };
    const nextState = reducer(undefined, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        pair: ['Frozen', 'Coco'],
        tally: {'Frozen': 2}
      }
    }));
  });

  it('handles VOTE by setting hasVoted', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Frozen', 'Coco'],
        tally: {'Frozen': 2}
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Frozen'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        pair: ['Frozen', 'Coco'],
        tally: {'Frozen': 2}
      },
      hasVoted: 'Frozen'
    }));
  });

  it('does not set hasVoted for invalid VOTE entry', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Frozen', 'Coco'],
        tally: {'Frozen': 2}
      }
    });
    const action = {
      type: 'VOTE',
      entry: 'Star Wars'
    };
    const nextState = reducer(initialState, action);

    expect(nextState).toEqual(fromJS({
      vote: {
        pair: ['Frozen', 'Coco'],
        tally: {'Frozen': 2}
      }
    }));
  });
});