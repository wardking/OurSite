import React, {Component} from 'react';
import '../agency/index.scss';
import Swiper from "react-id-swiper";
import LogoWhite from "../imgs/logo_white.png";
import LogoBlue from "../imgs/logo_blue.png";
import * as serviceWorker from "../serviceWorker";
import agency01 from '../imgs/agencym01.png';
import agency02 from '../imgs/agencym02.png';
import agency03 from '../imgs/agencym03.png';
import agency04 from '../imgs/agencym04.png';

export default class Agency extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container bg9">
                        <Logo/>
                        <div className="content agencyCont">
                            <div className="head-title"></div>
                            <div className='agencyMain'>
                                <div className='agency-img01'>
                                    <img src={agency01} alt=""/>
                                </div>
                                <div className='agency-img02'>
                                    <img src={agency02} alt=""/>
                                </div>
                                <div className='agency-img03'>
                                    <img src={agency02} alt=""/>
                                </div>
                                <div className='agency-img04'>
                                    <img src={agency02} alt=""/>
                                </div>
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

/*const DownPage = (props) => <div onClick={() => {
    props.goNext();
}} className={props.type ? "down-page down-page-black infinite" : "down-page infinite"}/>*/


//ReactDOM.render(<PageRoute/>, document.getElementById('root'));
//ReactDOM.render(<Home/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();