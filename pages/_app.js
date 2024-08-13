import '../styles/globals.css';
import { useTheme } from 'next-themes';


function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <Component {...pageProps} />
  
    </div>
  );
}

export default MyApp;