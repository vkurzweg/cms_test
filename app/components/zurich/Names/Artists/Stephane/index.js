/**
*
* Maxime
*
*/

import React from 'react';
import styled from 'styled-components';
import ReactHover from 'react-hover';
import Instafeed from 'react-instafeed';

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: 0;
  &:hover, &:active, &:focus {
    outline: 0
  }
`;

class Stephane extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const options = {
      followCursor:false,
    }
    return (
      <Button onClick={this.props.openLightbox.bind(this, '2179164383')}>
        <ReactHover
          options={options}>
          <ReactHover.Trigger type='trigger'>
            <div>
              <h2 className="hover-name stephane">
                Stephane Devidal<br /><span style={{ fontSize: '.7vw', marginLeft: '6vw', textTransform: 'uppercase' }}>@stephane_devidal_tattoo</span>
              </h2>
            </div>
          </ReactHover.Trigger>
          <ReactHover.Hover type='hover'>
            <div id="instafeed-4" className='hover-image'>
              <Instafeed
                limit='1'
                ref='instafeed'
                resolution='standard_resolution'
                sortBy='most-liked'
                target={'instafeed-4'}
                template="<div class='bg' style='background-image: url({{image}})'></div>"
                userId='2179164383'
                clientId='da06fb6699f1497bb0d5d4234a50da75'
                accessToken='258559306.da06fb6.c222db6f1a794dccb7a674fec3f0941f' />
            </div>
          </ReactHover.Hover>
        </ReactHover>
      </Button>
    );
  }
}

Stephane.propTypes = {

};

export default Stephane;

// <a href='https://www.instagram.com/stephane_devidal_tattoo/?hl=en' target='_blank' style={{ textDecoration: 'none' }}>
