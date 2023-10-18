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
    text: `We are thrilled to welcome you to our vibrant social commerce platform for fashion enthusiasts! Your creative talent is an exciting addition to our community, and we can't wait to see your designs shine.`,
  },
  {
    id: 2,
    text: `
We believe that your unique perspective as a fashionpreneur will inspire and captivate customers. Thank you for choosing us as your platform to share your creativity. 
`,
  },
  {
    id: 3,

    text: (
      <>
        Welcome aboard, [Designer's Name]! We look forward to watching your
        fashion journey unfold on our platform.
      </>
    ),
  },
];

export const ThanksForContacting = ({
  username = `[Designer's Name]`,
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
                <HeadingComponent icon={true} heading='Welcome to LynkTown' />

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
                    Best regards, <br /> Team LynkTown 😊
                    <br />
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
