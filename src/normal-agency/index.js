import React, {Component} from 'react';
import './index.scss';
import LogoWhite from "../imgs/logo_white.png";
import LogoBlue from "../imgs/logo_blue.png";

import Img0 from './imgs/00.png'
import Img1 from './imgs/01.png'
import Img2 from './imgs/02.png'
import Img3 from './imgs/03.png'
import Img4 from './imgs/04.png'
import Img5 from './imgs/05.png'
import ImgM1 from './imgs/m01.png'
import ImgM2 from './imgs/m02.png'
import ImgM3 from './imgs/m03.png'
import ImgM4 from './imgs/m04.png'
import ImgM5 from './imgs/m05.png'

export default class NormalAgency extends Component {
    componentDidMount(){
        sessionStorage.setItem("index",4);
    }
    render() {
        return (
            <div>
                <div>
                    <div className="container bg9">
                        <Logo/>
                        <div className="normal-agency-detail-wrap">
                            <div className="normal-agency-detail">
                                <img className="big-img center" src={Img0} alt=""/>
                                <img className="big-img" src={Img1} alt=""/>
                                <img className="big-img" src={Img2} alt=""/>
                                <img className="big-img" src={Img3} alt=""/>
                                <img className="big-img" src={Img4} alt=""/>
                                <img className="big-img" src={Img5} alt=""/>

                                <img className="small-img" src={ImgM1} alt=""/>
                                <img className="small-img" src={ImgM2} alt=""/>
                                <img className="small-img" src={ImgM3} alt=""/>
                                <img className="small-img" src={ImgM4} alt=""/>
                                <img className="small-img" src={ImgM5} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


//白色logo和蓝色logo
const Logo = (props) => <a className="logo" href="/">
    <h1><img src={props.white ? LogoWhite : LogoBlue} alt="恒博"/></h1>
</a>

