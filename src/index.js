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


class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            size:{}
        }
        this.goNext = this.goNext.bind(this)
        this.swiper = null
    }

    componentDidMount(){
        this.setState({
            size: {
                "width": document.body.offsetWidth + "px",
                "height": document.body.offsetHeight + "px"
            }
        })


        this.pageChange();
        this.swiper.on('slideChange', ()=> {
            this.pageChange(this.swiper.realIndex)
        });
        this.slideTo(6)
    }
    pageChange(index=0){//翻页之后 动画
        console.log(index)
        switch (index) {
            case 1:
                animateCss('#page1 .head-title', 'bounceInLeft')
                break;
            case 2:
                animateCss('#page2 .head-title', 'bounceInLeft')
                break;
            case 3:
                animateCss('#page3 .head-title', 'bounceInLeft')
                break;
            case 4:
                animateCss('#page4 .head-title', 'bounceInLeft')
                break;
            case 5:
                animateCss('#page5 .head-title', 'bounceInLeft')
                break;
            case 6:
                animateCss('#page6 .head-title', 'bounceInLeft')
                break;
            case 7:
                animateCss('#page7 .head-title', 'bounceInLeft')
                break;
            case 8:
                animateCss('#page8 .head-title', 'bounceInLeft')
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
                       <div className="container bg1 home-wrap" id="page0">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="home">
                               <div className="company-logo"></div>
                               <div className="company-about">彩票包网提供商</div>
                               <div className="company-game">
                                   <ul>
                                       <li onClick={()=>this.slideTo(1)}>DC彩票</li>
                                       <li onClick={()=>this.slideTo(2)}>棋牌游戏</li>
                                       <li onClick={()=>this.slideTo(3)}>真人娱乐</li>
                                       <li onClick={()=>this.slideTo(4)}>棋牌游戏</li>
                                   </ul>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg2 company-wrap"  id="page1">
                           <Logo />
                           <DownPage type={2} goNext={this.goNext} />
                           <div className="head-title head-title1"/>
                           <div className="company">
                               <img width="535" src={companyBg} alt=""/>
                               <div className="company-info">
                                   主彩種，搭配市場熱門彩種，擁有几十種彩票種類。即時開獎數據、彩票資訊、統計及分析服務。不同於其他彩票平台，特別開發智慧主彩種，搭配市場熱門彩種，擁有几十種彩票種類。即時開獎數據、彩票資訊、統計及分析服務。不同於其他彩票平台，特別開發智慧
                               </div>
                           </div>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg3 new-lottery-wrap" id="page2">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="head-title head-title2"/>
                           <p className="description">恒博 DC 彩票創新自主彩種，搭配市場熱門彩種，擁有几十種彩票種類。即時開獎數據、彩票資訊、統計及分析服務。不同於其他彩票平台，特別開發智慧操作、投注簡易的界面。</p>
                           <img  className="new-lottery-img" src={lotteryImg} alt=""/>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg4 agency-wrap" id="page3">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="head-title head-title3"/>
                           <div className="agency">
                               <p className="description">您的佣金构成不仅来自于会员，更有代理进账返佣。根据业绩的高低，划分不同佣金比例和会员等级，您的自营越高，代理越多相对应
                                   的等级越高，返佣越多。<span>无限代理</span><span>无限封顶</span><span>共同助力</span><span>日日进账</span></p>
                               <img className="agency-img" src={agencyBg} alt="全名代理"/>
                           </div>

                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg5 lottery-wrap" id="page4">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="head-title head-title4"/>
                            <div className="lottery">
                                <p className="description">恒博 DC 彩票創新自主彩種，搭配市場熱門彩種，擁有几十種彩票種類。即時開獎數據、彩票資訊、統計及分析服務。不同於其他彩票平台，特別開發智慧操作、投注簡易的界面。</p>
                                <img className="lottery-img" src={lotteryBg} alt="恒博新彩种"/>
                            </div>
                       </div>
                   </div>
                   {/* 电子游戏 */}
                   <div style={this.state.size}>
                       <div className="container bg2 egame-wrap" id="page5">
                           <Logo />
                           <DownPage type={2} goNext={this.goNext} />
                           <div className="head-title head-title5"/>
                           <div className="egame">
                               <p className="description">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                               <img className="egame-bg" src={egameBg} alt="棋牌"/>
                           </div>
                       </div>
                   </div>
                   {/* 真人*/}
                   <div style={this.state.size}>
                       <div className="container bg4 og-game-wrap" id="page6">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="head-title head-title6 "/>
                            <div className="og-game">
                                <p></p>
                                <img src={ogBg} alt=""/>
                                <img src={ogBg2} alt=""/>
                            </div>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg3 chess-wrap" id="page7">
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="head-title head-title7"/>
                           <div className="chess">
                               <p className="description">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                               <img className="chess-bg" src={chessBg} alt="棋牌"/>
                           </div>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg6" id="page8">
                           <div className="head-title head-title8"/>

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
