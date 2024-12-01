import { Button } from "@/components/ui/button"
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import style from './../Hero/Hero.module.css'
import { AspectRatio } from "@chakra-ui/react"
import CompanyProfile from './../../assets/CompanyProfile.gif'
import Bumper from './../../assets/Bumper Acara.gif'
import Gendhis from './../../assets/Gendhis.gif'

const Dialog = () => {
  return (<>
    <DialogRoot scrollBehavior="inside" size="cover">
      <DialogTrigger asChild>
        <Button className={style['grid-item']}><img style={{objectFit:'cover', height:'100%', width:'100%' , borderRadius:'2%'}} src={CompanyProfile} /></Button>
      </DialogTrigger>
      <DialogContent className={style['pop-porto']} style={{height:'750px', marginTop:'5%', width:'900px', padding:'2% 5%'}}>
        <DialogHeader >
          <DialogTitle style={{fontSize:'30px', marginBottom:'20px'}}>My Personal Website</DialogTitle>
        </DialogHeader>
        <DialogCloseTrigger />
        <DialogBody >
            <p style={{fontWeight:'bold'}}>Situation:</p>
            <p style={{lineHeight:"40px"}}>At my previous job, the company faced challenges with an outdated e-commerce website. Users frequently complained about slow load times and difficulty navigating the site, leading to a drop in sales and customer satisfaction.</p>
            <p style={{fontWeight:'bold'}}>Task:</p>
            <p style={{lineHeight:"40px"}}> My task was to redesign and rebuild the company's e-commerce website to enhance user experience, improve load times, and ultimately increase online sales.</p>
            <p style={{fontWeight:'bold'}}>Action:</p>
            <p style={{lineHeight:"40px"}}> I worked on the new design and improved the website’s structure to make it more user-friendly and efficient.</p>
            <p style={{fontWeight:'bold'}}>Result:</p>
            <p style={{lineHeight:"40px"}}>The redesigned e-commerce website resulted in a 40% increase in sales within the first three months of launch. User feedback was overwhelmingly positive, highlighting improved load times and ease of navigation. The site's bounce rate decreased by 25%, and customer engagement increased significantly.</p>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
    <DialogRoot scrollBehavior="inside" size="cover">
      <DialogTrigger asChild>
      <Button className={style['grid-item']}><img style={{objectFit:'cover', height:'100%', width:'100%', borderRadius:'2%'}} src={Gendhis} /></Button>
      </DialogTrigger>
      <DialogContent className={style['pop-porto']} style={{height:'87vh', marginTop:'5%', width:'150vh', padding:'2% 5%'}}>
        <DialogHeader>
          <DialogTitle style={{fontSize:'30px', marginBottom:'20px'}}>3D Animation "Gendhis"</DialogTitle>
        </DialogHeader>
        <DialogCloseTrigger />
        <DialogBody >
            <p style={{fontWeight:'bold'}}>Situation:</p>
            <p style={{lineHeight:"40px"}}>The production team faced challenges in creating a 3D animated horror film that could evoke a scary and thrilling atmosphere. The main challenge was balancing frightening visual elements with a strong, deep storyline.</p><br/>
            <p style={{fontWeight:'bold'}}>Task:</p>
            <p style={{lineHeight:"40px"}}>Our mission was to create a 3D animated film titled "Gendhis" that was not only scary but also had an engaging storyline and strong characters, making it well-received by a wide audience and setting a new standard in the horror animation genre.</p><br/>
            <p style={{fontWeight:'bold'}}>Action:</p>
            <p style={{lineHeight:"40px"}}>- Story Development: Created a script that combined local cultural elements with rich horror mythology, ensuring the story had surprising plot twists and complex characters.</p><br/>
            <p style={{lineHeight:"40px"}}>- Visual Design: Used the latest 3D animation technology to create realistic and detailed visual effects, from character design to background settings that supported the horror atmosphere.</p>   <br/>        
            <p style={{lineHeight:"40px"}}>- Sound Effects and Music: Integrated scary sound effects and background music that supported the eerie atmosphere, collaborating with experienced music composers and sound design teams.</p>    <br/>      
            <p style={{lineHeight:"40px"}}>- Animation and Rendering: The animation process was carried out in detail to ensure each scene looked lively and frightening. We used high-quality rendering for the final output.</p>           <br/>
            <p style={{fontWeight:'bold'}}>Result:</p>
            <p style={{lineHeight:"40px"}}>"Gendhis" successfully attracted the attention of audiences and critics, receiving positive reviews for its animation quality and engaging story. The film won several awards at international horror film festivals and set a new standard for 3D animated horror films. Viewers praised the stunning visual effects, captivating storyline, and iconic characters.</p><br/>
            <AspectRatio  maxW="1900px" ratio={2}>
                  <iframe className={style['youtube']}
                  title="Gendhis"
                  src="https://www.youtube.com/embed/HVyx2bQVH9Q"
                  allowFullScreen
                />
              </AspectRatio>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
    <DialogRoot scrollBehavior="inside" size="cover">
      <DialogTrigger asChild>
      <Button className={style['grid-item']}><img style={{objectFit:'cover', height:'100%', width:'100%', borderRadius:'2%'}} src={Bumper} /></Button>
      </DialogTrigger>
      <DialogContent className={style['pop-porto']} style={{height:'750px', marginTop:'5%', width:'900px', padding:'2% 5%'}}>
        <DialogHeader>
          <DialogTitle>With Inside Scroll</DialogTitle>
        </DialogHeader>
        <DialogCloseTrigger />
        <DialogBody >
            <p style={{fontWeight:'bold'}}>Situation:</p><br/>
            <p style={{lineHeight:"40px"}}>The company was planning its annual corporate 
              event, which aimed to strengthen relationships with key stakeholders and 
              showcase the company's achievements and future plans. The challenge was to 
              create an engaging and memorable opening ceremony that would set the tone 
              for the entire event.
            </p><br/>
            <p style={{fontWeight:'bold'}}>Task:</p>
            <p style={{lineHeight:"40px"}}>My task was to design and execute the opening ceremony 
              for the corporate event, ensuring it was impactful, professional, and aligned with 
              the company's brand image.
            </p><br/>
            <p style={{fontWeight:'bold'}}>Action:</p>
            <p style={{lineHeight:"40px"}}>- Concept Development: Collaborated with the marketing and events team to brainstorm and develop a creative concept that reflected the company's values and mission.
            </p><br/>
            <p style={{lineHeight:"40px"}}>- Script and Content Creation: Drafted a compelling script and designed multimedia presentations, including videos and slideshows, to highlight the company's achievements and future goals.
            </p><br/>        
            <p style={{lineHeight:"40px"}}>- Rehearsals and Coordination: Organized rehearsals to ensure smooth execution on the day of the event. Coordinated with various departments, including AV technicians, event planners, and speakers, to ensure everything was in place.
            </p><br/>       
            <p style={{lineHeight:"40px"}}>- Execution: Oversaw the live execution of the opening ceremony, ensuring all elements came together seamlessly, from the lighting and sound to the timing of speeches and multimedia presentations.
            </p><br/>      
            <p style={{fontWeight:'bold'}}>Result:</p>
            <p style={{lineHeight:"40px"}}>The opening ceremony was a resounding success, receiving positive feedback from attendees and stakeholders. The event set a professional and engaging tone for the rest of the day, enhancing the company's reputation and strengthening relationships with key partners. Attendees praised the seamless execution and the engaging content, which effectively communicated the company's vision and accomplishments.
            </p><br/>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
    <DialogRoot scrollBehavior="inside" size="cover">
      <DialogTrigger asChild>
      <Button className={style['grid-item']}><img style={{objectFit:'cover', height:'100%', width:'100%', borderRadius:'2%'}} src={CompanyProfile} /></Button>
      </DialogTrigger>
      <DialogContent className={style['pop-porto']} style={{height:'750px', marginTop:'5%', width:'900px', padding:'2% 5%'}}>
        <DialogHeader>
          <DialogTitle>With Inside Scroll</DialogTitle>
        </DialogHeader>
        <DialogCloseTrigger />
        <DialogBody >
            <p>AWdasdhiahsfiahsdihaiwdhaishdaihwidhiahsidhaiwhdiahsidhaiwhdiahsidhaihwdihasidhiwhadishdiahwidhaishdiahsfihasidhaihfiahsdihaiwhdiahsidjaisjdiasfuhaiysgdjahvbfygawiegaibsfyveifaiusgdiuagsigduaiwerarysadagwurgaiwgeduasdgasufgauigseiuahwsuhdhabscvzhxvcavysdvqvweigqwygryqwgrgasbdfhbzxjchbjhasbchjbajhbsdfhabsjfbhahbwejhqhwbejhqbwrhqwr</p>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
    </>
  )
}

export default Dialog

