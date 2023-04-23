import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {Rating} from '@mui/material'
import {mobile} from '../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  ${mobile({ margin: "0px" })}
`;

const Wrapper = styled.div`

  display: flex;
  border: 2px solid gray;
  justify-content: space-between;
  margin: 20px;
  
  ${mobile({ display: "flex", flexDirection : "column"  , gap : "10px" , borderRadius : "10px", margin : "5px"})}
`;

const Right = styled.div`
  flex : 1;
  margin-left: 20px;
`;

const Left = styled.div`
  
`;

const Image = styled.img`
  height: 300px;
  width: 280px;
  border : 4px solid black;
  ${mobile({ width : "360px" , border : "4px solid black" , borderRadius : "10px"})}
`;

const Facilities = styled.div`
  display: flex;
  flex: wrap;
  gap: 10px;
  color: red;
`;

const FacilitiesItems = styled.p``;

const Title = styled.h1`
  font-size: 20px;
  ${mobile({ fontSize: "14px" ,flex : 'wrap' })}
`;
const NewLine = styled.br`

`


const City = styled.p``;

const Address = styled.span`
margin-bottom : 10px;`;

export const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      try {
        const response = await axios.get("http://localhost:3005/api/hotels");
        setHotels(response.data.data);
      } catch (err) {
        alert(err);
      }
    };
    getHotels();
  }, []);
  return (
    <Container>
      {hotels.map((item) => (
        <Wrapper item={item} key={item._id}>
          <Left>
            <Image src={item.hotel_img} />
          </Left>
          <Right>
            <Title> {item.title}</Title>

            <City>{item.city}</City>
            <Address>{item.address}</Address>
           <NewLine/>
           <NewLine/>
           
            <Rating
              name="simple-controlled"
              value={item.stars}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <Facilities>
              {item.facilities.map((face) => (
                <FacilitiesItems item={face} key={face}>
                  {face}
                </FacilitiesItems>
              ))}
            </Facilities>
            <h4>Book Now</h4>
          </Right>
        </Wrapper>
      ))}
    </Container>
  );
};
