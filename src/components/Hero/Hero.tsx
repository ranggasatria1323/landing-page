import Page from "../DarkMode/Page"
import style from "./Hero.module.css"
import { Button, Input } from "@chakra-ui/react"
import Logo from './../../assets/logo-rangga.svg'

export default function Hero() {
    return(
        <div className={style["header"]}>
            <img height={90} width={90} src={Logo}>
            </img>
            <div className={style["nav-menu"]}>
                <Button fontSize={19} bgColor={'rgba(0,0,0,0)'} border={'none'}>Home</Button>
                <Button fontSize={19} bgColor={'rgba(0,0,0,0)'} border={'none'} marginLeft={10}>Portofolio</Button>
                <Button fontSize={19} bgColor={'rgba(0,0,0,0)'} border={'none'} marginLeft={10}>Contact</Button>
            </div >
            <Input className={style['search-bar']} placeholder="Search" />
            <Page> </Page>
        </div>
    )
}