import React, { Component } from 'react';
import styled from 'styled-components';

import ShortTree from '../scene/trees/ShortTree';
import MediumTree from '../scene/trees/MediumTree';
import TallTree from '../scene/trees/TallTree';
import WaterBg from '../scene/water/WaterBg';
import WaterBody from '../scene/water/WaterBody';
import Shore from '../scene/water/Shore';
import MuteBtn from '../scene/MuteBtn';
import LogoTheme from '../scene/LogoTheme';

/* Component is .home-container */
const HomePageCompDiv = styled.div`
  background: fuchsia;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  font-family: 'Lato', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  color: #fff;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 60vh 20vh;
  z-index: 1;
  & > .grid-ctr {
    
    grid-column: 2;
    grid-row: 2;
    z-index: 20;
    border: 2px solid navy;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    & > .ctr-row-top {
      grid-column: 1/4;
      grid-row: 1;
      border: 2px solid green;
    }
    & > .ctr-row-mid {
      grid-column: 1/4;
      grid-row: 2;
      border: 2px solid yellow;
    }
    & > .ctr-row-bot {
      grid-column: 1/4;
      grid-row: 3;
      border: 2px solid orangered;
    }
  }
`;

const InitialLoad = {
  profile: {
    name: 'HOME',
    pageStyles: {
      background: 'linear-gradient(0deg, #bfbfbf 0%, #838383 100%)',
      color: 'brown',
      fill: '#e47814'
    },
    water: {
      bgGradient: {
        left: '#646464',
        right: '#fff'
      }
    },
    skyGradient: {
      left: '#646464',
      right: '#fff'
    },
    tree: {
      short: {
        branches: '#777',
        leaves: '#5a5a5a',
        opacity: '1'
      },
      medium: {
        branches: '#afafaf',
        leaves: '#afafaf',
        opacity: '0'
      },
      tall: {
        branches: '#8b8b8b',
        leaves: '#8b8b8b',
        opacity: '0',
        flower: {
          base: '#513535',
          frame: '#bd1634',
          petal: '#a90c00',
          stamen: '#fceded'
        }
      }
    }
  }
};
/* NB: Home (on initial load of app) sets state.profile from const InitialLoad object.
 * props.location contains no state (initially).
 * subsequent link clicks load props.location.state onto 
 * Home component's state.profile
 */
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: InitialLoad.profile
    };
  }
  componentDidMount() {
    this.props.location.state
      ? this.setState({ profile: this.props.location.state.profile })
      : this.setState({ profile: InitialLoad.profile });
  }

  render() {
    const { tree, water } = InitialLoad.profile;
    return (
      <HomePageCompDiv className="home-container page" style={this.state.profile.pageStyles}>
        <div className="grid-ctr">
          <div className="ctr-row-top">
            <p className="q1">Learn fast and fix things.</p>
          </div>
          <div className="ctr-row-mid">
            <p className="q2">Learn fast and fix things.</p>
          </div>
          <div className="ctr-row-bot">
            <p className="q3">Learn fast and fix things.</p>
          </div>
        </div>
        <WaterBg {...water} />
        <WaterBody />
        <MediumTree db={tree.medium} />
        <Shore />
        <TallTree db={tree.tall} />
        <ShortTree db={tree.short} />
        <MuteBtn />
        <LogoTheme themeFill={this.props.stylesDB} />
      </HomePageCompDiv>
    );
  }
}

export default Home;
