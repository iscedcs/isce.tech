import ProductDetailsPage from "@/components/pages/store/storeId";

export default async function IndividualBlog({ params }: { params: Promise<{ storeId: string }> }) {
  const { storeId } = await params;

  console.log("Resolved blogId:", storeId);

  return <ProductDetailsPage id={Number(storeId)} />;
}