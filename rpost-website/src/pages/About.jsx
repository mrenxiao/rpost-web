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
                Most of them share their own daily pictures or videos, whereas some users repost content from other people's accounts.
                You can find a bunch of Repost apps on App store / Google Play, but they are neither user friendly nor able to offer a good user experience.
                That's why we have created RPOST, a minimalist, elegant and modern repost app.
                
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;