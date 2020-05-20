import React from 'react';
import { render } from '@testing-library/react';
import Voting from '../../src/components/Voting';

describe('Voting', () => {

  it('renders a pair of button', () => {
    const { getAllByRole } = render(
      <Voting pair={["Frozen", "Coco"]} />
    );
    const buttons = getAllByRole('button');
    expect(buttons.length).toEqual(2);
    buttons.forEach( button => expect(button).toBeInTheDocument() );
  });
  
  it('puts text in the buttons', () => {
    const { getByText } = render(
      <Voting pair={["Frozen", "Coco"]} />
    );
    const button = getByText('Frozen');
    expect(button).toBeInTheDocument();
  });

});
