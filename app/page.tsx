import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Index() {
  return (
    <>
      <main className="flex flex-col h-full p-6 justify-center items-center gap-6">
        <p className="text-3xl">Macros v4</p>
        <div className="relative max-w-lg w-full aspect-[1978/1310]">
            <Image
                src='/macros-v3.gif'
                alt='screen recording of features'
                fill
                unoptimized
            />
        </div>
        <p className="text-center">Quick & easy way to track your diet.</p>
        <Button asChild size="lg">
            <Link href="/sign-in">Start</Link>
        </Button>
      </main>
    </>
  );
}