
  import {
    Button,
    Card,
    Checkbox,
    Col,
    Input,
    Modal,
    Row,
    Text,
  } from "@nextui-org/react";
  
  import Image from "next/image";
 
  import React from "react";
import Navigatorbar from "./component/navbar";
  
  export default function Home() {
    // const [visible, setVisible] = React.useState(false);
    // const handler = () => setVisible(true);
    // const closeHandler = () => {
    //   setVisible(false);
    // };
  
    // const features = [
    //   {
    //     name: "Competitive exchange rates",
    //     description:
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    //     // icon: GlobeAltIcon,
    //   },
    //   {
    //     name: "No hidden fees",
    //     description:
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    //     // icon: ScaleIcon,
    //   },
    //   {
    //     name: "Transfers are instant",
    //     description:
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    //     // icon: LightningBoltIcon,
    //   },
    //   {
    //     name: "Mobile notifications",
    //     description:
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    //     // icon: AnnotationIcon,
    //   },
    // ];
    return (
    
      <div className="z-10 ">
       

        <div className="py-12 bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Me
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              สวัสดีครับ ผมชื่อ นาย สุเทพ จันทวี ชื่อเล่น กล้วย จบการศึกษาจาก มหาวิทยาลัยเทคโนโลยีสุรนารี สาขาวิศวกรรมอิเล็กทรอนิกส์ <br />
            
                ผมมีความเข้าใจในการเขียนโปรแกรมภาษา HTML CSS C JavaScript Dart
               และ Framework ReactJS NextJS Flutter Bootstrap Tailwindcss 
               และมีความเข้าใจในสกุลเงินดิจิตอล Cryptocurrency และ GameFi ที่ใช้เทคโนโลยีบล็อคเชน
              </p>
            </div>
  
            <div className="mt-10 ">
              <div className="space-y-10 md:space-y-0 md:flex md:flex-row md:gap-x-8 md:gap-y-10  flex-col flex items-center   ">
                {/* {features.map((feature) => (
                  <div key={feature.name} className="relative  ">
                    <Card
                      isHoverable
                      variant="bordered"
                    //   css={{ p: "$5", mw: "400px", h: "$90" ,background: "$gray50"}}
                    className = "text-red-900"
                    >
                      <Card.Body >
                        <Text >
                          {" "}
                          <h1  className = "text-red-900">
                          {feature.name}
                          </h1>
                         
                          <br />
                          {feature.description}
                        </Text>
                      </Card.Body>
                    </Card>
                  </div>
  
                  
                  
                ))} */}
              </div>
            </div>
          </div>
        </div>
  
        <div className="md:flex-row md:flex flex flex-col bg-pattern bg-cover bg-center h-full pb-20 pt-10">
          <div className="text-white w-full flex flex-col justify-center items-center pt-10 ">
            <div className="text-3xl ">ประสบการณ์ทำงาน Web Developer</div>
            <div className="text-2xl pt-2">
             ระยะเวลา 10 เดือน
            </div>
          </div>
          <div className="justify-center flex flex-col w-full lg:pl-32 items-center">
            <div className="md:z-10 md:pt-10 h-20 md:pl-10 pt-10 mx-5">
              <Card
                isHoverable
                variant="bordered"
                css={{ mw: "400px", p: "10px", h: "180px", bgBlur: "#fffff66" }}
                className=""
              >
                <Card.Body>
                  <Text>
                  ได้ทำหน้าที่เกี่ยวกับ เขียนเว็บ Front-end ตามที่ออกแบบมาจากเครื่องมือ Figma โดยใช้ภาษา JavaScript และ Framework ReactJS NextJS 
              
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div className="md:z-20 md:pt-24 pt-44 mx-5 md:pr-20 ">
              <Card
                isHoverable
                variant="bordered"
                css={{ mw: "400px", p: "10px", h: "140px" }}
                className=""
              >
                <Card.Body>
                  <Text>
                  เขียน Mobile Front-end ตามที่ออกแบบมาจากเครื่องมือ Figma โดยใช้ภาษา Dart และ Framework Flutter 
                  </Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
  