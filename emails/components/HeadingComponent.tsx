import { Container, Head, Heading, Html, Img } from '@react-email/components';
import { FC } from 'react';
import React from 'react';

interface IHeadingProps {
  icon?: boolean;
  heading: string | React.ReactNode;
}

const HeadingComponent: FC<IHeadingProps> = ({ icon, heading }) => {
  return (
    <Html>
      <Head />
      <Container className='h-[197px] bg-primary text-center rounded-t-md flex-col'>
        {icon && (
          <Img
            src='https://i.ibb.co/qNsj6SX/svgviewer-png-output-24.png'
            className='mx-auto'
          />
        )}
        <Heading
          as='h1'
          style={{
            fontFamily: 'DM Serif Display',
          }}
          className='text-white m-0 mt-1 text-2xl sm:text-3xl md:text-4xl font-semibold'
        >
          {heading}
        </Heading>
      </Container>
    </Html>
  );
};

export default HeadingComponent;
