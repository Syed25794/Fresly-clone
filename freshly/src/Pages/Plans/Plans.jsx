import { Heading, Image, Flex, Box, Text, Button, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MealCard from '../../Components/MealCard/MealCard';
import "./plans.css";
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const [data,setData] = useState([]);
  const [category,setCategory] = useState("");
  const navigate= useNavigate();
  const getData=()=>{
    axios.get(`https://punchy-car-5123.herokuapp.com/foods/?q=${category}`)
    .then(r=>{
      setData(r.data);
    })
    .catch(e=>{});
  }
  useEffect(()=>{
    getData()
  },[category]);


  const handleChange=(e)=>{
        setCategory(e.target.value);
  }
  console.log(category);

  // console.log(data)
  return (
    <div mt="65px" style={{ width: "98%" }}>
      <Navbar/>
      <Image src="https://assets-global.website-files.com/5d03b4e130118314af624b20/6192ce7669f68694a8b969af_Group%20(8).svg" alt="" margin="auto"/>
      <Heading>Flexible plans that fit your life</Heading>
      <p className='firstPara'>We offer anywhere from 4–12 meals per week, with meals as low as <span className='bold'>$9.58 each. The bigger your box, the more you’ll save</span>—and you can always pause or change your plan at any time.</p>
      <Box width="95%" margin="auto" mt="50" _hover={{cursor:"pointer"}}><Flex gap="4" flexWrap={{md:"nowrap",base:"wrap"}}>
        <Box>
          <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492937b0377ca6310cb0_4-5%20Meals-p-500.png'/>
          <Text fontSize="3xl" as="b" color="teal">4-5 Meals</Text>
        </Box>
        <Box>
          <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492393696224964e1910_6-7%20Meals-p-500.png'/>
          <Text fontSize="3xl" as="b" color="teal">6-7 Meals</Text>
        </Box>
        <Box>
          <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492cddaec74cb5161350_8-9%20Meals-p-500.png'/>
          <Text fontSize="3xl" as="b" color="teal">8-9 Meals</Text>
        </Box>
        <Box>
          <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb492794414230d9d0e1be_10-11%20Meals-p-500.png'/>
          <Text fontSize="3xl" as="b" color="teal">10-11 Meals</Text>
        </Box>
        <Box>
          <Image src='https://assets-global.website-files.com/5d03b4e130118314af624b20/62fb4927a7912ad1a7770be8_12%20Meals-p-500.png'/>
          <Text fontSize="3xl" as="b" color="teal">12 Meals</Text>
        </Box>
      </Flex></Box>
      <Text mt="10">Shipping and tax added at checkout. Prices are rounded for your convenience.</Text>
      <Button mt="10" colorScheme='blue' onClick={()=>navigate("/deliverydate")}>Get Started</Button>
      <Heading mt="20" mb="10">On the Menu</Heading>
      <p className='firstPara'>Whatever your lifestyle, Freshly’s got you covered—with <span className='blue'>gluten-free , dairy-free , plant-based , carb-smart</span>, and <span className='blue'>calorie-conscious</span> meal options! Our heat-&-eat breakfasts, low-lift lunches, and done-for-you dinners provide an effortless alternative to everyday cooking, with nutritious prepared meals delivered fresh to your door. Explore this week’s dishes and start eating better:</p>
      <div className='category'>
        <p className='categoryP'>Menu category:</p>
        <select onChange={handleChange}>
          <option value="" className='opt'>All Meals</option>
          <option value="PurePlant" className='opt'>Purely Plant</option>
          <option value="SignatureCollection" className='opt'>Signature Collection</option>
          <option value="FreshlyFitted" className='opt'>FreshlyFit</option>
          <option value="ProteinSides" className='opt'>Protiens & Sides</option>
        </select>
      </div>

      {/* Product Details */}
      <SimpleGrid columns={{md : 4, sm : 1}} spacing={5} width="95%" margin="auto" mt="50">
        {data.map((item)=>(
          <MealCard item={item} key={item.id}/>
        ))}
      </SimpleGrid>
      <Footer/>
    </div>
  )
}

export default Plans