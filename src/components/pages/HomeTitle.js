import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/* FIXME:
 * try fill="#C95F00" as an alternative to current theme orange
 */

const HomeTitleWrapper = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.99;
  transform-origin: 50% 50%;
  transform: scale(2) rotate(-30deg);
  #subroles-txt {
    stroke-width: .5;
    stroke: #fefefe;
  }
  }
  @media screen and (max-width : 768px) {    // tablet query
    height: 100%;
    width: 100%;
    transform-origin: 50% 50%;
    transform: scale(2.4, 2.4) rotate(-15deg);
    
 }
`;
const HomeTitle = props => {
  return (
    <HomeTitleWrapper className="home-title-wrapper" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid meet">
      <rect id="cornder-bar" fill="#222" width="597" height="94" x="940" y="578" />
      <rect id="top-sail" width="597" height="388" x="940" y="154" fill="#5f6d58" />
      <rect  fill="#222" id="mast" width="12.5" height="1190" x="897.5" y="-55" />
      <circle id="center-dot" cx="903.8" cy="536" r="6" fill="#C95F00" />
      <rect id="for-reference-only" width="1304" height="25" x="308" y="528" fill="transparent" />
      <linearGradient
        id="red-grad"
        x1="1211.999"
        x2="1610.999"
        y1="871.001"
        y2="871.001"
        gradientTransform="translate(.00097656 -.00048828)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#a36868" />
        <stop offset="1" stopColor="#d18080" />
      </linearGradient>
      <rect width="399" height="398" x="1212" y="672" fill="url(#red-grad)" />
      <g>
        <path
          id="subroles-txt"
          fill="#eee"
          d="M954.4 605.4c-.8-.5-1.4-1.1-1.9-1.9-.5-.8-.7-1.8-.7-2.8 0-1.1.2-2 .7-2.8.5-.8 1.1-1.5 1.9-1.9.8-.5 1.7-.7 2.8-.7.8 0 1.6.2 2.3.5s1.3.8 1.7 1.4l-.5.4c-.4-.5-.9-.9-1.5-1.2-.6-.3-1.3-.4-2-.4-.9 0-1.7.2-2.4.6-.7.4-1.3 1-1.7 1.7-.4.7-.6 1.6-.6 2.5s.2 1.8.6 2.5c.4.7 1 1.3 1.7 1.7.7.4 1.5.6 2.4.6.7 0 1.4-.1 2-.4.6-.3 1.1-.7 1.5-1.2l.5.4c-.4.6-1 1.1-1.7 1.4-.7.3-1.5.5-2.3.5-1-.2-1.9-.4-2.8-.9zM965.6 605.4c-.8-.5-1.4-1.1-1.9-1.9-.5-.8-.7-1.8-.7-2.8 0-1.1.2-2 .7-2.8.5-.8 1.1-1.5 1.9-1.9.8-.5 1.7-.7 2.7-.7 1 0 1.9.2 2.7.7s1.4 1.1 1.9 1.9c.5.8.7 1.8.7 2.8 0 1.1-.2 2-.7 2.8-.5.8-1.1 1.5-1.9 1.9-.8.5-1.7.7-2.7.7-1 0-1.9-.2-2.7-.7zm5.1-.5c.7-.4 1.2-1 1.7-1.7.4-.7.6-1.6.6-2.5s-.2-1.8-.6-2.5c-.4-.7-1-1.3-1.7-1.7-.7-.4-1.5-.6-2.4-.6-.9 0-1.7.2-2.4.6-.7.4-1.2 1-1.7 1.7-.4.7-.6 1.6-.6 2.5s.2 1.8.6 2.5c.4.7 1 1.3 1.7 1.7.7.4 1.5.6 2.4.6.9 0 1.7-.2 2.4-.6zM986.4 590.7v15.4h-.7v-2.9c-.4.9-1 1.7-1.8 2.2-.8.5-1.8.8-2.8.8-1 0-1.9-.2-2.7-.7-.8-.5-1.4-1.1-1.9-1.9-.5-.8-.7-1.8-.7-2.8 0-1.1.2-2 .7-2.8.5-.8 1.1-1.5 1.9-1.9.8-.5 1.7-.7 2.7-.7 1 0 2 .3 2.8.8.8.5 1.4 1.3 1.8 2.2v-7.5h.7zm-3 14.2c.7-.4 1.2-1 1.7-1.7.4-.7.6-1.6.6-2.5s-.2-1.8-.6-2.5c-.4-.7-1-1.3-1.7-1.7-.7-.4-1.5-.6-2.4-.6-.9 0-1.7.2-2.4.6-.7.4-1.3 1-1.7 1.7-.4.7-.6 1.6-.6 2.5s.2 1.8.6 2.5c.4.7 1 1.3 1.7 1.7.7.4 1.5.6 2.4.6.9 0 1.7-.2 2.4-.6zM999.9 600.8h-9.4c0 .9.2 1.7.6 2.5s1 1.3 1.7 1.7 1.5.6 2.4.6c.7 0 1.4-.1 2-.4.6-.3 1.1-.7 1.5-1.2l.4.5c-.5.6-1.1 1-1.8 1.3-.7.3-1.4.5-2.2.5-1.1 0-2-.2-2.8-.7-.8-.5-1.5-1.1-1.9-1.9-.5-.8-.7-1.8-.7-2.8 0-1.1.2-2 .7-2.8s1-1.5 1.8-1.9c.8-.5 1.6-.7 2.6-.7.9 0 1.8.2 2.6.7.8.5 1.4 1.1 1.8 1.9.4.8.7 1.7.7 2.8v-.1zm-7.3-4.4c-.7.4-1.2.9-1.6 1.6-.4.7-.6 1.4-.6 2.3h8.8c-.1-.8-.3-1.6-.7-2.3-.4-.7-.9-1.2-1.6-1.6-.6-.4-1.4-.6-2.2-.6-.7 0-1.4.2-2.1.6zM962.4 615.6V631h-.7v-3c-.4.9-1 1.7-1.8 2.2-.8.5-1.8.8-2.8.8-1 0-1.9-.2-2.7-.7-.8-.5-1.4-1.1-1.9-1.9-.5-.8-.7-1.8-.7-2.8s.2-2 .7-2.8c.5-.8 1.1-1.5 1.9-1.9.8-.5 1.7-.7 2.7-.7 1 0 2 .3 2.8.8.8.5 1.4 1.3 1.8 2.2v-7.5h.7zm-2.9 14.2c.7-.4 1.2-1 1.7-1.7.4-.7.6-1.6.6-2.5s-.2-1.8-.6-2.5c-.4-.7-1-1.3-1.7-1.7-.7-.4-1.5-.6-2.4-.6-.9 0-1.7.2-2.4.6-.7.4-1.2 1-1.7 1.7-.4.7-.6 1.6-.6 2.5s.2 1.8.6 2.5c.4.7 1 1.3 1.7 1.7.7.4 1.5.6 2.4.6.9 0 1.7-.2 2.4-.6zM975.9 625.7h-9.4c0 .9.2 1.7.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.5.6 2.4.6.7 0 1.4-.1 2-.4.6-.3 1.1-.7 1.5-1.2l.4.5c-.5.6-1.1 1-1.8 1.3-.7.3-1.4.5-2.2.5-1.1 0-2-.2-2.8-.7-.8-.5-1.5-1.1-1.9-1.9-.5-.8-.7-1.8-.7-2.8s.2-2 .7-2.8c.4-.8 1-1.5 1.8-1.9.8-.5 1.6-.7 2.6-.7.9 0 1.8.2 2.6.7.8.5 1.4 1.1 1.8 1.9.4.8.7 1.7.7 2.8v-.1zm-7.2-4.4c-.7.4-1.2.9-1.6 1.6-.4.7-.6 1.4-.6 2.3h8.8c-.1-.8-.3-1.6-.7-2.3-.4-.7-.9-1.2-1.6-1.6-.6-.4-1.4-.6-2.2-.6-.7.1-1.5.2-2.1.6zM979.4 630.7c-.8-.3-1.4-.6-1.8-1l.3-.5c.4.4 1 .7 1.7 1 .7.3 1.4.4 2.2.4 1.2 0 2-.2 2.6-.6.6-.4.8-.9.8-1.7 0-.5-.1-.9-.4-1.2-.3-.3-.7-.5-1.1-.6-.4-.1-1-.3-1.8-.4-.9-.2-1.6-.3-2.1-.5s-1-.5-1.3-.8c-.4-.4-.5-.9-.5-1.6 0-.8.3-1.5 1-2s1.7-.8 2.9-.8c.7 0 1.3.1 2 .3.7.2 1.2.5 1.6.8l-.4.5c-.4-.3-.9-.6-1.5-.8-.6-.2-1.2-.3-1.8-.3-1.1 0-1.9.2-2.4.6-.5.4-.8.9-.8 1.6 0 .5.2.9.5 1.2.3.3.7.5 1.1.7.4.1 1.1.3 1.8.4.8.2 1.5.3 2 .5s.9.4 1.3.8.5.9.5 1.6c0 .9-.4 1.6-1.1 2.1-.7.5-1.7.8-3.1.8-.6-.2-1.4-.3-2.2-.5zM988.9 617.2c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.1-.1.3-.2.5-.2s.3.1.5.2.2.3.2.5-.1.3-.2.5c-.1.1-.3.2-.5.2s-.3-.1-.5-.2zm.2 3h.7V631h-.7v-10.8zM1003.9 620.2v9.7c0 1.7-.4 3-1.3 3.9-.8.8-2.1 1.3-3.8 1.3-1 0-1.9-.2-2.8-.5-.9-.3-1.5-.7-2.1-1.3l.4-.5c.6.5 1.2.9 2 1.2.8.3 1.6.4 2.5.4 1.5 0 2.6-.4 3.3-1.1.7-.7 1.1-1.8 1.1-3.4v-2.3c-.4.9-1 1.6-1.8 2.1s-1.8.8-2.8.8c-1 0-1.9-.2-2.7-.7-.8-.4-1.4-1.1-1.9-1.9-.5-.8-.7-1.7-.7-2.7 0-1 .2-1.9.7-2.7.5-.8 1.1-1.4 1.9-1.9.8-.4 1.7-.7 2.7-.7 1.1 0 2 .3 2.9.8.8.5 1.5 1.2 1.9 2.1V620h.5zm-3 9.2c.7-.4 1.3-.9 1.7-1.7.4-.7.6-1.5.6-2.4 0-.9-.2-1.7-.6-2.4-.4-.7-1-1.2-1.7-1.6-.7-.4-1.5-.6-2.4-.6-.9 0-1.7.2-2.4.6-.7.4-1.3.9-1.7 1.6-.4.7-.6 1.5-.6 2.4 0 .9.2 1.7.6 2.4.4.7 1 1.2 1.7 1.6s1.5.6 2.4.6c.9.1 1.7-.1 2.4-.5zM1016.7 621.3c.8.8 1.2 1.9 1.2 3.4v6.3h-.7v-6.3c0-1.3-.3-2.2-1-2.9-.6-.7-1.6-1-2.8-1-1.3 0-2.4.4-3.2 1.2-.8.8-1.2 1.9-1.2 3.2v5.8h-.7v-10.8h.7v2.6c.3-.8.9-1.5 1.7-2 .8-.5 1.7-.7 2.8-.7 1.4 0 2.4.4 3.2 1.2zM962 650.6h-9.4c0 .9.2 1.7.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.5.6 2.4.6.7 0 1.4-.1 2-.4.6-.3 1.1-.7 1.5-1.2l.4.5c-.5.6-1.1 1-1.8 1.3-.7.3-1.4.5-2.2.5-1.1 0-2-.2-2.8-.7s-1.5-1.1-1.9-1.9c-.5-.8-.7-1.8-.7-2.8s.2-2 .7-2.8c.4-.8 1-1.5 1.8-1.9.8-.5 1.6-.7 2.6-.7.9 0 1.8.2 2.6.7.8.5 1.4 1.1 1.8 1.9.4.8.7 1.7.7 2.8v-.1zm-7.3-4.4c-.7.4-1.2.9-1.6 1.6-.4.7-.6 1.4-.6 2.3h8.8c-.1-.8-.3-1.6-.7-2.3-.4-.7-.9-1.2-1.6-1.6-.6-.4-1.4-.6-2.2-.6-.7.1-1.4.3-2.1.6zM974.7 640.5v15.4h-.7V653c-.4.9-1 1.7-1.8 2.2-.8.5-1.8.8-2.8.8-1 0-1.9-.2-2.7-.7-.8-.5-1.4-1.1-1.9-1.9-.5-.8-.7-1.8-.7-2.8s.2-2 .7-2.8c.5-.8 1.1-1.5 1.9-1.9.8-.5 1.7-.7 2.7-.7 1 0 2 .3 2.8.8.8.5 1.4 1.3 1.8 2.2v-7.5h.7zm-2.9 14.2c.7-.4 1.2-1 1.7-1.7.4-.7.6-1.6.6-2.5 0-.9-.2-1.8-.6-2.5-.4-.7-1-1.3-1.7-1.7s-1.5-.6-2.4-.6c-.9 0-1.7.2-2.4.6-.7.4-1.2 1-1.7 1.7-.4.7-.6 1.6-.6 2.5 0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.5.6 2.4.6.9 0 1.7-.2 2.4-.6zM988.5 645.1v10.8h-.7v-2.6c-.3.8-.9 1.5-1.6 2-.7.5-1.6.7-2.6.7-1.4 0-2.5-.4-3.3-1.2-.8-.8-1.2-1.9-1.2-3.3v-6.3h.7v6.3c0 1.3.3 2.2 1 2.9.7.7 1.6 1 2.8 1 1.3 0 2.3-.4 3.1-1.2.7-.8 1.1-1.9 1.1-3.2v-5.8h.7zM994.5 655.3c-.8-.5-1.4-1.1-1.9-1.9-.5-.8-.7-1.8-.7-2.8s.2-2 .7-2.8c.5-.8 1.1-1.5 1.9-1.9.8-.5 1.7-.7 2.8-.7.8 0 1.6.2 2.3.5.7.3 1.3.8 1.7 1.4l-.5.4c-.4-.5-.9-.9-1.5-1.2-.6-.3-1.3-.4-2-.4-.9 0-1.7.2-2.4.6-.7.4-1.3 1-1.7 1.7-.4.7-.6 1.6-.6 2.5 0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.5.6 2.4.6.7 0 1.4-.1 2-.4.6-.3 1.1-.7 1.5-1.2l.5.4c-.4.6-1 1.1-1.7 1.4-.7.3-1.5.5-2.3.5-1.1-.2-2-.5-2.8-.9zM1011 646c.7.7 1 1.6 1 2.9v7h-.7v-2.2c-.3.7-.9 1.2-1.5 1.6-.7.4-1.5.6-2.5.6-1.2 0-2.1-.3-2.8-.8-.7-.6-1-1.3-1-2.2 0-.9.3-1.6.9-2.1.6-.5 1.6-.8 3-.8h3.9v-1.1c0-1.1-.3-1.9-.8-2.4-.6-.6-1.4-.8-2.5-.8-.8 0-1.5.1-2.1.4-.7.3-1.2.6-1.7 1.1l-.4-.5c.5-.5 1.2-.9 1.9-1.2.7-.3 1.5-.4 2.3-.4 1.4-.1 2.3.3 3 .9zm.4 6.8v-2.2h-3.9c-1.1 0-1.9.2-2.5.6-.5.4-.8 1-.8 1.7 0 .8.3 1.4.9 1.8.6.4 1.4.7 2.4.7 1.9 0 3.2-.9 3.9-2.6zM1021.6 655.2c-.2.2-.6.4-1 .6-.4.1-.8.2-1.2.2-.9 0-1.5-.2-2-.7-.5-.5-.7-1.2-.7-2v-7.5h-2v-.6h2v-2.4h.7v2.4h3.6v.6h-3.6v7.4c0 .7.2 1.3.5 1.7.4.4.9.6 1.6.6.7 0 1.3-.2 1.7-.6l.4.3zM1024.5 642.1c-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.1-.1.3-.2.5-.2s.3.1.5.2c.1.1.2.3.2.5s-.1.3-.2.5-.3.2-.5.2-.3-.1-.5-.2zm.2 3h.7v10.8h-.7v-10.8zM1031.3 655.3c-.8-.5-1.4-1.1-1.9-1.9s-.7-1.8-.7-2.8.2-2 .7-2.8c.5-.8 1.1-1.5 1.9-1.9.8-.5 1.7-.7 2.7-.7 1 0 1.9.2 2.7.7.8.5 1.4 1.1 1.9 1.9.5.8.7 1.8.7 2.8s-.2 2-.7 2.8c-.5.8-1.1 1.5-1.9 1.9s-1.7.7-2.7.7c-1 0-1.9-.3-2.7-.7zm5.1-.6c.7-.4 1.2-1 1.7-1.7.4-.7.6-1.6.6-2.5 0-.9-.2-1.8-.6-2.5-.4-.7-1-1.3-1.7-1.7-.7-.4-1.5-.6-2.4-.6-.9 0-1.7.2-2.4.6s-1.2 1-1.7 1.7c-.4.7-.6 1.6-.6 2.5 0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7s1.5.6 2.4.6c.9 0 1.7-.2 2.4-.6zM1051 646.2c.8.8 1.2 1.9 1.2 3.4v6.3h-.7v-6.3c0-1.3-.3-2.2-1-2.9-.6-.7-1.6-1-2.8-1-1.3 0-2.4.4-3.2 1.2-.8.8-1.2 1.9-1.2 3.2v5.8h-.7v-10.8h.7v2.6c.3-.8.9-1.5 1.7-2 .8-.5 1.7-.7 2.8-.7 1.4 0 2.4.4 3.2 1.2z"
        />
        <path
          id="creative-txt"
          fill="#eee"
          d="M1085.6 696.3c.4.1.8.1 1.1.1.4 0 .8 0 1.1-.1.4-.1.7-.1 1-.3.7-.2 1.2-.6 1.7-.9.3-.3.5-.4.7-.4.3 0 .5.1.5.4s-.3.6-.8 1c-1.2.8-2.6 1.2-4.2 1.2-2.1 0-3.9-.6-5.2-1.9-1.3-1.3-1.9-2.9-1.9-4.9 0-1.9.7-3.5 2.1-4.7 1.4-1.2 3.1-1.8 5.1-1.8 1.2 0 2.3.2 3.4.7.8.4 1.2.7 1.2 1.1 0 .2 0 .3-.1.4-.1.1-.2.1-.3.1-.2 0-.4-.1-.7-.3-.5-.5-1.3-.9-2.3-1.1-.4-.1-.8-.1-1.2-.1-.4 0-.8 0-1.2.1v11.4zM1096.9 684.1h5.2v3.8c.6-1.4 1.2-2.4 1.8-3.1.6-.7 1.3-1 1.9-1 .4 0 .7.1.9.3s.3.4.3.6c0 .2 0 .4-.1.6-.1.1-.1.3-.3.4-.2.2-.4.3-.6.3-.3 0-.5 0-.7-.1-.3-.1-.5-.2-.7-.2-.2 0-.4.2-.7.5-.3.3-.6.7-.9 1.3-.7 1.3-1 2.8-1 4.4v5.2h-5.2v-13zM1122.4 694.1c.3 0 .5.1.5.4 0 .2-.1.5-.4.8-1.3 1.3-3 2-5.3 2-2 0-3.7-.6-5.1-1.8-1.4-1.3-2.1-2.8-2.1-4.8s.6-3.6 1.9-4.8c1.4-1.3 3.2-2 5.4-2 1.8 0 3.3.5 4.5 1.6 1.3 1.2 2 2.7 2 4.6v.9h-8v5.2c.6.1 1.2.2 1.9.2 1.5 0 2.7-.5 3.7-1.4.2-.2.4-.4.4-.5.2-.3.4-.4.6-.4zm-3.3-9.1c-.5-.2-1.1-.2-1.8-.2s-1.2 0-1.6.1v5.2h3.4V685zM1137.5 696.2c-1 .7-2.2 1-3.5 1-1.7 0-3-.4-4-1.3-1.1-.9-1.6-2.1-1.6-3.6 0-1.4.5-2.5 1.6-3.4 1.1-.9 2.5-1.3 4.2-1.3 1.2 0 2.3.2 3.3.7V685c-.7-.2-1.4-.3-1.9-.3-.6 0-1 0-1.4.1-.4 0-.8.1-1.1.2-.8.2-1.3.5-1.7.9-.2.2-.4.3-.6.3s-.3 0-.4-.1c-.1-.1-.1-.2-.1-.3s0-.2.1-.3c0-.1.1-.2.2-.3.2-.2.6-.4 1.2-.6 1.2-.4 2.4-.7 3.5-.7 3.6 0 5.9.9 6.9 2.6.4.8.7 1.8.7 3v7.6h-5.2v-.9zm0-6.9c-1-.5-2-.7-3-.7h-.5v7.7h.2c1.1 0 2.2-.4 3.2-1.2v-5.8zM1154 697.3c-3.2 0-4.8-1.5-4.8-4.4v-8l-1.4.1c-.4 0-.7-.2-.7-.5s.2-.5.7-.5h1.4v-1.9l5.2-2.3v4.2h2.8c.5 0 .7.2.7.5 0 .2-.1.3-.2.4-.1.1-.3.1-.5.1l-1.5-.1h-1.3v11.4c.9 0 1.7-.3 2.4-.8.3-.2.5-.5.6-.9.1-.4.2-.6.3-.7.1-.1.2-.2.4-.2.1 0 .3.1.4.2.1.1.1.2.1.4s0 .3-.1.5-.2.4-.4.6c-.4.5-.8.8-1.3 1.1-.8.5-1.7.8-2.8.8zM1165.8 681.9c-.8 0-1.5-.2-2-.6-.5-.4-.7-.9-.7-1.5 0-.5.3-.9.8-1.3.6-.4 1.1-.6 1.8-.6.6 0 1.1.1 1.4.2.3.1.6.3.9.5.5.4.7.9.7 1.4s-.3 1-.8 1.3c-.6.5-1.3.6-2.1.6zm-2.6 2.2h5.2v13h-5.2v-13zM1172.8 684.1h5.5l3.3 6.8 2.1-4.1c.4-.9.7-1.5.8-2 .1-.4.2-.7.3-.8.1-.1.2-.1.4-.1s.3.1.4.2c.1.1.1.2.1.3v.3c0 .1-.1.2-.1.4-.1.3-.4.9-.8 1.7l-5.3 10.8-6.7-13.5zM1201.6 694.1c.3 0 .5.1.5.4 0 .2-.1.5-.4.8-1.3 1.3-3 2-5.3 2-2 0-3.7-.6-5.1-1.8-1.4-1.3-2.1-2.8-2.1-4.8s.6-3.6 1.9-4.8c1.4-1.3 3.2-2 5.4-2 1.8 0 3.3.5 4.5 1.6 1.3 1.2 2 2.7 2 4.6v.9h-8v5.2c.6.1 1.2.2 1.9.2 1.5 0 2.7-.5 3.7-1.4.2-.2.4-.4.4-.5.3-.3.4-.4.6-.4zm-3.2-9.1c-.5-.2-1.1-.2-1.8-.2s-1.2 0-1.6.1v5.2h3.4V685z"
        />
        <path
          id="development-txt"
          fill="#222"
          d="M1225.9 696.4c-1 .6-2.1.9-3.2.9s-2.1-.2-3-.5c-.9-.3-1.6-.8-2.2-1.4-1.3-1.3-1.9-2.9-1.9-4.9 0-1.9.6-3.4 1.9-4.7 1.3-1.3 3.1-2 5.2-2 1.1 0 2.2.2 3.2.7v-4.7h5V697h-5v-.6zm-3.5-11.7h-.7v11.5c.3 0 .6.1.9.1 1.1 0 2.2-.4 3.2-1.1v-9.6c-1-.5-2.2-.9-3.4-.9zM1248.6 694.1c.3 0 .5.1.5.4 0 .2-.1.5-.4.8-1.3 1.3-3 2-5.3 2-2 0-3.7-.6-5.1-1.8-1.4-1.3-2.1-2.8-2.1-4.8s.6-3.6 1.9-4.8c1.4-1.3 3.2-2 5.4-2 1.8 0 3.3.5 4.5 1.6 1.3 1.2 2 2.7 2 4.6v.9h-8v5.2c.6.1 1.2.2 1.9.2 1.5 0 2.7-.5 3.7-1.4.2-.2.4-.4.4-.5.2-.3.4-.4.6-.4zm-3.2-9.1c-.5-.2-1.1-.2-1.8-.2s-1.2 0-1.6.1v5.2h3.4V685zM1253.6 684.1h5.5l3.3 6.8 2.1-4.1c.4-.9.7-1.5.8-2 .1-.4.2-.7.3-.8.1-.1.2-.1.4-.1s.3.1.4.2c.1.1.1.2.1.3v.3c0 .1-.1.2-.1.4-.1.3-.4.9-.8 1.7l-5.3 10.8-6.7-13.5zM1282.4 694.1c.3 0 .5.1.5.4 0 .2-.1.5-.4.8-1.3 1.3-3 2-5.3 2-2 0-3.7-.6-5.1-1.8-1.4-1.3-2.1-2.8-2.1-4.8s.6-3.6 1.9-4.8c1.4-1.3 3.2-2 5.4-2 1.8 0 3.3.5 4.5 1.6 1.3 1.2 2 2.7 2 4.6v.9h-8v5.2c.6.1 1.2.2 1.9.2 1.5 0 2.7-.5 3.7-1.4.2-.2.4-.4.4-.5.2-.3.4-.4.6-.4zm-3.3-9.1c-.5-.2-1.1-.2-1.8-.2s-1.2 0-1.6.1v5.2h3.4V685zM1289.4 679.9h5.2v17.2h-5.2v-17.2zM1300 690.5c0-1 .2-1.9.5-2.7.4-.8.8-1.5 1.5-2.1 1.3-1.3 3-1.9 5-1.9s3.7.7 5 2c1.2 1.2 1.8 2.8 1.8 4.7 0 1.9-.6 3.5-1.9 4.8-1.3 1.3-3 2-5 2s-3.6-.6-4.9-1.9c-1.4-1.3-2-2.9-2-4.9zm6.6 5.9h.4c1.6 0 3-.5 4.1-1.5 1.2-1.1 1.8-2.5 1.8-4.3 0-1.7-.6-3.1-1.7-4.2s-2.5-1.6-4.2-1.6h-.4v11.6zM1327.7 697.3c-1.1 0-2.2-.3-3.3-.8v4.4h-5V684h5v.7c1.1-.6 2.1-.9 3.3-.9 1.1 0 2.1.2 2.9.5s1.6.8 2.2 1.4c1.3 1.2 1.9 2.8 1.9 4.7 0 1.9-.6 3.5-1.9 4.8-1.3 1.4-3 2.1-5.1 2.1zm-.1-12.6c-1.2 0-2.3.3-3.2 1v9.7c1.1.6 2.3.9 3.6.9h.6v-11.5c-.3 0-.7-.1-1-.1zM1354.3 687.4v9.6h-5.2v-11.8c-.1 0-.2-.1-.3-.1h-.4c-.6 0-1.4.4-2.2 1.3-.3.3-.5.6-.7.9v9.7h-5.2v-13h5.2v2c1.4-1.5 2.9-2.2 4.6-2.2 2.2 0 3.5.8 4 2.4.7-.8 1.5-1.4 2.3-1.8.8-.4 1.7-.6 2.5-.6 1.5 0 2.5.3 3.2 1 .7.7 1 1.7 1 3.1v9h-5.2v-11.8h-.5c-.3 0-.6.1-.8.2-.2.1-.5.3-.8.5-.5.4-1 1-1.5 1.6zM1381 694.1c.3 0 .5.1.5.4 0 .2-.1.5-.4.8-1.3 1.3-3 2-5.3 2-2 0-3.7-.6-5.1-1.8-1.4-1.3-2.1-2.8-2.1-4.8s.6-3.6 1.9-4.8c1.4-1.3 3.2-2 5.4-2 1.8 0 3.3.5 4.5 1.6 1.3 1.2 2 2.7 2 4.6v.9h-8v5.2c.6.1 1.2.2 1.9.2 1.5 0 2.7-.5 3.7-1.4.2-.2.4-.4.4-.5.2-.3.4-.4.6-.4zm-3.3-9.1c-.5-.2-1.1-.2-1.8-.2s-1.2 0-1.6.1v5.2h3.4V685zM1397 685.4c-.2-.1-.4-.2-.7-.2s-.5.1-.7.2-.5.3-.8.5c-.6.4-1.1 1-1.6 1.7v9.6h-5.2v-13h5.2v2.1c1.4-1.5 3-2.3 4.7-2.3 2.9 0 4.3 1.4 4.3 4.2v9h-5.2v-11.8zM1413.6 697.3c-3.2 0-4.8-1.5-4.8-4.4v-8l-1.4.1c-.4 0-.7-.2-.7-.5s.2-.5.7-.5h1.4v-1.9l5.2-2.3v4.2h2.8c.5 0 .7.2.7.5 0 .2-.1.3-.2.4-.1.1-.3.1-.5.1l-1.5-.1h-1.3v11.4c.9 0 1.7-.3 2.4-.8.3-.2.5-.5.6-.9.1-.4.2-.6.3-.7.1-.1.2-.2.4-.2.1 0 .3.1.4.2.1.1.1.2.1.4s0 .3-.1.5-.2.4-.4.6c-.4.5-.8.8-1.3 1.1-.7.5-1.7.8-2.8.8z"
        />
        <path
          id="beau-txt"
          fill="#222"
          d="M675.3 491.3c3.9 2.3 7 5.4 9.2 9.4 2.2 4 3.4 8.6 3.4 13.7s-1.1 9.6-3.4 13.7-5.3 7.2-9.2 9.5c-3.9 2.3-8.2 3.4-12.9 3.4-5.5 0-10.3-1.5-14.5-4.4-4.2-2.9-7.2-6.9-8.9-11.9v16h-2v-75.3h2v38.8c1.8-4.9 4.8-8.9 9-11.8 4.2-2.9 9.1-4.4 14.5-4.4 4.6-.1 8.9 1 12.8 3.3zm-.9 44.6c3.6-2.1 6.4-5 8.4-8.8 2-3.8 3-8 3-12.7 0-4.7-1-9-3-12.7-2-3.8-4.8-6.7-8.4-8.7-3.6-2.1-7.6-3.1-12-3.1s-8.4 1-12 3.1c-3.6 2.1-6.4 5-8.4 8.7-2 3.8-3 8-3 12.7 0 4.7 1 9 3 12.7 2 3.8 4.8 6.7 8.4 8.8 3.6 2.1 7.6 3.1 12 3.1 4.4.1 8.4-1 12-3.1zM747.5 514.4h-46.7c0 4.7 1 9 3.1 12.7 2.1 3.8 5 6.7 8.7 8.8 3.7 2.1 7.8 3.1 12.4 3.1 3.6 0 7-.7 10.1-2.1 3.1-1.4 5.7-3.4 7.8-6l1.4 1.4c-2.3 2.8-5.1 4.9-8.5 6.4-3.4 1.5-7 2.2-10.8 2.2-5 0-9.5-1.1-13.5-3.4s-7.1-5.4-9.3-9.5c-2.3-4.1-3.4-8.6-3.4-13.7s1-9.6 3.1-13.7c2.1-4 5-7.2 8.7-9.4 3.7-2.3 7.8-3.4 12.4-3.4 4.5 0 8.7 1.1 12.4 3.4 3.7 2.2 6.7 5.3 8.8 9.2 2.1 3.9 3.2 8.4 3.2 13.4v.6zM712 492.8c-3.3 2-6 4.7-8 8.1-2 3.5-3.1 7.3-3.3 11.6h44.8c-.2-4.3-1.3-8.1-3.4-11.6-2-3.5-4.7-6.2-8-8.1-3.3-2-7-2.9-11.1-2.9-4-.1-7.7.9-11 2.9zM793.8 492.6c3.2 3.1 4.8 7.7 4.8 13.7v34.4h-2v-11.2c-1.7 3.6-4.2 6.4-7.7 8.4-3.4 2-7.5 3-12.3 3-5.8 0-10.4-1.3-13.7-4-3.3-2.7-4.9-6.2-4.9-10.7 0-4.2 1.5-7.6 4.4-10.2 2.9-2.6 7.7-3.9 14.3-3.9h19.9v-5.8c0-5.5-1.4-9.6-4.2-12.4-2.8-2.8-7-4.2-12.4-4.2-3.8 0-7.3.7-10.6 2s-6.1 3.1-8.5 5.3l-1.4-1.4c2.5-2.4 5.5-4.3 9.1-5.7 3.6-1.4 7.3-2.1 11.3-2.1 6 .1 10.7 1.7 13.9 4.8zm2.8 33.1v-11.6h-20c-5.7 0-9.9 1.1-12.5 3.2-2.7 2.2-4 5.1-4 8.8 0 4 1.5 7.1 4.4 9.4 2.9 2.3 7 3.5 12.2 3.5 9.6.1 16.3-4.4 19.9-13.3zM865.4 488.2v52.5h-2v-13.9c-1.6 4.5-4.2 8-7.8 10.5-3.7 2.5-8.1 3.8-13.3 3.8-6.8 0-12-1.9-15.8-5.6-3.8-3.8-5.7-9.2-5.7-16.2v-31h2v31c0 6.4 1.7 11.4 5.1 14.8 3.4 3.4 8.2 5.1 14.3 5.1 6.6 0 11.7-2 15.5-6.1 3.8-4.1 5.7-9.5 5.7-16.2v-28.5h2z"
        />
        <path
          id="haus-txt"
          fill="#eee"
          d="M979.4 494.2c3.7 3.8 5.6 9.2 5.6 16.2v31h-2v-31c0-6.4-1.6-11.4-4.9-14.8-3.3-3.4-7.9-5.1-14-5.1-6.8 0-12.2 2-16.2 6.1s-5.9 9.5-5.9 16.2v28.5h-2V466h2v36.9c1.6-4.5 4.3-8 8.1-10.5s8.4-3.8 13.9-3.8c6.5-.1 11.7 1.8 15.4 5.6zM1038.4 493.3c3.2 3.1 4.8 7.7 4.8 13.7v34.4h-2v-11.2c-1.7 3.6-4.2 6.4-7.7 8.4-3.4 2-7.5 3-12.3 3-5.8 0-10.4-1.3-13.7-4-3.3-2.7-4.9-6.2-4.9-10.7 0-4.2 1.5-7.6 4.4-10.2 2.9-2.6 7.7-3.9 14.3-3.9h19.9V507c0-5.5-1.4-9.6-4.2-12.4-2.8-2.8-7-4.2-12.4-4.2-3.8 0-7.3.7-10.6 2s-6.1 3.1-8.5 5.3l-1.4-1.4c2.5-2.4 5.5-4.3 9.1-5.7 3.6-1.4 7.3-2.1 11.3-2.1 6.1 0 10.7 1.6 13.9 4.8zm2.8 33v-11.6h-20c-5.7 0-9.9 1.1-12.5 3.2-2.7 2.2-4 5.1-4 8.8 0 4 1.5 7.1 4.4 9.4 2.9 2.3 7 3.5 12.2 3.5 9.7.1 16.3-4.4 19.9-13.3zM1110.1 488.8v52.5h-2v-13.9c-1.6 4.5-4.2 8-7.8 10.5-3.7 2.5-8.1 3.8-13.3 3.8-6.8 0-12-1.9-15.8-5.6-3.8-3.8-5.7-9.2-5.7-16.2v-31h2v31c0 6.4 1.7 11.4 5.1 14.8 3.4 3.4 8.2 5.1 14.3 5.1 6.6 0 11.7-2 15.5-6.1 3.8-4.1 5.7-9.5 5.7-16.2V489h2zM1133.6 539.6c-3.7-1.4-6.6-3.1-8.6-5.2l1.2-1.6c2 2 4.8 3.6 8.2 4.9 3.4 1.3 7.1 2 11.1 2 6 0 10.4-1 13.2-3.1 2.8-2.1 4.3-4.9 4.3-8.6 0-2.6-.8-4.7-2.3-6.2-1.5-1.5-3.4-2.6-5.6-3.4-2.2-.7-5.2-1.4-9.1-2.2-4.1-.7-7.5-1.5-10-2.4-2.5-.8-4.7-2.2-6.4-4.1-1.7-1.9-2.6-4.5-2.6-7.8 0-3.8 1.6-7 4.7-9.6 3.1-2.6 7.8-3.9 13.9-3.9 3.2 0 6.5.5 9.6 1.5 3.2 1 5.8 2.3 7.7 3.9l-1.2 1.6c-2-1.6-4.5-2.9-7.3-3.8-2.8-.9-5.8-1.3-8.8-1.3-5.5 0-9.6 1.1-12.3 3.2-2.7 2.1-4.1 4.9-4.1 8.4 0 2.8.8 5 2.3 6.5 1.6 1.6 3.5 2.8 5.8 3.5 2.3.7 5.3 1.5 9.1 2.1 4.1.8 7.4 1.6 9.8 2.4 2.4.8 4.5 2.1 6.2 3.9 1.7 1.8 2.5 4.3 2.5 7.5 0 4.1-1.7 7.4-5 9.9s-8.2 3.7-14.5 3.7c-4.1.2-8.1-.4-11.8-1.8z"
        />
      </g>{' '}
    </HomeTitleWrapper>
  );
};

export default HomeTitle;
/*
fill="#c7bba2"

<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
  <rect width="597" height="94" x="940" y="578"/>
  <rect width="597" height="388" x="940" y="154" fill="#3F4E36"/>
  <rect width="27" height="1190" x="890" y="-55" fill="#DDC28C"/>
  <linearGradient id="a" x1="1211.999" x2="1610.999" y1="871.001" y2="871.001" gradientTransform="translate(.00097656 -.00048828)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stopColor="#7d2424"/>
    <stop offset="1" stopColor="#c95353"/>
  </linearGradient>
  <g>
    <path d="M675.3 491.3c3.9 2.3 7 5.4 9.2 9.4 2.2 4 3.4 8.6 3.4 13.7s-1.1 9.6-3.4 13.7-5.3 7.2-9.2 9.5c-3.9 2.3-8.2 3.4-12.9 3.4-5.5 0-10.3-1.5-14.5-4.4-4.2-2.9-7.2-6.9-8.9-11.9v16h-2v-75.3h2v38.8c1.8-4.9 4.8-8.9 9-11.8 4.2-2.9 9.1-4.4 14.5-4.4 4.6-.1 8.9 1 12.8 3.3zm-.9 44.6c3.6-2.1 6.4-5 8.4-8.8 2-3.8 3-8 3-12.7 0-4.7-1-9-3-12.7-2-3.8-4.8-6.7-8.4-8.7-3.6-2.1-7.6-3.1-12-3.1s-8.4 1-12 3.1c-3.6 2.1-6.4 5-8.4 8.7-2 3.8-3 8-3 12.7 0 4.7 1 9 3 12.7 2 3.8 4.8 6.7 8.4 8.8 3.6 2.1 7.6 3.1 12 3.1 4.4.1 8.4-1 12-3.1zM747.5 514.4h-46.7c0 4.7 1 9 3.1 12.7 2.1 3.8 5 6.7 8.7 8.8 3.7 2.1 7.8 3.1 12.4 3.1 3.6 0 7-.7 10.1-2.1 3.1-1.4 5.7-3.4 7.8-6l1.4 1.4c-2.3 2.8-5.1 4.9-8.5 6.4-3.4 1.5-7 2.2-10.8 2.2-5 0-9.5-1.1-13.5-3.4s-7.1-5.4-9.3-9.5c-2.3-4.1-3.4-8.6-3.4-13.7s1-9.6 3.1-13.7c2.1-4 5-7.2 8.7-9.4 3.7-2.3 7.8-3.4 12.4-3.4 4.5 0 8.7 1.1 12.4 3.4 3.7 2.2 6.7 5.3 8.8 9.2 2.1 3.9 3.2 8.4 3.2 13.4v.6zM712 492.8c-3.3 2-6 4.7-8 8.1-2 3.5-3.1 7.3-3.3 11.6h44.8c-.2-4.3-1.3-8.1-3.4-11.6-2-3.5-4.7-6.2-8-8.1-3.3-2-7-2.9-11.1-2.9-4-.1-7.7.9-11 2.9zM793.8 492.6c3.2 3.1 4.8 7.7 4.8 13.7v34.4h-2v-11.2c-1.7 3.6-4.2 6.4-7.7 8.4-3.4 2-7.5 3-12.3 3-5.8 0-10.4-1.3-13.7-4-3.3-2.7-4.9-6.2-4.9-10.7 0-4.2 1.5-7.6 4.4-10.2 2.9-2.6 7.7-3.9 14.3-3.9h19.9v-5.8c0-5.5-1.4-9.6-4.2-12.4-2.8-2.8-7-4.2-12.4-4.2-3.8 0-7.3.7-10.6 2s-6.1 3.1-8.5 5.3l-1.4-1.4c2.5-2.4 5.5-4.3 9.1-5.7 3.6-1.4 7.3-2.1 11.3-2.1 6 .1 10.7 1.7 13.9 4.8zm2.8 33.1v-11.6h-20c-5.7 0-9.9 1.1-12.5 3.2-2.7 2.2-4 5.1-4 8.8 0 4 1.5 7.1 4.4 9.4 2.9 2.3 7 3.5 12.2 3.5 9.6.1 16.3-4.4 19.9-13.3zM865.4 488.2v52.5h-2v-13.9c-1.6 4.5-4.2 8-7.8 10.5-3.7 2.5-8.1 3.8-13.3 3.8-6.8 0-12-1.9-15.8-5.6-3.8-3.8-5.7-9.2-5.7-16.2v-31h2v31c0 6.4 1.7 11.4 5.1 14.8 3.4 3.4 8.2 5.1 14.3 5.1 6.6 0 11.7-2 15.5-6.1 3.8-4.1 5.7-9.5 5.7-16.2v-28.5h2z"/>
  </g>
  <g fill="#FFF">
    <path d="M979.4 494.2c3.7 3.8 5.6 9.2 5.6 16.2v31h-2v-31c0-6.4-1.6-11.4-4.9-14.8-3.3-3.4-7.9-5.1-14-5.1-6.8 0-12.2 2-16.2 6.1s-5.9 9.5-5.9 16.2v28.5h-2V466h2v36.9c1.6-4.5 4.3-8 8.1-10.5s8.4-3.8 13.9-3.8c6.5-.1 11.7 1.8 15.4 5.6zM1038.4 493.3c3.2 3.1 4.8 7.7 4.8 13.7v34.4h-2v-11.2c-1.7 3.6-4.2 6.4-7.7 8.4-3.4 2-7.5 3-12.3 3-5.8 0-10.4-1.3-13.7-4-3.3-2.7-4.9-6.2-4.9-10.7 0-4.2 1.5-7.6 4.4-10.2 2.9-2.6 7.7-3.9 14.3-3.9h19.9V507c0-5.5-1.4-9.6-4.2-12.4-2.8-2.8-7-4.2-12.4-4.2-3.8 0-7.3.7-10.6 2s-6.1 3.1-8.5 5.3l-1.4-1.4c2.5-2.4 5.5-4.3 9.1-5.7 3.6-1.4 7.3-2.1 11.3-2.1 6.1 0 10.7 1.6 13.9 4.8zm2.8 33v-11.6h-20c-5.7 0-9.9 1.1-12.5 3.2-2.7 2.2-4 5.1-4 8.8 0 4 1.5 7.1 4.4 9.4 2.9 2.3 7 3.5 12.2 3.5 9.7.1 16.3-4.4 19.9-13.3zM1110.1 488.8v52.5h-2v-13.9c-1.6 4.5-4.2 8-7.8 10.5-3.7 2.5-8.1 3.8-13.3 3.8-6.8 0-12-1.9-15.8-5.6-3.8-3.8-5.7-9.2-5.7-16.2v-31h2v31c0 6.4 1.7 11.4 5.1 14.8 3.4 3.4 8.2 5.1 14.3 5.1 6.6 0 11.7-2 15.5-6.1 3.8-4.1 5.7-9.5 5.7-16.2V489h2zM1133.6 539.6c-3.7-1.4-6.6-3.1-8.6-5.2l1.2-1.6c2 2 4.8 3.6 8.2 4.9 3.4 1.3 7.1 2 11.1 2 6 0 10.4-1 13.2-3.1 2.8-2.1 4.3-4.9 4.3-8.6 0-2.6-.8-4.7-2.3-6.2-1.5-1.5-3.4-2.6-5.6-3.4-2.2-.7-5.2-1.4-9.1-2.2-4.1-.7-7.5-1.5-10-2.4-2.5-.8-4.7-2.2-6.4-4.1-1.7-1.9-2.6-4.5-2.6-7.8 0-3.8 1.6-7 4.7-9.6 3.1-2.6 7.8-3.9 13.9-3.9 3.2 0 6.5.5 9.6 1.5 3.2 1 5.8 2.3 7.7 3.9l-1.2 1.6c-2-1.6-4.5-2.9-7.3-3.8-2.8-.9-5.8-1.3-8.8-1.3-5.5 0-9.6 1.1-12.3 3.2-2.7 2.1-4.1 4.9-4.1 8.4 0 2.8.8 5 2.3 6.5 1.6 1.6 3.5 2.8 5.8 3.5 2.3.7 5.3 1.5 9.1 2.1 4.1.8 7.4 1.6 9.8 2.4 2.4.8 4.5 2.1 6.2 3.9 1.7 1.8 2.5 4.3 2.5 7.5 0 4.1-1.7 7.4-5 9.9s-8.2 3.7-14.5 3.7c-4.1.2-8.1-.4-11.8-1.8z"/>
  </g>
</svg>



*/
