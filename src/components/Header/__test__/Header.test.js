import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header",()=>{
// testing the header component.
it('should render same test passed into title prop', () => {
    render(<Header title="My Header"/>);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
})


// There are multiple matching elements so the test will fail, should use "All" query
// it('should render same test passed into title prop FAULTY', () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
//   });

// Although there are multiple elements we have specified which element it should locate by specifying the name of the heading tag.
// it('should render same test passed into title prop Corrected', () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByRole("heading", {name:"My Header"});
//     expect(headingElement).toBeInTheDocument();
//   });

// // semantic queries
// it('should render same test passed into title prop Corrected', () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByTitle("Header")
//     expect(headingElement).toBeInTheDocument();
//   });

// // testid queries
// it('should render same test passed into title prop Corrected', () => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.getByTestId("header-1")
//     expect(headingElement).toBeInTheDocument();
//   });

// // FIND BY
// // if we want to use Find By , we have to use
// it('should render same test passed into title prop', async() => {
//     render(<Header title="My Header"/>);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
//   });

// // Query BY
// // if we want the element not to fail when quering element and pass it to assert if the text does not exist in the dom , we can use queryBy
// it('should render same test passed into title prop', async() => {
//     render(<Header title="My Header"/>);
//     const headingElement = screen.queryByText(/dogs/i);
//     expect(headingElement).not.toBeInTheDocument();
//   });

// // getAllByRole
//   it('should render same test passed into title prop', async() => {
//     render(<Header title="My Header"/>);
//     const headingElements = screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
//   });

