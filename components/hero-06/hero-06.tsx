import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import { useAuthContext } from "@/app/provider";
import Authentication from "@/app/_components/Authentication";

const Hero06 = () => {


  const user = useAuthContext();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-2xl">
        <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
          Just released v1.0.0
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Ship Your <br />
          <span
            className="bg-gradient-to-r from-blue-800 via-red-300 to-blue-600 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
          >
            Wireframes
          </span>{' '}
          10x Faster
        </h1>


        <p className="mt-6 text-[17px] md:text-lg">
          Simplify your UI development workflow. Upload your Figma, PNG, or sketch, and instantly receive clean, responsive frontend code. No more back-and-forth between design and dev — just fast, consistent, and scalable code powered by AI.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">

          {user?.user?.email ?
            <a className="inline-flex justify-center items-center 
       gap-x-3 text-center bg-gradient-to-tl from-blue-600
        to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
              href="/dashboard">
              Get started
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </a>
            : <Authentication >
              <Button size="lg" className="rounded-full text-base">
                Get Started <ArrowUpRight className="!h-5 !w-5" />
              </Button>
            </Authentication>
          }

          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-base shadow-none"
          >
            <CirclePlay className="!h-5 !w-5" /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero06;
