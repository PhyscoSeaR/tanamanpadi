import Nav from "../../../components/navbar";
import Container from "../../../components/container";
import Content from "../../../components/content";
import Footer from "../../../components/footer";


const Brown = () => {
    return (
        <div className="max-h-screen overflow-auto max-w-screen">
            <Nav />
                <Container>
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
                </Container>
            <Footer />
        </div>
    )
}

export default Brown;