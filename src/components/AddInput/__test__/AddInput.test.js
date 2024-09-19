import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

// we can set an empty function using jest library similar to setTodos={()=>{}}
const mockedSetTodo = jest.fn()

describe("AddInput",()=>{
it('should render input element', async() => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

// Firing events to change the input element and asserting whether the input is actually changed by fireEvent.
  it('should be able to type in input', async() => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement,{target:{value:"Go Grocery Shopping"}})
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });
// Assert that after clicking the add button , the input box becomes empty.
  it('should have empty input when add button is clicked', async() => {
    render(
        <AddInput 
            todos={[]}
            setTodos={mockedSetTodo}
        />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", {name: /Add/i } )
    fireEvent.change(inputElement,{target:{value:"Go Grocery Shopping"}})
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBe("");
  });
})


