const { response } = require("express");
const express        = require("express");
const request   = require("supertest");
const appRoute     = require('../routes/router')



const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Hello Route")
  });
app.use('/api', appRoute);

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
    it('Post /api  Success or Failure', async ()=>{
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
});