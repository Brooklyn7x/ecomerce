import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import WishlistButton from "../wishlist-button";
import useCart from "@/hooks/use-cart";
import { Card, CardContent, CardHeader } from "../ui/card";

interface ItemCardProps {
  product: any;
}

const ItemCard = ({ product }: ItemCardProps) => {
  const { handleAddToCart } = useCart(product);
  const userId = 1;

  return (
    <Card className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {product.featured && (
        <div className="absolute top-3 left-3 inline-block px-3 py-1 text-xs font-medium bg-primary text-white rounded-full z-10">
          Featured
        </div>
      )}
      <Link href={`/items/${product.id}`} className="h-full block">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            alt={"item-card"}
            className="object-cover w-full h-full"
            src={product.imageUrl}
            fill
          />
        </div>
        <CardHeader className="flex items-start px-4 py-3">
          <h3 className="font-bold text-lg text-nowrap text-ellipsis truncate hover:text-primary cursor-pointer">
            {product.title}
          </h3>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <span className="font-semibold text-lg text-white">
              ${product.price}
            </span>
            <div className="flex items-center">
              <Button
                size="default"
                variant="outline"
                onClick={handleAddToCart}
              >
                <ShoppingCart />
              </Button>
              <WishlistButton
                isWishList={false}
                productId={product.id}
                userId={1}
              />
              <span className="sr-only">Add to Wishlist</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ItemCard;
