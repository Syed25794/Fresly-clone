import React from 'react';
import "./mealcard.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
  Box,
  SimpleGrid
} from '@chakra-ui/react'

const MealCard = ({item}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className='mCard' onClick={onOpen}>
        <div className='imgDiv'><img src={item.img_1} alt="" className='proImg'/></div>
        <h3 className='proHead'>{item.title}</h3>
        <p className='proDes'>{item.calories}Cal | Gluten Free | Single-Serve</p>
        <Modal isOpen={isOpen} onClose={onClose} size="2xl" overflow="scroll">
        <ModalOverlay />
        <ModalContent>
          <div className='modalHead'><ModalHeader>{item.title}</ModalHeader>
          <Text px={5} color="gray" as="i">{item.subTitle}</Text>
          <Flex gap="3" px={5} mt={3}><p className='soy'>High Protien</p><p className='soy'>Soy Free</p><p className='soy'>Gluten Free</p></Flex>
          <ModalCloseButton /></div>
          <div className='modalBody'><ModalBody>
           <Flex gap="3">
            <Box width="50%">
              <img src={item.img_1} alt="" className="img1"/>
              <img src={item.img_2} alt="" className='img2'/>
            </Box>
            <Box width="50%">
              <div className='boxShadow'>
                <h3 className='smHead'>What makes this dish special</h3><br />
                <p className='smPara'>{item.desc1}</p><br />
                <p className='smPara'>{item.desc2}</p><br />
                <p className='smPara'>{item.desc3}</p><br />
                <p className='smPara'>{item.desc4}</p><br />
              </div>
              <div className='boxShadow'>
                <h3 className='smHead'>Ingredients</h3>
                <SimpleGrid columns={3}>
                <div><img src={item.ing1_Img} alt="" /><p className='smPara2'>{item.ing1_name}</p></div>
                <div><img src={item.ing2_Img} alt="" /><p className='smPara2'>{item.ing2_name}</p></div>
                <div><img src={item.ing3_Img} alt="" /><p className='smPara2'>{item.ing3_name}</p></div>
                <div><img src={item.ing4_Img} alt="" /><p className='smPara2'>{item.ing4_name}</p></div>
                <div><img src={item.ing5_Img} alt="" /><p className='smPara2'>{item.ing5_name}</p></div>
                </SimpleGrid>
                <h3 className='smHead2'>See All Ingredients</h3>
              </div>
              <div className='boxShadow'>
                <h3 className='smHead'>What's Inside(Info is per serving)</h3>
                <SimpleGrid columns={2}>
                  <div className='smbox'>
                     <h3>Calories</h3>
                     <p className='lp'>{item.calories}</p>
                  </div>
                  <div className='smbox'>
                    <h3>Carbs</h3>
                    <p className='lp'>{item.carbs}</p>
                  </div>
                  <div className='smbox'>
                    <h3>Total Fat</h3>
                    <p className='lp'>{item.totalFat}</p>
                  </div>
                  <div className='smbox'>
                    <h3>Proteins</h3>
                    <p className='lp'>{item.protein}</p>
                  </div>
                </SimpleGrid>
                <h3 className='smHead2'>See Nutrition Facts</h3>
              </div>
            </Box>
           </Flex>
          </ModalBody></div>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default MealCard