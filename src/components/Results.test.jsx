import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Results } from '../../src/components/Results';
import { fromJS } from 'immutable';

describe('Results', () => {

  it('renders entries with vote counts', () => {
    const pair = fromJS(['Frozen', 'Coco']);
    const tally = fromJS({'Frozen': 2});
    const component = render(<Results pair={pair} tally={tally} />);
    expect(screen.getByText(/Frozen/)).toBeInTheDocument();
    expect(screen.getByText(/Coco/)).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('invokes the next callback when button is clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;
    const pair = fromJS(['Frozen', 'Coco']);
    const component = render(<Results pair={pair} next={next} />);
    fireEvent(
      screen.getByRole('button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(nextInvoked).toEqual(true);
  });

  it('shows the winner when there is one', () => {
    const winner = "Frozen";
    const component = render(<Results winner={winner} />);
    expect(screen.getByText(/Frozen/)).toBeInTheDocument();
  });

});