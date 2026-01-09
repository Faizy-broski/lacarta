import ListingPage from "@/components/listings/ListingPage";
import { hotelsData } from "@/data/hotels.data";
import Hero from "@/components/listings/Hero";
import PaginationListing from "@/components/listings/PaginationListing";
import CartagenaNews from "../components/layout/cartagenaNews";

export default function Hotels() {
  return (
  <>
  <Hero {...hotelsData.hero}></Hero>
  <PaginationListing {...hotelsData}></PaginationListing>
  <ListingPage {...hotelsData} />
  <CartagenaNews></CartagenaNews>
  </>
  )
}
