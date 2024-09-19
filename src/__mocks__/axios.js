import { mockResponse } from "../mockData";

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}