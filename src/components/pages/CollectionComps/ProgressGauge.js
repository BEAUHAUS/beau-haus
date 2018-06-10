import React, { Component } from 'react';
import styled from 'styled-components';

import gaugeDB from '../../../data/gaugeDB.json';

const ProgressGauge = (props) => {
    const progressDeg = (props.current / props.total) * 360;
    return (
        <svg id="progress-gauge" viewBox="0 0 100 100">
        <filter id="gauge-shad" x="0" y="0">
            <feDropShadow dx="-4" dy="4" stdDeviation="2" />
          </filter>
                <g fill="none" strokeWidth="6" strokeDasharray="0 20 20 0" filter="url(#gauge-shad)">
                {gaugeDB.dial.map((line, idx)=> <line key={line.id} stroke={`hsl(342, 42%, ${50-idx}%`} x1="50" y1="50" x2={line.x2} y2={line.y2}/>)}
                </g>
            <line id="gauge-needle" transform={`rotate(${progressDeg})`} x1="50" y1="50" x2="50" y2="2"/>
        </svg>
    )
}

export default ProgressGauge;

/*
*/