
import Navigatorbar from "./component/navbar";

export default function Activity() {
  const activity = [
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
    <div className="bg-[url('/bg2.jpg')] bg-center ">
      <Navigatorbar />
      <div className="pt-28 mx-12">
        <p className="text-3xl font-extrabold">Activity </p>
      </div>
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {activity.map((activity) => (
            <div key={activity.id} className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={activity.imageSrc}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href={activity.href}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {activity.head}
                    {/* </a> */}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{activity.data}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
