import { useRouter } from "next/router";
import { urlForImage } from "../lib/sanity";
import ErrorPage from "next/error";
import Layout from "./layout";
import Container from "./container";
import Header from "./header";
import PostTitle from "./post-title";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import PostHeader from "./post-header";
import PostBody from "./post-body";
import SectionSeparator from "./section-separator";
import MoreStories from "./more-stories";

export default function Post({ data = {}, preview = false }) {
  const router = useRouter();

  const { post, morePosts } = data;
  const slug = post?.slug;

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
console.log(post, 'hsisj')
  return (
    <Layout preview={preview}>
      <Container>
    
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} `}
                </title>
                {post.coverImage?.asset?._ref && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(post.coverImage)
                      .width(1200)
                      .height(627)
                      .fit("crop")
                      .url()}
                  />
                )}
              </Head>
              
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                aadharNumber={post.aadharNumber}
                author={post.author}
                co={post.co}
                Houseno={post.Houseno}
                street={post.street}
                Landmark={post.Landmark}
                Area={post.Area}
                Village={post.Village}
                PostOffice={post.PostOffice}
                District={post.District}
                State={post.State}
                Pincode={post.Pincode}
                DOB={post.DOB}
                certifiername={post.certifiername}
                designation={post.designation}
                officeaddress={post.officeaddress}
                excerpt={post.excerpt}
                contactno={post.contactno}
              />
              <PostBody content={post.content} />
            </article>
          
          </>
        )}
      </Container>
    </Layout>
  );
}
