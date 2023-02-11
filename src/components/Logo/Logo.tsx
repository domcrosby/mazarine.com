import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import logoMazarine from "@/images/logos/mazarine.svg";
import { Flex } from "@/libs";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link
    href="/"
    aria-label="Home"
    className={clsx("text-3xl font-light", className)}
  >
    <Flex>
      <Image
        src={logoMazarine}
        alt={"mazarine"}
        className="w-8 mr-2 text-blue-600"
        unoptimized
      />
      <p>Mazarine</p>
    </Flex>
  </Link>
);
