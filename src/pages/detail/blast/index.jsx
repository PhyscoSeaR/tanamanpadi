import Nav from "../../../components/navbar";
import Container from "../../../components/container";
import Content from "../../../components/content";
import Footer from "../../../components/footer";


const Blast = () => {
    return (
        <div className="max-h-screen overflow-auto max-w-screen">
            <Nav />
                <Container>
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

export default Blast;