import Navbar from "@/components/layout/Navbar/Navbar";
import InsideStudioSection from "@/components/sections/InsideStudioSection";



export default function Home() {



  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
      </section>
      <InsideStudioSection />
    </>
  );
}


{/* <Button variant="light" className="w-64">
        Let's work together
      </Button>
      <Button variant="dark" showArrow={false} className="w-40">
        View our work
      </Button>
      <RatingStars
        rating={5}
        variant="dark"
      />
      <RatingStars
        rating={5}
        variant="light"
      />
      <RatingStars
        rating={4}
        variant="dark"
      />
      <RatingStars
        rating={5}
        variant="light"
        size={24}
      />

      <Rating
        image="/images/clutch.svg"
        imageAlt="Clutch"
        rating={4.9}
        reviews={250}
        sizes={100}
        boxSize="h-10 w-10"
        className="w-65"
      />

      <Rating
        image="/images/designrush.svg"
        imageAlt="DesignRush"
        rating={5.0}
        reviews={186}
        sizes={60}
        boxSize="h-15 w-15"
        className="w-65"
      />

      <ShinyText
        text="Shiny Text Effect"
        speed={2}
        delay={0}
        variant="primary"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover
        disabled={false}
      />


      <FeatureCard
        title="Discover & Define"
        image="/images/compass.svg"
        imageAlt="Compass"
        description="We dive deep into your goals, audience, and brand to uncover insights and define a clear direction."
        badge={<Badge>✦ ✦ ✦</Badge>}
        className="w-100"
      />
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
        delay={0}
      /> */}
