export async function generateStaticParams({
  data,
}: {
  data: { slug: string }[];
}) {
  return data.map((product) => ({
    slug: product.slug,
  }));
}

export const checkComma = (str: number) => {
  const str1 = str.toString();

  if (str1.length >= 4) {
    return str1.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return str;
  }
};
