import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Hr,
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

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const VercelInviteUserEmail = ({
  username = 'zenorocha',
  userImage = `${baseUrl}/static/vercel-user.png`,
  invitedByUsername = 'bukinoshita',
  invitedByEmail = 'bukinoshita@example.com',
  teamName = 'My Project',
  teamImage = `${baseUrl}/static/vercel-team.png`,
  inviteLink = 'https://vercel.com/teams/invite/foo',
  inviteFromIp = '204.13.186.218',
  inviteFromLocation = 'São Paulo, Brazil',
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
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
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: '#6A5B40',
                primaryLight: '#857250',
                textPrimary: '#3B3B3B',
              },
            },
          },
        }}
      >
        <Body className=' my-auto mx-auto font-sans'>
          <Container className='my-8 mx-auto  w-[648px]'>
            <Section className='bg-primary h-[300px] flex py-10 justify-center'>
              <Img width={145} src={`${baseUrl}/static/lynktownlogo.png`} />
              <Container className='absolute shadow-2xl max-w-[508px] bg-white rounded--md  top-[15%] left-[50%] translate-x-[-50%]'>
                <Container className='h-[197px] bg-[#f3f1ee] text-center rounded-t-md flex items-center justify-center flex-col'>
                  <svg
                    width='50'
                    height='50'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect width='60' height='60' rx='30' fill='#3AC267' />
                    <path
                      d='M13.5 30L24 40.5L45.75 18.75'
                      stroke='white'
                      strokeWidth='5'
                    />
                  </svg>
                  <Heading
                    as='h1'
                    style={{
                      fontFamily: 'DM Serif Display',
                    }}
                    className='text-primaryLight m-0 mt-1 text-4xl font-semibold'
                  >
                    Profile verified
                  </Heading>
                </Container>
                <Container className='py-5 px-4 rounded-b-md font-sans text-center text-textPrimary font-medium text-lg'>
                  <Text className='text-lg'>Dear [Designer's Name],</Text>
                  <Text className='text-lg'>
                    We are thrilled to welcome you to our vibrant social
                    commerce platform for fashion enthusiasts! Your creative
                    talents are an exciting addition to our community, and we
                    can't wait to see your designs shine.
                  </Text>
                  <Text className='text-lg'>
                    We believe that your unique perspective as a fashion
                    designer will inspire and captivate our audience. Thank you
                    for choosing us as your platform to share your creativity.
                  </Text>
                  <Text className='text-lg'>
                    Welcome aboard, [Designer's Name]! We look forward to
                    watching your fashion journey unfold on our platform. Best
                    Regards, Srikanth Rajjoshi Onboarding Manager LynkTown
                  </Text>
                  <Text className='text-lg'>
                    Best Regards, <br /> Srikanth Rajjoshi <br /> Onboarding
                    Manager <br /> LynkTown
                  </Text>
                </Container>
              </Container>
            </Section>
            <Section className='bg-white h-[625px]'></Section>
            <Footer />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
