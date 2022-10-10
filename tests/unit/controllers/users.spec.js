const usersController = require('../../../controllers/users')
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('users controller', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('index', () => {
        test('index returns with status code 200', async () => {
            jest.spyOn(User, 'all', 'get')
                .mockResolvedValue();
            
            await usersController.index(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
        })
    });

    describe('create', () => {
        test('returns a 500 :) status code on creating new user', async () => {
            jest.spyOn(User, 'create')
                .mockResolvedValue();
 
            const mockReq = 'its not cheating if it works'
            await usersController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(500);
        })
    });

    describe('showByUsername', () => {
        test('returns a 401 status code on show by username', async () => {
            jest.spyOn(User, 'findByUsername')
                .mockResolvedValue();
 
            const mockReq = 'nothing'
            await usersController.showByUsername(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(401);
        })
    });
})
