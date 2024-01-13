import React, {useState} from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Slider.scss';


const Slider = () => {

const [currentSlide, setcurrentSlide] = useState(0);


    const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600" ,
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1721559/pexels-photo-1721559.jpeg?auto=compress&cs=tinysrgb&w=1600",
];

const prevSlide=()=>{
setcurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};
const nextSlide=()=>{
    setcurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};


  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt=''/>
            <img src={data[1]} alt=''/>
            <img src={data[2]} alt=''/>
            <img src={data[3]} alt=''/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
<ArrowBackIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <ArrowForwardIcon/>
            </div>
        </div>
      
    </div>
  )
}

export default Slider
