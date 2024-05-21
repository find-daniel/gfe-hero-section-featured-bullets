import Image from 'next/image';
import Bullet from './components/Bullet';
import Button from './components/Button';

export default function Home() {
  return (
    <main className="flex justify-center">
      <header className="mx-4 my-4 max-w-[1440px] rounded border bg-white px-4 shadow-sm xl:p-24" role="banner">
        <section className="my-16 flex flex-col md:my-[72px] xl:my-0 xl:flex-row xl:items-center">
          {/* Content Container */}
          <div className="xl:mb-0 xl:w-1/2 xl:pt-0">
            {/* Headline */}
            <h1 className="mb-4 text-4xl font-semibold text-neutral-900 md:mb-16 md:text-5xl xl:text-6xl">
              Premium abstract images
            </h1>
            {/* Featured Bullets */}
            <ul className="mb-8 flex flex-col space-y-5 md:mb-16">
              <Bullet>Minimum 5K image resolution</Bullet>
              <Bullet>Various format variants available</Bullet>
              <Bullet>Retina display support</Bullet>
            </ul>
            {/* CTA Container */}
            <div className="mb-12 flex flex-row-reverse gap-x-4 md:mb-8 md:w-[458px] md:flex-row md:gap-8 xl:mb-0 xl:w-9/12">
              {/* Button Learn More */}
              <Button text="Learn more" type="primary" />
              {/* Button See Pricing */}
              <Button text="See pricing" type="secondary" />
            </div>
          </div>
          {/* Hero Image */}
          <Image
            className="md:max-w-[704px] xl:w-1/2 xl:max-w-[696px]"
            src={'/prism.png'}
            layout="responsive"
            width={696}
            height={464}
            priority
            alt="Stacked images with a prism photo at the top"
          />
        </section>
      </header>

      {/* <!-- Attribute this challenge to yourself! --> */}
      <div className="credits">
        A challenge by
        <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank">
          &nbsp;GreatFrontEnd Projects
        </a>
        . Built by
        <a href="https://www.greatfrontend.com/projects/u/danieo" target="_blank">
          &nbsp;danieo
        </a>
        .
      </div>
    </main>
  );
}
