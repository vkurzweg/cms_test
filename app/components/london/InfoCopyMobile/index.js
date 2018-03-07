/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid black;
  width: 200px;
  height: 25px;
  font-family: SuisseLight;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  border-radius: 2px;
  padding: 3px;
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
    <div className="container" style={{ width: '100%', margin: '0 auto', color: 'black', paddingTop: '8vh', paddingBottom: '1vh' }}>
      <div style={{ marginLeft: '34vw' }}>
        <div style={{ fontSize: '3vw', fontFamily: 'SuisseRegular', letterSpacing: '1px', color: 'black', width: '100%' }}>
          <p>29B Dalston Ln,<br /> London E8 3DF</p>
          <div style={{ fontSize: '3vw', fontFamily: 'SuisseRegular', letterSpacing: '1px', color: 'black', width: '100%' }}>
            <p>+44 20 8616 0840<br />
            london@sangbleu.tattoo<br />
            @sangbleutattoolondon</p>
          </div>
          <p>Open 11am — 7pm<br />7 days a week</p>
        </div>
        <a style={{ color: 'black', paddingTop: '5vh', fontFamily: 'SuisseLight', letterSpacing: '2px' }} href="mailto:london@sangbleu.tattoo" target="_blank">
          <Button className="btn btn-default">Book an Appointment</Button>
        </a>
      </div>
    </div>
  );
}

Logo.propTypes = {

};

export default Logo;
