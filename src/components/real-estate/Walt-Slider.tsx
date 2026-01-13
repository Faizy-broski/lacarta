// components/WaltSection.tsx
import { useCallback } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const slides = [
  {
    title: "WALT",
    subtitle: "Rental Habitats in the Heart of Dorval",
    tag: "NOW PRE-LEASING",
    imageUrl: "https://thumbs.dreamstime.com/b/stylish-rooftop-terrace-sunset-modern-design-includes-outdoor-kitchen-lounge-area-plants-lighting-evening-ambiance-relaxing-417081729.jpg",
  },
  {
    title: "WALT",
    subtitle: "Elevated Living with Panoramic Views",
    tag: "NOW PRE-LEASING",
    imageUrl: "https://thumbs.dreamstime.com/b/serene-rooftop-terrace-lounge-chairs-city-skyline-sunset-tranquil-featuring-comfortable-surrounded-lush-greenery-379393482.jpg",
  },
  {
    title: "WALT",
    subtitle: "Modern Luxury Rooftop Retreats",
    tag: "NOW PRE-LEASING",
    imageUrl: "https://thumbs.dreamstime.com/b/chic-city-rooftop-bar-sunset-panoramic-views-stylish-atmosphere-outdoor-cafe-tables-chairs-luxury-lounge-setting-sofas-385607171.jpg",
  },
  {
    title: "WALT",
    subtitle: "Serene Oceanfront Elegance",
    tag: "NOW PRE-LEASING",
    imageUrl: "https://thumbs.dreamstime.com/z/elegant-oceanfront-balcony-blooming-flowers-cozy-outdoor-sofa-set-golden-sunset-luxury-summer-lifestyle-luxurious-sea-376396904.jpg",
  },
]

export default function WaltSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/9] md:aspect-[21/9] lg:aspect-[3/1] w-full group">
                  {/* Background Image */}
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.85] transition-transform duration-700 group-hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                  />

                  {/* Dark Overlay (stronger on left for text) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                  {/* Content - Left side card */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full max-w-md lg:max-w-lg pl-8 md:pl-12 lg:pl-16 pr-6 md:pr-12">
                      <div className="bg-black/60 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-white/10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                          {slide.title}
                        </h2>
                        <p className="mt-4 text-xl md:text-2xl text-white/90 font-light">
                          {slide.subtitle}
                        </p>
                        <div className="mt-6 inline-block bg-primary/90 text-white px-6 py-3 rounded-md text-lg font-medium uppercase tracking-wider">
                          {slide.tag}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows only (no dots) */}
          <div className="hidden md:block">
            <CarouselPrevious 
              className="left-4 md:left-8 -translate-x-1/2 border-2 bg-background/70 backdrop-blur-md hover:bg-background text-white hover:text-primary border-white/30 hover:border-primary" 
            />
            <CarouselNext 
              className="right-4 md:right-8 translate-x-1/2 border-2 bg-background/70 backdrop-blur-md hover:bg-background text-white hover:text-primary border-white/30 hover:border-primary" 
            />
          </div>
        </Carousel>
      </div>
    </section>
  )
}