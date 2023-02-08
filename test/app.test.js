const request   = require("supertest");
const app = require ('../app');

// /// For user that recycle in the db
// const User = require ('db path')

// Test Case For User Login
// const user1 = {
//     name: "test",
//     email: "test@123.com",
//     password: "12345"
// }

// beforeEach(async()=>{
//     await User.pathName.i.e deletMany({})
        // await User(user1).save()
// })

// test("Should login for a user", async ()=>{
//     await (await request(app).post("/api")).send({
//         email: user1.email,
//         passworld: user1.passworld
//     })
// })

// //
// // Mocking an Api that is a third party api
// 1. import the api
// 2. mock the third party api
// jest.mock('the souurce dir of the api', ()=>())

describe("Integration function for our api's", ()=>{

    // Intergrated test for Get APi
    it("GET /api -success - get all the dataset ", async ()=>{
        const {body, statusCode} = await request (app).get('/api');

        expect(body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    author: expect.any(String)
                })
            ])
        );
        // expect(body).toBe("Hello world");
        expect(statusCode).toBe(200);
    });

    //Intergrated test for Post APi
    it('Post /api  Failure Test', async ()=>{
        const {body, statusCode} = await request(app).post('/api').send({
            name: "",
            author: "Paul Smith"
        });

        expect(statusCode).toBe(400);
        console.log(body)
        expect(body).toEqual(    {
            errors: [
                {
                value: '',
                msg: 'app name is required',
                param: 'name',
                location: 'body'
                }
            ]
    });
    })

//     it(" Put /api for failure", async ()=>{
//         const { body, statusCode} = await request(app).put('/api').send({
//             name: "",
//             author: "Saul Smith"
//         })
//        console.log(body)
//        expect(statusCode).toBe(404);
// NOTE: console.log the body to check expected
//        expect(body).toEqual({
//             error : true,
//             message: "Book not found"
//        })

//     })

// NOTE: console.log the body to check expected
});