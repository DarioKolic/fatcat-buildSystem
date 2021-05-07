import React from 'react';
import Wrapper from '../src/lib/components/Wrapper';
import Navigation from '../src/lib/components/Navigation';
import { Flexbox } from '../src/lib/components/Flexbox';

function App() {
  return (
    <>
      <Navigation />
      <Wrapper center>
        <Flexbox alignCenter spaceEvenly flexWrap>
          <Flexbox column>
            <p>Test</p>
            <p>Test</p>
          </Flexbox>
          <Flexbox spaceBetween>
            <p>Test</p>
            <p>Test</p>
          </Flexbox>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </Flexbox>
      </Wrapper>
    </>
  );
}

export default App;
