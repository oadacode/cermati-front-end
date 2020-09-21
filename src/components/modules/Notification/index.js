import React from 'react';
import AnimateHeight from 'react-animate-height';
import {
  Button,
  Container,
  Content,
  Link,
  Paragraph,
} from './notification.element';

class Notification extends React.Component {
  state = {
    height: 'auto',
  };

  hideNotif = () => {
    this.setState({ height: this.state.height === 0 ? 'auto' : 0 });
  };

  render() {
    return (
      <Container>
        <AnimateHeight duration={500} height={this.state.height}>
          <Content>
            <Paragraph>
              By accessing and using this website, you acknowledge that you have
              read and understand our{' '}
              <Link href="/#cookie-policy">Cookie Policy</Link>,{' '}
              <Link href="/#cookie-policy">Privacy Policy</Link>, and our{' '}
              <Link href="/#cookie-policy">Terms of Service.</Link>
            </Paragraph>
            <Button onClick={this.hideNotif}>Got it</Button>
          </Content>
        </AnimateHeight>
      </Container>
    );
  }
}

export default Notification;
