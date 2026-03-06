import Image from "next/image";
<<<<<<< HEAD
import "./globals.css";
=======
import Link from "next/link";
>>>>>>> ab9eb46ec76b7c4bf5e60820031a90afee0b3c4e

export default function Home() {
  return (
    <>
      <div className="flex justify-around bg-yellow-500 -mx-60 p-4">
        <div className="bg-green-500 ">Lumera Logo</div>
        <div className="flex bg-[red]  space-x-4 p-1.5">
          <Link href={""}>Home</Link>
          <Link href={""}>Product</Link>
          <Link href={""}>About Us</Link>
          <Link href={""}>Contact Us</Link>
        </div>
      </div>
    </>
  );
}
