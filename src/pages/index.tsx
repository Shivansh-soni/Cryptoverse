import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Components/Navbar"), {
  loading: () => <div>Loading...</div>,
});
const Header = dynamic(() => import("../pages/header"), {
  loading: () => <div>Loading...</div>,
});

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
    </main>
  );
}
