// Test away!

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Display from '../display/Display';

test('renders "locked" text', () => {
    const { getByText, findByText } = render(<Display />);
    // ready to rock and roll!
    findByText(/locked open /i);
});