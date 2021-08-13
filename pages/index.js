import Head from 'next/head'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import LargeCard from '../Components/LargeCard'
import LargeCardWhite from '../Components/LargeCardWhite'
import MediumCard from '../Components/MediumCard'
import SmallCard from '../Components/SmallCard'
import Footer from '../Components/Footer'
import ScrollButton from '../Components/ScrollButton'

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Usama's Airbnb</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

    <Header/>
    <Banner/>

    <main className = "max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5" >Explore Nearby</h2>
          
          {/* Pull some data from a server - API endpoints */}
          <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key = { img }
                img = { img }
                distance = {distance}
                location = {location}
              />
            ))}
          </div>
        </section>

                <LargeCard
                  img = "https://links.papareact.com/4cj"
                  title = "The Greatest Outdoors"
                  description = "Whishlists Curated by Airbnb."
                  buttonText = "Get Inspired"
                />


        <section >
          <h2 className="text-4xl font-semibold py-8">Live Any where</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              {cardsData?.map(({ img, title }) => (
                <MediumCard
                  key = { img }
                  img = { img }
                  title = { title }
                /> 
              ))}   
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Discover Things to do</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
                <MediumCard
                  img = "/a.jpg"
                  title = "Featured collection: Wanderlust"
                  description = "Find unforgettable activities near you."
                />
                <MediumCard
                  img = "/b.jpg"
                  title = "Featured collection: Wanderlust"
                  description = "Travel from home with Online Experiences."
                />     
                <MediumCard
                  img = "/c.jpg"
                  title = "Featured collection: Wanderlust"
                  description = "Live, interactive activities led by Hosts."
                /> 
                <MediumCard
                  img = "/d.jpg"
                  title = "Featured collection: Wanderlust"
                  description = "You’ll have the house to yourself."
                /> 
          </div>
        </section>

        <LargeCardWhite
          img = "/e.jpg"
          title = "Try hosting"
          description = "Earn extra income and unlock new opportunities by sharing your space."
          buttonText = "Learn More"
        />

      </main>
    <Footer/>
    <ScrollButton/>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1")
  .then(
    (res) => res.json()
  )


  return{
    props:{
      exploreData,
      cardsData,
    },
  };
}