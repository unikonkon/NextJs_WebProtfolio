import GitHubIcon from '@mui/icons-material/GitHub';
import Navigatorbar from "./component/navbar";
import { Link } from "@nextui-org/react";
export default function ProjectFlutter() {
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

  const productsStep = [
    {
      id: 1,
      head: "หน้าแรกของ App",
      href: "#",
      imageSrc: "Screenshot_1.png",
      data: " ",
    },
    {
      id:2,
      head: "กดปุ่ม มาหน้า FormPage",
      href: "#",
      imageSrc: "Screenshot_2.png",
      data: " ",
    },   
    {
      id:3,
      head: "Step 1 ใส่ข้อมูล ให้ครบทั้ง 2 ช่อง",
      href: "#",
      imageSrc: "Screenshot_3.png",
      data: " ",
    }, 
    {
      id:4,
      head: "หน้าแสดงข้อมูลที่กรอก",
      href: "#",
      imageSrc: "Screenshot_4.png",
      data: " ",
    }, 
    {
      id:5,
      head: "หน้าแสดงว่าสำเร็จ",
      href: "#",
      imageSrc: "Screenshot_5.png",
      data: " ",
    }, 
    {
      id:6,
      head: "หน้าแสดงรายการ",
      href: "#",
      imageSrc: "Screenshot_6.png",
      data: " ",
    }, 
    {
      id:7,
      head: "หน้าแสดงรายการ มีข้อมูลมากกว่า 1",
      href: "#",
      imageSrc: "Screenshot_7.png",
      data: " ",
    }, 
  ];

  // 3.
  const productsAPI = [
    {
      id: 1,
      head: "หน้า กำลังโหลดข้อมูล",
      href: "#",
      imageSrc: "flutterapi1.png",
      data: " ",
    },
    {
      id:2,
      head: "หน้าแสดงข้อมูล",
      href: "#",
      imageSrc: "flutterapi2.png",
      data: " ",
    },   
    {
      id:3,
      head: "หน้าเเสดงข้อมูลเพิ่มเติม",
      href: "#",
      imageSrc: "flutterapi3.png",
      data: " ",
    }, 
  
  ];
  return (
    <div className="pb-10 bg-[url('/bg2.jpg')] bg-cover">
      <Navigatorbar />
      <div className="pt-28 text-center">
        <p className="text-3xl font-extrabold">Project Flutter </p>
      </div>
      <div className="px-10">
          <p className="pt-14 text-lg font-semibold">
           1. Mobile Application เกี่ยวกับระบบ Security Lock Pin ที่ใช้งานโดยการเปิดปิด Secrity <br/>
            เมื่อเปิด Secrity เวลาปิดแอฟไป เมื่อเปิดแอฟมาใหม่จะขึ้นหน้า Lock Pin ใส่ Pin ถูกแล้วค่อยเข้ามาในเเอฟได้
          </p>
          <p className="pt-7 ">
            เขียน โดยใช้ ภาษา Dart Framework Flutter ใช้ hydrated_bloc ในการการเก็บตัวแปร Pin 
      
          </p>
           <div className="pt-5">
            <Link href="https://github.com/unikonkon/Flutter_Auth_Pin_Biometric">
            <GitHubIcon className="mr-4 w-10 h-10"/>   GitHub Project Mobile Application SecurityLockPin
            </Link>
      </div>
        </div>
       
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
           <p className="pb-8 text-gray-900 text-lg">
            ขั้นตอนการเปิด Security
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8 ">
        
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

      {/* 2. */}
      <div className="px-10">
          <p className="pt-20 text-lg font-semibold">
           2. Mobile Application เกี่ยวกับการกรอกข้อมูล โดยใช้ stepper flutter แล้วแสดงข้อมูลออกมาเป็น List
            
          </p>
          <p className="pt-7 ">
            เขียน โดยใช้ ภาษา Dart Framework Flutter ใช้ bloc ในการการเก็บตัวแปร ชื่อ 
      
          </p>
           <div className="pt-5">
            <Link href="https://github.com/unikonkon/Flutter_Stepper_Widget-">
            <GitHubIcon className="mr-4 w-10 h-10"/>   GitHub Project Mobile Application Stepper Flutter
            </Link>
      </div>
        </div>

        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
           <p className="pb-8 text-gray-900 text-lg">
            ขั้นตอนการทำงาน กรอกข้อมูล
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
        
          {productsStep.map((product) => (
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


            {/* 3. */}
        <div className="px-10">
          <p className="pt-20 text-lg font-semibold">
           3. Mobile Application เกี่ยวกับการดึงข้อมูลมาจาก API แล้วแสดงข้อมูลออกมาเป็น List
            
          </p>
          <p className="pt-7 ">
            เขียน โดยใช้ ภาษา Dart Framework Flutter  
      
          </p>
           <div className="pt-5">
            <Link href="https://github.com/unikonkon/Flutter_API_DataList">
            <GitHubIcon className="mr-4 w-10 h-10"/>   GitHub Project Mobile Application API Data
            </Link>
      </div>
        </div>

        <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
           <p className="pb-8 text-gray-900 text-lg">
            หน้าแอฟเเสดงผล
            </p>
        <div className=" grid grid-cols-3 gap-y-10 gap-x-6 sm:grid-cols-4  lg:grid-cols-6 xl:gap-x-8">
        
          {productsAPI.map((product) => (
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
      
    </div>
  );
}
