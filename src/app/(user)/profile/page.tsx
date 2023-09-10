import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Image from 'next/image'

const Page = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/user/not-found')
  }

  const image = data.session?.user?.user_metadata?.avatar_url

  return (
    <div className="flex justify-center">
      <div className="container flex flex-col gap-4">
        <h1 className="text-3xl text-primary-content font-bold">Perfil</h1>

        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image alt="profile picture" src={image} width={100} height={100} />
          </div>
        </div>

        <div>
          <span>Correo: </span>
          <span>{data.session?.user?.email}</span>
        </div>
        <div>
          <span>Nombre: </span>
          <span>{data.session?.user?.user_metadata?.full_name}</span>
        </div>

        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
    </div>
  )
}

export default Page
