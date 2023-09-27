import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import Footer from './components/Footer';
import HeadingComponent from './components/HeadingComponent';

interface ThanksForContactingProps {
  username?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const content = [
  {
    id: 1,
    text: `Thank you for reaching out to us at LynkTown. We appreciate your interest in our social commerce platform and are thrilled to assist you.`,
  },
  {
    id: 2,
    text: `
We understand that you have questions and may be seeking information regarding our platform's features, pricing, or how it can benefit you. We're here to provide you with all the information you need to make an informed decision. Our support team will soon recah out to you. 
`,
  },
  {
    id: 3,

    text: (
      <>
        If you want to contact our sales team, kindly schedule a meeting at your
        convinience by following the link here:
        <br />
        <Link href='https://calendly.com/lynktown-support'>
          https://calendly.com/lynktown-support
        </Link>
      </>
    ),
  },
];

export const ThanksForContacting = ({
  username = `[User Name]`,
}: ThanksForContactingProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for reaching out to us at LynkTown. We appreciate your
        interest in our social commerce platform and are thrilled to assist you
      </Preview>
      <Font
        fontFamily='DM Serif Display'
        fallbackFontFamily='Verdana'
        webFont={{
          url: 'https://fonts.gstatic.com/s/dmserifdisplay/v15/-nFnOHM81r4j6k0gjAW3mujVU2B2G_5x0ujy.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle='normal'
      />
      <Font
        fontFamily='DM Sans'
        fallbackFontFamily='Verdana'
        webFont={{
          url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K4.woff2',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle='normal'
      />
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: '#6A5B40',
                primaryLight: '#857250',
                textPrimary: '#3B3B3B',
              },
              fontFamily: {
                dmSerif: 'DM Serif Display',
                dmSans: 'DM Sans',
              },
            },
          },
        }}
      >
        <Body className=' my-auto mx-auto font-sans'>
          <Container className='my-8 mx-auto  max-w-xl  w-full '>
            <Section className='bg-[#f3f1ee]  py-8 '>
              <Img
                width={145}
                src={`https://i.ibb.co/zfhMv0C/lynktownlogo.png`}
                className='mx-auto'
              />
              <Container
                style={{
                  boxShadow: `0px 20px 25px -5px #0000001A`,
                }}
                className=' max-w-[500px] mt-5 bg-white rounded--md  '
              >
                <HeadingComponent
                  icon={true}
                  heading='Thank you for contacting'
                />

                <Container className='py-5 px-4 rounded-b-md font-sans text-textPrimary '>
                  <Text className='text-lg font-bold'>Dear {username},</Text>
                  {content.map(item => {
                    const { id, text } = item;
                    return (
                      <Text className='text-base' key={id}>
                        {text}
                      </Text>
                    );
                  })}

                  <Text className='text-base '>
                    Best regards, <br /> Team LynkTown <br />
                    <Link href='https://www.lynktown.com'>
                      www.lynktown.com
                    </Link>
                  </Text>
                </Container>
              </Container>
            </Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ThanksForContacting;
