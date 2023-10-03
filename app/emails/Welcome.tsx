/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Body,
  Html,
  Head,
  Container,
  Tailwind,
  Text,
  Button,
  Img,
  Heading,
  Link,
} from "@react-email/components";

interface IProps {
  name: string;
}

const Welcome = ({ name }: IProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-12 mx-auto font-sans">
          <Img
            className="mx-auto h-40"
            src="https://www.kaculoss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroImage.b28e19bf.png&w=1080&q=75"
          ></Img>
          <Container className="p-8 rounded-lg shadow-lg ">
            <Heading className="text-xl pt-4">Hello {name} 👋 </Heading>
            <Text className="text-base font-medium text-gray-700">
              Thank you for reaching out to me through my website's contact
              form. I truly appreciate your interest and the time you've taken
              to get in touch with me.
            </Text>
            <Text className="text-base font-medium text-gray-700">
              Your message has been received and is important to me. I will
              review it carefully and respond as soon as possible. In the
              meantime, please feel free to explore my website and learn more
              about my projects by clicking the button below:
            </Text>
            <Button
              className="bg-purple-700 text-white font-bold px-3 py-3 rounded-md"
              href="https://kaculoss.com/#projects"
            >
              Visit My Projects Page
            </Button>
            <Text className="text-base font-medium text-gray-700">
              Should you have any further questions or need immediate
              assistance, don't hesitate to contact me directly at
              <Link
                href={`mailto:sani@kaculoss.tech`}
                className="text-base text-gray-700 font-bold no-underline"
              >
                {" "}
                sani@kaculoss.tech{" "}
              </Link>
              or give me a call at{" "}
              <Link
                href={`tel:+233549853041`}
                className="text-base text-gray-700 font-bold no-underline"
              >
                +233 549 85 3041{" "}
              </Link>
              .
            </Text>
            <Text className="text-base font-medium text-gray-700">
              Once again, thank you for considering me, {name.split(" ")[0]}. I
              look forward to the opportunity to assist you with your needs.
            </Text>
            <Text className="text-base font-medium text-gray-700">
              Best regards,
            </Text>
            <Text className="m-0 p-0 text-base font-bold text-left text-gray-700">
              Sani Alhassan
            </Text>
            <Text className="m-0 p-0 text-base font-bold text-left text-gray-700">
              CEO | Kaculoss
            </Text>
            <Text className="m-0 p-0 text-base font-bold text-left text-gray-700 ">
              <Link
                href={`https://kaculoss.com`}
                className="text-gray-700 no-underline"
              >
                www.kaculoss.com
              </Link>
            </Text>
            <Text className="m-0 p-0 text-base font-bold text-left text-gray-700">
              <Link
                href={`tel:+233549853041`}
                className="text-gray-700 no-underline"
              >
                +233 549 85 3041
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Welcome;
