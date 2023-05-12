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

- Create the user register page
- Create a user document from request body.
- Return HTTP status 201 on a successful user creation. Also return the user documents.
The response should be a JSON object type like [this](#successful-register-response-structure)
- Return HTTP status 400 if no params or invalid params received in request body.The response should be a JSON object like [this](#error-response-structure)


>POST  `/api/login`
- Allow an user to login with their email and password.
- On a successful login attempt return a JWT token contatining the userId, . The response should be a JSON object like [this](#successful-login-response-structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

# Hotels APIs

>POST  `/api/hotels/users/:userId` 
- Only Admin Allow to create hotel.
- On a successful create hotel  return hotel details. The response should be a JSON object like [this](#successful-hotel-created-response-structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)


>GET  `/api/hotels`
- Get the All hotels details for any user
- On a successful get all hotels  return hotel details. The response should be a JSON object like [this](#successful-hotels-get-response-structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)


>GET  `/api/hotels/:id`
- Get the hotel details by hotel id only admin allow this
- On a successful get  hotel by hotelId  return hotel details. The response should be a JSON object like [this](#Successful-Hotel-Get-By-Id-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)


>PUT  `/api/hotels/:id/users/:userId`
- Update the hotel details by given hotelId. Only admin allow this.
- On a successful update  hotel by hotelId  return updated hotel details. The response should be a JSON object like [this](#Successful-Hotel-Update-By-Id-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

>DELETE  `/api/hotels/:id/users/:userId`
- Delete the hotel details by given hotelId. Only admin allow this.
- On a successful delete  hotel by hotelId  return  proper message. The response should be a JSON object like [this](#Successful-Hotel-Deleted-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)
  
  
#  Rooms APIs

>POST  `/api/rooms/hotel/:hotelId/users/:userId`
- Create the Room for perticuler hotel and given all room details. Only admin allow this.
- On a successful create  room  return room details. The response should be a JSON object like [this](#Successful-Room-Created-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)


>GET  `/api/rooms/hotel/:hotelId`
- Get ALL the room details for any user
- On a successful get room  return room details. The response should be a JSON object like [this](#Successful-Get-ALL-Rooms-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)


>Get  `/api/rooms/:id/hotel/:hotelId/users/:userId`

- Get the room by given roomId and hotelId
- On a successful get room  return room details. The response should be a JSON object like [this](#Successful-Get-Room-By-Id-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

>PUT  `/api/rooms/:id/hotel/:hotelId/users/:userId`

- Update the room data by given roomId and hotelId
- On a successful  update room  return updated room details. The response should be a JSON object like [this](#Successful-Get-Room-By-Id-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)


>DELETE   `/api/rooms/:id/hotel/:hotelId/users/:userId`

- Delete the room data by given roomId and hotelId
- On a successful  delete room  return proper message. The response should be a JSON object like [this](#Successful-Room-Deleted-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

#  Booking Room APIs

>POST  `/api/bookrooms/rooms/:roomId/hotel/:hotelId/:userId`

- Create the booked room API. Only Authenticated user booked room.
- On a successfully  booking room  return booking room details. The response should be a JSON object like [this](#Successful-Booked-Room-Created-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

>PUT  `/api/bookrooms/:bookedId/:roomId`

- Update the booked room data by booked roomId. Only Authorised user and Admin allow this.
- On a successfully update booking room data return booking room details. The response should be a JSON object like [this](#Successful-Updated-BookedRoom-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

>Delete  `/api/bookrooms/:bookedId/:roomId/:hotelId/:userId`

- Delete the booked room data by booked roomId. Only Authorised user and Admin allow this.
- On a successfully Delete booking room data return proper message . The response should be a JSON object like [this](#Successful-Booked-Room-Deleted-Response-Structure)
- If the credentials are incorrect return a suitable error message with a valid HTTP status code. The response should be a JSON object like [this](#error-response-structure)

### Successful Register Response Structure 
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

### Error Response structure
```yaml
{
  status: false,
  message: ""
}
```

### Successful Login Response Structure

```yaml
{
  "status": true,
  "data": {
    "_id": "645e4479e30d22fc7da544a5",
    "username": "rahul verma",
    "email": "verma20@gmail.com",
    "password": "$2b$10$9BA3uH.bC.ocFo2LCUupHORt37P82Q6LTyj1ZvDs/aoaedbm58FOS",
    "IsAdmin": false,
    "createdAt": "2023-05-12T13:51:53.363Z",
    "updatedAt": "2023-05-12T13:51:53.363Z",
    "__v": 0,
    "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDVlNDQ3OWUzMGQyMmZjN2RhNTQ0YTUiLCJJc0FkbWluIjpmYWxzZSwiaWF0IjoxNjgzOTAwNTQ5LCJleHAiOjE2ODQxNTk3NDl9.AbqjYP5TSCzbipgiSvgmkD8W-R3H_V2vZ8Vmhbl8jCs"
  }
}

```
### Successful Hotel Created Response Structure
```yaml
{
  "_id": {
    "$oid": "6444cb676735ab0c37773d2b"
  },
  "hotel_img": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/Hotel-Booking-Project/vijan-mahal-hotel-pics.png",
  "hotel_uid": 223974,
  "title": "Hotel Vijan mahal",
  "city": "jabalpur",
  "address": "  114/2 and 107 , Mandla - Jabalpur Rd, Tilhari",
  "stars": 5,
  "facilities": [
    "air condtioning",
    "free wifi",
    "free parking",
    "food",
    "outdoor pool",
    "fitness center"
  ],
  "IsVacantRoom": true,
  "roomsAvailableCount": 3,
  "createdAt": {
    "$date": "2023-04-23T06:08:40.023Z"
  },
  "updatedAt": {
    "$date": "2023-05-07T05:16:47.493Z"
  },
  "__v": 0
}

```

### Successful Hotels Get Response Structure

```yaml
{
  "status": true,
  "data": [
    {
      "_id": "6444bbc3e78b4ea3c41a3628",
      "hotel_img": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/Hotel-Booking-Project/IGH-hotel-pics.png",
      "hotel_uid": 243091,
      "title": "Holiday inn Bengaluru Rececourse , an IHG Hotel",
      "city": "Bangalore",
      "address": "Gandhi nager, Bangalore",
      "stars": 4,
      "facilities": [
        "balcony",
        "city view",
        "air condtioning",
        "private entrance"
      ],
      "IsVacantRoom": true,
      "roomsAvailableCount": 4,
      "createdAt": "2023-04-23T05:01:55.393Z",
      "updatedAt": "2023-05-08T16:42:08.967Z",
      "__v": 0
    },
    {
      "_id": "6444bdfde78b4ea3c41a362a",
      "hotel_img": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/Hotel-Booking-Project/Olive-hotel-pics.png",
      "hotel_uid": 351446,
      "title": "Olive Kalyan Nager -By Embassy Group",
      "city": "Bangalore",
      "address": "No 715, 2nd Cross Rd, Kalyan nager, Bangalore",
      "stars": 5,
      "facilities": [
        "air condtioning",
        "private entrance",
        "ensult bathroom",
        "free wifi"
      ],
      "IsVacantRoom": true,
      "roomsAvailableCount": 3,
      "createdAt": "2023-04-23T05:11:25.882Z",
      "updatedAt": "2023-04-25T05:05:26.569Z",
      "__v": 0
    },
    {
      "_id": "6444c128e78b4ea3c41a362c",
      "hotel_img": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/Hotel-Booking-Project/Radisson-blu-mumbai.png",
      "hotel_uid": 364335,
      "title": "Redisson Blu Mumbai International Airport",
      "city": "Mumbai",
      "address": "Phoenix Market City Mall, Mumbai",
      "stars": 4,
      "facilities": [
        "air condtioning",
        "free wifi",
        "outdoor swimming pool",
        "free parking"
      ],
      "IsVacantRoom": true,
      "roomsAvailableCount": 0,
      "createdAt": "2023-04-23T05:24:56.274Z",
      "updatedAt": "2023-05-11T04:48:23.077Z",
      "__v": 0
    },
    {
      "_id": "6444c7f2696a5bfc9f4acb07",
      "hotel_img": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/Hotel-Booking-Project/home-func.jpg",
      "hotel_uid": 765771,
      "title": "Moti mehel hotel civec center,Jabalpur",
      "city": "jabalpur",
      "address": "samdariya  Mall, Jabalpur",
      "stars": 4,
      "facilities": [
        "air condtioning",
        "free wifi",
        "free parking",
        "food"
      ],
      "IsVacantRoom": true,
      "roomsAvailableCount": 2,
      "createdAt": "2023-04-23T05:53:54.448Z",
      "updatedAt": "2023-05-04T06:48:51.759Z",
      "__v": 0
    },
    {
      "_id": "6444cb676735ab0c37773d2b",
      "hotel_img": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/Hotel-Booking-Project/vijan-mahal-hotel-pics.png",
      "hotel_uid": 223974,
      "title": "Hotel Vijan mahal",
      "city": "jabalpur",
      "address": "  114/2 and 107 , Mandla - Jabalpur Rd, Tilhari",
      "stars": 5,
      "facilities": [
        "air condtioning",
        "free wifi",
        "free parking",
        "food",
        "outdoor pool",
        "fitness center"
      ],
      "IsVacantRoom": true,
      "roomsAvailableCount": 3,
      "createdAt": "2023-04-23T06:08:40.023Z",
      "updatedAt": "2023-05-07T05:16:47.493Z",
      "__v": 0
    }
  ]
}
```
### Successful Hotel Get By Id Response Structure

```yaml
{
  "status": true,
  "data": {
    "_id": "6444bdfde78b4ea3c41a362a",
    "hotel_img": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/Hotel-Booking-Project/Olive-hotel-pics.png",
    "hotel_uid": 351446,
    "title": "Olive Kalyan Nager -By Embassy Group",
    "city": "Bangalore",
    "address": "No 715, 2nd Cross Rd, Kalyan nager, Bangalore",
    "stars": 5,
    "facilities": [
      "air condtioning",
      "private entrance",
      "ensult bathroom",
      "free wifi"
    ],
    "IsVacantRoom": true,
    "roomsAvailableCount": 3,
    "createdAt": "2023-04-23T05:11:25.882Z",
    "updatedAt": "2023-04-25T05:05:26.569Z",
    "__v": 0
  }
}
```
### Successful Hotel Update By Id Response Structure

```yaml
{
  "status": true,
  "data": {
    "_id": "6444bdfde78b4ea3c41a362a",
    "hotel_img": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/Hotel-Booking-Project/Olive-hotel-pics.png",
    "hotel_uid": 351446,
    "title": "Olive Kalyan Nager -By Embassy Group",
    "city": "Bangalore",
    "address": "No 715, 2nd Cross Rd, Kalyan nager, Bangalore",
    "stars": 5,
    "facilities": [
      "air condtioning",
      "private entrance",
      "ensult bathroom",
      "free wifi"
    ],
    "IsVacantRoom": true,
    "roomsAvailableCount": 3,
    "createdAt": "2023-04-23T05:11:25.882Z",
    "updatedAt": "2023-04-25T05:05:26.569Z",
    "__v": 0
  }
}
```

###  Successful Hotel Deleted Response Structure
```yaml
{
status : true ,
message : "hotel deleted successfully"
}
```

### Successful Room Created Response Structure

```yaml
{
  status : true ,
   "data" : {
  "_id": "6445de5333a97c80614e6206",
  "hotel_id": "6444bbc3e78b4ea3c41a3628",
  "price": 1300,
  "status": "vacant",
  "createdAt": "2023-04-24T01:41:39.717Z",
  "updatedAt": "2023-05-08T16:42:08.771Z",
  "__v": 0,
  "info": {}
  }
}
```
### Successful Get ALL Rooms Response Structure
```yaml
{
  "status": true,
  "data": [
    {
      "_id": "6445e0d1d6aa46229ad9af11",
      "hotel_id": "6444cb676735ab0c37773d2b",
      "price": 1300,
      "status": "vacant",
      "createdAt": "2023-04-24T01:52:17.279Z",
      "updatedAt": "2023-05-07T05:16:47.147Z",
      "__v": 0,
      "info": {
        "cust_name": "shivani namdev",
        "address": "lalmati jabalpur",
        "id_proof": "aadhar",
        "uid": "3575 7834 6066",
        "booked_from": "2023-05-08",
        "booked_to": "2023-05-09",
        "booked_at": "2023-05-07T05:16:47.145Z"
      }
    },
    {
      "_id": "6445e0d7d6aa46229ad9af13",
      "hotel_id": "6444cb676735ab0c37773d2b",
      "price": 1400,
      "status": "vacant",
      "createdAt": "2023-04-24T01:52:23.824Z",
      "updatedAt": "2023-04-25T05:10:59.632Z",
      "__v": 0,
      "info": {
        "cust_name": "rahul verma",
        "address": "lalmati jabalpur",
        "id_proof": "aadhar",
        "uid": "3375 9834 4012",
        "booked_from": "2023-04-26",
        "booked_to": "2023-04-27",
        "booked_at": "2023-04-25T05:10:59.619Z"
      }
    },
    {
      "_id": "6445e2128edf481c65f548d4",
      "hotel_id": "6444cb676735ab0c37773d2b",
      "price": 1400,
      "status": "vacant",
      "createdAt": "2023-04-24T01:57:38.786Z",
      "updatedAt": "2023-04-25T02:58:45.261Z",
      "__v": 0,
      "info": {
        "cust_name": "rahul verma",
        "address": "lalmati jabalpur",
        "id_proof": "aadhar",
        "uid": "3375 9834 6012",
        "booked_from": "2023-04-26",
        "booked_to": "2023-04-27",
        "booked_at": "2023-04-25T02:58:45.252Z"
      }
    }
  ]
}
```
### Successful Get Room By Id Response Structure
```yaml
 {
    "status": true,
    "data"  : {
      "_id": "6445e2128edf481c65f548d4",
      "hotel_id": "6444cb676735ab0c37773d2b",
      "price": 1400,
      "status": "vacant",
      "createdAt": "2023-04-24T01:57:38.786Z",
      "updatedAt": "2023-04-25T02:58:45.261Z",
      "__v": 0,
      "info": {
        "cust_name": "rahul verma",
        "address": "lalmati jabalpur",
        "id_proof": "aadhar",
        "uid": "3375 9834 6012",
        "booked_from": "2023-04-26",
        "booked_to": "2023-04-27",
        "booked_at": "2023-04-25T02:58:45.252Z"
      }
    }
}
```
###  Successful Room Deleted Response Structure
```yaml
{
status : true ,
message : "Room deleted successfully"
}
```
###  Successful Booked Room Created Response Structure
```yaml
{
status : true ,
 "data" : {
  "_id":  "645c739744c8c6555a923f47"
  "cust_name": "harsh yadav",
  "address": "delhi",
  "id_proof": "aadhar",
  "uid": "4455 7798 9933",
  "booked_from": "2023-05-12T00:00:00.000Z",
  "booked_to": "2023-05-14T00:00:00.000Z",
  "booked_at": "2023-05-11T04:48:57.114Z",
  "userId": "645924d946eb89d7a70fdf8a",
  "createdAt": "2023-05-11T04:48:23.352Z",
  "updatedAt": "2023-05-11T04:48:57.115Z",
  "__v": 0
}
}
```
###  Successful Updated BookedRoom Response Structure
```yaml
{
status : true ,
 "data" : {
  "_id":  "645c739744c8c6555a923f47"
  "cust_name": "harsh yadav",
  "address": "delhi",
  "id_proof": "aadhar",
  "uid": "4455 7798 9933",
  "booked_from": "2023-05-12T00:00:00.000Z",
  "booked_to": "2023-05-14T00:00:00.000Z",
  "booked_at": "2023-05-11T04:48:57.114Z",
  "userId": "645924d946eb89d7a70fdf8a",
  "createdAt": "2023-05-11T04:48:23.352Z",
  "updatedAt": "2023-05-11T04:48:57.115Z",
  "__v": 0
}
}
```
###  Successful Booked Room Deleted Response Structure
```yaml
{
status : true ,
message : " Booked Room deleted successfully"
}
```


