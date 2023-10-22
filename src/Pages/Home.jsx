import Banner from "../Components/Banner";
import Brand from "../Components/Brand";
import Choose from "../Components/Choose";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";


const Home = () => {
    return (
        <div className=" my-2">
            <Navbar></Navbar>
            <Banner></Banner>           
            <Brand></Brand>
            <Choose></Choose>
            <Services></Services>          
            <Footer></Footer>
        </div>
    );
};

export default Home;