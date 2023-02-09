import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import backgroundImage from "@/images/background-auth.jpg";
import { Button, SelectField, TextField, Flex } from "@/libs";
import { Logo } from "@/components";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <Flex className="relative min-h-full justify-center md:px-12 lg:px-0">
        <Flex className="relative z-10 flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            <Flex className="flex-col">
              <Link href="/" aria-label="Home">
                <Logo className="h-10 w-auto" />
              </Link>
              <div className="mt-20">
                <h2 className="text-lg font-semibold text-gray-900">
                  Get started for free
                </h2>
                <p className="mt-2 text-sm text-gray-700">
                  Already registered?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Sign in
                  </Link>{" "}
                  to your account.
                </p>
              </div>
            </Flex>
            <form
              action="#"
              className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
            >
              <TextField
                label="First name"
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="given-name"
                required
              />
              <TextField
                label="Last name"
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="family-name"
                required
              />
              <TextField
                className="col-span-full"
                label="Email address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <TextField
                className="col-span-full"
                label="Password"
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
              />
              <SelectField
                className="col-span-full"
                label="How did you hear about us?"
                id="referral_source"
                name="referral_source"
              >
                <option>AltaVista search</option>
                <option>Super Bowl commercial</option>
                <option>Our route 34 city bus ad</option>
                <option>The “Never Use This” podcast</option>
              </SelectField>
              <div className="col-span-full">
                <Button
                  type="submit"
                  variant="solid"
                  color="blue"
                  className="w-full"
                >
                  <span>
                    Sign up <span aria-hidden="true">&rarr;</span>
                  </span>
                </Button>
              </div>
            </form>
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
}
