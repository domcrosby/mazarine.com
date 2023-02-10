import { Flex, Container } from "@/libs";

export const Footer = () => (
  <footer className="z-50 p-8 bg-blue-900 absolute h-32 w-screen ">
    <Container>
      <Flex className="justify-between items-center w-full">
        <p className="text-3xl font-light text-slate-50">Mazarine</p>
        <p className="flex space-x-4 right-0 text-slate-50">Made by hand</p>
      </Flex>
    </Container>
  </footer>
);
