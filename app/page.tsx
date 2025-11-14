import {NavBar} from "@/components";


export default function Home() {
  return (
    <main className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col gap-20 w-full">
       <NavBar/>
      </div>
    </main>
  );
}
