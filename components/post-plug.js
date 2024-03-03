import Avatar from "../components/avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPlug({
  title,
  coverImage,
  date,
  aadharNumber,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="">
      <div className="mb-5 border-2 scale-0 ">
        <CoverImage slug={slug} title={title} aadharNumber={aadharNumber} image={coverImage} />
      </div>
      <h3 className="mb-3 text-3xl font-bold leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      
      {/* <p className="mb-4 text-lg leading-relaxed">{excerpt}</p> */}
    
    </div>
  );
}
