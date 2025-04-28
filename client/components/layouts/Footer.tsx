import { Github, Linkedin, Mail } from "lucide-react";
import MaxWidthContainer from "./MaxWidthContainer";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-gray-900 p-5 text-gray-100">
      <MaxWidthContainer>
        <div className='flex flex-col items-center justify-between space-y-5 sm:flex-row sm:space-y-0'>
          <ul className='flex items-center justify-between space-x-5'>
            <li>
              <a href="https://github.com/VINITHAA223226" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/vinithaa-d-8960a9258" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </li>
            <li>
              <a href="mailto:vinivinithaa13@gmail.com" title="Send Email">
                <Mail />
              </a>
            </li>
          </ul>
        </div>

        {/* Lower Section */}
        <div className="border-t border-gray-800 mt-5 pt-3 text-center">
          <p className="text-gray-400 text-lg">
            All rights reserved. BIT {new Date().getFullYear()}.
          </p>
        </div>
      </MaxWidthContainer>
    </footer>
  );
}
