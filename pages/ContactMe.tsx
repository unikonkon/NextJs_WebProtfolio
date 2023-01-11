import Navigatorbar from "./component/navbar";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Image from "next/image";

export default function contactme() {
    return (
        <div>
         <Navigatorbar />
        <div className="pt-32 text-center text-4xl">
        CONTACT ME
        </div>
        <div className="pt-10 flex justify-center">
        <div className="pr-10">
        <EmailIcon color="disabled" className="mr-4 w-10 h-10"/> Email : bananammm0001@gmail.com
        <br/><br/>
        <GitHubIcon color="disabled" className="mr-4 w-10 h-10"/> GitHub : unikonkon
        <br/><br/>
        <FacebookIcon color="disabled" className="mr-4 w-10 h-10"/> Facebook : ฟาราเดย์
        <br/><br/>
        <LocalPhoneIcon color="disabled" className="mr-4 w-10 h-10"/> Phone : 0901834036
        <br/><br/>
        <PhoneAndroidIcon color="disabled" className="mr-4 w-10 h-10"/> ID Line : noonelive
        <div className="pl-10 text-center md:hidden pt-12  w-full">
       <div className="justify-center flex pb-4">
       <Image src="/map.jpg" width={200} height={90} className="rounded-lg " alt={""} />
       </div>
     
            บ้านหนองไทร ตำบลลำเพียก
            <br/>
            อำเภอครบุรี จังหวัดนครราชสีมา
            <br/>
            30250
            </div>
            </div>
            
            <div className="mx-5 text-center hidden md:block">
            <div className="mb-5 w-64 h-32 bg-cover bg-[url('/map.jpg')] rounded-lg"></div> 
            บ้านหนองไทร ตำบลลำเพียก
            <br/>
            อำเภอครบุรี จังหวัดนครราชสีมา
            <br/> 
            30250         
            </div>
           
        </div>
        </div>
       
    )
}