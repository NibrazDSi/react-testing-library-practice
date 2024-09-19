import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import Todo from '../Todo';

const MockTodo = () =>{
    return (
        <BrowserRouter>
            <Todo /> 
        </BrowserRouter>
    )
}

const toDoLists = (tasks) =>{
    tasks.forEach(task => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button",{name:/Add/i});
    fireEvent.change(inputElement,{target:{value:task}})
    fireEvent.click(buttonElement)
    });
}
// doing integration test that is if we add an input in the input box , it will add to the todo list 
describe("Todo",()=>{
it('should render same test passed into title prop', () => {
    render(<MockTodo  />);
    toDoLists(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    expect(divElement).toBeInTheDocument()
  });
it('should render multiple items', () => {
    render(<MockTodo  />);
    toDoLists(["Go Grocery Shopping","Pet My Cat","Wash My Hands"])
    const divElements = screen.getAllByTestId("task-container")
    expect(divElements.length).toBe(3)
  });
// when the item will be initially added, there won't be any strike through , refer to TodoList.css for more clarity.
it('task should not have completed class when initially rendered', () => {
    render(<MockTodo  />);
    toDoLists(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    expect(divElement).not.toHaveClass("todo-item-active")
  });

it('task should have completed class when rendered and there will be a strike through', () => {
    render(<MockTodo  />);
    toDoLists(["Go Grocery Shopping"])
    const divElement = screen.getByText(/Go Grocery Shopping/i)
    fireEvent.click(divElement)
    expect(divElement).toHaveClass("todo-item-active")
  });

})
