import Navigatorbar from "./component/navbar";
import { Link } from "@nextui-org/react";
export default function youtube() {
    const activity = [
        {
          id: 1,
          head: "CRYPTOCURRENCY",
          href: "https://www.youtube.com/watch?v=0JYZRPK4i2c",
          imageSrc: "/youtube1.jpg",
          data: " คือวิดีโอที่เกี่ยวกับสกุลเงินดิจิตอลที่ใช้เทคโนโลยีบล็อคเชน โดยเป็นการซื้อขายเหรียญคริปโตที่ทำกำไรระยะสั้นแบบรายชั่วโมงโดยใช้ทุน 500 ฿ ในแอปbitkup ",
        },
        {
          id: 2,
          head: "วิธีโอนเหรียญ XLM",
          href: "https://www.youtube.com/watch?v=QKPWYhhUXuo",
          imageSrc: "youtube2.jpg",
          data: "คือวิธีการโอนเงินจากแอฟ bitkup เข้า binance ด้วยวีธีโอนเป็นเหรียญ XLM ผ่าน Network Stellar (XLM)",
        },
        {
          id: 3,
          head: "PROJECT จบมหาลัย",
          href: "https://www.youtube.com/watch?v=UaEQB6p7Afs",
          imageSrc: "youtube3.jpg",
          data: "คือวิดีโอที่อธิบายขั้นตอนการทำProjectจบมหาลัยตั้งเเต่เริ่มจนถึงพรีเซ้นต์ Projectที่ทำคือเครื่องไล่ความชื้นดอกดาวเรืองโดยใช้เทคนิคการหมุนปั่นร่วมกับลมร้อน ",
        },
        {
          id: 4,
          head: "ปลูกดอกดาวเรือง",
          href: "https://www.youtube.com/watch?v=lL9s28uVP_o",
          imageSrc: "youtube4.jpg",
          data: "คือวิดีโอขั้นตอนการปลูกดอกดาวเรือง เริ่มตั้งแต่ขั้นตอนการปลูก จนถึง ส่งขายดอกดาวเรือง",
        },
        {
          id: 5,
          head: "ทริปเขาใหญ่",
          href: "https://www.youtube.com/watch?v=z26bCJh0GN8&t",
          imageSrc: "youtube5.jpg",
          data: "คือวิดีโอไปเที่ยวกับเพื่อนๆอยุ่ในบ้านพัก ที่เดอะเกรท เขาใหญ่",
        },
        {
          id: 6,
          head: "VLOG งานรับปริญญา",
          href: "https://www.youtube.com/watch?v=SKz0cL-7Ezk&t",
          imageSrc: "youtube6.jpg",
          data: "คือวิดีโอVlogงานรับปริญญามหาลัยเทคโนโลยีสุรนารี 2020",
        },
      ];
    return(
        <div className="bg-[url('/bg1.jpg')] bg-center">
      <Navigatorbar />
      <div className="pt-28 text-center">
        <p className="text-3xl font-extrabold">Video Content Creator </p>
        
        <p className="text-2xl pt-4">YouTube: FaradayBanana</p>
       <div className="">
       <Link href="https://www.youtube.com/@FaradayBanana" >
        <p className="text-sky-200 mt-3 rounded-lg bg-gray-800 px-3 py-1"> Open Youtube</p>
        </Link>
       </div>
       
      </div>
      <div className="max-w-2xl mx-auto py-5 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {activity.map((activity) => (
            <div key={activity.id} className="group relative">
              <div className="w-full  bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
                <img
                  src={activity.imageSrc}
                  className="w-full h-full object-center lg:w-full lg:h-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={activity.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {activity.head}
                    </a>
                  </h3>
                  <a className="mt-1 text-sm text-gray-500" href={activity.href}>{activity.data}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}