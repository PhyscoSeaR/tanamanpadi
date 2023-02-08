import React, { useState, useRef } from "react";
import Camera , { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from "../imgPreview";
import axios from "axios";

const CameraContainer = () => {
    const [dataUri, setDataUri] = useState('');
    const [data, setData] = useState("");
    const [idealFacingMode, setIdealFacingMode] = useState(null);
    const [isMaxResolution, setIsMaxResolution] = useState(false);  
    let img = `data:image/jpeg;base64,${dataUri}`;
    console.log(img)

        function DataURIToBlob(dataURI) {
            const splitDataURI = dataURI.split(',')
            const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1])
            const mimeString = splitDataURI[0].split(':')[1].split(';')[0]

            const ia = new Uint8Array(byteString.length)
            for (let i = 0; i < byteString.length; i++)
                ia[i] = byteString.charCodeAt(i)

            return new Blob([ia], { type: mimeString })
        }

        function handleTakePhotoAnimationDone (dataUri) {
            console.log('takePhoto');
            setDataUri(dataUri);
        }

        function renderButtons () {
            return (
              <div className="flex gap-4">
                <button className="" onClick={ (e) => {
                  setIdealFacingMode(FACING_MODES.USER);
                  setIsMaxResolution(false);
                }}>Depan</button>
        
                <button className="" onClick={ (e) => {
                  setIdealFacingMode(FACING_MODES.ENVIRONMENT);
                  setIsMaxResolution(true);
                }}>Belakang</button>
              </div>
            );
          }

        async function handleTakePhoto (dataUri) {
            const file = DataURIToBlob(dataUri)
            const formData = new FormData();
            formData.append("file", file, 'image.jpg');
            try {
            const response = await axios({
                method: "post",
                url: "https://inspekturpadi-api-hsx2-main-t33lrugrga-wm.a.run.app/predict",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });

            setData(response.data)
            console.log(response.data)
            
            } catch(error) {
            console.log(error)
            }
        }
        
    return (
        <div className=" bg-white w-fit mx-auto rounded-2xl">
            {
        (dataUri)
          ? <ImagePreview data={data} setDataUri={setDataUri} dataUri={dataUri} handleTakePhotoAnimationDone={handleTakePhotoAnimationDone}
          />
          : 
          <div>
            { renderButtons() }
          <Camera idealFacingMode = {idealFacingMode} isMaxResolution = {isMaxResolution} imageType = {"jpg"} onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } } idealResolution = {{width: 200, height: 100}} onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
          />
          </div>
      }
           {/* <Camera idealResolution = {{width: 440, height: 200}} onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } } /> */}
        </div>
        
    )
    
}
export default CameraContainer;



