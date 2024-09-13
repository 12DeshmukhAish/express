import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <Navbar isBordered className="bg-white shadow-lg">
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">ACME</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 justify-center"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            aria-current="page"
            className="text-blue-500 font-semibold"
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            href="#"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="bg-blue-500 text-white hover:bg-blue-600 transition duration-300 px-4 py-2 rounded-md"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
