import Avatar from "../components/avatar";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  aadharNumber,
  co,
  Houseno,
  street,
  Landmark,
  Area,
  Village,
  PostOffice,
  District,
  State,
  Pincode,
  DOB,
  certifiername,
  designation,
  officeaddress,
  contactno,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16 scale-0">
        <CoverImage slug={slug} title={title} image={coverImage} aadharNumber={aadharNumber} co={co} Houseno={Houseno}  priority />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-2xl font-bold">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          
        </div>
        <div>
          {/* <p className="mb-4 text-lg leading-relaxed">{excerpt}</p> */}
          {/* {author && <Avatar name={author.name} picture={author.picture} />} */}
        </div>
      </div>
    </section>
  );
}
