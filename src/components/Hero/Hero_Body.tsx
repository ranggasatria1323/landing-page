import { Button } from "@chakra-ui/react"
import style from "./Hero.module.css"
import Foto from './../../assets/fotoProfile.png'


export default function HeroBody(){
    return(
        <div id="profile" style={{zIndex:'2', backgroundImage:'linear-gradient(rgba(100,0,100,10%), rgba(0,0,0,10%) , rgba(100,20,0,30%))'}} className={style["container-body"]}>
            <div className={style['container-name']}>
                <div className={style['Name']}>
                    <h1>I'M</h1>
                    <h2> Rangga Satria </h2>
                    <div className={style['role']}>
                    Web Developer & Designer
                    </div>
                </div>
                <img className={style['foto-profile']} src={Foto}>
                </img>
                <Button className={style['button']}>Contact Me</Button>
            </div>
        </div>
    )
}