import React from "react";
import Marquee from 'react-double-marquee';

const InfiniteSroll = () => {
  return (
    <div
      style={{
        color: 'var(--textNormal)',
        width: '100vw',
        whiteSpace: 'nowrap',
        padding: '1rem .3rem',
        borderTop: '1px solid var(--textNormal)',
        borderBottom: '1px solid var(--textNormal)',
      }}
    >
      <Marquee direction='left' speed={0.09}>
    MY NAME IS PAU LARREA  -  VERY NICE TO MEET YOU!  -  PLEASE TAKE A LOOK
    AROUND  -  HERE YOU CAN FIND A BIT OF MYSELF AND SOME OF MY PERSONAL
    PROJECTS  -  LET'S CREATE TOGETHER  - 
      </Marquee>
    </div>
  )
}

export default InfiniteSroll
