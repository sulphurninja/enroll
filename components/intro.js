import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col border-b border-black md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        Adhaar Enrollment
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
       All The Enrollments appear below
      </h4>
    </section>
  );
}
