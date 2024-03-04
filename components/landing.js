import Layout from "./layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Container from "./container";
import Intro from "./intro";
import HeroPost from "./hero-post";
import MoreStories from "./more-stories";

export default function Landing({ allPosts, preview }) {
  const [heroPost, ...morePosts] = allPosts || [];
  console.log(heroPost, 'hero')
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{`Aadhar Enrollment`}</title>
        </Head>
        <div className="grid">
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              Houseno={heroPost.Houseno}
              // aadharNumber={post.aadharNumber}
              excerpt={heroPost.excerpt}
              co={heroPost.co}
              Landmark={heroPost.Landmark}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts}  />}
        </div>
      </Layout>
    </>
  );
}
