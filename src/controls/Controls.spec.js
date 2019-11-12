// // Test away!
// provide buttons to toggle the closed and locked states.
// buttons' text changes to reflect the state the door will be in if clicked
// the closed toggle button is disabled if the gate is locked
// the locked toggle button is disabled if the gate is open

// <button>Submit</button>
import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Controls from './Controls';


const toggle = { button: 'Closed Gate' }
fireEvent.click(queryByText('closed'), toggle)
// default `button` property for click events is set to `0` which is a left click.

test('toggle button "locked" text', () => {
    const { getByText, findByText } = render(<Controls />);
    // ready to rock and roll!
    findByText(/Close gate /i);
});
