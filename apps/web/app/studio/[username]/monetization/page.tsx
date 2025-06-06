import { MonetizationClient } from "./page.client"
import { Metadata } from "next"
import { StudioLayout } from "@/components/features/studio/studio-layout"
import { auth } from "@clerk/nextjs/server"
import { supabaseWithAdminAccess } from "@/lib/supabase"
import { redirect } from "next/navigation"
import { getUserData } from "@/lib/queries"

export const metadata: Metadata = {
  title: "Monetization",
}

export default async function MonetizationPage({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const username = (await params).username
  // Verify user is authenticated
  const { userId } = await auth()
  if (!userId) {
    redirect("/sign-in")
  }

  // Get user data from Supabase
  const { data: user } = await getUserData(supabaseWithAdminAccess, username)

  if (!user) {
    console.error("User not found")
    redirect("/studio")
  }

  // Verify user has access to this page (own profile or admin)
  const { data: currentUser } = await supabaseWithAdminAccess
    .from("users")
    .select("is_admin")
    .eq("id", userId)
    .single()

  const isAdmin = currentUser?.is_admin || false
  const isOwnProfile = userId === user.id

  if (!isAdmin && !isOwnProfile) {
    redirect("/studio")
  }

  return (
    <StudioLayout user={user}>
      <div className="max-w-[640px] mx-auto w-full">
        <MonetizationClient userId={user.id} />
      </div>
    </StudioLayout>
  )
}
