import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import FollowersList from '../FollowersList';
import axios from 'axios';
import { mockResponse } from '../../../mockData'; 

jest.mock('axios');


const MockFollowersLists = () =>{
    return(
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList",()=>{
// there is an async api call, and it takes time to render the follower list.
// getBy won't work as it does not deal with async await.
// Need to use findBy here to use async await
it('should find the first follower in the follower item list', async() => {
    axios.get.mockResolvedValue(mockResponse);
    render(<MockFollowersLists />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    screen.debug()
    expect(followerDivElement).toBeInTheDocument();
  });

// it('should render multiple follower items', async() => {
//     render(<MockFollowersLists />);
//     const followerDivElements = await screen.findAllByTestId(/follower-item/i);
//     expect(followerDivElements.length).toBe(5);
//   });
})