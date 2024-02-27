import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <a href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse"
                       data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i/></a>
                    <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}}/>
                            <h1 id="colorlib-logo"><a href="index.html">Vinay Krishna Nelly</a></h1>
                            <span className="position"><a href="https://www.linkedin.com/in/vinaykrishnanelly/" target="_blank">Software Engineer II</a> in United States</span>
                        </div>
                        <div className="text-center">
                            <p><a className="btn btn-primary btn-learn"
                                  href="https://drive.google.com/file/d/1lgdNQxYQ69SkpA8F1HjceKdUaWkAi9wc/view"
                                  target="_blank">Download CV <i
                                className="icon-download4"/></a></p>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                                    <li><a href="#education" data-nav-section="education">Education</a></li>
                                    <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                                    <li><a href="#services" data-nav-section="services">Services</a></li>
                                    <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        {/*<div className="colorlib-footer">*/}
                        {/*    <ul>*/}
                        {/*        /!*<li><a href="#"><i className="icon-facebook2"/></a></li>*!/*/}
                        {/*        /!*<li><a href="#"><i className="icon-twitter2"/></a></li>*!/*/}
                        {/*        <li><a href="#"><i className="icon-instagram"/></a></li>*/}
                        {/*        <li><a href="#"><i className="icon-linkedin2"/></a></li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}
                        <div className="colorlib-footer">
                            <p>
                                <small>Copyright © All rights reserved </small>
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}