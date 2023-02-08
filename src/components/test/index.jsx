// var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;

import { Carousel } from "react-responsive-carousel";

// const DemoCarousel = React.createClass({
//     render() {
//         return (
//             <Carousel showArrows={true} onChange={onchange} onClickItem={onclick} onClickThumb={onclick}>
//                 <div>
//                     <img src="img/Brownspot.jpg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div>
//                     <img src="img/Leafsmut.png" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div>
//                     <img src="img/BacterialLeafBlight.jpg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//             </Carousel>
//         );
//     }
// });
// ReactDOM.render(<DemoCarousel />, document .querySelector('.demo-carousel'));

const DemoCarousel = {
    render() {
        return (
            <Carousel >
                <div>
                    <img src="img/Brownspot.jpg" />
                    <p className="Brownspot">Legend 1</p>
                </div>
                <div>
                    <img src="img/Leafsmut.png" />
                    <p className="Brownspot">Legend 2</p>
                </div>
                <div>
                    <img src="BacterialLeafBlight.jpg" />
                    <p className="Brownspot">Legend 3</p>
                </div>
            </Carousel>
            
        );
    }
};

export default DemoCarousel;