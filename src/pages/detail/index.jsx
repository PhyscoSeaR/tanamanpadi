import Nav from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import Content from "../../components/content";
import { useEffect } from "react";
const Detail = () => {
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
                    <Content title="Penyakit Bercak Daun Coklat (Brown Spot)" image="/img/Brownspot.jpg" id="brown"> 
                            <h3 className="leading-loose">
                            Penyakit ini disebabkan oleh jamur Helminthosporium oryzae atau Drechslera oryzae (Cochliobolus miyabeanus). Penyakit ini biasanya membentuk sebuah bitnik-bintik pada batang sederhana yang disebarkan oleh angin. Penyakit ini dapat menyerang di persemaian dan dapat menyebabkan kematian terhadap tanaman karena koleoptil, bahkan bisa membuat batang dan akar menjadi busuk serta dapat menyerang daun dan biji-bijian, selain itu, penyakit ini juga menyebabkan kualitas tanaman menurun.
                            </h3>
                            <h3 className="font-bold pt-3 leading-loose"> Penyakit ini memiliki ciri sebagai berikut:</h3>
                                <li className=" ml-10 leading-loose">Bagian tanaman yang terpengaruh: umumnya memengaruhi daun tanaman.</li>
                                <li className=" ml-10 leading-loose">Bentuk gejala: Gejala penyakit berbentuk bulat hingga lonjong.</li>
                                <li className=" ml-10 leading-loose">Warna lesi: Coklat Kemerahan sampai Coklat Tua.</li>
                            <h3 className="font-bold pt-3 leading-loose">Pengendalian Penyakit Bercak Daun Coklat (Brown Spot): </h3>
                                <li className=" ml-10 leading-loose">Budidaya tanaman sehat, penggunaan benih bermutu, perbaikan sarana tata air, pemupukan berimbang, tanam serempak, dan pengaturan waktu tanam yang tepat. Penyakit ini tidak menimbulkan kerugian yang berarti pada pertanaman yang diusahakan dengan cara agronomi yang baik.</li>
                                <li className=" ml-10 leading-loose">Sanitasi dan pergiliran tanaman. Sifat pathogen dapat bertahan di dalam jerami dan tanah, maka sebaiknya dilakukan sanitasi (jerami diangkat keluar untuk berbagai keperluan lain). Selanjutnya dilakukan pergiliran tanaman dengan tanaman bukan inang penyakit untuk mematikan pathogen didalam tanah.</li>
                                <li className=" ml-10 leading-loose">Perlakuan biji, dilakukan dengan merendam dalam air panas (hot water treatment) dicampur dengan fungisida. Fungisida yang biasa digunakan adalah tiram, oksiklorida tembaga, atau dapat juga menggunakan formalin.</li>
                                <li className=" ml-10 leading-loose">Menanam varietas yang tahan atau toleran. Cara ini merupakan upaya pengendalian yang efektif dan efisien. Serta mudah dikombinasikan dengan taktik pengendaian yang lain.</li>
                                <li className=" ml-10 leading-loose">Alternatif pengendalian terakhir dengan menggunakan fungisida berbahan aktif antara lain: tebukonazol, heksakonazol, belerang, tebukonazo + triflosistrobin, azoksistrobin + difenokonazol. Propikonazol + prokloraz, difenokonazol + Propikonazol, tembaga, tiodozal, metribuzin, mankozab, fenbukonazol, asam khloro bromo iso sianurit, propineb flupikolid, ziram.</li>
                    </Content>
                    <Content title="Penyakit Blast" image="/img/Blast.jpg" id="blast">
                            <h3 className="leading-loose">
                            penyakit blast menimbulkan dua gejala khas, yaitu blast daun dan blast leher. gejala blast daun adalah bercak coklat kehitaman, berbentuk belah ketupat. dengan pusat bercak berwarna putih. gejala blast leher adalah bercak coklat kehitaman pada pangkal leher yang dapat mengakibatkan leher malai tidak mampu menopang malai dan patah. kemampuan patogen membentuk strain dengan cepat menyebabkan pengendalian penyakit ini sangat sulit.
                            serangan blast daun yang tinggi dapat mempengaruhi pertumbuhan tanaman dan anakan produktif yang menyebabkan malai kecil dengan sedikit gabah bahkan dapat menyebabkan seluruh tanaman mati sebelum berbunga. serangan dapat menurunkan hasil secara langsung karena leher malai busuk dan patah  sehingga pengisian terganggu dan bulir padi menjadi hampa.
                            </h3>
                            <h3 className="font-bold pt-3 leading-loose">Ciri-ciri Penyakit Blast Daun :</h3>
                                <li className=" ml-10 leading-loose">Gejala awal timbul pada saat tanaman masih muda (2-3 daun)</li>
                                <li className=" ml-10 leading-loose">Terjadi terutama pada padi ladang di musim hujan</li>
                                <li className=" ml-10 leading-loose">Kandungan tinggi akan memacu perkembangan penyakit</li>
                            <h3 className="font-bold pt-3 leading-loose">Ciri-ciri Penyakit Blast Leher</h3>
                                <li className=" ml-10 leading-loose">Gejala awal timbul pada saat tanaman mulai keluar malai</li>
                                <li className=" ml-10 leading-loose">Terjadi di padi ladang dan padi sawah pada musim hujan dan kemarau</li>
                                <li className=" ml-10 leading-loose">Kandungan tinggi akan memacu perkembangan penyakit</li>
                            <h3 className="font-bold pt-3 leading-loose">Teknik pengendalian penyakit blast</h3>
                                <li className=" ml-10 leading-loose">Daun yang terserang menunjukkan bercak daun coklat berbentuk belah ketupat dan akan menyebar dan berkembang</li>
                                <li className=" ml-10 leading-loose">Pelepah daun bendera terserang berakibat pada malai yang keluar berwarna coklat dan bulir menjaadi coklat hampa.</li>
                            <h3 className="font-bold pt-3 leading-loose">Teknik pengendalian penyakit blast</h3>
                                <li className=" ml-10 leading-loose">Penggunaan varietas yang tahan penyakit blast</li> 
                                <li className=" ml-10 leading-loose">Hindari penggunaan varietas padi yang sama sepanjang tahun</li>
                                <li className=" ml-10 leading-loose">Pemakaian jerami sebagai kompos dengan pembenaman jerami dalam tanah dapat menyebabkan miselia dan spora dari cendawan grisea mati karena naiknya suhu selama proses dekomposisi</li>
                                <li className=" ml-10 leading-loose">Penggunaan pupuk nitrogen sesuai anjuran karena dosis penggunaan pupuk berkolerassi postif terhadap intensitas penyakit blast, artinya semakin tinggi dosis pupuk, maka intensitas penyakit makin tinggi. untuk itu, penggunaan pupuk harus sesuai anjuran.</li>
                                <li className=" ml-10 leading-loose">Sanitasi lingkungan harus intensif karena inang alternatif patogen khususnya kelompok rerumputan sangat potensial sebagai inokulum awal</li>
                                <li className=" ml-10 leading-loose">Hindari jarak tanam rapat</li>
                                <li className=" ml-10 leading-loose">Pendekatan secara kimiawi</li>
                    </Content>
                </Container>
            <Footer />
        </div>
    )
}

export default Detail;