import Head from "next/head";
import { api } from "@/utils/api";
import { useState } from "react";

type Modal = {
  mode: 'edit' | 'create' | undefined,
  show: boolean
}

export default function Home() {
  const [modal, setModal] = useState<Modal>({mode: 'create',show: false})
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      </main>
    </>
  );
}
