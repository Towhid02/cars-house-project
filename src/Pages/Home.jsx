import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className=" max-w-7xl mx-auto">
            <Brand></Brand>
            <Header></Header>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;