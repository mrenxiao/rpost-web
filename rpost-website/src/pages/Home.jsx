import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import homeImage from '../images/home_image.png';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="" subtitle="The newest reposting experience"/>
                {/* <Player /> */}

                <div class="box flex">
                    <Image className="test" src={homeImage} width="400" height="500" />
                </div>

                <Footer />
            </div>
        );
    }
}

export default Home;