import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import img from './images/image1.jpg'
import img2 from './images/image2.png'
import { AiFillGithub } from 'react-icons/ai'
import { BsDiscord, BsTwitter, BsYoutube } from 'react-icons/bs'
import { AiFillCheckCircle,AiFillMail } from 'react-icons/ai'
import { MdPending } from 'react-icons/md'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BiPhoneCall } from 'react-icons/bi'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from 'react';

const Home = () => {
  const [showMenu, setShowMenu] = useState();
  return (
    <>
      <header className=" py-3 lg:px-52  px-12 bg-white shadow sticky">
        <div className="container-xxl">
          <div className="flex justify-between items-center">
            <div className="logo">
              <Avatar className="font-bold text-2xl items-center">E<span className=" text-blue-600 font-extrabold">K</span></Avatar>
            </div>
            <div className="resume">
              <Button>Hire Me</Button>
            </div>

          </div>
        </div>
      </header>
      <Separator />

      <section id="home" className=" items-center">
        <div className="container-xl">
          <Card className=" justify-center items-center text-center border-0 bg-gradient-to-b from-teal-200">
            <CardHeader>
              <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden my-14">
                <Image src={img} alt={"image"} layout="fill" objectFit="cover" />
              </div>
              <CardTitle>
                <h1 className="leading-8 font-bold text-4xl">Eclar <span className="text-blue-600">Khalid</span>
                </h1>
              </CardTitle>
              <CardDescription>
                <p className="text-xl my-2">Front-End Developer</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-8 text-xl max-w-sm mx-auto">Create the best web designs for your business with me.</p>
            </CardContent>
            <CardFooter className="flex justify-center items-center text-3xl opacity-60 space-x-8">
              <Link className=" hover:text-blue-900" href={''} target="_blank"><AiFillGithub /></Link>
              <Link className=" hover:text-blue-900" href={''}><BsDiscord /></Link>
              <Link className=" hover:text-blue-900" href={''}><BsTwitter /></Link>
              <Link className=" hover:text-blue-900" href={''}><BsYoutube /></Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section id="about" className="px-5 my-20">
        <div className="container-xl">
          <div className="lg:flex  justify-around items-center">
            <Card className="my-3">
              <CardHeader>
                <CardTitle className="text-center">
                  <h1 className="uppercase text-3xl ">
                    Who Am I?</h1>
                </CardTitle>
                <CardDescription>
                  <p className="text-xl mx-auto max-w-md text-center">
                    I'm Eclar Khalid a Front-end Web Developer / Back-end Developer
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="education" className="w-[400px] lg:w-[600px] p-10">
                  <TabsList className="lg:flex justify-between">
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="experience">Work Experience</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>
                  <TabsContent defaultValue={'education'} value="education">
                    <p className="leading-8 mx-auto max-w-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam nesciunt iste accusamus dolor nam quidem laudantium, alias aliquid eveniet illo, quaerat molestiae doloribus voluptate. Molestias veniam quam reiciendis suscipit.
                    </p>
                  </TabsContent>
                  <TabsContent value="experience">
                    <p className="leading-8 mx-auto max-w-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam nesciunt iste accusamus dolor nam quidem laudantium, alias aliquid eveniet illo, quaerat molestiae doloribus voluptate. Molestias veniam quam reiciendis suscipit.
                    </p>
                  </TabsContent>
                  <TabsContent value="skills">
                    <p className="leading-8 mx-auto max-w-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit magnam nesciunt iste accusamus dolor nam quidem laudantium, alias aliquid eveniet illo, quaerat molestiae doloribus voluptate. Molestias veniam quam reiciendis suscipit.
                    </p>
                  </TabsContent>
                </Tabs>

                <CardContent className="flex justify-center">
                  <Button>Download Cv</Button>
                </CardContent>

              </CardContent>
            </Card>
            <Card className="my-3">
              <CardHeader>
                <CardTitle className="text-center">
                  <h1 className="uppercase text-3xl ">
                    ABOUT ME</h1>
                </CardTitle>
                <CardDescription>
                  <p className="text-xl mx-auto max-w-lg text-center">
                    Get to know a little bit about me.
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-10 mx-auto max-w-xl">
                  As a web developer, I am a well-disposed, open-minded, and sociable individual, passionate about creating dynamic and engaging digital experiences. My expertise lies in <span className="text-blue-600">
                    HTML, CSS, JavaScript, React, Next.js</span>, and <span className="text-blue-600">
                    TypeScript</span>, allowing me to build modern and interactive web applications.

                  With a strong foundation in web development, I have acquired proficiency in crafting responsive layouts, implementing intuitive user interfaces, and optimizing performance for seamless user experiences. My technical skills extend beyond the frontend, as I also have some experience in <span className="text-blue-600">
                    Java
                  </span> and
                  <span className="text-blue-600">
                    PHP
                  </span>
                  , enabling me to work on diverse projects with versatility and adaptability.

                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className=" px-4 my-20 bg-slate-300">
        <div className="container-xl">
          <div className="text-center">
            <h1 className=" text-bold text-3xl font-bold p-4 uppercase">projects</h1>
            <p className=" text-muted-foreground">All The projects I have managed to complete.</p>
          </div>
          <div className="lg:flex justify-between items-center my-4">
            <Card className='mb-3'>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> Name</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  Apneck Is An eccomerce website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img2} className="h-48 w-96 mb-3 object-cover" alt={""} />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Next-Js</p>
                  <p>React</p>
                  <p>Tailwind</p>
                  <p>Mongo-Db</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link href={' https://apneck-eclarkhalid.netlify.app/'} target="_blank">
                  <Button variant={"outline"}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                  <Button variant={"outline"}>
                    Code
                  </Button>
                </Link>
                <Link href={'https://youtu.be/p53gC8PNsuo'} target="_blank">
                  <Button variant={"outline"}>
                    Video
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className='mb-3'>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> Name</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  Apneck Is An eccomerce website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img2} className="h-48 w-96 mb-3 object-cover" alt={""} />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Next-Js</p>
                  <p>React</p>
                  <p>Tailwind</p>
                  <p>Mongo-Db</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link href={' https://apneck-eclarkhalid.netlify.app/'} target="_blank">
                  <Button variant={"outline"}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                  <Button variant={"outline"}>
                    Code
                  </Button>
                </Link>
                <Link href={'https://youtu.be/p53gC8PNsuo'} target="_blank">
                  <Button variant={"outline"}>
                    Video
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className='mb-3'>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> Name</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  Apneck Is An eccomerce website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img2} className="h-48 w-96 mb-3 object-cover" alt={""} />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Next-Js</p>
                  <p>React</p>
                  <p>Tailwind</p>
                  <p>Mongo-Db</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link href={' https://apneck-eclarkhalid.netlify.app/'} target="_blank">
                  <Button variant={"outline"}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                  <Button variant={"outline"}>
                    Code
                  </Button>
                </Link>
                <Link href={'https://youtu.be/p53gC8PNsuo'} target="_blank">
                  <Button variant={"outline"}>
                    Video
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="lg:flex justify-between items-center my-4">
            <Card className='mb-3'>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> Name</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  Apneck Is An eccomerce website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img2} className="h-48 w-96 mb-3 object-cover" alt={""} />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Next-Js</p>
                  <p>React</p>
                  <p>Tailwind</p>
                  <p>Mongo-Db</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link href={' https://apneck-eclarkhalid.netlify.app/'} target="_blank">
                  <Button variant={"outline"}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                  <Button variant={"outline"}>
                    Code
                  </Button>
                </Link>
                <Link href={'https://youtu.be/p53gC8PNsuo'} target="_blank">
                  <Button variant={"outline"}>
                    Video
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className='mb-3'>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> Name</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  Apneck Is An eccomerce website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img2} className="h-48 w-96 mb-3 object-cover" alt={""} />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Next-Js</p>
                  <p>React</p>
                  <p>Tailwind</p>
                  <p>Mongo-Db</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link href={' https://apneck-eclarkhalid.netlify.app/'} target="_blank">
                  <Button variant={"outline"}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                  <Button variant={"outline"}>
                    Code
                  </Button>
                </Link>
                <Link href={'https://youtu.be/p53gC8PNsuo'} target="_blank">
                  <Button variant={"outline"}>
                    Video
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className='mb-3'>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-around">
                    <h1 className="mb-2"> Name</h1>
                    <AiFillCheckCircle className=" text-green-900" />
                  </div>
                </CardTitle>
                <CardDescription>
                  Apneck Is An eccomerce website
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image src={img2} className="h-48 w-96 mb-3 object-cover" alt={""} />
                <h1 className="text-xl ">Languages & Libraries</h1>
                <div className="flex space-x-5 my-2 text-blue-600">
                  <p>Next-Js</p>
                  <p>React</p>
                  <p>Tailwind</p>
                  <p>Mongo-Db</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-around items-center">
                <Link href={' https://apneck-eclarkhalid.netlify.app/'} target="_blank">
                  <Button variant={"outline"}>
                    Live Demo
                  </Button>
                </Link>
                <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                  <Button variant={"outline"}>
                    Code
                  </Button>
                </Link>
                <Link href={'https://youtu.be/p53gC8PNsuo'} target="_blank">
                  <Button variant={"outline"}>
                    Video
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="more-projects">
            <h1 className="text-bold uppercase font-bold text-3xl my-6 ">More Projects</h1>
            <div className="lg:flex justify-between items-center my-4">
              <Card className='mb-3'>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-around">
                      <h1 className="mb-2">Project Name</h1>
                      <MdPending className=" text-red-600" />
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Pending Projects For Clients
                  </CardDescription>
                </CardHeader>
                <CardContent>

                  <h1 className="text-xl ">Languages & Libraries</h1>
                  <div className="flex space-x-2 my-2 text-blue-600">
                    <p>Next-Js</p>
                    <p>React</p>
                    <p>Tailwind</p>
                    <p>Mongo-Db</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-around items-center">
                  <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                    <Button variant={"destructive"}>
                      Code
                    </Button>
                  </Link>
                  <Popover>
                    <PopoverTrigger className="text-xl text-muted-foreground">
                      Details
                    </PopoverTrigger>
                    <PopoverContent>
                      TrendyMart is a small eCommerce website that offers a curated selection of trendy and fashionable products. The site aims to provide a seamless and enjoyable shopping experience for its customers. It caters to fashion enthusiasts looking for the latest styles, accessories, and lifestyle products.
                    </PopoverContent>
                  </Popover>
                </CardFooter>
              </Card>
              <Card className='mb-3'>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-around">
                      <h1 className="mb-2">Project Name</h1>
                      <MdPending className=" text-red-600" />
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Pending Projects For Clients
                  </CardDescription>
                </CardHeader>
                <CardContent>

                  <h1 className="text-xl ">Languages & Libraries</h1>
                  <div className="flex space-x-2 my-2 text-blue-600">
                    <p>Next-Js</p>
                    <p>React</p>
                    <p>Tailwind</p>
                    <p>Mongo-Db</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-around items-center">
                  <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                    <Button variant={"destructive"}>
                      Code
                    </Button>
                  </Link>
                  <Popover>
                    <PopoverTrigger className="text-xl text-muted-foreground">
                      Details
                    </PopoverTrigger>
                    <PopoverContent>
                      TrendyMart is a small eCommerce website that offers a curated selection of trendy and fashionable products. The site aims to provide a seamless and enjoyable shopping experience for its customers. It caters to fashion enthusiasts looking for the latest styles, accessories, and lifestyle products.
                    </PopoverContent>
                  </Popover>
                </CardFooter>
              </Card>
              <Card className='mb-3'>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-around">
                      <h1 className="mb-2">Project Name</h1>
                      <MdPending className=" text-red-600" />
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Pending Projects For Clients
                  </CardDescription>
                </CardHeader>
                <CardContent>

                  <h1 className="text-xl ">Languages & Libraries</h1>
                  <div className="flex space-x-2 my-2 text-blue-600">
                    <p>Next-Js</p>
                    <p>React</p>
                    <p>Tailwind</p>
                    <p>Mongo-Db</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-around items-center">
                  <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                    <Button variant={"destructive"}>
                      Code
                    </Button>
                  </Link>
                  <Popover>
                    <PopoverTrigger className="text-xl text-muted-foreground">
                      Details
                    </PopoverTrigger>
                    <PopoverContent>
                      TrendyMart is a small eCommerce website that offers a curated selection of trendy and fashionable products. The site aims to provide a seamless and enjoyable shopping experience for its customers. It caters to fashion enthusiasts looking for the latest styles, accessories, and lifestyle products.
                    </PopoverContent>
                  </Popover>
                </CardFooter>
              </Card>
              <Card className='mb-3'>
                <CardHeader>
                  <CardTitle>
                    <div className="flex justify-around">
                      <h1 className="mb-2">Project Name</h1>
                      <MdPending className=" text-red-600" />
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Pending Projects For Clients
                  </CardDescription>
                </CardHeader>
                <CardContent>

                  <h1 className="text-xl ">Languages & Libraries</h1>
                  <div className="flex space-x-2 my-2 text-blue-600">
                    <p>Next-Js</p>
                    <p>React</p>
                    <p>Tailwind</p>
                    <p>Mongo-Db</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-around items-center">
                  <Link href={'https://github.com/Eclarkhalid/APneck'} target="_blank">
                    <Button variant={"destructive"}>
                      Code
                    </Button>
                  </Link>
                  <Popover>
                    <PopoverTrigger className="text-xl text-muted-foreground">
                      Details
                    </PopoverTrigger>
                    <PopoverContent>
                      TrendyMart is a small eCommerce website that offers a curated selection of trendy and fashionable products. The site aims to provide a seamless and enjoyable shopping experience for its customers. It caters to fashion enthusiasts looking for the latest styles, accessories, and lifestyle products.
                    </PopoverContent>
                  </Popover>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="p-5 my-20 bg-slate-300">
        <div className="container-xl">
          <div className="text-center">
            <h1 className="text-3xl my-3 font-semi-bold">Leave Me A Message</h1>
          </div>
          <div className="flex items-center justify-center">
            <Card className=" w-[600px] p-4">
              <CardContent>
                <h2 className="text-xl my-3">Email</h2>
                <Input placeholder="Enter email"/>
                <h2 className="text-xl my-3">Message</h2>
                <Textarea placeholder="Input your message"/>
                <Button className="my-3">Send</Button>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-around mt-4">
                <h2>Send me an Email Instead</h2>
                <a href="mailto:eclarkhalid@gmail.com"><AiFillMail className="text-2xl text-blue-700"/></a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      <footer className="p-5 shadow">
        <div className="container-xl">
          <div className="flex justify-around items-center text-center">
            <h1>Developed by: <span className="text-blue-700 text-xl">Eclar Khalid</span>&nbsp;&copy;2023</h1>
            <a href="tel:+123456789" className="flex items-center"><BiPhoneCall />&nbsp;<span className="text-blue-600">Call Me</span></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;