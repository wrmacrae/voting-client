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
});