import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col items-center'> 
        <div className='flex flex-col items-center' style={{background: `#FFF`, margin:`20%`, marginTop: '5%', marginBottom: '5%', padding: `5%`, paddingBottom: `2%`, paddingTop: `2%`, width: '90%'}}>
          <h2 className="font-bold" style={{fontSize: `25px`}}>
            home
          </h2>
        </div>
        <div className='flex flex-col items-center' style={{background: `#FFF`, margin:`20%`, marginTop: '0%', marginBottom: '5%', padding: `5%`, width: '60%'}}>
          <h3 className="font-bold" style={{fontSize: `20px`, marginTop: '5%'}}>
            about画面はこちらから
          </h3>
          <Button variant="destructive" asChild style={{margin: `5%`}}>
            <Link href="/about">about</Link>        
          </Button>
        </div>
        <div className='flex flex-col items-center' style={{background: `#FFF`, margin:`20%`, marginTop: '5%', marginBottom: '5%', padding: `5%`, width: '60%'}}>
          <h3 className="font-bold" style={{fontSize: `20px`, marginTop: '5%'}}>
            content画面はこちらから
          </h3>
          <Button variant="destructive" asChild style={{margin: `5%`}}>
            <Link href="/content">content</Link>              
          </Button>
        </div>
       
    </div>
  );
}
