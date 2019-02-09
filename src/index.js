import React from 'react';
import ReactDOM from 'react-dom';
import './swiper.scss';

import './index.scss';
import * as serviceWorker from './serviceWorker';
import Swiper from 'react-id-swiper';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            size:{}
        }
    }

    componentDidMount(){
        this.setState({
            size:{
            "width": document.body.offsetWidth+"px",
            "height":document.body.offsetHeight+"px"
        }
        })


    }
    render() {
        const params = {
            containerClass: "body-wrap",
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 0,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        };
        return (
            <Swiper {...params}>
                <div style={this.state.size}>
                    <div className="container bg1">

                    </div>
                </div>
                <div style={this.state.size}>
                    <div className="container bg2">

                    </div>
                </div>
                <div style={this.state.size}>
                    <div className="container bg3">

                    </div>
                </div>
                <div style={this.state.size}>
                    <div className="container bg4">

                    </div>
                </div>
                <div style={this.state.size}>
                    <div className="container bg5">

                    </div>
                </div>
                <div style={this.state.size}>
                    <div className="container bg2">

                    </div>
                </div>
                <div style={this.state.size}>
                    <div className="container bg4">

                    </div>
                </div>
                <div style={this.state.size}>
                    <div className="container bg3">

                    </div>
                </div>
                <div style={this.state.size}>
                    <div className="container bg6">

                    </div>
                </div>
            </Swiper>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
