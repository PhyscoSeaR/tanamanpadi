import Container from "../../components/container";
import Footer from "../../components/footer";
import Nav from "../../components/navbar";
import DemoCarousel from "../../components/test";
import {AiFillInstagram} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"


const About = () => {
    return (
        <div className="max-h-screen overflow-auto max-w-screen">
            <Nav />
                <Container >
                    <div>
                        <div>
                            <h1 className=" text-2xl mb-8">Website Pendeteksi Penyakit Tanaman Padi</h1>
                        </div>
                        <div className="flex md:flex-col">
                            <div className="flex px-16 gap-4 text-justify w-1/2 md:w-full md:px-4 md:text-base">
                                <h2 className="indent-8 leading-loose">Penyakit padi ini merupakan salah satu musuh utama dari ancaman ini, mempengaruhi kualitas beras yang dihasilkan dari beras dan bahkan berakibat fatal. Tanaman yang terserang penyakit menunjukkan gejala berupa bercak dengan pola dan warna tertentu. Gejala tersebut dapat diamati pada beberapa bagian tubuh padi, seperti telinga, daun, batang dan akar. Petani saat ini banyak yang mengalami kesulitan dalam mengidentifikasi jenis penyakit yang menjangkit tanaman padi nya jika hanya dilihat dengan mata, sehingga banyak terjadi gagal panen dan menurun nya kualitas panen yang diakibatkan oleh petani karena salah dalam mengidentifikasi dan menangani penyakit yang di alami tanaman padi. Oleh karena itu, daun padi dapat digunakan sebagai langkah awal dalam mendeteksi penyakit padi dan dapat meningkatkan hasil padi dengan menerapkan teknologi yang mendukung pertanian untuk meningkatkan kualitas intensifikasi.
                                Penggunaan teknologi saat ini sudah merambah hampir ke segala bidang, mulai dari pendidikan, kesehatan, termasuk pertanian, karena teknologi akan membantu manusia bekerja lebih mudah, cepat dan meminimalisir kesalahan. Pada saat ini petani masih menggunakan cara manual dalam mengidentifikasi penyakit pada tanaman padi nya yaitu dengan cara melihat daunnya secara langsung cara ini kurang akurat karena belum ada nya sistem pendeteksi penyakit tanaman padi secara otomatis.</h2>
                            </div>
                            <div className="flex flex-col px-16 gap-8 text-justify w-1/2 md:w-full md:px-4 md:text-base">
                                <h2 className=" indent-8 leading-loose"> Untuk itu perlu adanya teknologi yang dapat mengimplementasikan proses pendeteksian penyakit daun padi agar dapat memberikan informasi kepada petani tentang kerusakan daun padi. Pendekatan paling modern saat ini dapat dilakukan dengan machine learning maupun deep learning dengan menggunakan berbagai algoritma untuk meningkatkan tingkat pengenalan dan keakuratan dalam proses deteksi dan diagnosis penyakit tanaman.</h2>
                            <div className=" flex flex-col">
                                <img className=" w-[30%] h-[180px] mx-auto mb-4 md:w-[60%]" src="/img/profil.png" alt=""/>
                                <div className="px-6 text-left w-100% flex flex-col ">
                                    <h3 className=" text-2xl text-center">Physco Sea Raflisoghi</h3>
                                    <h4 className=" text-sm text-center py-2 text-gray-800">UNIVERSITAS BINA INSANI</h4>
                                    <div className=" flex mx-auto py-2 gap-4">
                                        <AiFillInstagram color="blue" size={30}/>
                                        <AiFillLinkedin color="blue" size={30} />
                                        <AiOutlineGithub color="blue" size={30}  />
                                        <AiOutlineMail color="blue" size={30}  />
                                    </div>
                                        <p className=" py-3 px-9 text-justify md:px-4">" Petani memberikan berkah yang luar biasa, tak hanya dinikmati bagi keberlangsungan hidup manusia, namun juga jiwa manusia menjadi sejuk melihat keindahan sawah."</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </Container> 
            <Footer />
        
        </div>
    )
}

export default About;