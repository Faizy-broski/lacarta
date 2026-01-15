// components/PlayaScondidaAbout.tsx
import { Card, CardContent } from "@/components/ui/card";
import {Clock,CalendarDays,Luggage} from 'lucide-react'

export default function PlayaScondidaAbout() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container gap-5 px-4 md:grid grid-cols-[2.3fr_2.7fr] md:px-6 mx-auto max-w-7xl">
        {/* Main title + description */}
        <div className="md:max-w-4xl mx-auto mb-12 md:mb-16">
            <h6 className="text-muted-foreground font-serif font-medium tracking-tight mb-6">Discover</h6>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-black font-medium tracking-tight mb-6">
            About Snorkeling
          </h1>
          
          <div className="prose prose-lg md:prose-xl max-w-none text-slate-700 leading-relaxed">
            <p className="mb-6">
              Nestled on the pristine shores of Isla Barú, just a scenic boat boat ride from Cartagena's historic walls, 
              <span className="font-medium text-slate-900">Playa Scondida</span> offers an unparalleled eco-luxury glamping experience.
              Here, the Caribbean Sea whispers secrets of its ancient mariners, while the jungle canopy shelters you in its emerald embrace. 
              Our philosophy is simple: authentic luxury that honors the land.
              Each bungalow is crafted from locally-sourced materials, designed to blend seamlessly with the surrounding nature 
              while providing every modern comfort you desire. Wake to the calls of tropical birds, dine on freshly-caught seafood 
              by candlelight, and fall asleep to the rhythm of gentle waves.
            </p>
          </div>

             <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-3 rounded bg-[#f8f5e9] border-1 border-amber-300 md:p-10">
                <div className="inline-block  mb-6 rounded-full bg-amber-100 text-amber-800 font-medium text-sm">
                  Perfect For
                </div>
                <p className="text-sm md:text-2xl font-medium text-black leading-relaxed italic">
                  "Ideal for couples, nature lovers & slow travelers seeking an authentic Caribbean escape far from the ordinary."
                </p>
              </CardContent>
            </Card>
        </div>

        {/* Grid layout - responsive stack on mobile */}
        <div>
          {/* Left column - main description + perfect for */}
        

          {/* Right sidebar - Information + Travel Tips */}
          <div className="space-y-8">
            {/* Information Card */}
            <Card className="bg-[#f8f5e9] text-white border-1 border-amber-300 shadow-xl">
              <CardContent className="px-5 py-2 lg:px-5 lg:py-2 ">
                <h3 className="text-2xl font-serif font-medium mb-6 text-black">Information</h3>
                
                <div className="space-y-6 text-black">
                  <div>
                    <p className="text-black font-normal mb-1">Address</p>
                    <p className="text-lg font-bold font-['Inter']">Isla Barú, Provincia de Cartagena, Bolívar, Colombia</p>
                  </div>

                  <div>
                    <p className="text-black font-medium mb-1">Contact</p>
                    <div className="space-y-2 text-sm font-semibold">
                      <p>📧 reservas@hotelplayascondidabaru.com</p>
                      <p>🌐 https://playascondidabaru.com</p>
                      <p>📞 +57 350 368 24000</p>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>

             <div>
                    <p className="text-gray-300 text-sm">
                      Located on the southwestern tip of Isla Barú, our property occupies a 
                      pristine stretch of coastline where the Caribbean Sea meets lush mangrove forests. Accessible only by water, Playa Scondida offers the ultimate escape from the everyday world.
                    </p>
                  </div>

            {/* Travel Tips */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-medium text-black font-bold">Travel Tips</h3>

              <div className="grid gap-1">
                <div className="flex items-start gap-3 p-1 bg-[#f8f5e9] border-1 border-amber-300 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-3xl"><Clock size={24}></Clock></div>
                  <div>
                    <p className="font-medium text-slate-800">Speedboat Time</p>
                    <p className="text-slate-600">45-60 minutes from Cartagena marina</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 bg-[#f8f5e9] border-1 border-amber-300 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-3xl"><CalendarDays></CalendarDays></div>
                  <div>
                    <p className="font-medium text-slate-800">Best Season</p>
                    <p className="text-slate-600">December to April (dry season)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-1 bg-[#f8f5e9] border-1 border-amber-300 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-3xl"><Luggage></Luggage></div>
                  <div>
                    <p className="font-medium text-slate-800">What to Bring</p>
                    <p className="text-slate-600">Light clothing, reef-safe sunscreen, camera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}