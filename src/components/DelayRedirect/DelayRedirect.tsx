import { useEffect, useState } from 'react';
import { Redirect, RedirectProps } from 'react-router';

interface DelayProps {
  delay: number;
}

// https://gist.github.com/JT501/4b0f60fb57b1410604b754fd9031150a
const DelayRedirect = ({ delay, ...rest }: RedirectProps & DelayProps) => {
  const [timeToRedirect, setTimeToRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeToRedirect(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return timeToRedirect ? <Redirect {...rest} /> : null;
};

export default DelayRedirect;