import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Villa App</h3>
            <p className="mb-4">
              Experience luxury like never before. Stay in the best villas
              around the world with our app.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.59 8.07 8.19 8.68v-6.1h-2.48v-2.58h2.48v-1.97c0-2.46 1.49-3.8 3.72-3.8 1.08 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.61.76-1.61 1.54v1.82h2.77l-.44 2.58h-2.33v6.1c4.6-.61 8.19-4.26 8.19-8.68 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.56c-.89.39-1.83.65-2.82.77 1.01-.6 1.79-1.55 2.16-2.69-.94.56-1.98.97-3.09 1.19-.89-.94-2.17-1.52-3.59-1.52-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.12 1.12-4.09-.2-7.72-2.16-10.15-5.12-.42.72-.66 1.56-.66 2.45 0 1.69.86 3.19 2.17 4.07-.8-.03-1.56-.25-2.22-.62v.06c0 2.36 1.68 4.32 3.91 4.76-.41.11-.84.17-1.29.17-.31 0-.62-.03-.92-.09.62 1.94 2.42 3.36 4.55 3.4-1.67 1.31-3.77 2.1-6.05 2.1-.39 0-.77-.02-1.15-.07 2.16 1.38 4.72 2.19 7.48 2.19 8.97 0 13.88-7.43 13.88-13.88 0-.21 0-.43-.01-.64.95-.68 1.77-1.53 2.42-2.5z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.4 4.1c-.8.4-1.7.7-2.6.8 1-.6 1.6-1.5 1.9-2.7-.8.5-1.8.9-2.8 1.1-.8-.8-1.9-1.3-3.1-1.3-2.4 0-4.3 2-4.3 4.3 0 .3 0 .6.1.9-3.6-.2-6.8-1.9-8.9-4.5-.4.6-.6 1.3-.6 2 0 1.5.8 2.9 2 3.7-.8 0-1.5-.2-2.1-.6v.1c0 2.1 1.5 3.8 3.4 4.2-.4.1-.8.1-1.2.1-.3 0-.6 0-.8-.1.6 2 2.5 3.5 4.6 3.5-1.7 1.3-3.9 2.1-6.2 2.1-.4 0-.8 0-1.1-.1 2.2 1.5 4.8 2.3 7.5 2.3 9 0 13.9-7.5 13.9-14v-.6c.9-.7 1.6-1.5 2.2-2.4z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="mb-2">123 Villa St.</p>
            <p className="mb-2">Luxury City, LX 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p>Email: info@villaapp.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center">
          <p>&copy; 2024 Villa App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
