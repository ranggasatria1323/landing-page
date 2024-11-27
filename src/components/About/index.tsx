import style from './../Hero/Hero.module.css'

export default function About() {
    return(
    <div style={{backgroundColor:'#353535', zIndex:'1', height:'1500px', boxShadow:'none'}} className={style['container-body']}>
        <h3 style={{position:'absolute', top:'13%', fontSize:'60px', fontWeight:'bold', color:'white'}}>About</h3>
        <div style={{backgroundColor:'rgb(255, 215, 83)',height:'3px', width:'4.2%', position:'absolute', top:'21%'}}></div>
        <p className={style['my-about']} style={{width:'70%', fontSize:'25px', letterSpacing:'1px', lineHeight:'120%'}}>I have acquired and sharpened m ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum vn organization. I
        am trustworthy, creative, and an effective communicator. I fondly anticipate working in a
        challenging yet rewarding organization to attain its visions for personal growth.
        </p>
        <h1 className={style['mySkills']}>My Skills</h1>
        <div className={style['boxSkills']}>
            <div className={style['skills']}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' />
                <p>TypeScript</p>
            </div>
            <div className={style['skills']}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'/>
                <p>CSS</p>
            </div>
            <div className={style['skills']}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'/>
                <p>HTML</p>
            </div>
            <div className={style['skills']}>
                <img style={{fill:'white', filter:'revert'}} src='https://www.svgrepo.com/show/459082/logo-js.svg'/>
                <p>JavaScript</p>
            </div>
        </div>
        <div style={{top:'72%'}} className={style['boxSkills']}>
            <div className={style['skills']}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png' />
                <p>Photoshop</p>
            </div>
            <div className={style['skills']}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png' />
                <p>Illustrator</p>
            </div>
            <div className={style['skills']}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/1051px-Adobe_After_Effects_CC_icon.svg.png' />
                <p>AfterEffects</p>
            </div>
            <div className={style['skills']}>
                <img style={{borderRadius:'20px'}} src='https://cdn2.steamgriddb.com/icon/9e82757e9a1c12cb710ad680db11f6f1.png' />
                <p>AdobeValorant</p>
            </div>
        </div>
    </div>)
}