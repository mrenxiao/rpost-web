import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="About" subtitle=""/>
                <div className="container">
                Instagram users are all around the world nowadays.
                Most of them share their own daily pictures or videos, whereas the rest repost content from other people's accounts.
                You can find a bunch of Repost apps on App store / Google Play, but they are neither user friendly nor able to offer the best user experience.
                That's why we have created RPOST, the most simple, elegant and modern repost app ever.
                
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;