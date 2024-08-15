import SideBar from "@/components/SideBar/page";
import NaveBare from "@/components/NaveBar/page";
import About from "@/components/About/page";

export default function Home() {
  return (
    <main>
      <SideBar />
      <div className="main-content">
      <NaveBare />
       <About />
      </div>
    </main>
  );
}
