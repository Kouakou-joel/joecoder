import { AuthUserPovider } from "@/context/AuthUserContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Flip, ToastContainer, toast } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserPovider>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        transition={Flip}
      />
      <Component {...pageProps} />
    </AuthUserPovider>

  )
}