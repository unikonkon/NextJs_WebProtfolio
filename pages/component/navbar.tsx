
import React from "react";
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import Link from 'next/link'
export default function Navigatorbar() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
  
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
        
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
        
                  <Navbar.Link href="/" >Home
                  </Navbar.Link>
           <Navbar.Link  href="/project">
           Project
          </Navbar.Link>
          <Navbar.Link href="/Activity">Activity</Navbar.Link>
          <Navbar.Link href="#">Contact Me</Navbar.Link>
        </Navbar.Content>
       
        <Navbar.Collapse disableAnimation >
       
            <Navbar.CollapseItem>
              <Link
                color="inherit"
               
                href="/"
              >
               Home 
              </Link>
              
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
              <Link
                color="inherit"
                
                href="/Activity"
              >
              Activity 
              </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link
                color="inherit"
                
                href="/Activity"
              >
               Project 
              </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link
                color="inherit"
                
                href="/ContactMe"
              >
              Contact Me
              </Link>
            </Navbar.CollapseItem>
             
        </Navbar.Collapse>
      </Navbar>
   
  );
}