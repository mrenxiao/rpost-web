import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Jumbotron from '../components/Jumbotron'
import Player from '../components/Player'

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Hi" subtitle="Welcome to the most modern Repost app page"/>
                <Player />
                <Footer />
            </div>
        );
    }
}

export default Home;