import React from 'react';
//import ReactDOM from 'react-dom';
import '../swiper.scss';
import {Link} from 'react-router-dom';
//https://daneden.github.io/animate.css/
import 'animate.css'
import './index.scss';
import * as serviceWorker from '../serviceWorker';
import Swiper from 'react-id-swiper';
import LogoWhite from "../imgs/logo_white.png";
import LogoBlue from "../imgs/logo_blue.png";
import lotteryImg from "../imgs/lottery.png";
import companyBg from "../imgs/company-bg.png";
import agencyBg from "../imgs/agency-bg.png";
import lotteryBg from "../imgs/lottery-bg.png";
import egameBg from "../imgs/egame-bg.png";
import chessBg from "../imgs/chess-bg.png";
import ogBg from "../imgs/og-bg.png";
import ogBg2 from "../imgs/og-bg2.png";
import phoneImg from "../imgs/phone.png";
import telegramImg from "../imgs/telegram.png";
import whatsappImg from "../imgs/whatsapp.png";
import icon1 from '../imgs/s2-ico1.png';
import icon2 from '../imgs/s2-ico2.png';
import icon3 from '../imgs/s2-ico3.png';
import icon4 from '../imgs/s2-ico4.png';
import icon5 from '../imgs/s2-ico5.png';
import icon6 from '../imgs/s2-ico6.png';
import icon7 from '../imgs/s2-ico7.png';
import icon8 from '../imgs/s2-ico8.png';
import si1sj from '../imgs/bg_openacount1.png';
import si2sj from '../imgs/bg_openacount2.png';
import si3sj from '../imgs/bg_openacount.png';
import si4sj from '../imgs/bg_openacount3.png';
import si5sj from '../imgs/bg_openacount4.png';
import si6sj from '../imgs/bg_openacount5.png';

//pc端
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            size: {}
        }
        this.goNext = this.goNext.bind(this)
        this.swiper = null
    }

    setSize() {//设置尺寸
        this.setState({
            size: {
                "width": document.body.offsetWidth + "px",
                "height": document.body.offsetHeight + "px"
            }
        })
    }

    componentDidMount() {
        this.setSize();
        window.addEventListener('resize', () => {
            this.setSize();
        });

        this.pageChange();
        this.swiper.on('slideChange', () => {
            this.pageChange(this.swiper.realIndex)
        });
        this.slideTo(0)
    }

    pageChange(index = 0) {//翻页之后 动画
        switch (index) {
            case 1:
                animateCss('.company-wrap .head-title', 'bounceInLeft');
                animateCss('.agency-img', 'pulse');
                break;
            case 2:
                animateCss('.new-lottery-wrap .head-title', 'bounceInLeft');
                animateCss('.new-lottery-img', 'pulse');
                break;
            case 3:
                animateCss('.agency-wrap .head-title', 'bounceInLeft');
                animateCss('.agency-img', 'pulse');
                break;
            case 4:
                animateCss('.lottery-wrap .head-title', 'bounceInLeft');
                animateCss('.lottery-img', 'pulse');
                break;
            case 5:
                animateCss('.egame-wrap .head-title', 'bounceInLeft');
                animateCss('.egame-bg', 'pulse');
                break;
            case 6:
                animateCss('.og-game-wrap .head-title', 'bounceInLeft');
                break;
            case 7:
                animateCss('.chess-wrap .head-title', 'bounceInLeft');
                animateCss('.chess-bg', 'pulse');
                break;
            case 8:
                for (let i = 1; i < 9; ++i) {
                    setTimeout(() => {
                        animateCss('.charts' + i, 'heartBeat');
                    }, i * 300);
                }
                break;
            case 9:
                animateCss('.si1sj', 'fadeInLeft');
                animateCss('.si2sj', 'fadeInLeft');
                animateCss('.si4sj', 'fadeInRight');
                animateCss('.si5sj', 'fadeInRight');
                animateCss('.si6sj', 'fadeInRight');
                break;
            case 10:
                animateCss('.contact-wrap .head-title', 'bounceInLeft');
                break;
            case 0:
            default:
                animateCss('.company-logo', 'fadeIn');
                animateCss('.company-about', 'bounceInLeft');
                animateCss('.company-game', 'bounceInRight');
                animateCss('.down-page', 'bounce');

        }
    }

    goNext() {
        if (this.swiper) this.swiper.slideNext();
    }

    slideTo(index = 0) {
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
                <Swiper {...params} ref={node => {
                    if (node) this.swiper = node.swiper
                }}>
                    {/*首页*/}
                    <div style={this.state.size}>
                        <div className="container bg1">
                            <Logo white={1}/>
                            <DownPage goNext={this.goNext}/>
                            <div className="content home-wrap">
                                <Link to='/agency'>
                                    <div className="head-title"></div>
                                </Link>
                                <div className="company-logo"/>
                                <div className="company-about">彩票包网提供商</div>
                                <div className="company-game">
                                    <ul>
                                        <li onClick={() => this.slideTo(3)}>恒博彩票</li>
                                        <li onClick={() => this.slideTo(4)}>电子游艺</li>
                                        <li onClick={() => this.slideTo(5)}>真人娱乐</li>
                                        <li onClick={() => this.slideTo(6)}>棋牌游戏</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*集团介绍*/}
                    <div style={this.state.size}>
                        <div className="container bg2 ">
                            <Logo/>
                            <DownPage type={2} goNext={this.goNext}/>
                            <div className="content company-wrap">
                                <div className="head-title"/>
                                <div className="company-info">
                                    恒博娱乐以丰富的研发力、专业的服务力、全面的策略力，为您开创新局、提升规模、整合策略、建立品牌，与我们合作将在商场上持续获利、高枕无忧。作为一家亚洲实力的软件公司，解决方案，平台规划、活動规划、市场营销一应俱全，为现有系統商中最全局宏观的策略顾问公司。恒博娱乐具备资深经验及相关知识。与客户之间持续成功、双赢的合作关系，並确保提供最完美的在线娱乐。
                                </div>
                                <img className='company-img' width="535" src={companyBg} alt=""/>
                            </div>
                        </div>
                    </div>
                    {/*创新彩种*/}
                    <div style={this.state.size}>
                        <div className="container bg3">
                            <Logo white={1}/>
                            <DownPage goNext={this.goNext}/>
                            <div className="content new-lottery-wrap">
                                <div className="head-title"/>
                                <p className="description">恒博彩票创新自主彩种，搭配市场热门彩种，拥有几十种彩票种类。即时开奖数据、彩票资讯、统计及分析服务。不同于其他彩票平台，特别开发智慧操作、投注简易的界面。</p>
                                <img className="new-lottery-img" src={lotteryImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    {/*全民代理*/}
                    <div style={this.state.size}>
                        <div className="container bg4">
                            <Logo white={1}/>
                            <DownPage goNext={this.goNext}/>
                            <div className="content agency-wrap">
                                <Link to='/agency'>
                                    <div className="head-title"></div>
                                </Link>
                                <div className='lotteryCont'>
                                   <span className="description">您的佣金构成不仅来自于会员，更有代理进账返佣。根据业绩的高低，划分不同佣金比例和会员等级，您的自营越高，代理越多相对应
                                       的等级越高，返佣越多。</span>
                                    <p>
                                        <span className='desList'>无限代理</span>
                                        <span className='desList'>无限封顶</span>
                                        <span className='desList'>共同助力</span>
                                        <span className='desList'>日日进账</span>
                                    </p>
                                </div>
                                <img className="agency-img" src={agencyBg} alt="全名代理"/>
                            </div>

                        </div>
                    </div>
                    {/*DC彩票*/}
                    <div style={this.state.size}>
                        <div className="container bg5">
                            <Logo white={1}/>
                            <DownPage goNext={this.goNext}/>
                            <div className="content lottery-wrap">
                                <div className="head-title"/>

                                <p className="description">恒博DC
                                    彩票创新自主彩种，搭配市场热门彩种，拥有几十种彩票种类。即时开奖数据、彩票资讯、统计及分析服务。不同于其他彩票平台，特别开发智慧操作、投注简易的界面。</p>
                                <img className="lottery-img" src={lotteryBg} alt="恒博新彩种"/>
                            </div>
                        </div>
                    </div>
                    {/* 电子游戏 */}
                    <div style={this.state.size}>
                        <div className="container bg2">
                            <Logo/>
                            <DownPage type={2} goNext={this.goNext}/>
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
                            <Logo white={1}/>
                            <DownPage goNext={this.goNext}/>
                            <div className="content og-game-wrap">
                                <div className="head-title"/>
                                <p className="og-game-description">恒博娱乐提供多款真人视讯游戏平台，提供高清视频流及无限游戏玩法。超越业众步调，接入知名品牌产品，集成东方集团旗下的OG视讯等款游戏。凭借我们的純熟快速的技术团队，提供稳定性高、画面清晰的播界面，让玩家更即时精准，如同亲临现场娱乐场所。我们的优势经验，为各运营商提供最佳的解決方案，不论是单独介接游戏或是集成网站，都将超乎您所想像。
                                    <img className="og-game-bg2" src={ogBg2} alt=""/>
                                </p>
                                <img className="og-game-bg" src={ogBg} alt=""/>
                            </div>
                        </div>
                    </div>
                    {/*棋牌游戏*/}
                    <div style={this.state.size}>
                        <div className="container bg3 ">
                            <Logo white={1}/>
                            <DownPage goNext={this.goNext}/>
                            <div className="content chess-wrap">
                                <div className="head-title"/>
                                <p className="description">恒博娱乐引进目前国际流行的棋牌游戏，包括开元棋牌。乐游 VG棋牌也将陆续开启，引领市场，给您不一样的绝佳体验。</p>
                                <img className="chess-bg" src={chessBg} alt="棋牌"/>
                            </div>
                        </div>
                    </div>
                    {/*系统稳定*/}
                    <div style={this.state.size}>
                        <div className="container bg7">
                            <Logo/>
                            <DownPage type={2} goNext={this.goNext}/>
                            <div className="content system-wrap">
                                <p className='weChange'>市场稳定，功能强大</p>
                                <div className='lineBars clear'>
                                    <div className='bars'></div>
                                </div>
                                <p className='introduceText'>恒博彩票--全球彩票系统领导品牌，以展业技术优势为玩家提供</p>
                                <p className='introduceText'>最便利、快速、刺激的彩票游戏，与此同时，祝您抢占先机，赢得市场！</p>
                                <div className='chartsWrap clear chartsWrap1'>
                                    <div className='charts fl charts1'>
                                        <p className='p-img pi1'>
                                            <img src={icon1} alt=""/>
                                        </p>
                                        <p className='p-title'>官方/传统双玩法</p>
                                        <p>同时拥有官方玩法和传统玩法，六合彩、国外流行彩票,满足多样化的市场需求。</p>
                                    </div>
                                    <div className='charts fl cha charts2'>
                                        <p className='p-img pi2'>
                                            <img src={icon2} alt=""/>
                                        </p>
                                        <p className='p-title'>自定赔率限额</p>
                                        <p>
                                            自定义设置彩种的奖金赔率、注单限额，高利润吸引眼球，燃爆玩家投注以往。
                                        </p>
                                    </div>
                                    <div className='charts fl cha charts3'>
                                        <p className='p-img pi3'>
                                            <img src={icon3} alt=""/>
                                        </p>
                                        <p className='p-title'>自带cdn加速防御</p>
                                        <p>
                                            自带cdn加速防御，国内70个节点，使用无忧，全程为您保驾护航。
                                        </p>
                                    </div>
                                    <div className='charts fl cha charts4'>
                                        <p className='p-img pi4'>
                                            <img src={icon4} alt=""/>
                                        </p>
                                        <p className='p-title'>会员推广</p>
                                        <p>
                                            会员推广赚钱，更好的帮您裂变，巨额收益轻松赚钱。
                                        </p>
                                    </div>
                                </div>
                                <div className='chartsWrap clear'>
                                    <div className='charts fl charts5'>
                                        <p className='p-img pi5'>
                                            <img src={icon5} alt=""/>
                                        </p>
                                        <p className='p-title'>实时开奖数据</p>
                                        <p>
                                            彩票开奖数据官方同步，玩家第一时间获取最新、最全、最快的彩票开奖信息。
                                        </p>
                                    </div>
                                    <div className='charts fl cha charts6'>
                                        <p className='p-img pi6'>
                                            <img src={icon6} alt=""/>
                                        </p>
                                        <p className='p-title'>无限级代理模式</p>
                                        <p>
                                            代理可同时发展玩家和下级代理，最短时间产生几何裂变，巨额收益轻松赚钱。
                                        </p>
                                    </div>
                                    <div className='charts fl cha charts7'>
                                        <p className='p-img pi7'>
                                            <img src={icon7} alt=""/>
                                        </p>
                                        <p className='p-title'>运营数据分析</p>
                                        <p>
                                            实时统计分析站点运营状况，玩家数量、游戏盈亏、存取款金额，一目了然。
                                        </p>
                                    </div>
                                    <div className='charts fl cha charts8'>
                                        <p className='p-img pi8'>
                                            <img src={icon8} alt=""/>
                                        </p>
                                        <p className='p-title'>自带等级反水</p>
                                        <p>
                                            平台自带等级反水功能，提高会员留存率，帮您更好的吸引拓客。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*APP介绍*/}
                    <div style={this.state.size}>
                        <div className='container bg8'>
                            <Logo/>
                            <DownPage type={2} goNext={this.goNext}/>
                            <div className="content app-wrap">
                                <p className='weChange'>纯原生APP,超乎想象的稳定流畅</p>
                                <p className='weDefine'>移动端网页+原生APP客户端,让玩家随时随地畅快投注！</p>
                                <div className='lineBars clear'>
                                    <div className='bars'></div>
                                </div>
                                <div className='picExplain picShow0'>
                                    <div className='smollPicWrap si1sj'>
                                        <img className='picdata' src={si1sj} alt=""/>
                                    </div>
                                    <div className='smollPicWrap si2sj'>
                                        <img className='picdata' src={si2sj} alt=""/>
                                    </div>
                                    <div className='smollPicWrap si3sj'>
                                        <img className='bigPicdata' src={si3sj} alt=""/>
                                    </div>
                                    <div className='smollPicWrap si4sj'>
                                        <img className='picdata' src={si4sj} alt=""/>
                                    </div>
                                    <div className='smollPicWrap si5sj'>
                                        <img className='picdata' src={si5sj} alt=""/>
                                    </div>
                                    <div className='smollPicWrap si6sj'>
                                        <img className='picdata' src={si6sj} alt=""/>
                                    </div>
                                </div>
                                <div className='tipLists'>
                                    <div className='appInfo'>
                                        <span className='tips-title'><em className='tips-ico'>◎</em></span>
                                        <span className='tips-text'>全面支持iOS/安卓双平台APP，巅峰娱乐体验</span>
                                    </div>
                                    <div className='appInfo'>
                                        <span className='tips-title'><em className='tips-ico'>◎</em></span>
                                        <span className='tips-text'>免费定制移动桌面品牌LOGO，统一对外品牌形象</span>
                                    </div>
                                    <div className='appInfo'>
                                        <span className='tips-title'><em className='tips-ico'>◎</em></span>
                                        <span className='tips-text'>高低频彩种，应有尽有，囊括市面主流彩票种类</span>
                                    </div>
                                    <div className='appInfo'>
                                        <span className='tips-title'><em className='tips-ico'>◎</em></span>
                                        <span className='tips-text'>实时查看实时走势图、历史开奖记录、玩法说明等</span>
                                    </div>
                                    <div className='appInfo'>
                                        <span className='tips-title'><em className='tips-ico'>◎</em></span>
                                        <span className='tips-text'>100%防劫持，彻底解决域名/DNS被劫持问题</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*联系方式*/}
                    <div style={this.state.size}>
                        <div className="container bg6">
                            <Logo/>
                            <div className="content contact-wrap">
                                <div className="head-title"/>
                                <ul>
                                    <li>
                                        <img src={whatsappImg} alt=""/>
                                        <h5>whatsApp</h5>
                                        <p>
                                            恒博：+639771123456<br/>
                                            大川：+639273123456
                                        </p>
                                    </li>
                                    <li>
                                        <img src={telegramImg} alt=""/>
                                        <h5>Telegram</h5>
                                        <p>
                                            恒博：+639771123456<br/>
                                            大川：+639273123456
                                        </p>
                                    </li>
                                    <li>
                                        <img src={phoneImg} alt=""/>
                                        <h5>Telephone</h5>
                                        <p>
                                            恒博：+639771123456<br/>
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
const Logo = (props) => <a className="logo" href="/">
    <h1><img src={props.white ? LogoWhite : LogoBlue} alt="恒博"/></h1>
</a>

const DownPage = (props) => <div onClick={() => {
    props.goNext();
}} className={props.type ? "down-page down-page-black infinite" : "down-page infinite"}/>


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

//ReactDOM.render(<PageRoute/>, document.getElementById('root'));
//ReactDOM.render(<Home/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
