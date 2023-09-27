import * as React from 'react';
import Footer from './components/Footer';
import HeadingComponent from './components/HeadingComponent';
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

const content = [
  {
    id: 1,
    text: `I hope this message finds you well. We're thrilled to have you as a new subscriber to our newsletter! Thank you for choosing to stay connected with us and for showing interest in LynkTown.`,
  },
  {
    id: 2,
    text: `Our newsletter is your gateway to a world of valuable insights, updates, and exclusive offers. Here's what you can expect from us:`,
  },
  {
    id: 3,
    heading: '1. Industry Trend',
    text: `Stay ahead of the curve with the latest trends and developments in LynkTown.`,
  },
  {
    id: 4,
    heading: '2. Exclusive Content',
    text: `Get access to articles, blog posts, and resources available only to our subscribers.`,
  },
  {
    id: 5,
    heading: '3. Product/Service Updates',
    text: `Be the first to know about new product launches, updates, and special promotions.`,
  },
  {
    id: 6,
    heading: '4. Helpful Tips',
    text: `Discover tips and tricks that can make your fashion journey even more rewarding.`,
  },
  {
    id: 7,
    heading: '5. Community',
    text: `Join a community of like-minded individuals who share your passion for designer products.`,
  },
  {
    id: 8,
    text: `If you ever have questions, feedback, or specific topics you'd like us to cover in our newsletter, please feel free to reach out. We're here to provide you with content that's tailored to your interests and needs.`,
  },
  {
    id: 9,
    text: `Once again, thank you for subscribing to our newsletter. We look forward to delivering valuable content to your inbox and keeping you informed and inspired.`,
  },
];

export const CustomerSubscription = ({ username = `[Customer's Name]` }) => {
  return (
    <Html>
      <Head />
      <Preview>You have successfully subscribed to LynkTown</Preview>

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
                className='mx-auto'
              />
              <Container
                style={{
                  boxShadow: `0px 20px 25px -5px #0000001A`,
                }}
                className='mt-5 max-w-[500px] bg-white rounded-t-md  mx-auto'
              >
                <HeadingComponent
                  icon={true}
                  heading={
                    <>
                      You have successfully <br /> subscribed to LynkTown
                    </>
                  }
                />
                <Container className='py-5 px-4 rounded-b-md font-sans text-textPrimary '>
                  <Text className='text-lg font-bold'>Dear {username},</Text>
                  {content.map(item => {
                    const { id, text, heading } = item;
                    return (
                      <Text className='text-base' key={id}>
                        {heading && (
                          <Text className='font-medium   text-base  inline'>
                            {heading}:&nbsp;
                          </Text>
                        )}{' '}
                        {text}
                      </Text>
                    );
                  })}

                  <Text className='text-base '>
                    Best regards, <br /> <br /> Team LynkTown <br />
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

export default CustomerSubscription;
