import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';
import ReactMarkdown from 'react-markdown';
import content from '../resources/PrivacyPolicyContent.jsx';

class PrivacyPolicy extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="Privacy Policy" subtitle="">

                </Jumbotron>
                <div className="container">
                    <ReactMarkdown
                        source={content}
                    />
                </div>              
                <Footer />
            </div>
        );
    }
}

export default PrivacyPolicy;