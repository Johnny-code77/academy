import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 text-gray-300 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Nucleus Academy. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          {/* Facebook */}
          <Link href="https://www.facebook.com" target="_blank" aria-label="Facebook" className="hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.688v-3.622h3.131V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.098 2.797.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.731 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </Link>

          {/* Instagram */}
          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram" className="hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C8.741 0 8.333.014 7.053.072 5.773.129 4.883.36 4.099.622 3.31.885 2.61 1.302 1.926 1.926c-.624.683-1.041 1.383-1.304 2.172-.262.784-.493 1.674-.551 2.953C.014 8.333 0 8.741 0 12c0 3.259.014 3.667.072 4.947.058 1.279.289 2.169.551 2.953.263.789.68 1.489 1.304 2.172.683.624 1.383 1.041 2.172 1.304.784.262 1.674.493 2.953.551C8.333 23.986 8.741 24 12 24c3.259 0 3.667-.014 4.947-.072 1.279-.058 2.169-.289 2.953-.551.789-.263 1.489-.68 2.172-1.304.624-.683 1.041-1.383 1.304-2.172.262-.784.493-1.674.551-2.953.058-1.28.072-1.688.072-4.947 0-3.259-.014-3.667-.072-4.947-.058-1.279-.289-2.169-.551-2.953-.263-.789-.68-1.489-1.304-2.172-.683-.624-1.383-1.041-2.172-1.304-.784-.262-1.674-.493-2.953-.551C15.667.014 15.259 0 12 0zm0 5.838c3.403 0 6.162 2.758 6.162 6.162S15.403 18.162 12 18.162 5.838 15.403 5.838 12 8.597 5.838 12 5.838zm7.406-2.709c0 .834-.676 1.51-1.51 1.51s-1.51-.676-1.51-1.51.676-1.51 1.51-1.51 1.51.676 1.51 1.51z" />
            </svg>
          </Link>

          {/* Twitter */}
          <Link href="https://www.twitter.com" target="_blank" aria-label="Twitter" className="hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.957-2.178-1.554-3.594-1.554-2.719 0-4.922 2.203-4.922 4.917 0 .39.042.765.123 1.124-4.09-.205-7.719-2.164-10.148-5.144-.423.722-.664 1.561-.664 2.476 0 1.71.87 3.217 2.188 4.101-.807-.025-1.566-.248-2.229-.616v.061c0 2.388 1.693 4.384 3.946 4.835-.413.111-.848.171-1.296.171-.317 0-.626-.03-.927-.085.627 1.953 2.445 3.377 4.6 3.417-1.685 1.319-3.808 2.104-6.115 2.104-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.056 0 14.009-7.504 14.009-14.009 0-.214-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z" />
            </svg>
          </Link>

          {/* GitHub */}
          <Link href="https://www.github.com" target="_blank" aria-label="GitHub" className="hover:text-white transition duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.258.82-.577v-2.049c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.087-.744.084-.729.084-.729 1.205.084 1.837 1.238 1.837 1.238 1.07 1.835 2.809 1.304 3.495.998.108-.776.419-1.305.763-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.382 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.398 3.008-.404 1.024.006 2.051.138 3.008.404 2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.874.117 3.176.769.838 1.236 1.911 1.236 3.22 0 4.607-2.804 5.625-5.476 5.921.431.372.815 1.102.815 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
