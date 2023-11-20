import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Heading from '../components/Heading';
const HospitalScreen = () => {
    return (
        <section className="flex flex-col pt-40 px-24 items-center justify-evenly gap-5">
            {/* heading  */}
            <div>
                <Heading title="Hospitals" />
            </div>
            <Zoom right>
                <div className="bg-white flex flex-col rounded-lg overflow-hidden shadow-green-500/50 md:shadow-xl md:shadow-green-500 z-10 px-2">
                    <VerticalTimeline lineColor='#36bdbd'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            contentStyle={{ background: 'linear-gradient(125deg, rgba(201,125,176,1) 0%, rgba(54,189,189,1) 0%, rgba(134,15,252,1) 100%)', color: '#FFFFFF' }}
                            contentArrowStyle={{ borderRight: '7px solid  #36bdbd' }}
                            iconStyle={{ background: '#36bdbd', color: '#FFFFFF' }}
                        >
                            <h3 className="vertical-timeline-element-title"><b>Tender Palm Hospital</b></h3>
                            <p>Address: Amar Shaheed Path, Sector 7, Gomti Nagar, Lucknow, Uttar Pradesh 226001</p>
                            <p>Areas served: Lucknow</p>
                            <p>Hours: Open 24 hours</p>
                            <p>Phone: 0522 350 0111</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            contentStyle={{ background: 'linear-gradient(125deg, rgba(201,125,176,1) 0%, rgba(54,189,189,1) 0%, rgba(134,15,252,1) 100%)', color: '#FFFFFF' }}
                            contentArrowStyle={{ borderRight: '7px solid  #36bdbd' }}
                            iconStyle={{ background: '#36bdbd', color: '#FFFFFF' }}
                        >
                            <h3 className="vertical-timeline-element-title">PANACEA HOSPITAL</h3>
                            <p>Address: 4C, 1076, GomtiNagar, Gomti Nagar, Lucknow, Uttar Pradesh 226010</p>
                            <p>Areas served: Lucknow</p>
                            <p>Hours: Open 24 hours</p>
                            <p>Phone: 099190 83111</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            contentStyle={{ background: 'linear-gradient(125deg, rgba(201,125,176,1) 0%, rgba(54,189,189,1) 0%, rgba(134,15,252,1) 100%)', color: '#FFFFFF' }}
                            contentArrowStyle={{ borderRight: '7px solid  #36bdbd' }}
                            iconStyle={{ background: '#36bdbd', color: '#FFFFFF' }}
                        >
                            <h3 className="vertical-timeline-element-title">Galaxy Hospital & IVF Centre</h3>
                            <p>Address: Sultanpur Rd, Arjunganj, Ahmamau, Uttar Pradesh 226002</p>
                            <p>Areas served: Lucknow</p>
                            <p>Hours: Open 24 hours</p>
                            <p>Phone: 086046 35851</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            contentStyle={{ background: 'linear-gradient(125deg, rgba(201,125,176,1) 0%, rgba(54,189,189,1) 0%, rgba(134,15,252,1) 100%)', color: '#FFFFFF' }}
                            contentArrowStyle={{ borderRight: '7px solid  #36bdbd' }}
                            iconStyle={{ background: '#36bdbd', color: '#FFFFFF' }}
                        >
                            <h3 className="vertical-timeline-element-title">MEDIHEALTH MULTISPECIALITY HOSPITAL</h3>
                            <p>Address: Padma Tower, Lallan Singh Nagar, Arjunganj, Lucknow, Uttar Pradesh 226002</p>
                            <p>Areas served: Lucknow</p>
                            <p>Hours: Open 24 hours</p>
                            <p>Phone: 076518 32332</p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            contentStyle={{ background: 'linear-gradient(125deg, rgba(201,125,176,1) 0%, rgba(54,189,189,1) 0%, rgba(134,15,252,1) 100%)', color: '#FFFFFF' }}
                            contentArrowStyle={{ borderRight: '7px solid  #36bdbd' }}
                            iconStyle={{ background: '#36bdbd', color: '#FFFFFF' }}
                        >
                            <h3 className="vertical-timeline-element-title">Health link hospital</h3>
                            <p>Address: Amar Shaheed path kanpur, road, Lucknow, Uttar Pradesh 226002</p>
                            <p>Areas served: Ahmamau</p>
                            <p>Hours: Open 24 hours</p>
                            <p>Phone: 091511 22204</p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </Zoom>
        </section>
    )
}

export default HospitalScreen