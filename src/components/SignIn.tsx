import { signIn, useSession } from 'next-auth/react';

export default function SignIn() {
  const { data: session } = useSession()
  if (session) {
    return (

      <span className='fixed p-1 mx-auto my-auto text-center text-white bg-gray-900 rounded-lg bottom-4 text-zinc-500'>
        Signed in as {session.user!.name} <br />

        {/* <button className="text-zinc-500" onClick={() => signOut()}>
          Sign out
        </button> */}
      </span>
    )
  }
  return (
    <span className='fixed p-1 mx-auto my-auto text-center text-white bg-gray-900 rounded-lg text-zinc-500 bottom-4'>
      Not signed in <br />
      <button className="p-1 mx-auto my-auto text-white bg-gray-900 rounded-lg hover:bg-blue-600" onClick={() => signIn()}>Sign in</button>
      {/* <button className="text-zinc-500" onClick={() => signIn()}>
        Sign in
      </button> */}
    </span>
  )
}