/* eslint-disable react/no-unescaped-entities */

import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
          <div className=' m-5'>
            <h1 className=' text-5xl font-itim font-bold text-[#21ff06]'>
                ABOUT US
            </h1>
            <div className=' text-xl text-justify p-10 font-mooli'>
            <p className='mb-5'>
           <span className=' text-2xl font-galada  text-[#21ff06]'>Car House</span>  is a family-owned and operated car dealership in [City, State]. We have been serving the community for over [number] years, and we are proud to be your one-stop shop for all your automotive needs.
            </p>
            <p className='mb-5'>
            We offer a wide selection of new and pre-owned vehicles from all the major manufacturers. Our team of experienced sales professionals is here to help you find the perfect car for your needs and budget. We also offer a variety of financing options to make your purchase as affordable as possible.
            </p>
            <p className='mb-5'>
            In addition to our sales department, we also have a full-service service center. Our certified technicians are experts in all aspects of car repair and maintenance. We offer a variety of services, including:
            <ol>
                <li> Oil changes and tune-ups.</li>
                <li>Brake repair and replacement</li>
                <li>Engine repair and replacement</li>
                <li>Transmission repair and replacement</li>
                <li>Diagnostic services</li>
            </ol> 
            </p>
            <p className='mb-5'>
            We are committed to providing our customers with the best possible service and experience. We want you to feel confident that you are getting the best possible deal on your new or pre-owned vehicle, and that your car is in good hands when you bring it in for service.
            </p>
            <p className='mb-5'>
            Here are just a few of the things that set us apart from other car dealerships:
            <ul>
                <li>We offer a wide selection of new and pre-owned vehicles from all the major manufacturers.</li>
                <li>Our team of experienced sales professionals is here to help you find the perfect car for your needs and budget.</li>
                <li>We offer a variety of financing options to make your purchase as affordable as possible.</li>
                <li>We have a full-service service center with certified technicians who are experts in all aspects of car repair and maintenance.</li>
                <li>We are committed to providing our customers with the best possible service and experience.</li>
            </ul>
            </p>
            <p className='mb-5'>
            If you are looking for a car dealership that you can trust, [Car House Name] is the place for you. We invite you to visit our showroom today or schedule a service appointment online. 
            </p>
            <p className='mb-5'>
            You can also add a personal touch to your About Us page by sharing your company's story and values. For example, you could write about how your family started the business, or what motivates you to provide excellent customer service. You could also talk about your commitment to the community or your environmental initiatives.
            </p>
            <p className='mb-5'>
            Whatever you choose to write, make sure that your About Us page is informative and engaging. It should give potential customers a good understanding of your company and what makes you different from other car dealerships. 
            </p>
            </div>
          </div>
          <Footer></Footer>
        </div>
    );
};

export default AboutUs;