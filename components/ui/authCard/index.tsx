'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa, ViewType } from '@supabase/auth-ui-shared'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { Database } from './database.types'

export default function AuthForm() {
  const supabase = createClientComponentClient();

  return (
    <Auth
      supabaseClient={supabase}
      view={"sign_in"}
      appearance={{ theme: ThemeSupa }}
      showLinks={true}
      providers={['google', 'facebook']}
      redirectTo="http://localhost:3000/callback"
    />
  )
}