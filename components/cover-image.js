import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../lib/sanity";

export default function CoverImage({ title, co,
  Houseno,
  street,
  Landmark,
  Area,
  Village,
  PostOffice,
  excerpt,
  District,
  State,
  Pincode,
  DOB,
  certifiername,
  designation,
  officeaddress,
  date,
  contactno, slug, image: source, priority, aadharNumber }) {
    console.log(Houseno, 'houseee')
  const image = source?.asset?._ref ? (
    <div className='absolute -ml-6'
    >
      <h1 className='absolute uppercase tracking-[0.9em] lg:text-4xl ml-[68.2%] mt-[8%] '>{excerpt}</h1>

      <h1 className='absolute uppercase tracking-[1.3em] lg:text-4xl ml-[22.2%] mt-[19%] '>{aadharNumber}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] leading-[1.98em] lg:text-4xl ml-[22.2%] mt-[22.79%] '>{title}</h1>
      <h1 className='absolute uppercase tracking-[1.3em] lg:text-4xl ml-[22.2%] mt-[31%] '>{co}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[35%] '>{Houseno}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[39%] '>{street}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[43%] '>{Landmark}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[47%] '>{Area}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[51%] '>{Village}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[55%] '>{PostOffice}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[59%] '>{District}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[63%] '>{State}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[73%] '>{Pincode}</h1>
      <h1 className='absolute uppercase tracking-[0.9em] lg:text-4xl ml-[22.2%] mt-[77.5%] '>{DOB}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[86%] '>{certifiername}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%] mt-[90%] '>{designation}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] leading-[1.98em] lg:text-4xl ml-[22.2%]  mt-[93.69%] '>{officeaddress}</h1>
      <h1 className='absolute uppercase tracking-[1.2em] lg:text-4xl ml-[22.2%]  mt-[102%] '>{contactno}</h1>

      <img className=""  src={urlForImage(source).url()}/>

    </div>
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );

  return (
    <div className="sm:mx-0 ">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
          
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
