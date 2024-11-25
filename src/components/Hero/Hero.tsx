import style from "./Hero.module.css"
import { Button, Input } from "@chakra-ui/react"

export default function Hero() {
    return(
        <div className={style["header"]}>
            <img height={90} width={90} src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg">
            </img>
            <div className={style["nav-menu"]}>
                <Button fontSize={19} color={'white'} bgColor={'rgba(0,0,0,0)'} border={'none'} margin={2}>Home</Button>
                <Button fontSize={19} color={'white'} bgColor={'rgba(0,0,0,0)'} border={'none'} margin={2}>Portofolio</Button>
                <Button fontSize={19} color={'white'} bgColor={'rgba(0,0,0,0)'} border={'none'} margin={2}>Contact</Button>
            </div >
            <Input className={style['search-bar']} placeholder="Search" />
            <div className={style["search-image"]}>
                <Button bgColor={'rgba(0,0,0,0)'}><img height={20} width={20} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"></img></Button>
            </div>
        </div>
    )
}