
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart, Star, Heart, Eye } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  category,
  isNew,
  isBestseller,
}) => {
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image,
      category,
    });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = () => {
    const wishlistItem = {
      id,
      name,
      price,
      originalPrice,
      image,
      rating,
      reviews,
      category,
      isNew,
      isBestseller,
    };
    
    toggleItem(wishlistItem);
    toast({
      title: isInWishlist(id) ? "Removed from wishlist" : "Added to wishlist",
      description: `${name} has been ${isInWishlist(id) ? 'removed from' : 'added to'} your wishlist.`,
    });
  };

  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-[1.02] bg-white relative overflow-hidden">
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{discountPercentage}%
        </div>
      )}
      
      <div className="relative overflow-hidden">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-primary backdrop-blur-sm"
            >
              <Eye className="w-4 h-4 mr-2" />
              Quick View
            </Button>
          </div>
        </div>
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-gradient-to-r from-accent to-yellow-400 text-primary text-xs font-semibold shadow-lg">
              NEW
            </Badge>
          )}
          {isBestseller && (
            <Badge className="bg-gradient-to-r from-secondary to-blue-500 text-white text-xs font-semibold shadow-lg">
              BESTSELLER
            </Badge>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button
          size="sm"
          variant="ghost"
          className={`absolute bottom-3 right-3 w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-300 ${
            isInWishlist(id) ? 'text-red-500' : 'text-gray-600'
          }`}
          onClick={handleToggleWishlist}
        >
          <Heart className={`w-5 h-5 ${isInWishlist(id) ? 'fill-current' : ''}`} />
        </Button>
      </div>
      
      <CardContent className="p-6 space-y-4">
        {/* Category */}
        <Badge variant="outline" className="text-xs font-medium border-primary/20 text-primary">
          {category}
        </Badge>
        
        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? 'text-amber-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">
              ({reviews})
            </span>
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
