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

                   <div style={this.state.size}>
                       <div className="container bg3" >
                           <Logo white={1} />
                           <DownPage goNext={this.goNext} />
                           <div className="content new-lottery-wrap">
                               <div className="head-title"/>
                               <p className="description">恒博彩票創新自主彩種，搭配市場熱門彩種，擁有几十種彩票種類。即時開獎數據、彩票資訊、統計及分析服務。不同於其他彩票平台，特別開發智慧操作、投注簡易的界面。</p>
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
                               <p className="description">您的佣金构成不仅来自于会员，更有代理进账返佣。根据业绩的高低，划分不同佣金比例和会员等级，您的自营越高，代理越多相对应
                                   的等级越高，返佣越多。<span>无限代理</span><span>无限封顶</span><span>共同助力</span><span>日日进账</span></p>
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

                                <p className="description">恒博 DC 彩票創新自主彩種，搭配市場熱門彩種，擁有几十種彩票種類。即時開獎數據、彩票資訊、統計及分析服務。不同於其他彩票平台，特別開發智慧操作、投注簡易的界面。</p>
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
                               <p className="description">恒博游戏，市場最新，恒博娛樂與供應商間絕佳合作關係，特接入多超過数十款電子遊戲產品，包含人人喜歡刺激的千炮捕鱼、大满贯MW电子、斗地主以及森林舞会等項目；恒博娛樂憑借整合技術優勢，隨時保持鮮活趣味，提供玩家最佳互動體驗</p>
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
                                <p className="og-game-description">恒博娱乐提供多款真人視訊遊戲平台，提供高清視頻流及無限遊戲玩法。超越業眾步調，接入知名品牌產品，集成东方集团旗下的OG视讯等款遊戲。憑藉我們的純熟快速的技術團隊，提供穩定性高、畫面清晰的播界面，讓玩家更即時精准，如同親臨現場娛樂場所。我們的優勢經驗，為各運營商提供最佳的解決方案，不論是單獨介接遊戲或是集成網站，都將超乎您所想像。
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
                               <p className="description">恒博娛樂引进目前国际流行的棋牌游戏，包括开元棋牌。乐游 VG棋牌也将陆续开启，引领市场，给您不一样的绝佳体验。</p>
                               <img className="chess-bg" src={chessBg} alt="棋牌"/>
                           </div>
                       </div>
                   </div>
                   <div style={this.state.size}>
                       <div className="container bg2 ">
                           <Logo />
                           <DownPage type={2} goNext={this.goNext} />
                           <div className="content company-wrap">
                               <div className="head-title"/>
                               <img width="535" src={companyBg} alt=""/>
                               <div className="company-info">
                                   恒博娱乐以丰富的研發力、專業的服務力、全面的策略力，為您開創新局、提升規模、整合策略、建立品牌，與我們合作將在商場上持續獲利、高枕無憂。作為一家亞洲實力的軟件公司，解決方案，平台規劃、活動規劃、市場營銷一應俱全，為現有系統商中最全局宏觀的策略顧問公司。恒博娱乐具備資深經驗及相關知識。與客戶之間持續成功、雙贏的合作關係，並確保提供最完美的在線娛樂。
                               </div>
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
//手机端
class MobileApp extends React.Component{
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

                    <div style={this.state.size}>
                        <div className="container bg3" >
                            <Logo white={1} />
                            <DownPage goNext={this.goNext} />
                            <div className="content new-lottery-wrap">
                                <div className="head-title"/>
                                <p className="description">恒博彩票創新自主彩種，搭配市場熱門彩種，擁有几十種彩票種類。即時開獎數據、彩票資訊、統計及分析服務。不同於其他彩票平台，特別開發智慧操作、投注簡易的界面。</p>
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
                                <p className="description">您的佣金构成不仅来自于会员，更有代理进账返佣。根据业绩的高低，划分不同佣金比例和会员等级，您的自营越高，代理越多相对应
                                    的等级越高，返佣越多。<span>无限代理</span><span>无限封顶</span><span>共同助力</span><span>日日进账</span></p>
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

                                <p className="description">恒博 DC 彩票創新自主彩種，搭配市場熱門彩種，擁有几十種彩票種類。即時開獎數據、彩票資訊、統計及分析服務。不同於其他彩票平台，特別開發智慧操作、投注簡易的界面。</p>
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
                                <p className="description">恒博游戏，市場最新，恒博娛樂與供應商間絕佳合作關係，特接入多超過数十款電子遊戲產品，包含人人喜歡刺激的千炮捕鱼、大满贯MW电子、斗地主以及森林舞会等項目；恒博娛樂憑借整合技術優勢，隨時保持鮮活趣味，提供玩家最佳互動體驗</p>
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
                                <p className="og-game-description">恒博娱乐提供多款真人視訊遊戲平台，提供高清視頻流及無限遊戲玩法。超越業眾步調，接入知名品牌產品，集成东方集团旗下的OG视讯等款遊戲。憑藉我們的純熟快速的技術團隊，提供穩定性高、畫面清晰的播界面，讓玩家更即時精准，如同親臨現場娛樂場所。我們的優勢經驗，為各運營商提供最佳的解決方案，不論是單獨介接遊戲或是集成網站，都將超乎您所想像。
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
                                <p className="description">恒博娛樂引进目前国际流行的棋牌游戏，包括开元棋牌。乐游 VG棋牌也将陆续开启，引领市场，给您不一样的绝佳体验。</p>
                                <img className="chess-bg" src={chessBg} alt="棋牌"/>
                            </div>
                        </div>
                    </div>
                    <div style={this.state.size}>
                        <div className="container bg2 ">
                            <Logo />
                            <DownPage type={2} goNext={this.goNext} />
                            <div className="content company-wrap">
                                <div className="head-title"/>
                                <img width="535" src={companyBg} alt=""/>
                                <div className="company-info">
                                    恒博娱乐以丰富的研發力、專業的服務力、全面的策略力，為您開創新局、提升規模、整合策略、建立品牌，與我們合作將在商場上持續獲利、高枕無憂。作為一家亞洲實力的軟件公司，解決方案，平台規劃、活動規劃、市場營銷一應俱全，為現有系統商中最全局宏觀的策略顧問公司。恒博娱乐具備資深經驗及相關知識。與客戶之間持續成功、雙贏的合作關係，並確保提供最完美的在線娛樂。
                                </div>
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

var isMobile = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) isMobile = true;})(navigator.userAgent||navigator.vendor||window.opera);

if(isMobile){
    ReactDOM.render(<MobileApp/>, document.getElementById('root'));
}else{
    ReactDOM.render(<App/>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
