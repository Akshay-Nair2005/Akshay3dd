import React from 'react';
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../components/Experience";
import { UI } from "../components/UI";
import FeaturedBook from '../components/FeaturedBook';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Footerr from '../components/Footerr';

const HomePage = () => {
    return (
        <>
            <UI />
            <Loader 
                containerStyles={{ 
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    width: '100vw', 
                    height: '100vh', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    // backgroundColor: '#121212' 
                }} 

            />
            <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
                <group position-y={0}>
                    <Suspense fallback={null}>
                        <Experience />
                    </Suspense>
                </group>
            </Canvas>
            <FeaturedBook isHome={true} />
            {/* <AboutUs /> */}
            <ContactUs />
            <Footerr />
        </>
    );
};

export default HomePage;
