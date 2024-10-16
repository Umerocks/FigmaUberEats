import Image from "next/image"
export default function Home() {
  return (
    <main className="mt-10 mx-10" >
      {/* Hero Section */}
      <section className="" >
        {/* Left side */}
        <body className="bg-black">  
        <div className="-mx-10" >
          {/* <h1 className="font-bold text-3xl text-white">Hi, I'm Hamzah Syed</h1> */}
          <h1 className=" text-white text-8xl mt-60 mx-40" style={{fontFamily: 'cursive'}}>Uber</h1>
          <h2 className=" text-green-300 text-8xl mt-0 mx-40" style={{ fontFamily: 'cursive' }}>Eats</h2>
          <p className=" text-white text-2xl mt-0 mx-52">40+ Screens</p>
          {/* <button className="bg-gray-900 text-white py-2 mt-4 px-4 hover:bg-blue-400"  >View My Work</button> */}
        </div>
        {/* Right Side */}
        {/* <div className="flex -my-80 mx-96 mb-28"> */}
          {/* <Image  width={700} height={700} src="/UberEats.png" alt="Uber Eats" color="white"/> */}
          {/* <Image width={600} height={700} src="/image1.png" alt="My Photo1" className="ml-10 flex-1" /> */}
          {/* <Image width={400} height={700} src="/image2.png" alt="My Photo2" className="-ml-20 mt-20" /> */}
          {/* <Image width={600} height={700} src="/image3.png" alt="My Photo3" className="-ml-20" /> */}
        {/* </div> */}

        <div className="flex">
          <Image width={400} height={700} src="/image1.png" alt="My Photo1" className="-mt-80 ml-96" />
          <Image width={400} height={700} src="/image2.png" alt="My Photo2" className="-mt-60 ml-2" />
          <Image width={400} height={700} src="/image3.png" alt="My Photo3" className="-mt-80 ml-2" />
        </div>



        </body>
        </section>
    </main>
  );
}

// Class-06: 11/10/2024

/*

Components
Props
USe Clients
States - Hooks



Server Component
Client Component
Live Interaction at Client End
Rendering

If a webspage is rendered at Server , then SEO enables us to find it easily as its already rendered at server end
but if its rendered at client end then search engine is unable to find it.


Must read
what is declarative DOM? React performs prompting
what is Imperative DOM? we write JS prompt


layout.css:

page.tsx: 

export default function HomePage(){
return(

<div>
    Home Page
/div>


)
}

*/
// import Header from "./components/header"

// export default function HomePage(){
//   return(
//   <div>
//     <Header profile= "Sir Ameen Alam"/>
//       Home Page
//       <br />
//       <a href="https://www.google.com" > Google</a>
//       <image > </image> 
//       </div>
//   )
//   }