'use client';
import { Button, Navbar } from 'flowbite-react';

export default function Nav() {
  return (
    <Navbar fluid rounded className='my-2'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Mentor Mash</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href='/login' style={{ backgroundColor: 'indigo' }}>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          <p className='text-grey hover:text-indigo-700'>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p >About</p>
        </Navbar.Link>
        <Navbar.Link href="#"><p className='hover:text-indigo-700'>Services</p></Navbar.Link>
        <Navbar.Link href="#"><p className='hover:text-indigo-700'>Pricing</p></Navbar.Link>
        <Navbar.Link href="#"><p className='hover:text-indigo-700'>Contact</p></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
