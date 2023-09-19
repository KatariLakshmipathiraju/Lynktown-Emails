import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import Footer from './components/Footer';

interface ProfileVerifiedProps {
  username?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const ProfileVerified = ({
  username = `[Designer's Name]`,
}: ProfileVerifiedProps) => {
  return (
    <Html>
      <Head />
      <Preview>LynkTown Profile Verification</Preview>
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
          <Container className='my-8 mx-auto  w-[648px]'>
            <Section className='bg-[#f3f1ee] h-[320px] flex py-8 justify-center'>
              <Img
                width={145}
                src={`https://i.ibb.co/zfhMv0C/lynktownlogo.png`}
              />
              <Container
                style={{
                  boxShadow: `0px 20px 25px -5px #0000001A`,
                }}
                className='absolute max-w-[540px] bg-white rounded--md  top-[15%] left-[50%] translate-x-[-50%]'
              >
                <Container className='h-[197px] bg-primary text-center rounded-t-md flex items-center justify-center flex-col'>
                  <Img
                    src='https://i.ibb.co/qNsj6SX/svgviewer-png-output-24.png'
                    className='flex items-center justify-center mx-auto'
                  />
                  <Heading
                    as='h1'
                    style={{
                      fontFamily: 'DM Serif Display',
                    }}
                    className='text-white m-0 mt-1 text-4xl font-semibold'
                  >
                    Profile verified
                  </Heading>
                </Container>
                <Container className='py-5 px-4 rounded-b-md font-sans text-textPrimary font-medium  text-lg'>
                  <Text className='text-lg font-bold'>Dear {username},</Text>
                  <Text className='text-base  '>
                    We are thrilled to welcome you to our vibrant social
                    commerce platform for fashion enthusiasts! Your creative
                    talents are an exciting addition to our community, and we
                    can't wait to see your designs shine.
                  </Text>
                  <Text className='text-base '>
                    We believe that your unique perspective as a fashion
                    designer will inspire and captivate our audience. Thank you
                    for choosing us as your platform to share your creativity.
                  </Text>
                  <Text className='text-base '>
                    Welcome aboard, {username}! We look forward to watching your
                    fashion journey unfold on our platform. Best Regards,
                    Srikanth Rajjoshi Onboarding Manager LynkTown
                  </Text>
                  <Text className='text-base '>
                    Best Regards, <br /> Srikanth Rajjoshi <br /> Onboarding
                    Manager <br /> LynkTown
                  </Text>
                </Container>
              </Container>
            </Section>
            <Section className='bg-white h-[550px]'></Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ProfileVerified;
