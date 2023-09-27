import {
  Body,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
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
import HeadingComponent from './components/HeadingComponent';

interface ProfileVerifiedProps {
  username?: string;
  submitFrom?: string;
  formInfo: any;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const ProfileVerified = ({
  submitFrom = '',
  formInfo = [
    {
      title: 'name',
      value: 'test',
    },
    {
      title: 'email',

      value: 'test@gmail.com',
    },
  ],
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
          <Container className='my-8 mx-auto  max-w-xl  w-full '>
            <Section className='bg-[#f3f1ee]   py-8 '>
              <Img
                width={145}
                src={`https://i.ibb.co/zfhMv0C/lynktownlogo.png`}
                className='mx-auto '
              />
              <Container
                style={{
                  boxShadow: `0px 20px 25px -5px #0000001A`,
                }}
                className=' max-w-[500px] mx-auto mt-5  bg-white rounded--md  '
              >
                <HeadingComponent
                  icon={true}
                  heading={`New Form Submission from ${submitFrom}`}
                />

                <Container className='py-5 px-4 bg-white rounded-b-md font-sans text-textPrimary font-medium  text-lg border-2 border-red-500'>
                  <Section>
                    {formInfo.map(item => {
                      return (
                        <Row className='flex max-w-xs w-full '>
                          <Column className='w-full capitalize text-left'>
                            {item.title}
                          </Column>
                          <Column className='w-full text-left'>
                            {item.value}
                          </Column>
                          <Hr></Hr>
                        </Row>
                      );
                    })}
                    <Hr></Hr>
                  </Section>
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

export default ProfileVerified;
