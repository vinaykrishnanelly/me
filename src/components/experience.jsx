import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-experience" data-section="experience">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Experience</span>
                                <h2 className="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-1">
                                                <i className="icon-pen2"/>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Engineer II - Nordstrom, Los Angeles, CA <span>OCT 2021 - July 2023</span></h2>
                                                <ul>
                                                    <li>
                                                        Architected cloud infrastructure for data intensive applications
                                                        leveraging Java and Spring Boot, with Kubernetes orchestration and
                                                        Kafka messaging; integrated AWS services (Lambda, EC2, S3, IAM, VPC)
                                                        and Terraform to automate supply chain processes.
                                                    </li>
                                                    <li>
                                                        Developed, tested, and launched innovative cloud based automated systems
                                                        tailored to optimize carton-receiving operations at Nordstrom warehouses,
                                                        leading to a substantial $2 million yearly cost reduction and improved
                                                        organizational outcomes.
                                                    </li>
                                                    <li>
                                                        Established robust Continuous Integration/ Continuous Deployment (CI/CD) pipelines,
                                                        version control, including comprehensive unit testing and integration testing maintaining
                                                        the test coverage of a minimum of 90%, to facilitate seamless deployment of applications.
                                                        Championed the launch of dashboard applications for warehouse operations, enabling a
                                                        20% reduction in order fulfillment time and a 25% increase in inventory turnover rate.
                                                    </li>
                                                    <li>
                                                        Mentored Software Engineer-1 and interns, providing guidance on code quality and best practices,
                                                        resulting in enhanced code quality and compliance with industry standards.
                                                    </li>
                                                    <li>
                                                        Led team in frequent code reviews, design and security reviews, identifying and
                                                        addressing critical vulnerabilities in the production environment;
                                                        optimized on-call/ PagerDuty procedures, resulting in 25% faster incident
                                                        resolution and improved customer satisfaction.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-pen2"/>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Development Engineer - Amazon, Seattle
                                                    <span> JULY 2020 - AUG 2021</span></h2>
                                                    <ul>
                                                        <li>
                                                            Engineered infrastructure enhancements for AWS System Manager
                                                            service to fully automate operational task execution processes;
                                                            delivered a 25% reduction in overall task execution time,
                                                            enhancing operational efficiency.
                                                        </li>
                                                        <li>
                                                            Championed the design and implementation of a feature that personalized
                                                            automation workflows to suit customers' unique requirements,
                                                            leveraging caching mechanisms to ensure high responsiveness.
                                                            This innovation led to a remarkable 30% uptick in customer adoption rates.
                                                        </li>
                                                        <li>
                                                            Engaged in the full development lifecycle, conducting Spikes,
                                                            Design reviews, Security reviews, Implementation, Launch, and Maintenance;
                                                            achieved successful delivery of secure, high-performance cloud
                                                            solutions meeting client objectives.
                                                        </li>
                                                        <li>
                                                            Engineered and deployed innovative features leveraging Java, TypeScript,
                                                            JavaScript, and key AWS services (Lambda, SQS, SNS); optimized server
                                                            response time by 30% through strategic process enhancements and utilization of CDK,
                                                            DynamoDB and CloudWatch.
                                                        </li>
                                                        <li>
                                                            Coordinated 24/7 on-call support to perform root cause analysis on incidents and safeguard the team's services.
                                                        </li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-3">
                                                <i className="icon-pen2"/>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Engineer Intern - Vision 13 <span>SEP 2019 - DEC 2019</span></h2>
                                                    <ul>
                                                        <li>
                                                            Designed and developed a user interface application for Android devices,
                                                            focused on predicting stock ranking listings and providing users with valuable
                                                            insights into the financial market.
                                                        </li>
                                                        <li>
                                                            Conducted and presented comprehensive demos to the team, showcasing the applications
                                                            functionality and features prior to handing the project over to the development
                                                            team for further refinement and implementation.
                                                        </li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2"/>
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Software Engineer - Tata <span> JUNE 2016 - AUG 2018</span></h2>
                                                    <ul>
                                                        <li>
                                                            Awarded the Star Performer Award twice in recognition of
                                                            exceptional performance and contributions among 250 employees.
                                                        </li>
                                                        <li>
                                                            Revamped user interfaces for 5+ products by leveraging Java, NodeJs, and AngularJS;
                                                            enhanced user experience resulting in a 25% boost in user engagement metrics.
                                                        </li>
                                                        <li>
                                                            Expertly analyzed data and identified patterns, delivering comprehensive analysis
                                                            reports aligned with business objectives. Employed statistical methods to devise
                                                            actionable improvements to processes.
                                                        </li>
                                                        <li>
                                                            Spearheaded cross-functional problem-solving sessions with Product Managers to
                                                            ensure synchronization on project targets.
                                                        </li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </article>
                                    {/*<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">*/}
                                    {/*    <div className="timeline-entry-inner">*/}
                                    {/*        <div className="timeline-icon color-5">*/}
                                    {/*            <i className="icon-pen2"/>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="timeline-label">*/}
                                    {/*            <h2><a href="#">UI/UX Designer at Envato</a> <span>2017-2018</span></h2>*/}
                                    {/*            <p>Even the all-powerful Pointing has no control about the blind texts*/}
                                    {/*                it is an almost unorthographic life One day however a small line of*/}
                                    {/*                blind text by the name of Lorem Ipsum decided to leave for the far*/}
                                    {/*                World of Grammar.</p>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</article>*/}
                                    {/*<article className="timeline-entry begin animate-box"*/}
                                    {/*         data-animate-effect="fadeInBottom">*/}
                                    {/*    <div className="timeline-entry-inner">*/}
                                    {/*        <div className="timeline-icon color-none">*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</article>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}