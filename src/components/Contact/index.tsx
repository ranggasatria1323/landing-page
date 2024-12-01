import { Text, Button,Link, Box,Fieldset, Input, Stack, Flex } from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import { SlSocialLinkedin,SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { Field } from "@/components/ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"
import style from './../Hero/Hero.module.css'


export default function Contact(){
    return(<div className={style['container-contact']}>
      <Flex direction={{base:"column"}} paddingX={{base:"16px", md:"0"}} id="contact">
         <Flex  direction={{base:"column"}} paddingY={{base:"30px"}}>
         <Text color={"currentColor"}  textStyle="3xl"  >
                         Contact Me
                    </Text>
            
          <Flex direction={{base:"column",md:"row"}} gap={"16px"} alignItems={"center"} justifyContent={"space-between"}>
            <Fieldset.Root size="lg"   maxW="md" marginBottom={"30px"}>
              <Stack>
                <Fieldset.HelperText color="currentColor">
                  Please provide your contact details below.
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content color={"currentColor"}>
                <Field label="Name">
                  <Input name="name" />
                </Field>

                <Field label="Email address">
                  <Input name="email" type="email" />
                </Field>

                <Field label="Country">
                  <NativeSelectRoot >
                    <NativeSelectField
                      name="country"
                      items={[
                        "United Kingdom (UK)",
                        "Canada (CA)",
                        "United States (US)",
                        "Indonesia (ID)",
                      ]}
                    />
                  </NativeSelectRoot>
                </Field>
              </Fieldset.Content>

              <Button type="submit" alignSelf="flex-start" bgColor="currentBg" color="invert_currentColor" padding={'15px'} borderColor={"currentColor"} _hover={{outlineColor:"pink.500"}}>
                Submit
              </Button>
            </Fieldset.Root>

            <Button colorPalette={'currentColor'} marginBottom={"20px"} ><Link   color={'currentColor'} fontSize={15} href="...">Send me message <MdEmail /></Link> </Button>
          </Flex>
              
            <Box>
            <Flex justifyContent={"center"}>
            <Text  color="currentColor" >
                Reach me in :{" "}
                <Link 
                    marginLeft={2}
                    href="https://www.linkedin.com/in/rangga-satria-maulana/"
                    aria-label="linkedin"    
                    _hover={{borderColor:"currentColor"}}
                 >
                    <SlSocialLinkedin size={30} color="currentColor" />
                </Link>{" "}
                <Link  
                    marginLeft={2}
                    href="https://instagram.com/"
                    aria-label="twitter"
                    _hover={{borderColor:"currentColor"}}
                 >
                    <SlSocialTwitter size={30} color="currentColor" />
                   
                </Link>{" "}

                <Link  
                    color={'currentColor'}
                    marginLeft={2}
                    href="https://github.com/ranggasatria1323"
                    aria-label="github"
                    _hover={{borderColor:"currentColor"}}
                 >
                    <SiGithub size={30} color="currentColor" />
                   
                </Link>{" "}
            </Text>
            </Flex>
            </Box>
        
            
          
          </Flex>
        
        </Flex>
        </div>
    )
}