import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface AdvertisingCarouselProps {
  banners: Banner[];
}

export const AdvertisingCarousel = ({ banners }: AdvertisingCarouselProps) => (
  <Carousel
    plugins={[
      Autoplay({
        delay: 2000,
      }),
    ]}
    className="w-full "
  >
    <CarouselContent>
      {banners.map((banner) => (
        <CarouselItem className="flex justify-center">
          <img className="w-full h-[600px] object-cover" src={banner.src} />
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);
