//test db
const DB=require('../Models/DB');

//test request and response
const App=require('../App')
const request=require('supertest')

//test module
const User=require('../Models/User.model')
const Flash=require('../Models/FlashCards.model');

//test response and request 
// describe("check enpoints",()=>{
//   test("should return a status 200 in the user enpoints",async ()=>{
//     const res =await  request(App).get('/api/v1/users')
//     expect(res.status).toEqual(200)
 
//   })
// })


//test connection db
// describe("check connection database",()=>{
//   test("this show a errro if there isn't connection with database",async()=>{
     
//       try {
//         await DB.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (e) {
//         expect(e).toMatch('error')
//       }
//   })
// })


//test modules 
// describe("check if the module work without any problems",()=>{
//    test("the module user should save the data to  a database",async ()=>{
//         try {
//          const getuser=await Flash.findAll({include:User});
//          console.log(getuser)
         
//         } catch (e) {
//           expect(e).toMatch('error')
//         }
//    })
// })