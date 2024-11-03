import Link from 'next/link';
import { SiStudyverse } from "react-icons/si";
import { Button } from '../ui/button';

function Logo() {
    return (
        <Button size="icon" asChild><Link href="">
            <SiStudyverse className='w-6 h-6' /></Link></Button>
    )
}
export default Logo;