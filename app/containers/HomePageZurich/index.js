/**
 *
 * HomePageZurich
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import ArticlesContainer from './ArticlesContainer';
import ArticlesContainerInitial from './ArticlesContainerInitial';
import InfoCopy from 'components/zurich/InfoCopy';
import InstaHover from 'components/zurich/InstaHover';
import Center from './Center';
import Right from './Right';
import Left from './Left';
import Icon from 'antd/lib/icon';
import Drawer from 'material-ui/Drawer';
import About from 'components/zurich/About';


const Background = styled.div`
  width: calc(100vw - 80px);
  margin: 0 auto;
  &:hover {
    background-color: #EB3331;
  }
`;

const style = {
  bg: {
    backgroundColor: '#000000',
    color: '#F5F5F5',
    height: '100vh',
    overflow: 'visible'
  }
};

export class HomePageZurich extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
     super(props);
     this.state = {
      aboutOpen: false,
      blogOpen: false,
      initial: true,
    };
    this.handleAboutToggle = this.handleAboutToggle.bind(this);
    this.handleBlogToggle = this.handleBlogToggle.bind(this);
    this.handleAboutClose = this.handleAboutClose.bind(this);
    this.handleBlogClose = this.handleBlogClose.bind(this);
    this.handleFirstBlogClick = this.handleFirstBlogClick.bind(this);
   }

   handleAboutToggle(){
    return this.setState({aboutOpen: !this.state.aboutOpen})
  }

   handleBlogToggle() {
    return this.setState({blogOpen: !this.state.blogOpen})
  }

   handleAboutClose() {
    return this.setState({aboutOpen: false})
  }

   handleBlogClose() {
    return this.setState({blogOpen: false})
  }

  handleFirstBlogClick() {
    return this.setState({initial: false, blogOpen: true})
  }

  render() {
    let content = <Center />
    this.state.aboutOpen ? content = <Right /> : content;
    this.state.blogOpen ? content = <Left /> : content;
    if (this.state.initial) {
      return (
        <div className='initial-container'>
          <Helmet>
            <title>HomePageZurich</title>
            <meta name="description" content="Description of HomePageZurich" />
          </Helmet>
          <div style={{ position: 'absolute', width: '80px', height: '100%', marginLeft: '-80px' }} onClick={this.handleAboutToggle}>
            <h4 style={{ marginLeft: '50px', marginTop: '40vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', transform: 'rotate(180deg)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>information</h4>
            <Drawer
              open={this.state.aboutOpen}
              width='50%'
              containerStyle={style.bg}
            >
              <div>
                <h4 style={{ right: '0', marginRight: '1vw', marginTop: '40vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', transform: 'rotate(180deg)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>information</h4>
                <About />
              </div>
            </Drawer>
          </div>
          <div className='blog-initial' onClick={this.handleFirstBlogClick}>
            <div style={{ position: 'relative', height: '100vh', width: '50vw' }}>
              <h4 style={{ marginLeft: '15px', marginTop: '44vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>blog</h4>
              <ArticlesContainerInitial />
            </div>
            <Drawer
              open={this.state.blogOpen}
              width='50%'
              containerStyle={style.bg}
              openSecondary={true}
            >
              <div>
                <h4 style={{ left: '0', marginLeft: '1vw', marginTop: '44vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>blog</h4>
                <ArticlesContainer />
              </div>
            </Drawer>
          </div>
          {content}
        </div>
        )} else {
      return (
        <div style={{ position: 'relative', height: '100vh', backgroundColor: '#EB3331', borderLeft: '40px solid black', borderRight: '40px solid black',  height: '100vh' }}>
          <Helmet>
            <title>HomePageZurich</title>
            <meta name="description" content="Description of HomePageZurich" />
          </Helmet>
          <div style={{ position: 'absolute', width: '80px', height: '100%', marginLeft: '-80px' }} onClick={this.handleAboutToggle}>
            <h4 style={{ marginLeft: '50px', marginTop: '40vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', transform: 'rotate(180deg)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>information</h4>
            <Drawer
              open={this.state.aboutOpen}
              width='50%'
              containerStyle={style.bg}
            >
              <div>
                <h4 style={{ right: '0', marginRight: '1vw', marginTop: '40vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', transform: 'rotate(180deg)', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>information</h4>
                <About />
              </div>
            </Drawer>
          </div>
          <div style={{ position: 'absolute', width: '80px', height: '100%', right: '0' }} onClick={this.handleBlogToggle}>
            <h4 style={{ marginLeft: '90px', marginTop: '44vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>blog</h4>
            <Drawer
              open={this.state.blogOpen}
              width='50%'
              containerStyle={style.bg}
              openSecondary={true}
            >
              <div>
                <h4 style={{ left: '0', marginLeft: '1vw', marginTop: '44vh', fontSize: '1.3vw', letterSpacing: '2px', zIndex: '100', position: 'absolute', color: '#FFFFFF', writingMode: 'vertical-lr', textTransform: 'uppercase', textAlign: 'center', fontFamily: 'SuisseCond' }}>blog</h4>
                <ArticlesContainer />
              </div>
            </Drawer>
          </div>
          {content}
        </div>
      )}
  }
}

HomePageZurich.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(HomePageZurich);

// <Icon type="caret-right" style={{ marginLeft: '1.5vw', position: 'absolute', width: '2.5vw', color: '#D9453C', paddingTop: '45vh', fontSize: '2.2vw', zIndex: '100' }} />
// <Icon type="caret-left" style={{ right: '0', marginRight: '1.5vw', position: 'absolute', width: '2.5vw', color: '#D9453C', paddingTop: '45vh', fontSize: '2.2vw', zIndex: '100' }} />

