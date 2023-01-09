
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
                A better way to send money
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
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
            <div className="text-6xl ">Title</div>
            <div className="text-2xl pt-4">
              Lorem ipsum dolor <br /> sit amet consect adipisicing elit.
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
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                    magnam voluptatum cupiditate veritatis in accusamus quisquam.
                  </Text>
                </Card.Body>
              </Card>
            </div>
            <div className="md:z-20 md:pt-24 pt-44 mx-5 md:pr-20 ">
              <Card
                isHoverable
                variant="bordered"
                css={{ mw: "400px", p: "10px", h: "180px" }}
                className=""
              >
                <Card.Body>
                  <Text>
                    Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                    magnam voluptatum cupiditate veritatis
                    <br />A hoverable card.
                  </Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
  