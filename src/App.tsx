import React from 'react';
import { GlobalResetStyle } from './styled/global-reset.styled';
import Email from './Email';
import InputValid from './InputValid';
import Todo from './Todo';
import Min from './set-selector';
import Dnd from './Dnd';
import Framer, { FramerContainer } from './Framer';
import FramerCircle from './Framer-child';
import FramerEvent from './Framer-event';
import FramerLog from './Framer-log';
import FramerPreSence from './Framer-presence';
import FramerLayout from './Framer-layout';
import FramerLayout2 from './Framer-layout2';
import Test from './testS';

{/* <Framer />
<FramerCircle />
   <FramerEvent />
      <FramerLog />
         <FramerPreSence />
          <FramerLayout />
  <br />
  <br />
  <br />
  <InputValid />
  <Todo />
  <Email />
  <Min />
  <Dnd /> */}
function App() {
  return (
    <>
      <GlobalResetStyle />
      <FramerLayout2 />
    </>
  );
}

export default App;
