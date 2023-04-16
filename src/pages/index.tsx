import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Components/Navbar"), {
  ssr: false,
});
const Header = dynamic(() => import("../pages/header"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
    </main>
  );
}
