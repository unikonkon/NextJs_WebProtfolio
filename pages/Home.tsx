
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

  
  export default function Home() {
  
    return (
    
      <div className="z-10 ">
        <div className="py-12 bg-gradient-to-r from-slate-300/30 to-gray-300/30 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="justify-center flex ">
            {/* <Image src="/port2.jpg" width={311} height={425} className="rounded-full " alt={""} />       */}
       <div className="h-80 w-80 bg-cover bg-center bg-[url('/port2.jpg')] rounded- border-8 border-gray-50 drop-shadow-md"></div>
        </div>
          
            <div className="lg:text-center pt-5">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Me
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              สวัสดีครับ ผมชื่อ นาย สุเทพ จันทวี ชื่อเล่น กล้วย จบการศึกษาจาก มหาวิทยาลัยเทคโนโลยีสุรนารี สาขาวิศวกรรมอิเล็กทรอนิกส์ <br />
            
                ผมมีความเข้าใจในการเขียนโปรแกรมภาษา HTML CSS C JavaScript Dart
               และ Framework ReactJS NextJS Flutter Bootstrap Tailwindcss 
               และมีความสนใจในสกุลเงินดิจิตอล Cryptocurrency และ GameFi ที่ใช้เทคโนโลยีบล็อคเชน
              </p>
            </div>
  
          </div>
        </div>
        <div className=" relative  bg-gradient-to-r from-slate-600 to-gray-500">
          <div className="absolute inset-x-0 top-12 md:right-20 right-0 text-slate-200">
          <div className="text-3xl  text-center">ประสบการณ์ทำงาน Web Developer</div>
            <div className="text-2xl pt-2  text-center">
             ระยะเวลา 10 เดือน
            </div>
          </div>
       
          
        <div className="md:flex-row md:flex flex flex-col bg-pattern bg-cover bg-center h-full pb-20 pt-8 ">
       
          <div className=" w-full flex flex-col pt-10 bg-cover bg-center bg-[url('/home.jpg')] rounded-lg ml-4 shadow-md">
          
          
          </div>
          <div className="justify-center flex flex-col w-full lg:pl-2 items-cente pt-10 ml-10">
            <div className="md:z-10 md:pt-10 h-20 md:pl-10 pt-10 mx-5 ">
              <Card
                isHoverable
                variant="bordered"
                css={{ mw: "400px", p: "10px", h: "180px", bgBlur: "#2F38582C" }}
                className=""
              >
                <Card.Body >
                  <Text  css={{
                   color: "#FFFFFF",
                    }}>
                  ได้ทำหน้าที่เกี่ยวกับ เขียนเว็บ Front-end ตามที่ออกแบบมาจากเครื่องมือ Figma โดยใช้ภาษา JavaScript และ Framework ReactJS NextJS 
              
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div className="md:z-20 md:pt-24 pt-44 mx-5 md:pr-20 ">
              <Card
                isHoverable
                variant="bordered"
                css={{ mw: "400px", p: "10px", h: "140px", bgBlur: "#2F38582C" }}
                className=""
              >
                <Card.Body>
                  <Text css={{
                   color: "#FFFFFF",
                    }}>
                  เขียน Mobile Front-end ตามที่ออกแบบมาจากเครื่องมือ Figma โดยใช้ภาษา Dart และ Framework Flutter 
                  </Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
  