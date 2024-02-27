import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-education" data-section="education">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Education</span>
                                <h2 className="colorlib-heading animate-box">Education</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <div className="fancy-collapse-panel">
                                    <div className="panel-group" id="accordion" role="tablist"
                                         aria-multiselectable="true">
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingOne">
                                                <h4 className="panel-title">
                                                    <a data-toggle="collapse" data-parent="#accordion"
                                                       href="#collapseOne" aria-expanded="true"
                                                       aria-controls="collapseOne">Master's in Computer Science
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
                                                 aria-labelledby="headingOne">
                                                <div className="panel-body">
                                                    <p>Graduated with Master's in Computer Science from <strong>Illinois Institute of Technology, Chicago</strong> </p>
                                                    <p>Course work:</p>
                                                    <ul>
                                                        <li>Artificial Intelligence</li>
                                                        <li>Machine Learning</li>
                                                        <li>Natural Language Processing</li>
                                                        <li>Design and Analysis of Algorithms</li>
                                                        <li>Online Social Network Analysis</li>
                                                        <li>Software Project Management</li>
                                                        <li>Mobile Application Development</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading" role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" data-toggle="collapse"
                                                       data-parent="#accordion" href="#collapseTwo"
                                                       aria-expanded="false" aria-controls="collapseTwo">Bachelor of Technology in Computer Science
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel"
                                                 aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    <p>Graduated with Bachelor of Technology in Computer Science from <strong>Jawaharlal Nehru Technological University, Hyderabad, India</strong></p>
                                                    <p>Course work:</p>
                                                    <ul>
                                                        <li>Data Structures and Algorithms</li>
                                                        <li>Object Oriented Programming</li>
                                                        <li>Java using Data Structures</li>
                                                        <li>C using Data Structures</li>
                                                        <li>C++ using Data Structures</li>
                                                        <li>Machine Learning</li>
                                                        <li>Operating System</li>
                                                        <li>Computer Networks</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}