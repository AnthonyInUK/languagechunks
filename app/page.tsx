import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">HomePage</h1>
      <Button variant='outline' size='lg' className="capitalzie m-8" >Click me</Button>
    </div>
  );
}
