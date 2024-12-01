import { Text, Flex } from "@chakra-ui/react"
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline"
import style from './../Hero/Hero.module.css'
import Testimonial from "../Testimonial"


const Experience = () => {
  return (
    <div id='experience' style={{backgroundColor:'#353535', zIndex:'1', boxShadow:'none'}} className={style['container-experience']}>
    <Flex direction={{base:"column"}} paddingX={{base:"16px", md:"0"}}>
         <Flex  direction={{base:"column"}} paddingY={{base:"40px"}}>
            <Text color={"white"} textStyle="7xl"  > 
            <strong>Experience</strong>
            </Text>
            <TimelineRoot  marginTop={{base:"46px"}}>
              <TimelineItem>
                <TimelineConnector>
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle color={"white"}>Senior Web Developer | Microsoft, Jakarta</TimelineTitle>
                  <TimelineDescription color={"lightgray"} >2022 - present</TimelineDescription>
                  <Text style={{lineHeight:'17px'}} textStyle="sm" color={"white"} fontSize={{base:"12px", md:"16px"}} textAlign={"justify"}>
                  I maintained high standards and best practices for web applications, collaborating with cross-functional teams to create intuitive online apps. I mentored junior developers, conducted thorough code reviews, and updated technical documentation. I optimized performance, ensured responsiveness, implemented security measures, and resolved technical issues efficiently.
                  </Text>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector>
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle color={"white"} >Junior Web Developer | Accenture Indonesia, Jakarta</TimelineTitle>
                  <TimelineDescription color={"lightgray"}>2020 - 2022</TimelineDescription>
                  <Text style={{lineHeight:'17px'}} textStyle="sm" color={"white"} fontSize={{base:"12px", md:"16px"}} textAlign={"justify"}>
                  I developed both front-end and back-end code to create online applications, working closely with senior developers and designers. My responsibilities included writing clear, maintainable code, troubleshooting issues, and conducting code reviews. I also performed extensive testing, enhanced website performance, and implemented necessary changes while maintaining open communication with team members and stakeholders.
                  </Text>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineConnector>
                </TimelineConnector>
                <TimelineContent>
                  <TimelineTitle color={"white"} >Programmer | GITS Indonesia, Jakarta</TimelineTitle>
                  <TimelineDescription color={"lightgray"}>2019 - 2020</TimelineDescription>
                  <Text style={{lineHeight:'17px'}} textStyle="sm" color={"white"} fontSize={{base:"12px", md:"16px"}} textAlign={"justify"}>
                  I designed, developed, and maintained dynamic websites and web applications, writing clean, efficient code for both front-end and back-end. I collaborated with designers and developers to meet project requirements and deliver high-quality solutions. My role involved troubleshooting, debugging, regular testing, and ensuring smooth performance across browsers. I kept up-to-date with emerging technologies to improve the development process and communicated effectively with team members and stakeholders to ensure project success and client satisfaction.
                  </Text>
                </TimelineContent>
              </TimelineItem>

            </TimelineRoot>
         </Flex>
      </Flex>
      <Testimonial />
    </div>
  )
}

export default Experience