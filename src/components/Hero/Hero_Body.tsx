import style from "./Hero.module.css"

export default function HeroBody(){
    return(
        <div className={style["container-body"]}>
            <div className={style["body-left"]}>
                <div className={style['content']}>
                    <h1 style={{fontSize:'30px'}}>I'M</h1>
                    <h2> Rangga Satria </h2>
                </div>
            </div>
            <div className={style["body-right"]}>
                <img height={400} width={400} src="https://web.rupa.ai/wp-content/uploads/2023/06/GVS_A_simple_background_for_a_LinkedIn_profile_picture_perhaps__75435bbf-9b8f-4815-8e9e-d5194e92061d.png"></img>
            </div>
        </div>
    )
}