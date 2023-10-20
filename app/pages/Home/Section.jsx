"use client"
import Iframe from "react-iframe";
const Section = () => {
  return (
    <div className="section space-x-12 px-12 flex-row">
      <div className="w-1/2 space-y-12">
        <h1 className="secondheader italic">
          Sizin <span className="text-mainblue">haklarınız</span> bizim
          önceligimiz
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et maiores eveniet nostrum voluptatem modi vero provident officiis iure odit veniam distinctio consequatur voluptates laborum explicabo ut, placeat ea, dolorum in. Excepturi, itaque fugiat delectus ratione voluptatem est ipsa iure.
        </p>
        <button className="btn bg-mainblue mr-6" >Detayli Bilgi</button>
        <button className="btn2 border-2 border-mainblue" > Randevu Oluştur</button>
      </div>
      <div className="w-1/2">
        <Iframe
          url="https://www.youtube.com/embed/G-7jbNPQ0TQ?si=7RTvliBuOov3UJ0c"
          width="560px"
          height="400px"
          id=""
          className=""
          display="block"
          position="relative"
        />
      </div>
    </div>
  );
};

export default Section;
