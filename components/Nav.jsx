"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown , setToggleDropdown] =  useState(false); 

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" width={40} height={40} alt="App Logo" />
        <p className="logo-text">Promptopia</p>
      </Link>
      <div className='sm:flex hidden'>
      {session?.user ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>
          <button onClick={signOut} className="outline_btn" type="button">
            Sign out
          </button>
          <Link href="/profile">
            <Image src={session?.user.image} 
            width={37} 
            height={37} 
            alt="profile"
            className="rounded-full" />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black_btn"
              >
                Sign In
              </button>
            ))}
        </>
      )}
       </div>
       {/* Mobile Navigation*/}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
           <Image
            src={session?.user.image}
            width={37}
            height={37}
            alt="profile"
            className="rounded-full"
            onClick={() => setToggleDropdown((prev) => !prev)}
           />
             {toggleDropdown && (
              <div className="dropdown">
                <Link 
                className="dropdown_link"
                href="/profile"
                onClick={() => setToggleDropdown(false)}
                >
                My Profile
                </Link>
                <Link 
                className="dropdown_link"
                href="/create-prompt"
                onClick={() => setToggleDropdown(false)}
                >
                Create Prompt
                </Link>
                <button className="mt-5 w-full black_btn" type="button" onClick={() => {setToggleDropdown(false);signOut();}} >
                  Sign Out 
                </button>
              </div>
              
             )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
