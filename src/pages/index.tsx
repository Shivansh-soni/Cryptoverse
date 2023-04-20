import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../Components/Navbar"), {
  ssr: false,
});
const Header = dynamic(() => import("../pages/header"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="main__bg">
      <div className="px-2  p-2">
        <Navbar />
      </div>
      <Header />
    </div>
  );
}
