import { createContext, useContext, PropsWithChildren } from 'react';
import useProvideAuth from './useProvideAuth';

const authContext = createContext({});

export function ProvideAuth(props: PropsWithChildren<{}>) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{props.children}</authContext.Provider>;
}

export default function useAuth() {
  return useContext(authContext);
}
