import Container from "../../components/container";
import Nav from "../../components/navbar";
import { FcGallery } from "react-icons/fc";
import {BiScan} from "react-icons/bi";
import {MdDriveFolderUpload} from "react-icons/md";
import CameraContainer from "../../components/camera";
import { useState } from "react";
import {IoIosCloseCircle } from "react-icons/io";
import Footer from "../../components/footer";
import axios from 'axios';
import React from "react";
import { When } from "react-if";
import { HashLink } from 'react-router-hash-link';

const dummy = {
    "presentage" : "100",
    "prediction" : "Bacterial"
}

const Scan= () => {
    const[camera,setCamera] = useState(false);
    const [selectedFile, setSelectedFile] = React.useState(null);
    console.log(selectedFile)
    const [data, setData] = useState("");
    const handleSubmit = async(event) => {
        event.preventDefault()
        const formData = new FormData();
        formData.append("file", selectedFile);
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
    
      const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0])
      }    

    return (
        <div className="max-h-screen max-w-screen">
            <Nav />
                <Container className="h-full mt-8 mb-8">
                    <div className=" flex justify-center gap-3 flex-col pb-12 md:-4"> 
                        <h2 className=" font-extrabold text-[35px] mb-4 md:text-[18px]">Silahkan Scan Padi-mu Disini !!</h2>
                        {!camera && 
                        <div className="flex justify-center gap-4 ">
                            <HashLink smooth to="/Detail#bacterial"><img className="w-[15rem] h-[18rem] md:h-[15rem] rounded-xl" src="/img/BacterialLeafBlight.jpg" alt="" /></HashLink> 
                            <HashLink smooth to="/Detail#brown"><img className="w-[15rem] h-[18rem] rounded-xl md:h-[15rem]" src="/img/Brownspot.jpg" alt="" /></HashLink>
                            <HashLink smooth to="/Detail#blast"><img className="w-[15rem] h-[18rem] rounded-xl md:h-[15rem]" src="/img/Blast.jpg" alt="" /></HashLink>
                            
                        </div>
                        }
                        { camera && <CameraContainer /> }
                        <div className="flex flex-col pl-80 gap-10 w-[60rem] mx-auto mt-12 md:w-[94vw] md:gap-4 md:pl-0">
                                <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 h-12">
                                    <button onClick={()=> setCamera(!camera)} className="flex flex-col w-[8rem] border-[3px] border-[#208a2a] px-4 rounded-xl min-w-[6rem] h-12 my-auto hover:bg-[#15d729] md:mx-auto">
                                        <span className="mx-auto my-auto" ><BiScan size={30}/></span>
                                    </button>
                                    <input  className="flex flex-col py-4 rounded-xl min-w-[4rem] my-auto md:mx-auto md:px-16" type="file" onChange={handleFileSelect}/>
                                    <div className="flex w-full">
                                        <button type="submit" className="px-10 py-2 rounded-xl min-w-[25rem] border-[3px] border-[#208a2a] hover:bg-[#15d729] md:min-w-[10rem] md:mx-auto ">Hasil Prediksi</button>
                                    </div>
                                </form>
                              
                                    {
                                        !data.presentage && 
                                        <div className="flex flex-col bg-[#79f98600] gap-4 mt-16 p-8 w-[25rem] md:-4 md:w-[90%] md:mx-auto md:mt-[11rem]">
                                            
                                        </div>
                                    }
                                    {
                                         data.presentage && 
                                         <div className="flex flex-col bg-[#79f986] gap-4 mt-16 p-8 w-[25rem] border-[#208a2a] border-[2px] md:-4 md:w-[90%] md:mx-auto md:mt-[11rem]">
                                            <span>{data.prediction}</span>
                                            <span>{data.presentage[0]} %</span>
                                            <When condition={data.prediction === "Bacterial"}>
                                                <HashLink className=" underline text-indigo-700" smooth to="/Detail#bacterial">Cara Penanganan Bacterial</HashLink>
                                            </When>
                                            <When condition={data.prediction === "Brown"}>
                                                <HashLink className=" underline text-indigo-700" smooth to="/Detail#brown">Cara Penanganan Brown Spot</HashLink>
                                            </When>
                                            <When condition={data.prediction === "Blast"}>
                                                <HashLink className=" underline text-indigo-700" smooth to="/Detail#blast">Cara Penanganan Blast</HashLink>
                                            </When>
                                        </div>     
                                    }
                        </div>
                        
                    </div>
                </Container>
               <Footer />
        </div>
        
    )
}

export default Scan;