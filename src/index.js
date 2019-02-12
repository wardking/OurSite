import React from 'react';
import ReactDOM from 'react-dom';
import './swiper.scss';
//https://daneden.github.io/animate.css/
import 'animate.css'
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Swiper from 'react-id-swiper';
import LogoWhite from "./imgs/logo_white.png"
import LogoBlue from "./imgs/logo_blue.png"
import lotteryImg from "./imgs/lottery.png"
import companyBg from "./imgs/company-bg.png"
import agencyBg from "./imgs/agency-bg.png"
import lotteryBg from "./imgs/lottery-bg.png"
import egameBg from "./imgs/egame-bg.png"
import chessBg from "./imgs/chess-bg.png"
import ogBg from "./imgs/og-bg.png"
import ogBg2 from "./imgs/og-bg2.png"
import phoneImg from "./imgs/phone.png"
import telegramImg from "./imgs/telegram.png"
import whatsappImg from "./imgs/whatsapp.png"

//pc端
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            size:{}
        }
        this.goNext = this.goNext.bind(this)
        this.swiper = null
    }
    setSize(){//设置尺寸
        this.setState({
            size: {
                "width": document.body.offsetWidth + "px",
                "height": document.body.offsetHeight + "px"
            }
        })
    }
    componentDidMount(){
        this.setSize();
        window.addEventListener('resize', ()=>{
            this.setSize();
        });

        this.pageChange();
        this.swiper.on('slideChange', ()=> {
            this.pageChange(this.swiper.realIndex)
        });
        this.slideTo(0)
    }
    pageChange(index=0){//翻页之后 动画
        console.log(index)
        switch (index) {
            case 1:
                animateCss('.new-lottery-wrap .head-title', 'bounceInLeft');
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 8:
                break;
            case 0:
            default:
                animateCss('.company-logo', 'fadeIn')
                animateCss('.company-about', 'bounceInLeft')
                animateCss('.company-game', 'bounceInRight')
                animateCss('.down-page', 'bounce')

        }
    }

    goNext() {
        if (this.swiper) this.swiper.slideNext();
    }
    slideTo(index=0){
        if (this.swiper) this.swiper.slideTo(index);
    }
    render() {
        const params = {
            containerClass: "body-wrap",
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: true,
        };

        return (
           <div>
               <Swiper {...params}  ref={node => {if(node) this.swiper = node.swiper} }>
                   <div style={this.state.size}>
                       <div className="container bg1">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="content home-wrap">
                               <div className="company-logo"/>
                               <div className="company-about">彩票包网提供商</div>
                               <div className="company-game">
                                   <ul>
                                       <li onClick={()=>this.slideTo(3)}>恒博彩票</li>
                                       <li onClick={()=>this.slideTo(4)}>电子游艺</li>
                                       <li onClick={()=>this.slideTo(5)}>真人娱乐</li>
                                       <li onClick={()=>this.slideTo(6)}>棋牌游戏</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
                    {/*创新彩种*/}
                   <div style={this.state.size}>
                       <div className="container bg3" >
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="content new-lottery-wrap">
                               <div className="head-title"/>
                               <p className="description">恒博彩票创新自主彩种，搭配市场热门彩种，拥有几十种彩票种类。即时开奖数据、彩票资讯、统计及分析服务。不同于其他彩票平台，特别开发智慧操作、投注简易的界面。</p>
                               <img  className="new-lottery-img" src={lotteryImg} alt=""/>
                           </div>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg4">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="content agency-wrap">
                               <div className="head-title "/>
                               <div className='lotteryCont'>
                                   <span className="description">您的佣金构成不仅来自于会员，更有代理进账返佣。根据业绩的高低，划分不同佣金比例和会员等级，您的自营越高，代理越多相对应
                                       的等级越高，返佣越多。</span>
                                   <span className='desList'>无限代理</span><span className='desList'>无限封顶</span><span className='desList'>共同助力</span><span className='desList'>日日进账</span>
                               </div>
                               <img className="agency-img" src={agencyBg} alt="全名代理"/>
                           </div>

                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg5">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                            <div className="content lottery-wrap">
                                <div className="head-title"/>

                                <p className="description">恒博DC 彩票创新自主彩种，搭配市场热门彩种，拥有几十种彩票种类。即时开奖数据、彩票资讯、统计及分析服务。不同于其他彩票平台，特别开发智慧操作、投注简易的界面。</p>
                                <img className="lottery-img" src={lotteryBg} alt="恒博新彩种"/>
                            </div>
                       </div>
                   </div>
                   {/* 电子游戏 */}
                   <div style={this.state.size}>
                       <div className="container bg2">
                           <Logo />
                           <DownPage type={2} goNext={this.goNext} />
                           <div className="content egame-wrap">
                               <div className="head-title "/>
                               <p className="description">恒博游戏，市场最新，恒博娱乐与供应商间绝佳合作关系，特接入多超过数十款电子游戏产品，包含人人喜欢刺激的千炮捕鱼、大满贯MW电子、斗地主以及森林舞会等项目；恒博娱乐凭借整合技术优势，随时保持鮮活趣味，提供玩家最佳互动体验。</p>
                               <img className="egame-bg" src={egameBg} alt="棋牌"/>
                           </div>
                       </div>
                   </div>
                   {/* 真人*/}
                   <div style={this.state.size}>
                       <div className="container bg4 ">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                            <div className="content og-game-wrap">
                                <div className="head-title"/>
                                <p className="og-game-description">恒博娱乐提供多款真人视讯游戏平台，提供高清视频流及无限游戏玩法。超越业众步调，接入知名品牌产品，集成东方集团旗下的OG视讯等款游戏。凭借我们的純熟快速的技术团队，提供稳定性高、画面清晰的播界面，让玩家更即时精准，如同亲临现场娱乐场所。我们的优势经验，为各运营商提供最佳的解決方案，不论是单独介接游戏或是集成网站，都将超乎您所想像。
                                    <img className="og-game-bg2" src={ogBg2} alt=""/>
                                </p>
                                <img className="og-game-bg"  src={ogBg} alt=""/>
                            </div>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg3 ">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="content chess-wrap">
                               <div className="head-title"/>
                               <p className="description">恒博娱乐引进目前国际流行的棋牌游戏，包括开元棋牌。乐游 VG棋牌也将陆续开启，引领市场，给您不一样的绝佳体验。</p>
                               <img className="chess-bg" src={chessBg} alt="棋牌"/>
                           </div>
                       </div>
                   </div>
                   {/*集团介绍*/}
                   <div style={this.state.size}>
                       <div className="container bg2 ">
                           <Logo />
                           <DownPage type={2} goNext={this.goNext} />
                           <div className="content company-wrap">
                               <div className="head-title"/>
                               <div className="company-info">
                                   恒博娱乐以丰富的研发力、专业的服务力、全面的策略力，为您开创新局、提升规模、整合策略、建立品牌，与我们合作将在商场上持续获利、高枕无忧。作为一家亚洲实力的软件公司，解决方案，平台规划、活動规划、市场营销一应俱全，为现有系統商中最全局宏观的策略顾问公司。恒博娱乐具备资深经验及相关知识。与客户之间持续成功、双赢的合作关系，並确保提供最完美的在线娱乐。
                               </div>
                               <img width="535" src={companyBg} alt=""/>
                           </div>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg6">
                           <Logo />
                           <div className="content contact-wrap">
                               <div className="head-title"/>
                               <ul>
                                   <li>
                                       <img src={whatsappImg} alt=""/>
                                       <h5>WhatsApp</h5>
                                       <p>
                                           恒博：+639771123456
                                           <br/>
                                           大川：+639273123456
                                       </p>
                                   </li>
                                   <li>
                                       <img src={telegramImg} alt=""/>
                                       <h5>WhatsApp</h5>
                                       <p>
                                           恒博：+639771123456
                                           <br/>
                                           大川：+639273123456
                                       </p>
                                   </li>
                                   <li>
                                       <img src={phoneImg} alt=""/>
                                       <h5>WhatsApp</h5>
                                       <p>
                                           恒博：+639771123456
                                           <br/>
                                           大川：+639273123456
                                       </p>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </Swiper>

           </div>
        )
    }
}
//白色logo和蓝色logo
const Logo =(props)=><a className="logo" href="/">
    <h1><img src={props.white?LogoWhite:LogoBlue} alt="恒博"/></h1>
</a>

const DownPage =(props)=><div onClick={()=>{
    props.goNext();
}} className={props.type?"down-page down-page-black infinite":"down-page infinite"} />


// 增加动画方法
function animateCss(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
