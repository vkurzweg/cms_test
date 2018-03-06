/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const Button = styled.button`
  border: 1px solid black;
  width: 208px;
  height: 25px;
  font-family: SuisseLight;
  text-transform: uppercase;
  font-size: 12px;
  padding: 3px;
  display: block;
  margin: 0 auto;
  white-space: no-wrap;
  margin-left: 20%;
  letter-spacing: 1px;
 &:hover, &:active, &:focus {
   background-color: black;
   color: #FAFAFA;
   border: none;
   outline: 0;
}

`;


function Logo() {
  return (
    <div id="info" className="container-fluid" style={{ width: '100%', margin: '0 auto', color: 'black'}}>
      <div className="row" style={{ paddingLeft: '11.6vw', paddingRight: '12.25vw', letterSpacing: '1px', fontFamily: 'SuisseRegular', color: 'black', fontSize: '.9vw', width: '100%', margin: '0 auto', marginTop: '10vh', marginBottom: '2vh' }}>
        <div className="col-sm-3">
          <p>Sang Bleu London <br />29B Dalston Ln,<br />London E8 3DF</p>
        </div>
        <div className="col-sm-3">
          <p>+44 20 8616 0840<br />london@sangbleu.tattoo<br />@sangbleutattoolondon</p>
        </div>
        <div className="col-sm-3">
          <p>Open 11am — 7pm<br />7 days a week</p>
        </div>
        <div className="col-sm-3">
          <Button className="btn btn-default">Book an Appointment</Button>
        </div>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;


