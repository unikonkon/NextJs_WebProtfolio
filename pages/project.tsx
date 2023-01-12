import GitHubIcon from '@mui/icons-material/GitHub';
import Navigatorbar from "./component/navbar";
import { Link } from "@nextui-org/react";
export default function project() {
  const products = [
    {
      id: 1,
      head: "หน้า Home",
      href: "#",
      imageSrc: "/Screenshot1.png",
      data: " ",
    },
    {
      id: 2,
      head: "Security สถานะ ปิด",
      href: "#",
      imageSrc: "Screenshot2.png",
      data: " ",
    },
    {
      id: 3,
      head: "กดซ้ำกับสถานะไม่ได้ ขึ้นเเจ้งเตือน",
      href: "#",
      imageSrc: "Screenshot6.png",
      data: " ",
    },
    {
      id: 4,
      head: "ตั้งค่า PIN",
      href: "#",
      imageSrc: "Screenshot3.png",
      data: " ",
    },
    {
      id: 5,
      head: "ยืนยัน PIN อีกครั้ง",
      href: "#",
      imageSrc: "Screenshot4.png",
      data: " ",
    },
    {
      id: 6,
      head: "Security สถานะ เปิด",
      href: "#",
      imageSrc: "Screenshot5.png",
      data: " ",
    },
   
  ];

  const productsClose = [
    {
      id: 1,
      head: "Security สถานะ เปิด",
      href: "#",
      imageSrc: "Screenshot5.png",
      data: " ",
    },
    {
      id: 2,
      head: "ใส่ PIN ปัจจุบัน",
      href: "#",
      imageSrc: "/ScreenClose7.png",
      data: " ",
    },
    {
      id: 3,
      head: "Security สถานะ ปิด",
      href: "#",
      imageSrc: "Screenshot2.png",
      data: " ",
    },  
  ];

  const productsLock = [
    {
      id: 1,
      head: "เปิดแอฟมาขึ้นหน้า Lock",
      href: "#",
      imageSrc: "ScreenClose8.png",
      data: " ",
    },
    {
      id: 2,
      head: "กรณีใส่ PInLock ผิด",
      href: "#",
      imageSrc: "ScreenClose9.png",
      data: " ",
    },
    {
      id: 3,
      head: "หน้า Home",
      href: "#",
      imageSrc: "/Screenshot1.png",
      data: " ",
    },
    {
      id: 4,
      head: "Security สถานะ เปิด",
      href: "#",
      imageSrc: "Screenshot5.png",
      data: " ",
    },  
  ];

  const productsOut = [
    {
      id: 1,
      head: "กดปุ่ม LockOut",
      href: "#",
      imageSrc: "ScreenOut10.png",
      data: " ",
    },
    {
      id:2,
      head: "Security สถานะ ปิด",
      href: "#",
      imageSrc: "Screenshot6.png",
      data: " ",
    }, 
     
  ];
  return (
    <div className="pb-10 bg-[url('/bg2.jpg')] bg-center">
      <Navigatorbar />
      <div className="pt-24 mx-12">
        <p className="text-3xl font-extrabold">Project </p>
      </div>
      <div className="px-10">
          <p className="pt-7 ">
            Mobile Application เกี่ยวกับระบบ Security Lock Pin ที่ใช้งานโดยการเปิดปิด Secrity <br/>
            เมื่อเปิด Secrity เวลาปิดแอฟไป เมื่อเปิดแอฟมาใหม่จะขึ้นหน้า Lock Pin ใส่ Pin ถูกแล้วค่อยเข้ามาในเเอฟได้
          </p>
          <p className="pt-7 ">
            เขียน โดยใช้ ภาษา Dart Framework Flutter ใช้ hydrated_bloc ในการการเก็บตัวแปร Pin 
      
          </p>
           <div className="pt-5">
            <Link href="https://github.com/unikonkon/Flutter_Auth_Pin_Biometric">
            <GitHubIcon className="mr-4 w-10 h-10"/>   GitHub Project Mobile Application
            </Link>
      </div>
        </div>
       
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
           <p className="pb-8 text-gray-900 text-lg">
            ขั้นตอนการเปิด Security
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
        
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between text-center">
                <div>
                  <h3 className="text-sm text-gray-700 ">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0 text-center" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="pb-8 text-gray-900 text-lg">
            ขั้นตอนการปิด Security
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
          {productsClose.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-6 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="pb-8 text-gray-900 text-lg">
            เมื่อปิดแอฟแล้วเปิดแอฟใหม่ จะขึ้นหน้า LockSecurity กรณีเปิด Security 
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
          {productsLock.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <p className="pb-8 text-gray-900 text-lg">
            กรณีกด Lock จะลบค่า PIN ออก แล้ว สถานะ Security จะปิด
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
          {productsOut.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  className="w-full h-full object-center object-contain lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={product.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
      
    </div>
  );
}
