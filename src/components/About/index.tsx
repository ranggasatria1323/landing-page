import style from './../Hero/Hero.module.css'

export default function About() {
    return(
    <div id='about' style={{backgroundColor:'#353535', zIndex:'1', height:'1800px', boxShadow:'none'}} className={style['container-body']}>
        <h3 className={style['header-about']} >About</h3>
        <div style={{backgroundColor:'rgb(255, 215, 83)',height:'3px', width:'4.2%', position:'absolute', top:'13.7%'}}></div>
        <p className={style['my-about']} >I'm a passionate web developer with extensive experience in front-end and back-end technologies. I specialize in creating responsive, user-friendly websites using HTML, CSS, and JavaScript, alongside modern frameworks like React and Angular. My back-end expertise includes Node.js, PHP, and Python, ensuring robust and scalable applications. I am dedicated to delivering high-quality, innovative solutions that exceed client expectations. With strong communication skills and a collaborative mindset, I focus on seamless web experiences. I continuously learn and stay updated with the latest industry trends and technologies. Thriving on challenges, I am excited to bring creative ideas to life and make a positive impact.
        </p>
        <h1 className={style['mySkills']}>My Skills</h1>
        <h1 style={{color:'white', position:'absolute', top:'32%', left:'46%', fontSize:'30px'}}>Front End</h1>
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
        <h1 style={{color:'white', position:'absolute', top:'53%', left:'46%', fontSize:'30px'}}>Back End</h1>
        <div style={{top:'56%'}} className={style['boxSkills']}>
            <div className={style['skills']}>
                <img src='https://images.credly.com/images/51aeb74b-ec87-4069-93fc-0ea449c8d77f/twitter_thumb_201604_node.png' />
                <p>Node JS</p>
            </div>
            <div className={style['skills']}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg' />
                <p>Python</p>
            </div>
            <div className={style['skills']}>
                <img src='https://www.svgrepo.com/show/353657/django-icon.svg' />
                <p>Django</p>
            </div>
            <div className={style['skills']}>
                <img style={{borderRadius:'20px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/198px-Ruby_logo.svg.png' />
                <p>Ruby</p>
            </div>
        </div>
        <h1 style={{color:'white', position:'absolute', top:'74%', left:'44%', fontSize:'30px'}}>DevOps & Tools</h1>
        <div style={{top:'77%'}} className={style['boxSkills']}>
            <div className={style['skills']}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' />
                <p>Git</p>
            </div>
            <div className={style['skills']}>
                <img src='https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256' />
                <p>AWS</p>
            </div>
        </div>
    </div>)
}