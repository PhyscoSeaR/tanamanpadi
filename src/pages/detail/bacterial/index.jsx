import Nav from "../../../components/navbar";
import Container from "../../../components/container";
import Content from "../../../components/content";
import Footer from "../../../components/footer";


const Bacterial = () => {
    return (
        <div className="max-h-screen overflow-auto max-w-screen">
            <Nav />
                <Container>
                    <Content title="Penyakit Hawar Daun (Bacterial Leaf Blight)" image="/img/BacterialLeafBlight.jpg" id="bacterial">
                    <h3>
                    Penyakit ini merupakan salah satu penyakit utama yang membatasi produksi padi yang disebabkan oleh bakteri Xanthomonas Oryzae Pv oryzae (Xoo) dan dapat menginfeksi padi dari tahap vegetatif dan reproduksi, mengurangi hasil padi hingga 30-40%. 
                    </h3>   
                    <h3 className="font-bold pt-3 leading-loose">Penyakit ini memiliki ciri sebagai berikut:</h3>
                        <li className=" ml-10 leading-loose">Bagian tanaman yang terpengaruh: umumnya memengaruhi daun tanaman.</li>
                        <li className=" ml-10 leading-loose">Bentuk gejala: Gejala mengandung lesi memanjang di ujung daun, lesi berukuran beberapa inci.</li>
                        <li className=" ml-10 leading-loose">Warna lesi: Kuning ke Putih karena pengaruh bakteri</li>
                    <h3 className="font-bold pt-3 leading-loose">Pengendalian Penyakit Hawar Daun Bakteri:</h3>
                        <p className=" font-semibold ml-3 leading-loose">A. Pratanam</p>
                        <li className=" ml-10 leading-loose">Sanitasi tanaman inang.</li>
                        <li className=" ml-10 leading-loose">Pemilihan varietas tahan sesuai sebaran ras.</li>
                        <p className=" font-semibold ml-3 leading-loose">B. Pesemaian</p>
                        <li className=" ml-10 leading-loose">Penggunaan benih sehat.</li>
                        <li className=" ml-10 leading-loose">Sanitasi inang pada saluran irigasi.</li>
                        <li className=" ml-10 leading-loose">Hindari penggenangan terlalu dalam.</li>
                        <p className=" font-semibold ml-3 leading-loose">C. Tanaman Muda (Tanam - Anakan maksimum)</p>
                        <li className=" ml-10 leading-loose">Pemupukan berimbang sesuai anjuran setempat.</li>
                        <li className=" ml-10 leading-loose">Pemupukan berimbang sesuai anjuran setempat.</li>
                        <li className=" ml-10 leading-loose">Sanitasi rerumputan sumber patogen.</li>
                        <li className=" ml-10 leading-loose">Pengeringan lahan secara berkala, yaitu 1 hari diairi dan 3-4 hari dikeringkan, terutama pada daerah endemik serangan penyakit.</li>
                        <p className=" font-semibold ml-3 leading-loose">D. Pengendalian HDB dengan Bakteri Antagonis CorynebacteriumSp. (BPOPT Jatisari, Karawang)</p>
                        <p className="ml-10 leading-loose">Aplikasi efektif 3 kali, yaitu saat:</p>
                        <li className=" ml-10 leading-loose">Perlakuan benih.</li>
                        <li className=" ml-10 leading-loose">28 hst.</li>
                        <li className=" ml-10 leading-loose">42 hst.</li>
                    </Content>
                </Container>
            <Footer />
        </div>
    )
}

export default Bacterial;