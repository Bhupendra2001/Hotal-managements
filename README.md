#  Project  - Hotel-Booking-website


# About

This Project is basis of `Hotel Booking Website`. In This Project I am created the User register 
or Login page.After successfully register and login user can see all the hotels that are available. In This page User can filter the hotels by the city , ratings and facilities.If user
click any hotel for the room book user can see all the room that are vacant or booked if user loged in already so user can book the rooms and showing the booked details.


# Statement 

-  Create the Users , Hotels, Rooms & Booked APIs.
-  Test the all the APIs By the help of Postman.
-  Create the frontend or backend by the help of NodeJs , MongoDB ,JavaScript , ReactJS, Express, Html , CSS
-  After Created both the Technologies connect to each others or run on the different sever .
-  Used The MongoDB database for storing the data of user , hotels, rooms and Booked.
-  After successfully created deploy in any hosting server.

# User APIs

>POST  `/api/register`

1.Create the user register page
2.Create a user document from request body.
3.Return HTTP status 201 on a successful user creation. Also return the user documents.
The response should be a JSON object type [like](#successful register response structure)
4.Return HTTP status 400 if no params or invalid params received in request body.The response should be a JSON object like this


>POST  `/api/login`
- Allow an user to login with their email and password.
- On a successful login attempt return a JWT token contatining the userId, . The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

# Hotels APIs

>POST  `/api/hotels/users/:userId` 
- Only Admin Allow to create hotel.
- On a successful create hotel  return hotel details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this


>GET  `/api/hotels`
- Get the All hotels details for any user
- On a successful get all hotels  return hotel details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this


>GET  `/api/hotels/:id`
- Get the hotel details by hotel id only admin allow this
- On a successful get  hotel by hotelId  return hotel details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this


>PUT  `/api/hotels/:id/users/:userId`
- Update the hotel details by given hotelId. Only admin allow this.
- On a successful update  hotel by hotelId  return updated hotel details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

>DELETE  `/api/hotels/:id/users/:userId`
- Delete the hotel details by given hotelId. Only admin allow this.
- On a successful delete  hotel by hotelId  return  proper message. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this
  
  
#  Rooms APIs

>POST  `/api/rooms/hotel/:hotelId/users/:userId`
- Create the Room for perticuler hotel and given all room details. Only admin allow this.
- On a successful create  room  return room details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this


>GET  `/api/rooms/hotel/:hotelId`
- Get ALL the room details for any user
- On a successful get room  return room details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this


>Get  `/api/rooms/:id/hotel/:hotelId/users/:userId`

- Get the room by given roomId and hotelId
- On a successful get room  return room details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

>PUT  `/api/rooms/:id/hotel/:hotelId/users/:userId`

- Update the room data by given roomId and hotelId
- On a successful  update room  return updated room details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this


>DELETE   `/api/rooms/:id/hotel/:hotelId/users/:userId`

- Delete the room data by given roomId and hotelId
- On a successful  delete room  return proper message. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

#  Booking Room APIs

>POST  `/api/bookrooms/rooms/:roomId/hotel/:hotelId/:userId`

- Create the booked room API. Only Authenticated user booked room.
- On a successfully  booking room  return booking room details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

>PUT  `/api/bookrooms/:bookedId/:roomId`

- Update the booked room data by booked roomId. Only Authorised user and Admin allow this.
- On a successfully update booking room data return booking room details. The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

>Delete  `/api/bookrooms/:bookedId/:roomId/:hotelId/:userId`

- Delete the booked room data by booked roomId. Only Authorised user and Admin allow this.
- On a successfully Delete booking room data return proper message . The response should be a JSON object like this
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like this

### Successful Register Response structure 
```yaml
{
  "status": true,
  "message": "register successfully",
  "data": {
    "username": "rahul verma",
    "email": "verma20@gmail.com",
    "password": "$2b$10$9BA3uH.bC.ocFo2LCUupHORt37P82Q6LTyj1ZvDs/aoaedbm58FOS",
    "IsAdmin": false,
    "_id": "645e4479e30d22fc7da544a5",
    "createdAt": "2023-05-12T13:51:53.363Z",
    "updatedAt": "2023-05-12T13:51:53.363Z",
    "__v": 0
  }
}
```


