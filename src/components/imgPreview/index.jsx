import React, {useState} from 'react';
import {IoIosCloseCircle} from 'react-icons/io';
import PropTypes from 'prop-types';
import Camera from 'react-html5-camera-photo';


export const ImagePreview = ({ dataUri, setDataUri, data }) => {
  const [close, setClose] = useState(false)
  console.log(close)
  return (
    <div className=" relative text-center">
        <img className=' w-[48rem] h-[24rem]' src={dataUri} alt="" />
        <IoIosCloseCircle size={35} color={'red'} className='absolute top-2 right-2 cursor-pointer'
        onClick={()=> setDataUri('')} />
        {
          data.prediction &&
          <div className='flex gap-4 justify-center'>
            <span>{data.prediction}</span>
            <span>{data.presentage[0]} %</span>
        </div>
        }
    </div>
  );
};

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;