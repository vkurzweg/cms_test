/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { Image } from 'cloudinary-react';

const StyledImage = styled(Image)`
  width: 5vw;
  display: block;
  margin: 0 auto;
`;

const A = styled.a`
  text-decoration: none;
  color: black;
  padding-top: 10px;
  &:hover {
    color: black;
  }
`;

const Button = styled.button`
  border: 1px solid black;
  width: 200px;
  height: 25px;
  font-family: SuisseLight;
  text-transform: uppercase;
  font-size: 12px;
  display: block;
  margin: 0 auto;
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

function Footer() {
  return (
    <div style={{ width: '100%', fontFamily: 'SuisseLight', textTransform: 'uppercase', color: 'black', fontSize: '3vw', lineHeight: '2', textAlign: 'center', margin: '0 auto', marginRight: '0', marginLeft: '0', paddingRight: '0', paddingLeft: '0', paddingBottom: '10vh' }}>
      <a style={{ color: 'black', paddingTop: '5vh' }} href="mailto:london@sangbleu.tattoo" target="_blank">
        <Button className="btn btn-default">Book an Appointment</Button>
      </a>
      <A href="https://www.instagram.com/sangbleutattoolondon/" target="_blank">
        <p style={{ paddingTop: '15px' }}>instagram</p>
      </A>
      <A href="mailto:london@sangbleu.tattoo" target="_blank">
        <p>london@sangbleu.tattoo</p>
      </A>
      <div style={{ position: 'relative', height: '100%', display: 'flex', width: '100%', marginTop: '15vh', paddingBottom: '5vh', lineHeight: '.5' }}>
        <div style={{ width: '50%', position: 'absolute', bottom: '0' }}>
          <A href="http://www.sangbleu.com" target="_blank">
            <p style={{ paddingTop: '15px' }}>sangbleu.com</p>
          </A>
          <A href="https://sangbleu.com/privacypolicy/" target="_blank">
            <p style={{ paddingTop: '15px' }}>Privacy Policy</p>
          </A>
          <A href="https://sangbleu.com/termsandconditions/" target="_blank">
            <p style={{ paddingTop: '15px' }}>T&C<span style={{ textTransform: 'lowercase' }}>s</span></p>
          </A>
        </div>
        <div style={{ width: '50%', position: 'absolute', bottom: '0', left: '50%' }}>
          <A href="/zurich">
            <StyledImage cloudName="kurzweg" publicId="sangbleu/logozurich" alt="sang bleu london" quality="auto" crop="scale" responsive />
            <p style={{ paddingTop: '2vh' }}>Sang Bleu Zurich</p>
          </A>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {

};

export default Footer;
