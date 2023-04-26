import { useRouter } from 'next/router';

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Product Detail {id}</h1>
    </div>
  )
}

export default ProductDetail;
