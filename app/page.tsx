import Image from "next/image";
import Link from "next/link";
import Card from "./card/page";

export default function Home() {
  return (
    <>
    <h1>This is home page</h1>
 <Link href="/about"><h2>Go to about page</h2></Link>
 <br />
 <Card Name = "Ashir" Rollno="1234" Day="Tuesday"/>
 <br />
 <Card Name = "Huzaifa" Rollno="45456" Day="Monday"/>
 <br />
 <Card Name = "Kiran" Rollno="93717" Day="Friday"/>
 <br />
 <Card Name = "Maheen" Rollno="42501" Day="Saturday"/>
 <br />
 <Card Name = "Anaya" Rollno="6798" Day="Sunday"/>
    </>
  )}