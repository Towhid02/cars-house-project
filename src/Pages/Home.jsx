import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Header></Header>
            <div className=' font-galada'>Cars World!</div>
            <Footer></Footer>
        </div>
    );
};

export default Home;