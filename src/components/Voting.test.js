import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Voting from '../../src/components/Voting';
import { fromJS } from 'immutable';

describe('Voting', () => {

  it('renders a pair of button', () => {
    render(<Voting pair={["Frozen", "Coco"]} />)
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);
    buttons.forEach( button => expect(button).toBeInTheDocument() );
  });
  
  it('puts text in the buttons', () => {
    render(<Voting pair={["Frozen", "Coco"]} />)
    expect(screen.getByText('Frozen')).toBeInTheDocument();
  });
  
  it('invokes callback when a button is clicked', () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;
    render(<Voting pair={["Frozen", "Coco"]}
                   vote={vote}/>);
    fireEvent(
      screen.getByText('Frozen'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(votedWith).toEqual("Frozen");
  });
  
  it('disables buttons when user has votedWith', () => {
    render(<Voting pair={["Frozen", "Coco"]}
                   hasVoted="Frozen" />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toEqual(2);
    buttons.forEach( button => expect(button).toHaveAttribute("disabled"));
  });
  
  it('adds label to the voted entry', () => {
    render(<Voting pair={["Frozen", "Coco"]}
                   hasVoted="Frozen" />);
    const label = screen.getByText(/voted/i);
    expect(label).toBeInTheDocument();
  });
  
  it('renders only the winner when there is one', () => {
    render(<Voting winner="Frozen" />);
    const button = screen.queryByRole('button');
    expect(button).toBeNull();
    expect(screen.getByText(/Frozen/)).toHaveTextContent(/Winner is Frozen!/);
  });

  it('renders as a pure component', () => {
    const pair = ["Frozen", "Coco"];
    const container = render(<div />);
    let component = render(<Voting pair={pair} />, container);
    let firstButton = screen.getAllByRole('button')[0];
    expect(firstButton).toHaveTextContent("Frozen");

    pair[0] = "Onward"
    component = render(<Voting pair={pair} />, container);
    firstButton = screen.getAllByRole('button')[0];
    expect(firstButton).toHaveTextContent("Frozen");
  });

  it('updates the DOM when props change', () => {
    const pair = fromJS(["Frozen", "Coco"]);
    const container = render(<div />);
    let component = render(<Voting pair={pair} />, container);
    let firstButton = screen.getAllByRole('button')[0];
    expect(firstButton).toHaveTextContent("Frozen");

    const newPair = pair.set(0, "Onward");
    component = render(<Voting pair={newPair} />, container);
    firstButton = screen.getAllByRole('button')[0];
    expect(firstButton).toHaveTextContent("Onward");
  });

});
