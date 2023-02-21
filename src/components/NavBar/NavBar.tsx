import { Fragment } from "react";
import {
  Button,
  capitalize,
  Container,
  DesktopOnly,
  Flex,
  MobileOnly,
  NavIcon,
} from "@/libs";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Logo } from "../Logo/Logo";

const links = ["services", "team"];

export const NavBar = () => {
  const { pathname } = useRouter();
  return (
    <header className="sticky top-0 z-50 py-8 bg-white">
      <Container>
        <Flex className="justify-between items-end">
          <Logo />
          <Flex className="space-x-2 sm:space-x-4 right-0 items-center">
            <DesktopOnly className="sm:flex sm:space-x-4">
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
            </DesktopOnly>
            <Button href="contact" className="bg-primary">
              Contact Us
            </Button>
            <MobileOnly className="flex">
              <Popover>
                <Popover.Button
                  className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
                  aria-label="Toggle Navigation"
                >
                  {({ open }) => <NavIcon open={open} />}
                </Popover.Button>
                <Transition.Root>
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="duration-150 ease-in"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Popover.Panel
                      as="div"
                      className="absolute inset-x-0 top-full mx-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
                    >
                      {links.map((link) => (
                        <Popover.Button
                          as={Link}
                          href={`/${link}`}
                          key={link}
                          className="block w-full p-2"
                        >
                          {capitalize(link)}
                        </Popover.Button>
                      ))}
                    </Popover.Panel>
                  </Transition.Child>
                </Transition.Root>
              </Popover>
            </MobileOnly>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};
