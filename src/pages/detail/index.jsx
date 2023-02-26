import Nav from "../../components/navbar";
import Footer from "../../components/footer";
import Container from "../../components/container";
import Content from "../../components/content";
import { useEffect } from "react";
import Card from "../../components/card";
const Detail = () => {
    return (
        <div className="max-h-screen overflow-auto max-w-screen">
            <Nav />
                <Container>
                    <div className="h-full mb-[13rem] flex gap-12 justify-center md:flex-col md:mb-0">
                        <Card name={"Penyakit Hawar Daun (Bacterial Leaf Blight)"} image="/img/BacterialLeafBlight.jpg" link="bacterial"/>
                        <Card name={"Penyakit Bercak Daun Coklat (Brown Spot)"} image="/img/Brownspot.jpg" link="brown"/>
                        <Card name={"Penyakit Blast"} image="/img/Blast.jpg" link="blast"/>
                    </div>
                </Container>
            <Footer />
        </div>
    )
}

export default Detail;