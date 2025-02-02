import React from 'react';
import {Data} from '../data/data';
import TimelineItem from './TimelineItem';
import {Row} from "antd"
import "../css/timeline.css";

const {timelineData} = Data

const Timeline = () =>
    timelineData.length > 0 && (
        <><div>
            <Row style={{ padding: '2% 15%' }}>
                <h1 style={{ color: 'black' }}>
                    Education
                </h1>
            </Row>
            </div>
            <div className="timeline-container" style={{ padding: '0% 15%' }}>
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </>
    );

export default Timeline;