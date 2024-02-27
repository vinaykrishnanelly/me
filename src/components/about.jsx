import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p><strong>Hi Vinay Krishna Nelly</strong> a software engineer who loves solving problems and making things work better.
                                                I've worked at some cool places like Amazon Web Services and Nordstrom.
                                                What I enjoy the most is creating software that makes a difference, whether it's making systems run faster,
                                                saving money, or just making users' lives easier.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="services color-1">
                                            <span className="icon2"><i className="icon-code"/></span>
                                            <h3>Software Engineering/ Development</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                        <div className="services color-2">
                                            <span className="icon2"><i className="icon-data"/></span>
                                            <h3>Cloud infrastructure (AWS)</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                        <div className="services color-3">
                                            <span className="icon2"><i className="icon-globe-outline"/></span>
                                            <h3>Distributed Systems</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                        <div className="services color-4">
                                            <span className="icon2"><i className="icon-group"/></span>
                                            <h3>Cross-functional Collaboration</h3>
                                        </div>
                                    </div>
                                </div>
                                {/*<div className="row">*/}
                                {/*    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">*/}
                                {/*        <div className="hire">*/}
                                {/*            <h2>I am happy to know you <br/>that 300+ projects done sucessfully!</h2>*/}
                                {/*            <a href="#" className="btn-hire">Hire me</a>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}