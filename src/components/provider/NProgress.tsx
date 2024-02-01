"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgress = () => {
  return (
    <ProgressBar
      height="4px"
      color="#3c948b"
      options={{ showSpinner: false }}
    />
  );
};

export default NProgress;
