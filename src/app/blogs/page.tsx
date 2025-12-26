
const page = () => {
  return (
    <main className="h-screen w-full mt-[80px]  flex flex-col " >
<div className=" w-full h-[180px]  flex items-center justify-center  mt-[80px]">
  <div className="uppercase text-8xl text-gray-600 font-bold  z-3  ">
    <p className="z-2 text-center">Documenting <br /> the <br /> process</p>
  </div>
</div>

  <div className="h-auto w-full  p-5 flex items-center flex-col  ">
    <div className="relative w-full shrink-0 h-50  flex items-center justify-center">
        <h3 className=" absolute top-0  text-7xl uppercase font-semibold text-black "></h3>
    </div>
    <div className="flex flex-row p-10 h-auto">
    <iframe className="rounded-lg m-15" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7401639318269947904?collapsed=1" height="500" width="450"  frameBorder="0"  title="Embedded post"></iframe>
<iframe className="rounded-lg m-15" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7400912395524665344?collapsed=1" height="500" width="450" frameBorder="0"  title="Embedded post"></iframe>
</div>
</div>


    </main>
  )
}

export default page
