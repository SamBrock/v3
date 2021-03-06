import React from 'react'

import Image from '../image'

export default function ProjectImages({ title }) {
  if (title === "Filmlist") return (
    <section className="py-20">
      <Image filename="project__filmlist-home.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__filmlist-seen.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__filmlist-details.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__filmlist-favorite.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <div className="flex justify-around">
        <Image filename="project__filmlist-details-mobile-1.png" alt={title} classes="img-w-full mx-2 sm:mx-20" />
        <Image filename="project__filmlist-details-mobile-2.png" alt={title} classes="img-w-full mx-2 sm:mx-20" />
      </div>
    </section>
  )

  if (title === "Pace") return (
    <section className="py-20">
      <div className="grid grid-cols-2 sm:grid-cols-4">
        <Image filename="project__pace-app-1.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-2.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-4.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-5.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-6.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-8.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-9.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-10.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-11.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-12.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-13.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-14.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-15.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-16.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-17.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-18.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
        <Image filename="project__pace-app-19.jpg" alt={title} classes="img-w-full mx-2 sm:mx-5 mb-10 sm:mb-20" />
      </div>
      <Image filename="project__pace-colours.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__pace-typography.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__pace-wireframes.jpg" alt={title} classes="img-w-full mx-auto" />
    </section>
  )

  if (title === "INFLOWSEM") return (
    <section className="py-20">
      <Image filename="project__inflowsem-home.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__inflowsem-pdf.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__inflowsem-contact.png" alt={title} classes="img-w-full mx-auto" />
    </section>
  )

  if (title === "TRYP") return (
    <section className="py-20">
      <Image filename="project__tryp-home.jpg" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__tryp-details.jpg" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <div className="flex  justify-between">
        <Image filename="project__tryp-home-m.jpg" alt={title} classes="img-w-full mr-2 sm:mx-auto" />
        <Image filename="project__tryp-details-m.jpg" alt={title} classes="img-w-full ml-2 sm:mx-auto" />
      </div>
    </section>
  )

  if (title === "Vendee") return (
    <section className="py-20">
      <Image filename="project__vendee-branding.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__vendee-login.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__vendee-dashboard.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__vendee-traffic.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__vendee-products.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__vendee-discounts.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <Image filename="project__vendee-dwell-time.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
      <div className="flex gap-12 items-center flex-col md:flex-row">
        <Image filename="project__vendee-bluetooth-1.png" alt={title} classes="img-w-full mx-auto" />
        <Image filename="project__vendee-bluetooth-2.png" alt={title} classes="img-w-full mx-auto" />
        <Image filename="project__vendee-price.png" alt={title} classes="img-w-full mx-auto" />
      </div>
    </section>
  )

  if (title === "Exterra") return (
    <section className="py-20">
     <Image filename="project__exterra-home.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
     <Image filename="project__exterra-details.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
     <Image filename="project__exterra-details-full.png" alt={title} classes="img-w-full mx-auto mb-10 sm:mb-20" />
     <div className="flex gap-12 items-center flex-col md:flex-row">
        <Image filename="project__exterra-upcoming.png" alt={title} classes="img-w-full mx-auto" />
        <Image filename="project__exterra-previous.png" alt={title} classes="img-w-full mx-auto" />
        <Image filename="project__exterra-rockets.png" alt={title} classes="img-w-full mx-auto" />
      </div>
    </section>
  )

  return <div></div>;
}
