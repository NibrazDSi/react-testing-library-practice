import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom' 
// As link or browserRouter is used so we need to wrap the isolated TodoFooter by wrapping it under the browserRouter
// That's why we will create a MockComponent where we will wrap the ToDoFooter under the browserRouter

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
    return (
    <BrowserRouter>
        <TodoFooter 
            numberOfIncompleteTasks= {numberOfIncompleteTasks}
        />
    </BrowserRouter>
    )
}
describe("TodoFooter",()=>{
    it('should render the correct amount of incomplete tasks', () => {
        render(
          <MockTodoFooter 
              numberOfIncompleteTasks={5}
              />
          );
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
      });
      
      it('should render "task" when the number of incomplete tasks is one', () => {
          render(
            <MockTodoFooter 
                numberOfIncompleteTasks={1}
                />
            );
          const paragraphElement = screen.getByText(/1 task left/i);
          expect(paragraphElement).toBeInTheDocument();
        });
})


//   it('should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//           />
//       );
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeTruthy();
//   });

//   it('should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//           />
//       );
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeVisible();
//   });

//   it('should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//           />
//       );
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toContainHTML("p");
//   });

//   it('should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//           />
//       );
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement).toHaveTextContent("1 task left");
//   });

//   it('should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//           />
//       );
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement).not.toBeFalsy();
//   });

// //  we can assert by extracting the attribute value as well
//   it('should render "task" when the number of incomplete tasks is one', () => {
//     render(
//       <MockTodoFooter 
//           numberOfIncompleteTasks={1}
//           />
//       );
//     const paragraphElement = screen.getByTestId("para");
//     expect(paragraphElement.textContent).toBe("1 task left");
//   });