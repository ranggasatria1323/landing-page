import { Text,Stack, Flex, Box} from "@chakra-ui/react"
import { Rating } from "@/components/ui/rating"
import { Avatar } from "@/components/ui/avatar"

export default function Testimonial(){
    return(
        <Flex direction={{base:"column"}} paddingX={{base:"16px", md:"0"}} paddingTop={"10%"}>
             <Flex  direction={{base:"column"}} paddingY={{base:"30px"}}>
                    <Text color={"white"} fontWeight={'bold'}  textStyle="7xl"  >
                         Testimonials
                    </Text>
                    <Flex direction={{base:"column", md:"row"}} justify="center" gap={{base:"32px", md:"100px"}} paddingY={"90px"}>
                        <Box  borderWidth="1px" background="grey.50" borderColor="white" padding={"16px"}
                            rounded={"2xl"} _hover={{borderColor:"pink"}} width={{base:"", md:"400px"}}>
                            <Flex direction={"column"} justifyContent={"space-between"} height={"100%"} gap={"56px"}>
                                <Flex direction={"column"} gap={"14px"}>
                                    <Rating colorPalette="orange" readOnly size="sm" defaultValue={5} />
                                    <Text color={"white"} fontWeight={400} textAlign={"left"} >
                                        Rangga is a great Programmer.
                                        He is very professional and knowledgeable.
                                        </Text>
                                </Flex>
                                <Flex gap="6">
                                    <Avatar 
                                    name="Matthew Jones"
                                    src="https://randomuser.me/api/portraits/men/86.jpg"
                                    />
                                    <Stack textStyle="sm" gap="0" textAlign={"left"}>
                                    <Text fontWeight="medium" color={"white"} >Matthew Jones</Text>
                                    <Text color="fg.muted">CTO, GITS Indonesia</Text>
                                    </Stack>
                                </Flex>
                            </Flex>
                        </Box>

                        <Box  borderWidth="1px" background="grey.50" borderColor="white" padding={"16px"}
                            rounded={"2xl"} _hover={{borderColor:"pink"}} width={{base:"", md:"400px"}}>
                            <Flex direction={"column"} justifyContent={"space-between"} height={"100%"} gap={"56px"}>
                                <Flex direction={"column"} gap={"14px"}>
                                    <Rating colorPalette="orange" readOnly size="sm" defaultValue={5} />
                                    <Text color={"white"} fontWeight={400} textAlign={"left"} >
                                    Outstanding experience! Their attention to detail and dedication to creating a 
                                    seamless user experience is unparalleled. Highly recommended!
                                        </Text>
                                </Flex>
                                <Flex gap="6">
                                    <Avatar 
                                    name="Matthew Jones"
                                    src="https://randomuser.me/api/portraits/men/84.jpg"
                                    />
                                    <Stack textStyle="sm" gap="0" textAlign={"left"}>
                                    <Text fontWeight="medium" color={"white"} >Eren Yega</Text>
                                    <Text color="fg.muted">DevOps, GITS Indonesia</Text>
                                    </Stack>
                                </Flex>
                            </Flex>
                        </Box>

                        <Box  borderWidth="1px" background="grey.50" borderColor="white" padding={"16px"}
                            rounded={"2xl"} _hover={{borderColor:"pink"}} width={{base:"", md:"400px"}}>
                            <Flex direction={"column"} justifyContent={"space-between"} height={"100%"} gap={"16px"}>
                                <Flex direction={"column"} gap={"14px"}>
                                    <Rating colorPalette="orange" readOnly size="sm" defaultValue={5} />
                                    <Text color={"white"} fontWeight={400} textAlign={"left"} >
                                    Excellent problem-solving skills and a great eye for design. 
                                    Our website is now much more user-friendly and visually 
                                    appealing thanks to their efforts.
                                    </Text>
                                
                                   
                                </Flex>
                                <Flex gap="6">
                                    <Avatar 
                                    name="Micheal Thomas"
                                    src="https://randomuser.me/api/portraits/men/73.jpg" 
                                    />
                                    <Stack textStyle="sm" gap="0" textAlign={"left"}>
                                    <Text fontWeight="medium" color={"white"} >Micheal Thomas</Text>
                                    <Text color="fg.muted">CTO, Accenture Indonesia</Text>
                                    </Stack>
                                </Flex>
                            </Flex>
                        </Box>
                        </Flex>
                </Flex>
        </Flex>
    )
}