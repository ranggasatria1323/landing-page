import { Button } from "@chakra-ui/react"
import style from "./Hero.module.css"


export default function HeroBody(){
    return(
        <div style={{zIndex:'2', backgroundImage:'linear-gradient(rgba(100,0,100,10%), rgba(0,0,0,10%) , rgba(100,20,0,30%))'}} className={style["container-body"]}>
            <div className={style['container-name']}>
                <div className={style['Name']}>
                    <h1 style={{fontSize:'30px'}}>I'M</h1>
                    <h2> Rangga Satria </h2>
                    <div style={{fontSize:'70px',position:'absolute', bottom:'100px', left:'47%', width:'1200px'}} className={style['role']}>
                    Web Developer & Designer
                    </div>
                </div>
                <img className={style['foto-profile']} src={"https://cdn.discordapp.com/attachments/510073868552110082/1310651721885683732/WhatsApp_Image_2023-11-03_at_16.59.07-removebg-preview.png?ex=6745ff09&is=6744ad89&hm=d003efefe3bc9c4b53c1e1586f7c517ad8035a018b007854cecbf8fcb3df0cec&"}>
                </img>
                <Button className={style['button']}>Contact Me</Button>
            </div>
        </div>
    )
}