import style from './../../Hero/Hero.module.css'

export default function Portofolio(){
    return(<div style={{zIndex:'4', boxShadow:'0px 0px 100px rgba(0, 0, 0, 100%)', height:'1400px'}} className={style['container-body']}>
        <div className={style['portofolio']}>
            <h1>Portofolio</h1>
        </div>
        <div className={style['grid-container']}>
            <div style={{backgroundImage:'url(https://cdn.discordapp.com/attachments/510073868552110082/1311375709691707432/image.png?ex=6748a14d&is=67474fcd&hm=9cea805df5a67746b9ac84523761421c58ce0beff33e90d9cd5a3cf80532f1d6&)'}} className={style['grid-item']} />
            <div style={{backgroundImage:'url(https://cdn.discordapp.com/attachments/510073868552110082/1311377270199423047/image.png?ex=6748a2c1&is=67475141&hm=a7b92d31f0d114317ad260879d7f54be39b3dd00724b44e66246077e55576939&)'}} className={style['grid-item']} />
            <div style={{backgroundImage:'url(https://cdn.discordapp.com/attachments/510073868552110082/1311378350211600394/image.png?ex=6748a3c2&is=67475242&hm=79aef49bb05899970f5a1f5fdeb7f2f929988c221ac63170afeee20e31311a8d&)'}} className={style['grid-item']} />
            <div style={{backgroundImage:'url(https://cdn.discordapp.com/attachments/510073868552110082/1311380699374157904/Untitled-1.png?ex=6748a5f3&is=67475473&hm=4f42da22f2f447bae4408164041ab5eabdedcaabe7f8ed61806827296da78353&)', objectPosition:'center'}} className={style['grid-item']} />
        </div>
    </div>)
}