import Container from "../../components/container";
import Nav from "../../components/navbar";
import Footer from "../../components/footer";

const Home = () => {
    return (
        <div className="max-h-screen overflow-auto max-w-screen">
            <Nav />
                <Container>
                    <div className=" flex justify-center flex-col mx-auto">
                        <img className=" w-[60%] h-[200px] mx-auto mb-9" src="/img/sawah.jpg" alt="" />
                        <div className="px-10 text-justify indent-8 w-[60rem] flex flex-col ">
                            <h3>
                            Penyakit padi ini merupakan salah satu musuh utama dari ancaman ini, mempengaruhi kualitas beras yang dihasilkan dari beras dan bahkan berakibat fatal. Tanaman yang terserang penyakit menunjukkan gejala berupa bercak dengan pola dan warna tertentu. Gejala tersebut dapat diamati pada beberapa bagian tubuh padi, seperti telinga, daun, batang dan akar. Petani saat ini banyak yang mengalami kesulitan dalam mengidentifikasi jenis penyakit yang menjangkit tanaman padi nya jika hanya dilihat dengan mata, sehingga banyak terjadi gagal panen dan menurun nya kualitas panen yang diakibatkan oleh petani karena salah dalam mengidentifikasi dan menangani penyakit yang di alami tanaman padi  .Oleh karena itu, daun padi dapat digunakan sebagai langkah awal dalam mendeteksi penyakit padi dan dapat meningkatkan hasil padi dengan menerapkan teknologi yang mendukung pertanian untuk meningkatkan kualitas intensifikasi.
                            </h3>
                        </div>
                    </div>  
                </Container>
            <Footer />
        
        </div>
    )
}

export default Home;