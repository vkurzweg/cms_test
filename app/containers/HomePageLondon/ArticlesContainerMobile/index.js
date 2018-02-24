/**
 *
 * ArticlesContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import {Link, RichText, Date} from 'prismic-reactjs';
import styled from 'styled-components';
import Modal from 'react-modal';
import Icon from 'antd/lib/icon';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactHover from 'react-hover';
import Footer from 'components/london/Footer';
import FooterMobile from 'components/london/FooterMobile';

const Title = styled.h3`
  padding-top: 10vh;
  font-family: SangBleu;
  text-align: center;
  font-size: 7vw;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const Subtitle = styled.h4`
  font-family: SuisseLight;
  font-size: 5vw;
  margin-top: 1vh;
  text-align: center;
  letter-spacing: 2px;
  padding-bottom: 10vh;
`;

const StyledImg = styled.img`
  width: 100vw;
  height: 60vh;
  object-fit: cover;
`;

const Close = styled.div`
  position: absolute;
  margin-left: 80vw;
  margin-top: -10vh;
  font-size: 7vw;
  color: black;
`;

const ModalTitle = styled.h3`
  margin-top: 10vh;
  margin-bottom: 5vh;
  text-align: center;
  font-family: SangBleu;
  font-size: 6vw;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const ModalImg = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
  padding: 1em;
  height: 45vh;
  object-fit: cover;
`;

const ModalText = styled.p`
  margin-top: 5vh;
  padding: 1%;
  font-size: 3vw;
  font-family: SuisseLight;
  line-height: 2em;
  width: 100%;
`;

const Button = styled.button`
  border: 1px solid black;
  width: 100%;
  font-family: SuisseLight;
  text-transform: uppercase;
  font-size: 6vw;
  white-space: no-wrap;
  display: block;
  padding: 2%;
`;

export class ArticlesContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {
      docs: [],
      modal1IsOpen: false,
      modal2IsOpen: false,
      modal3IsOpen: false
    }
    this.openModal1 = this.openModal1.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.openModal3 = this.openModal3.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
  }

  openModal1() {
    console.log('clicked');
    this.setState({modal1IsOpen: true});
  }

  closeModal1() {
    console.log('clicked')
    this.setState({modal1IsOpen: false});
  }

  openModal2() {
    this.setState({modal2IsOpen: true});
  }

  closeModal2() {
    this.setState({modal2IsOpen: false});
  }

  openModal3() {
    this.setState({modal3IsOpen: true});
  }

  closeModal3() {
    this.setState({modal3IsOpen: false});
  }

  componentDidMount() {
    const apiEndpoint = "https://sb-london-blog.prismic.io/api";
    Prismic.getApi(apiEndpoint).then(function(api) {
      return api.query(""); // An empty query will return all the documents
    }).then(function(response) {
      console.log("Documents: ", response.results);
      const documents = response.results;
      this.setState({docs: documents})
    }.bind(this), function(err) {
      console.log("Something went wrong: ", err);
    });
  }

  render() {
    if (this.state.docs.length > 0) {
      let documents = this.state.docs
      let article1 = documents[0].data.blog_post;
      let article2 = documents[1].data.blog_post;
      let article3 = documents[2].data.blog_post;
      let article1image2;
      let article1image3;
      let article1image4;
      article1.image2 ? article1image2 = <ModalImg src={article1.image2.value.main.url} alt={article1.image2.value.alt} /> : article1image2;
      article1.image3 ? article1image3 = <ModalImg src={article1.image3.value.main.url} alt={article1.image3.value.alt} /> : article1image3;
      article1.image4 ? article1image4 = <ModalImg src={article1.image4.value.main.url} alt={article1.image4.value.alt} /> : article1image4;
      let article2image2;
      let article2image3;
      let article2image4;
      article2.image2 ? article2image2 = <ModalImg src={article2.image2.value.main.url} alt={article2.image2.value.alt} /> : article2image2;
      article2.image3 ? article2image3 = <ModalImg src={article2.image3.value.main.url} alt={article2.image3.value.alt} /> : article2image3;
      article2.image4 ? article2image4 = <ModalImg src={article2.image4.value.main.url} alt={article2.image4.value.alt} /> : article2image4;
      let article3image2;
      let article3image3;
      let article3image4;
      article3.image2 ? article3image2 = <ModalImg src={article3.image2.value.main.url} alt={article3.image2.value.alt} /> : article3image2;
      article3.image3 ? article3image3 = <ModalImg src={article3.image3.value.main.url} alt={article3.image3.value.alt} /> : article3image3;
      article3.image4 ? article3image4 = <ModalImg src={article3.image4.value.main.url} alt={article3.image4.value.alt} /> : article3image4;
      let articlesNum = this.state.docs.length;
      let link;
      articlesNum > 3 ? link = <a href="#" style={{ fontStyle: 'underline', textAlign: 'center', textDecoration: 'none', cursor: 'pointer' }}>See all articles</a> : link;
    return (
      <div style={{ width: '100%' }}>
        <Helmet>
          <title>ArticlesContainer</title>
          <meta name="description" content="Description of ArticlesContainer" />
        </Helmet>

        <div style={{ margin: '1em auto' }}>
        <h3 style={{ fontFamily: 'SuisseIntlSemiBold', textTransform: 'uppercase', fontSize: '5.5vw', letterSpacing: '1px', marginLeft: '4vw' }}>blog</h3>

        <div style={{ height: '90vh' }}>
          <a onClick={this.openModal1} href="#" style={{ textDecoration: 'none' }}>
            <StyledImg src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
            <Title>
              {article1.title.value[0].text}
            </Title>
            <Subtitle>
              {article1.subhead.value}
            </Subtitle>
          </a>
        </div>


        <div style={{ height: '90vh' }}>
          <a onClick={this.openModal2} href="#" style={{ textDecoration: 'none' }}>
            <StyledImg src={article2.main_image.value.main.url} alt={article2.main_image.value.alt} />
            <Title>
              {article2.title.value[0].text}
            </Title>
            <Subtitle>
              {article2.subhead.value}
            </Subtitle>
          </a>
        </div>

        <div style={{ height: '90vh' }}>
          <a onClick={this.openModal3} href="#" style={{ textDecoration: 'none' }}>
            <StyledImg src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
            <Title>
              {article3.title.value[0].text}
            </Title>
            <Subtitle>
              {article3.subhead.value}
            </Subtitle>
          </a>
        </div>

          </div>

          {link}


        <Modal
          isOpen={this.state.modal1IsOpen}
          onRequestClose={this.closeModal1}
          contentLabel={article1.title.value[0].text}
          style={{
                overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                      width: '100%',
                      margin: '0 auto',
                      marginTop: '15%',
                      overflow: 'scroll',
                    },
                content: {
                  top: '65%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  marginTop: '75%',
                  border: '1px solid black',
                  WebkitOverflowScrolling: 'auto',
                },
              }}
          >
          <div style={{ width: '100%' }}>
            <Close onClick={this.closeModal1}>
              <Icon type="close" />
            </Close>
            <ModalTitle>
              {article1.title.value[0].text}
            </ModalTitle>
            <ModalImg src={article1.main_image.value.main.url} alt={article1.main_image.value.alt} />
            <ModalText>{article1.body.value[0].text}</ModalText>
            {article1image2}
            {article1image3}
            {article1image4}
            <Button onClick={this.closeModal1}>Close</Button>
          </div>
        </Modal>

        <Modal
          isOpen={this.state.modal2IsOpen}
          onRequestClose={this.closeModal2}
          contentLabel={article2.title.value[0].text}
          style={{
                overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                      width: '100%',
                      margin: '0 auto',
                      marginTop: '15%',
                      overflow: 'scroll',
                    },
                content: {
                  top: '65%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  marginTop: '75%',
                  border: '1px solid black',
                  WebkitOverflowScrolling: 'auto',
                },
              }}
          >
          <div style={{ width: '100%' }}>
            <Close onClick={this.closeModal2}>
              <Icon type="close" />
            </Close>
            <ModalTitle>
              {article2.title.value[0].text}
            </ModalTitle>
            <ModalImg src={article2.main_image.value.main.url} alt={article1.main_image.value.alt} />
            <ModalText>{article2.body.value[0].text}</ModalText>
            {article2image2}
            {article2image3}
            {article2image4}
            <Button onClick={this.closeModal2}>Close</Button>
          </div>
        </Modal>

        <Modal
          isOpen={this.state.modal3IsOpen}
          onRequestClose={this.closeModal3}
          contentLabel={article3.title.value[0].text}
          style={{
                overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.75)',
                      width: '100%',
                      margin: '0 auto',
                      marginTop: '15%',
                      overflow: 'scroll',
                      zIndex: '100'
                    },
                content: {
                  top: '65%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  marginTop: '75%',
                  border: '1px solid black',
                  WebkitOverflowScrolling: 'auto',
                  zIndex: '100'
                },
              }}
          >
          <div style={{ width: '100%' }}>
            <Close onClick={this.closeModal3}>
              <Icon type="close" />
            </Close>
            <ModalTitle>
              {article3.title.value[0].text}
            </ModalTitle>
            <ModalImg src={article3.main_image.value.main.url} alt={article3.main_image.value.alt} />
            <ModalText>{article3.body.value[0].text}</ModalText>
            {article3image2}
            {article3image3}
            {article3image4}
            <Button onClick={this.closeModal3}>Close</Button>
          </div>
        </Modal>
        <div style={{ position: 'relative', height: '15vh', width: '100%', bottom: '0' }}>
        <FooterMobile />
        </div>
      </div>
    )} else {
      return (
        <p>Loading...</p>
      )
    }
  }
}

ArticlesContainer.propTypes = {
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
)(ArticlesContainer);

// <img src={article1.image.value.main.url} style={{ width: '100%' }} />
// <img src={article2.image.value.main.url} style={{ width: '100%', display: 'block', margin: '0 auto', padding: '2%' }}/>
// <img src={article3.image.value.main.url} style={{ width: '100%', display: 'block', margin: '0 auto', padding: '2%' }} />
