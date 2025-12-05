import BlogPost from "@/components/pages/blog/blogid";

export default async function IndividualBlog({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;

  console.log("Resolved blogId:", blogId);

  return <BlogPost id={Number(blogId)} />;
}
