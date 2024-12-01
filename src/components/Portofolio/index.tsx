import Dialog from '@/components/Dialog'
import style from './../Hero/Hero.module.css'
export default function Portofolio(){
    return(<div id='portofolio' style={{zIndex:'4', boxShadow:'0px 0px 100px rgba(0, 0, 0, 100%)'}} className={style['container-portofolio']}>
        <div className={style['portofolio']}>
            <h1>Portofolio</h1>
        </div>
        <div className={style['grid-container']}>
            <Dialog  />
        </div>
    </div>)
}