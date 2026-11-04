import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import EnquirySection from "@/components/sections/EnquirySection";
import BlogDetailHeader from "@/components/sections/blog-details/BlogDetailHeader";
import BlogDetailBanner from "@/components/sections/blog-details/BlogDetailBanner";
import BlogDetailContent from "@/components/sections/blog-details/BlogDetailContent";
import MoreBlogSection from "@/components/sections/blog-details/MoreBlogSection";
import {
  getBlogPostBySlug,
  getAllBlogSlugs,
} from "@/data/blogDetailsData";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | NetSquare Softwares",
    };
  }

  return {
    title: `${post.title} | NetSquare Softwares Blog`,
    description: post.introText?.slice(0, 160),
    openGraph: {
      title: `${post.title} | NetSquare Softwares`,
      description: post.introText?.slice(0, 160),
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation header with transparent background & dark controls */}
      <Navbar isHome={false} activePath="/blog" />

      <main id="main-content" className="flex-1">
        {/* Article Headline & Metadata */}
        <BlogDetailHeader post={post} />

        {/* Hero Banner Image */}
        <BlogDetailBanner post={post} />

        {/* Article Body Content */}
        <BlogDetailContent post={post} />

        {/* More Related Blog Posts */}
        <MoreBlogSection currentSlug={slug} />

        {/* Reused Enquiry CTA Section */}
        <EnquirySection />
      </main>

      {/* Reused Dark Footer */}
      <Footer />
    </div>
  );
}

