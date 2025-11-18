import {Header, HeroSlider} from "@/components";


export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-10 w-full">
       <Header/>
       <HeroSlider/>
      </div>
    </main>
  );
}
