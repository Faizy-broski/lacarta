import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function ProjectDetailsPage({ project }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="bg-[#f7f7f7] px-5">
      <div className="mx-auto max-w-7xl px-4">
        {/* HEADER */}
        <Card className="mb-8">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="fs-2 text-black font-bold">{project.title}</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-black">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{project.rating}</span>
              <span>({project.reviews} reviews)</span>
            </div>
            <p className="font-bold text-gray-700">
              Starting at <strong>${project.price}</strong> / month
            </p>
            {project.keyFeature.map((i)=>(
              <li className="font-italic mx-3 text-muted-foreground">{i}
            </li>
            ))}
          </CardHeader>

          {/* IMAGE GALLERY */}
          <div className="relative w-full h-[260px] overflow-hidden">
            <img
              src={project.images[activeImage]}
              className="h-full w-full object-cover"
              alt="project"
            />

            {/* Arrows */}
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === 0 ? project.images.length - 1 : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
            >
              <ChevronLeft className="text-black" />
            </button>
            <button
              onClick={() =>
                setActiveImage((prev) =>
                  prev === project.images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow"
            >
              <ChevronRight  className="text-black" />
            </button>
          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-2 p-4">
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setActiveImage(index)}
                className={`h-16 w-20 cursor-pointer rounded object-cover border-2 ${
                  index === activeImage
                    ? "border-green-500"
                    : "border-transparent"
                }`}
                alt="thumb"
              />
            ))}
          </div>
        </Card>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <h2 className="font-semibold">Market rental habitats</h2>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                {project.description}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="font-semibold">Features</h2>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 text-sm">
                {project.features.map((feature) => (
                  <div key={feature} className="rounded bg-gray-100 p-3">
                    {feature}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <Card className="sticky top-6">
              <CardHeader>
                <h3 className="font-semibold">Interested in this project?</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <input
                  placeholder="Your name"
                  className="w-full rounded border p-2"
                />
                <input
                  placeholder="Your phone"
                  className="w-full rounded border p-2"
                />
                <input
                  placeholder="Your email"
                  className="w-full rounded border p-2"
                />
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  Submit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}


// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"

// import {
//   Snowflake,
//   Zap,
//   Car,
//   Bike,
//   Dumbbell,
//   Waves,
//   PawPrint,
//   Mountain,
// } from "lucide-react"

// export default function ProjectDetailsPage() {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* LEFT CONTENT */}
//         <div className="md:col-span-2 space-y-6">

//           {/* Header */}
//           <div className="flex gap-4">
//             <img
//               src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
//               className="w-20 h-20 rounded-lg object-cover"
//             />
//             <div>
//               <h2 className="text-xl font-semibold">
//                 Market rental habitats
//               </h2>
//               <p className="text-sm text-muted-foreground">
//                 Market rental habitats offer a multitude of advantages to their
//                 residents, thanks to a prime location in the heart of Chomedey,
//                 Laval...
//               </p>
//               <button className="text-green-600 text-sm mt-1">
//                 Full description +
//               </button>
//             </div>
//           </div>

//           {/* Accordions */}
//           <Accordion type="multiple" className="w-full">
//             {[
//               "Contact details and website for this project",
//               "Real estate developer(s)",
//               "Features",
//               "User comment(s) (0)",
//               "Blog posts related to this project",
//             ].map((item, i) => (
//               <AccordionItem key={i} value={`item-${i}`}>
//                 <AccordionTrigger>{item}</AccordionTrigger>
//                 <AccordionContent>
//                   Content goes here
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>

//           {/* Features Grid */}
//           <div>
//             <h3 className="font-semibold mb-4">Features</h3>

//             <div className="grid grid-cols-8 sm:grid-cols-4 gap-4">
//               <Feature icon={Snowflake} label="Air conditioning" />
//               <Feature icon={Zap} label="Charging stations" />
//               <Feature icon={Car} label="Indoor parking" />
//               <Feature icon={Bike} label="Bike storage" />
//               <Feature icon={Dumbbell} label="Gym" />
//               <Feature icon={Waves} label="Indoor pool" />
//               <Feature icon={PawPrint} label="Pets allowed" />
//               <Feature icon={Mountain} label="Rooftop terrace" />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT FORM */}
//         <div className="md:sticky md:top-6 h-fit">
//           <Card>
//             <CardContent className="p-6 space-y-4">
//               <h3 className="text-lg font-semibold">
//                 Interested in this project?
//               </h3>
//               <p className="text-sm text-muted-foreground">
//                 Let us share your request with similar listings.
//               </p>

//               <Input placeholder="Your name" />
//               <Input placeholder="Your phone" />
//               <Input placeholder="Your email" />

//               <div className="flex items-center gap-2 text-sm">
//                 <Checkbox id="robot" />
//                 <label htmlFor="robot">I'm not a robot</label>
//               </div>

//               <div className="flex items-center gap-2 text-xs">
//                 <Checkbox id="agree" />
//                 <label htmlFor="agree">
//                   I agree to receive communications
//                 </label>
//               </div>

//               <Button className="w-full rounded-full bg-green-600 hover:bg-green-700">
//                 Submit
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// function Feature({ icon: Icon, label }) {
//   return (
//     <div className="border rounded-lg p-2 flex md:col-span-2 flex-col items-center text-center gap-2">
//       <Icon className="w-6 h-6 text-muted-foreground" />
//       <span className="text-sm">{label}</span>
//     </div>
//   )
// }
