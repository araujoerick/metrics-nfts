"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./_components/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/app-sidebar";
import { tiny5 } from "@/utils/font";
import SidebarTriggerWrapper from "./sidebar-trigger-wrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar fontClass={tiny5.className} />
      <div className="flex w-full flex-col">
        <Header />
        <main className="flex-1">
          <SidebarTriggerWrapper />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
