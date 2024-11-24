function Footer() {
  return (
    <div>
      <footer className="bg-white  shadow  dark:bg-gray-800 w-full">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://soloist.ai/deepankarsahoo/" target="_blank" className="hover:underline">
            TruCare Dental™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="/About" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            
            <li>
              <a href="/Contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
