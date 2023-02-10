import Image from "next/image";

import { Flex } from "@/libs";
import backgroundImage from "@/images/background-auth.jpg";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => (
  <>
    <Flex className="relative min-h-full justify-center md:px-12 lg:px-0">
      <Flex className="relative z-10 flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          {children}
        </div>
      </Flex>
      <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundImage}
          alt=""
          unoptimized
        />
      </div>
    </Flex>
  </>
);
