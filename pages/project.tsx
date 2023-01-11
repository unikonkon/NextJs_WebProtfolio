
import Navigatorbar from "./component/navbar";
import { Link } from "@nextui-org/react";
export default function project() {
  const products = [
    {
      id: 1,
      head: "แข่ง A-MATH ",
      href: "#",
      imageSrc: "/Activity1.jpg",
      data: " กีฬามหาวิทยาลัยไทย (2018) เป็นกีฬาที่เกี่ยวกับการวางแผน + - * / ตัวเลขที่นำมาคำนวณโดยใช้หลักการของสมาการเบื้องต้น ซึ่งผลแพ้ชนะจะวัดจากเเต้มที่ทำได้ในการลงคะแนนแต่ละสมาการ ",
    },
    {
      id: 2,
      head: "กิจกรรมต้อนรับน้องใหม่ มทส",
      href: "#",
      imageSrc: "Activity2.jpg",
      data: "จัดกิจกรรมต่างๆสำหรับของมหาลัย สำหรับนักศึกษาปี 1",
    },
    {
      id: 3,
      head: "ทีมงานต้อนรับน้องใหม่ มทส",
      href: "#",
      imageSrc: "Activity3.jpg",
      data: "ทีมงานต้อนรับน้องใหม่ของมหาลัย ที่คอยอำนวยความสะดวกให้นักศึกษาปี 1 ที่เข้ามาใหม่ ",
    },
    {
      id: 4,
      head: "เข้าค่าย มทส",
      href: "#",
      imageSrc: "Activity4.jpg",
      data: "เข้าแคมป์อบรมทักษะความเป็นผู้นำและฝึกกิจกรรมต่างๆ ของทางมหาลัยจัดขึ้น",
    },
    {
      id: 5,
      head: "SUT STARTUP CAMP",
      href: "#",
      imageSrc: "Activity5.jpg",
      data: "เป็นกิจกรรมที่ฝึกทักษะการเป็นผู้ประกอบธุรกิจและเรียนรู้ลงมือปฏิบัติในการพัฒนาแนวคิดธุรกิจใหม่",
    },
    {
      id: 6,
      head: "ทดสอบโรบอท",
      href: "#",
      imageSrc: "Activity6.jpg",
      data: "ฝึกงานเกี่ยวกับการติดตั้งโรบอท ออกนอกสถานที่ไปติดตั้งโรบอทให้กับมหาลัย",
    },
  ];
  return (
    <div className="">
      <Navigatorbar />
      <div className="pt-24 mx-12">
        <p className="text-3xl">Project </p>
      </div>
      <div className="px-10">
          <p className="pt-7 ">
            Mobile Application เกี่ยวกับระบบ Security Lock Pin ที่ใช้งานโดยการเปิดปิด Secrity <br/>
            เมื่อเปิดSecrityแล้ว เวลาปิดแอฟไป เปิดแอฟมาใหม่จะขึ้นหน้า Lock Pin ใส่ Pin ถูกแล้วค่อยเข้ามาในเเอฟได้
          </p>
          <p className="pt-7 ">
            เขียน โดยใช้ ภาษา Dart Framework Flutter 
      
          </p>
          <div className="pt-5">
      <Link href="https://github.com/unikonkon/Flutter_Auth_Pin_Biometric">
     GitHub Project Mobile Application
    </Link>
      </div>
        </div>
       
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
       
        <div className=" grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3  lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
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
