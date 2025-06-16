import { notFound } from 'next/navigation';

import AppProductDetailComponent from '@/components/AppProductDetailComponent';
import {
  categoryEarphoneData,
  categoryHeadphoneData,
  categorySpeakerData,
} from '@/data/CategoryItemData';
import AppBackButton from '@/components/AppBackBtnComponent';

const allProducts = [
  ...categoryEarphoneData,
  ...categoryHeadphoneData,
  ...categorySpeakerData,
];

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const awaitedParams = await params;
  const product = allProducts.find((item) => item.slug === awaitedParams.slug);

  if (!product) notFound();

  return (
    <div className="bg-white">
      <div className="container pt-8">
        <AppBackButton />
      </div>
      <AppProductDetailComponent product={product} />
    </div>
  );
};

export default ProductDetailPage;
