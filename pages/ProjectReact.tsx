import GitHubIcon from '@mui/icons-material/GitHub';
import Navigatorbar from "./component/navbar";
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "@nextui-org/react";
export default function ProjectReact() {

  const reactCRUD = [ 
    {
      id: 7,
      head: "หน้าแสดงข้อมูล",
      href: "#",
      imageSrc: "ReactCURD1.png",
      data: " ",
    },
    {
      id: 8,
      head: "หน้าสร้างข้อมูล",
      href: "#",
      imageSrc: "/ReactCURD2.png",
      data: " ",
    },
    {
      id: 9,
      head: "ข้อมูลที่เพิ่มขึ้นมา",
      href: "#",
      imageSrc: "ReactCURD3.png",
      data: " ",
    }, 
    {
      id: 10,
      head: "หน้าแก้ไขข้อมูล",
      href: "#",
      imageSrc: "ReactCURD4.png",
      data: " ",
    },
    {
      id: 11,
      head: "แสดงข้อมูลที่แก้ไข้แล้ว",
      href: "#",
      imageSrc: "ReactCURD5.png",
      data: " ",
    },
    {
      id: 12,
      head: "หน้าแสดงการลบข้อมูล",
      href: "#",
      imageSrc: "ReactCURD6.png",
      data: " ",
    },
    {
      id: 13,
      head: "หน้าที่ข้อมูลลบเสร็จ",
      href: "#",
      imageSrc: "ReactCURD7.png",
      data: " ",
    },  
];

  const products = [
    {
      id: 1,
      head: "เปิด XAMPP start MySQL",
      href: "#",
      imageSrc: "/ReactJS1.png",
      data: " ",
    },
    {
      id: 2,
      head: "สร้างตัวแปรของ MySQL",
      href: "#",
      imageSrc: "ReactJS2.png",
      data: " ",
    },
    {
      id: 3,
      head: "เปิด Code NodeJS",
      href: "#",
      imageSrc: "ReactJS3.png",
      data: " ",
    },
    {
      id: 4,
      head: "RUN NodeJS ใช้ nodemon app.js",
      href: "#",
      imageSrc: "ReactJS4.png",
      data: " ",
    },
   
   
  ];

  const runProducts = [
    {
      id: 1,
      head: "หน้า Login",
      href: "#",
      imageSrc: "ReactJS11.png",
      data: " ",
    },
    {
      id: 2,
      head: "ใส่ email และ password ที่มีข้อมูลในฐานข้อมูล",
      href: "#",
      imageSrc: "/ReactJS12.png",
      data: " ",
    },
    {
      id: 3,
      head: "ฐานข้อมูล ที่มีข้อมูล",
      href: "#",
      imageSrc: "ReactJS121.png",
      data: " ",
    },  
    {
        id: 4,
        head: "Login สำเร็จ",
        href: "#",
        imageSrc: "ReactJS13.png",
        data: " ",
      },
      {
        id: 5,
        head: "Login ไม่สำเร็จ",
        href: "#",
        imageSrc: "/ReactJS14.png",
        data: " ",
      },
      {
        id: 6,
        head: "หน้า User",
        href: "#",
        imageSrc: "ReactJS15.png",
        data: " ",
      },  
  ];
  
  const runProductsSignUp = [ 
      {
        id: 7,
        head: "หน้า SignUp ที่เพิ่มข้อมูล name, email, password",
        href: "#",
        imageSrc: "ReactJS16.png",
        data: " ",
      },
      {
        id: 8,
        head: "เพิ่มข้อมูลสำเร็จ",
        href: "#",
        imageSrc: "/ReactJS17.png",
        data: " ",
      },
      {
        id: 9,
        head: "ฐานข้อมูล ที่มีข้อมูลถูกเพิ่มขึ้นมา",
        href: "#",
        imageSrc: "ReactJS18.png",
        data: " ",
      }, 
      {
        id: 10,
        head: "ข้อมูลที่ถูกเพิ่มล่าสุด นำมา Login",
        href: "#",
        imageSrc: "ReactJS19.png",
        data: " ",
      },
      {
        id: 11,
        head: "Login สำเร็จ จากข้อมูลที่ถูกเพิ่มล่าสุด",
        href: "#",
        imageSrc: "ReactJS20.png",
        data: " ",
      },  
  ];

  return (
    <div className="pb-10 bg-[url('/bg2.jpg')] bg-cover">
      <Navigatorbar />
      <div className="pt-28 text-center">
        <p className="text-3xl font-extrabold">Project ReactJS </p>
      </div>

      <div className="px-10">
          <p className="pt-7 text-lg">
          <p className="text-xl pb-3">1. Web Rest API CRUD</p>
          การทำ CRUD ข้อมูล ซึ่งประกอบไปด้วย Create สร้าง, Read อ่าน, Update แก้ไข และ Delete : ลบ<br/>
            เรียกใช้ข้อมูลผ่านการใช้ API 
          </p>
          <p className="pt-7 text-lg">
            เขียน โดยใช้ ภาษา JavaScript Framework ReactJS  
          </p>
         <div className="pt-8">
            <Link href="https://github.com/unikonkon/React_CRUD_RestAPI">
            <GitHubIcon className="mr-4 w-10 h-10"/>   GitHub Web Project
            </Link>
         </div>
         <div className="pt-3">
            <Link href="https://react-crud-rest-api.vercel.app/">
            <LanguageIcon className="mr-4 w-10 h-10 text-sky-600"/>
            <p className="text-sky-600">
            Link Web Project 
            </p> 
            </Link>
         </div>
        </div>
       
      <div className="pb-12 sm:pb-10">
           <p className="pb-8 text-gray-900 text-lg px-10 pt-8">
            ตัวอย่าง Web RestAPI CRUD
            </p>
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-3 xl:gap-x-4 px-8">
        
          {reactCRUD.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
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


      {/* 2. */}
      <div className="px-10">
          <p className="pt-10 text-lg">
         <p className="text-xl pb-3">2.  Web LogIn  </p>
         เกี่ยวกับระบบ Login ที่ติดต่อกับฐานข้อมูล MySQL โดยเมื่อ login แล้วจะเข้าไปหน้า User และ มีหน้า SignUp ที่กรอกข้อมูล แล้วสามารถนำข้อมูลไปใส่หน้า Login แล้วจะเข้ามาหน้า User ได้
          </p>
          <p className="pt-7 ">
            เขียน โดยใช้ ภาษา JavaScript Framework ReactJS ใช้ NodeJS เขียนฐานข้อมูล และฐานข้อมูลเป็น MySQL 
          </p>
         <div className="pt-5">
            <Link href="https://github.com/unikonkon/ReactJS_Login_API_MySQL">
            <GitHubIcon className="mr-4 w-10 h-10"/>   GitHub Web Project
            </Link>
         </div>
         <div className="pt-2">
            <Link href="https://github.com/unikonkon/ReactJS_Login_API_MySQL/tree/main/BlackEnd_NodeJs">
            <GitHubIcon className="mr-4 w-10 h-10"/>   GitHub Web Project Code NodeJS BackEnd
            </Link>
         </div>
         <div className="pt-8">
            <Link href="https://react-js-login-api-mysql.vercel.app/">
            <LanguageIcon className="mr-4 w-10 h-10 text-sky-600"/>
            <p className="text-sky-600">
            Link Web Project 
            </p> 
            </Link>
            <p className="pt-2 ">
            ***แต่ Link web ข้างต้น ไม่สามารถ Login เข้าหน้า User ได้ และ SignUp ข้อมูลไม่ได้ เพราะไม่ได้เปิดฐานข้อมูล MySQL และ ไม่ได้รันฐานข้อมูล NodeJS
          </p>
         </div>
        </div>
       
      <div className="pb-12 sm:pb-10">
           <p className="pb-8 text-gray-900 text-lg px-10 pt-16">
            ตัวอย่าง Web การรันฐานข้อมูล NodeJS และ Start MySQL
            </p>
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-4 px-8">
        
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
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

      <div className="pb-20 sm:pb-16">
           <p className="pb-8 text-gray-900 text-lg px-10 pt-16">
           ตัวอย่าง Web เมื่อรัน NodeJS และ เปิด MySQL
            </p>
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-4 px-8">
        
          {runProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
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

        <div className="pt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-4 xl:gap-x-4 px-8">
        
          {runProductsSignUp.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full   bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
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
