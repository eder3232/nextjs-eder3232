'use client'
import {
  type Session,
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
  session: Session | null
}

const AuthGoogleButtonClient = ({ session }: Props) => {
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${location.origin}/api/auth/callback` },
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div className="flex items-center">
      {session === null ? (
        <button onClick={handleSignIn} className="btn btn-primary btn-sm">
          Iniciar sesión
        </button>
      ) : (
        // <button onClick={handleSignOut} className="btn btn-primary btn-sm">
        //   Cerrar sesión
        // </button>

        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-primary btn-sm">
            Cuenta
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            <li>
              <Link href={'/profile'}>Mi perfil</Link>
            </li>
            <li>
              <Link href={'/my-calculations'}>Mis calculos</Link>
            </li>
            <li>
              <button
                onClick={() => handleSignOut()}
                className="btn btn-xs btn-warning"
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default AuthGoogleButtonClient
