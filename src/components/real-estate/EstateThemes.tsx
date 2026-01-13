// components/RealEstateThemes.tsx
import { Badge } from "@/components/ui/badge"
import fishImg from "../../assets/real-estate/Collection projects.png"

const featured = {
  id: "collection",
    title: "COLLECTION™ Projects",
    image: fishImg,
    tag: "COLLECTION",
}
const themes = [
  {
    id: "collection",
    title: "COLLECTION™ Projects",
    image: fishImg,
    image2: fishImg,
    tag: "COLLECTION",
  },
  {
    id: "sale",
    title: "Homes For Sale",
    image: fishImg,
    image2: fishImg,
    tag: "FOR SALE",
  },
  {
    id: "rent",
    title: "Homes For Rent",
    image: fishImg,
    image2: fishImg,
    tag: "FOR RENT",
  },
]

export default function EstateThemes() {
  // const featured = themes.find((t) => t.featured)
  // const others = themes.filter((t) => !t.featured)

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14">
          Real estate projects by theme
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT – Big featured card */}
          {(
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-[4/3] lg:aspect-auto lg:h-[520px]">
              <img
                src={featured.image}
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-6 md:p-8 lg:p-10 flex flex-col justify-end">
                <Badge
                  variant="secondary"
                  className="mb-4 w-fit px-5 py-2 text-base bg-white/20 hover:bg-white/30 backdrop-blur-md border-0 text-white"
                >
                  {featured.tag}
                </Badge>
                <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg">
                                  {featured.title}
                </h3>
              </div>
            </div>
          )}

          {/* RIGHT – Smaller cards */}
          <div className="grid gap-4  md:gap-5">
              {themes.map((item)=>(

                <div className="grid  grid-cols-2 overflow-hidden md:grid-cols-[1.7fr_2.3fr] gap-4">
                  <div className="rounded-lg align-content-center text-center border">Image</div>
                  <div className="border align-content-center rounded-lg text-center">Image</div>
                  </div>
              ))}
                {/* <div className="bg-primary grid grid-cols-1 md:grid-cols-[2.3fr_1.7fr] gap-4"><div className="bg-dark rounded-lg">a</div><div className="bg-danger rounded-lg">b</div></div>
                <div className="bg-muted/30 grid grid-cols-1 md:grid-cols-[1.7fr_2.3fr] gap-4"><div className="bg-dark rounded-lg">a</div><div className="bg-danger rounded-lg">b</div></div>   */}


              </div>
    
          </div>
        </div>
    
    </section>
  )
}