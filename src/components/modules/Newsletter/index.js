import React from 'react';
import AnimateHeight from 'react-animate-height';
import {
  Button,
  HeadingNews,
  IconClose,
  Paragraph,
  FormWrapper,
  Input,
  NewsContainer,
} from './newsletter.element';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      isCloseNews: false,
      isShowNews: false,
    };
  }

  hideNotif = () => {
    this.setState({ height: 0 });
  };

  showNotif = () => {
    if (document.cookie !== 'closeNotifNews')
      this.setState({ height: 'auto', isShowNews: true });
  };

  closeNotif = () => {
    this.setState({ isCloseNews: true }, () => {
      this.cookieSetter();
      this.hideNotif();
    });
  };

  componentDidMount() {
    this.scrollHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    const { isCloseNews } = this.state;
    const { isCloseNews: oldisCloseNews } = prevState;
    if (oldisCloseNews !== isCloseNews) {
      window.removeEventListener('scroll', this.scroller);
      this.scrollHandler();
    }
  }

  scrollHandler = () => {
    if (document.cookie !== 'closeNotifNews=true')
      window.addEventListener('scroll', this.scroller);
  };

  cookieSetter = () => {
    document.cookie = 'closeNotifNews=true;max-age=600';
  };

  scroller = () => {
    const { isCloseNews } = this.state;
    let last_position = 0;
    let ticking = false;

    if (isCloseNews === false) {
      (function () {
        last_position = window.scrollY;
        if (!ticking) {
          window.requestAnimationFrame(
            function () {
              this.popUpNewsHandler(last_position);

              ticking = false;
            }.bind(this)
          );
          ticking = true;
        }
      }.bind(this)());
    }
  };

  popUpNewsHandler = () => {
    const windowHeight = document.documentElement.clientHeight;
    const scrollHeight = window.pageYOffset;
    const scrollProgress = scrollHeight / windowHeight;

    if (scrollProgress >= 1 / 3 || this.state.isShowNews) {
      this.showNotif();
    } else {
      this.hideNotif();
    }
  };

  render() {
    return (
      <AnimateHeight duration={500} height={this.state.height}>
        <NewsContainer>
          <HeadingNews>{this.props.title}</HeadingNews>
          <IconClose onClick={this.closeNotif}>x</IconClose>
          <Paragraph>{this.props.content}</Paragraph>
          <FormWrapper>
            <Input placeholder="Email address" />
            <Button>{this.props.btnTitle}</Button>
          </FormWrapper>
        </NewsContainer>
      </AnimateHeight>
    );
  }
}

export default Newsletter;
