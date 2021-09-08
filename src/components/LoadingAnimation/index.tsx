import React from 'react';
import { Container, LoadingAnimationElement } from './styles';
 
const LoadingAnimation: React.FC = () => {
  return (
    <>
      <Container>
        <LoadingAnimationElement>
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </LoadingAnimationElement>
      </Container>
    </>
  );
}
 
export default LoadingAnimation;