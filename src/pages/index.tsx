import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link";
import { NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const Home: NextPage = () => {
  const [session, loading] = useSession();
  return (
    <div className="text-3xl">
      {!session && (
        <div>
          Not signed in <br />
          <button onClick={(): Promise<void> => signIn("auth0")}>
            Sign in
          </button>
        </div>
      )}
      {session && (
        <div>
          Signed in as {session.user.email} <br />
          <button onClick={(): Promise<void> => signOut()}>Sign out</button>
        </div>
      )}
      {loading && (
        <div className="text-5xl">
          <h1>PERA QUE TA CARREGANDO</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
