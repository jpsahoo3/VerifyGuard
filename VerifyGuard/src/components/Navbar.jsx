 import { Disclosure } from '@headlessui/react';
 import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Write a Review', href: '#', current: false },
  { name: 'Categories', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Login', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* Logo Section */}
              <div className="flex items-center">
                <img
                  src="/path/to/logo.png" // Replace with actual logo path
                  alt="TrustPilot Logo"
                  className="h-8 w-auto"
                />
              </div>
              
              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex items-center space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-gray-900' : 'text-gray-600 hover:text-gray-800',
                      'px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* For Businesses Button */}
                <a
                  href="#"
                  className="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  For Businesses
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Panel */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              {/* For Businesses Button - Mobile */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                For Businesses
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
