import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import Testimonials from "./testimonials";
import { expect } from "vitest";

describe('Testimonials', () => {
    it('should render the testimonials photo', () => {
        render(<Testimonials/>);
        
        screen.debug();
      
        const photo = screen.getByTestId('@testimonials/photo');
        expect(photo).toBeInTheDocument();
    })
})