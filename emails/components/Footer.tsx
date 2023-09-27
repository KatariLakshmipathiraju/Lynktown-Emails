import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from '@react-email/components';
import React from 'react';

import { FC } from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const socialLinks = [
  { id: 1, name: 'Instagram', href: 'https://www.instagram.com' },
  { id: 2, name: 'Linkedin', href: 'https://www.linkedin.com' },
  { id: 3, name: 'Facebook', href: 'https://www.facebook.com' },
  { id: 4, name: 'Pinterest', href: 'https://www.pinterest.com' },
];
const infoLinks = [
  {
    id: 1,
    name: 'Terms & conditions',
    href: 'https://lynktown.com/terms-conditions',
  },
  {
    id: 2,
    name: 'Privacy policy',
    href: 'https://lynktown.com/privacy-policy',
  },
  { id: 3, name: 'Contact us', href: 'https://lynktown.com/contact-us' },
];

interface IFooterProps {}

const Footer: FC<IFooterProps> = props => {
  return (
    <Html>
      <Head />
      <Container className='px-4 py-10 mx-auto bg-[#f9f9f7]  max-w-xl  w-full '>
        <Img src={`https://i.ibb.co/DkVb5XC/lynktownlogosm.png`} />
        <Row className='max-w-sm my-4 flex items-start mx-0 space-x-4'>
          {socialLinks.map(item => {
            return (
              <Column key={item.id}>
                <Link
                  className={`${
                    item.id === 1 ? 'mr-4' : 'mx-4'
                  } text-[#6C6C6C] font-sans font-bold text-xs sm:text-sm`}
                  key={item.id}
                  href={item.href}
                >
                  {item.name}
                </Link>
                {item.id !== socialLinks.length && <>|</>}
              </Column>
            );
          })}
        </Row>
        <Hr />
        <Section className='max-w-lg mx-0 font-sans text-textPrimary text-xs sm:text-sm'>
          <Text>
            If you have questions or need help, don't hesitate to contact our
            support team, support@lynktown.om or call us at +91 96639 89996
          </Text>
          <Text>
            #33 1st main 2A cross Srinivas Nagar BSK 1st stage Bengaluru-560050,
            Karnataka
          </Text>
          <Row className='max-w-sm my-4 flex  items-start mx-0 space-x-2 sm:space-x-4'>
            {infoLinks.map(item => {
              return (
                <Column key={item.id}>
                  <Link
                    className={`${
                      item.id === 1 ? 'mr-4' : 'mx-4'
                    } text-[#0A0A0A] font-sans font-bold text-xs sm:text-sm`}
                    key={item.id}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                  {item.id !== infoLinks.length && <>|</>}
                </Column>
              );
            })}
          </Row>
        </Section>
      </Container>
    </Html>
  );
};

export default Footer;
