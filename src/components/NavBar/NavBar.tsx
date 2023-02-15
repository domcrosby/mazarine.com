import { capitalize, Container, Flex } from "@/libs";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../Logo/Logo";

const links = ["services", "team", "contact"];

export const NavBar = () => {
  const { pathname } = useRouter();
  return (
    <header className="sticky top-0 z-50 py-8 bg-white">
      <Container>
        <Flex className="justify-between items-end">
          <Logo />
          <Flex className="space-x-2 sm:space-x-4 right-0">
            {links.map((link) => (
              <Link
                href={`/${link}`}
                key={link}
                className={`block font-light border-b-2  ${
                  pathname == `/${link}`
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                {capitalize(link)}
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};
