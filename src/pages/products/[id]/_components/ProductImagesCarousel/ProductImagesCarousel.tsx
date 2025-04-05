import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProductImagesCarouselProps {
  images: string[];
}

export const ProductImagesCarousel = ({
  images,
}: ProductImagesCarouselProps) => (
  <Carousel className="w-150">
    <CarouselContent>
      {images.map((image) => (
        <CarouselItem className="flex justify-center">
          <img className="w-100 h-100 object-cover" src={image} />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
);
