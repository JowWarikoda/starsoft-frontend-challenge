import "@/app/components/Header/Header.scss";
import Image from "next/image";
import CartOverlay from "@/app/components/CartOverlay/CartOverlay";

export default function Footer() {
  return (
    <header className="header">
      <Image
        src="../img/starsoft-logo.svg"
        alt="StarSoft Logo"
        width={101}
        height={38}
        priority
      />

      <CartOverlay />
    </header>
  );
}
