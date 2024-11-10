'use client'
import { createClient } from "@/utils/supabase/client";
import { ReactNode, useEffect, useState } from "react";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any | null>(null)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()
    
    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            setUser(user)
            setLoading(false)
        }
        getUser()
    }, [])

    if (loading) return <p>loading...</p>
    if (!user) redirect("/sign-in")
    
    return (
        <div className="h-full w-full">
            {children}
        </div>
    );
}