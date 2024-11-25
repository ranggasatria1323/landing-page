import { Button } from "@chakra-ui/react"
import style from "./Hero.module.css"


export default function HeroBody(){
    return(
        <div className={style["container-body"]}>
            <div className={style['container-name']}>
                <div className={style['Name']}>
                    <h1 style={{fontSize:'30px'}}>I'M</h1>
                    <h2> Rangga Satria </h2>
                </div>
                <div style={{zIndex:'-10', fontSize:'30px',position:'relative', top:'4%', right:'47%'}} className={style['role']}>
                    Web Developer & Designer
                </div>
                <Button className={style['button']}>Click Me</Button>
            </div>
            <div className={style['container-name']}>
                <img style={{paddingRight:'20px', objectFit:'cover', height:'100%', width:'100%'}} src="https://cdn.discordapp.com/attachments/510073868552110082/1310651721885683732/WhatsApp_Image_2023-11-03_at_16.59.07-removebg-preview.png?ex=6745ff09&is=6744ad89&hm=d003efefe3bc9c4b53c1e1586f7c517ad8035a018b007854cecbf8fcb3df0cec&">
                </img>
            </div>
        </div>
    )
}