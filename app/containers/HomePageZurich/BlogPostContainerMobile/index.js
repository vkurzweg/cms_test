/**
 *
 * BlogPostContainer
 *
 */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

const Title = styled.h3`
  text-align: center;
  font-family: BRRR;
  color: #FAFAFA;
  font-size: 20px;
  letter-spacing: -1px;
  text-transform: uppercase;
  padding-bottom: 3%;
  padding-left: 5%;
  padding-top: 10vh;
`;

const PostDate = styled.h4`
  font-family: SuisseCond;
  font-size: 19px;
  text-align: center;
  color: white;
  margin-top: 3vh;
  letter-spacing: 2.36px;
`;

const PostImage = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const PostContent = styled.p`
  font-size: 14px;
  color: white;
  font-family: SuisseRegular;
  letter-spacing: 1.49px;
  width: 80%;
  margin: 0 auto;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export class BlogPostContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      button: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
     window.addEventListener('scroll', this.handleScroll);
     }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

   handleScroll(event) {
    console.log('scrolling')
    let lastScrollTop = 0;
    var st = document.documentElement.scrollTop;
       if (st > lastScrollTop){
         this.setState({
           button: false
         });
       } else {
         this.setState({
           button: true
         })
       }
       st = lastScrollTop;
     }

  render() {
    if (this.props.currentPost !== null) {
      const article = this.props.currentPost[0].data.blog_post;
      console.log(this.props.currentPost[0].data.blog_post);
      let image2 = <div />;
      let image3 = <div />;
      let image5 = <div />;
      let image6 = <div />;
      let image7 = <div />;
      let image8 = <div />;
      let image9 = <div />;
      let image10 = <div />;
      let articlePart2 = <div />;
      let articlePart3 = <div />;
      let image4 = <div />;
      if (article.image2) image2 = <PostImage src={article.image2.value.main.url} />;
      if (article.image3) image3 = <PostImage src={article.image3.value.main.url} />;
      if (article.article_part_2) articlePart2 = article.article_part_2.value.map((value, idx, values) => (
                <PostContent>{value.text}</PostContent>
              ))
      if (article.article_part_3) articlePart3 = article.article_part_3.value.map((value, idx, values) => (
                <PostContent>{value.text}</PostContent>
              ))
      if (article.image4) image4 = <PostImage src={article.image4.value.main.url} />;
      if (article.image5) image5 = <PostImage src={article.image5.value.main.url} />;
      if (article.image6) image6 = <PostImage src={article.image6.value.main.url} />;
      if (article.image7) image7 = <PostImage src={article.image7.value.main.url} />;
      if (article.image8) image8 = <PostImage src={article.image8.value.main.url} />;
      if (article.image9) image9 = <PostImage src={article.image9.value.main.url} />;
      if (article.image10) image10 = <PostImage src={article.image10.value.main.url} />;
      let displayButton = 'block';
      this.state.button ? displayButton : displayButton = 'none';
      return (
        <div onScroll={this.handleScroll} style={{ position: 'relative', overflow: 'scroll', height: '100%' }}>
          <div
            type="close"
            onClick={this.props.handleDismissPost}
            style={{
              position: 'fixed', backgroundColor: '#FF001F', fontSize: '19px', right: '0', top: '0', bottom: '0', width: '30px', height: '100% !important', overflow: 'visible'
            }}
          >
            <h4 className="close-label">close</h4>
          </div>
          <div style={{ width: '100%', margin: '0 auto', marginRight: '30px' }}>
            <div style={{ marginRight: '30px' }} >
              <Title>{article.title.value[0].text}</Title>
            </div>
            <PostDate>{article.date.value}</PostDate>
            <PostImage src={article.main_image.value.main.url} />
            {article.article_part_1.value.map((value, idx, values) => (
              <PostContent>{value.text}</PostContent>
            ))}
            {image2}
            {image3}
            {image4}
            {articlePart2}
            {image5}
            {image6}
            {image7}
            {articlePart3}
            {image8}
            {image9}
            {image10}
          </div>
        </div>
      );
    }
    return (
      <div style={{ position: 'relative', overflow: 'scroll', height: '100%' }}>
        <button
          type="close"
          onClick={this.props.handleDismissPost}
          style={{
            position: 'absolute', backgroundColor: '#FF001F', fontSize: '3vw', right: '0', top: '0', width: '40px', height: '120vh'
          }}
        >
          <h4 className="close-label">close</h4>
        </button>
        <p>Loading...</p>
      </div>
    );
  }
}

BlogPostContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleDismissPost: PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, )(BlogPostContainer);
