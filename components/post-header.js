import Avatar from "../components/avatar";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author, aadharNumber, co, Houseno, street, Landmark, Area, Village, PostOffice, District, State, Pincode, DOB, certifiername, designation, officeaddress, contactno, excerpt }) {
  return (
    <>
      {/* <PostTitle>{title}</PostTitle> */}
      {/* <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div> */}
      <div className='h-full w-full bg-center'>

        <CoverImage title={title} image={coverImage} aadharNumber={aadharNumber} co={co} Houseno={Houseno} street={street} Landmark={Landmark} Area={Area} Village={Village} PostOffice={PostOffice} District={District} State={State} Pincode={Pincode} DOB={DOB} certifiername={certifiername} designation={designation} officeaddress={officeaddress} contactno={contactno} date={date} excerpt={excerpt} priority />

        <div className="max-w-2xl mx-auto">
          <div className="block mb-6 md:hidden">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
          <div className="mb-6 text-lg">
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </>
  );
}
