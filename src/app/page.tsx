// app/page.tsx
import Image from "next/image";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-nunito-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-[68px] md:text-7xl font-bold uppercase tracking-normal mb-4 font-[Sofia_Sans_Condensed]">
                Turn Your Basic Product Shots Into Scroll-Stopping Visuals
              </h1>
              <p className="text-xl md:text-2xl mb-10 font-[Nunito_Sans]">
                AI-powered image enhancement that makes your products stand out
                and sell faster.
              </p>

              <button className="bg-black text-white px-6 py-4 font-bold hover:bg-gray-800 transition uppercase font-[Space_Grotesk] text-base ">
                Start for Free →
              </button>
            </div>
            <div className="mt-12 flex justify-center">
              <Image
                src="/hero-image.png"
                alt="Before and After Product Shots"
                width={900}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/Hero-bg.png"
              alt="Hero Background"
              fill
              className="object-cover opacity-50 max-w-7xl mx-auto"
              style={{ objectPosition: "center" }}
            />
          </div>
        </section>

        {/* Purpose Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-sofia-sans-condensed font-bold mb-4">
              A purpose-built AI photo suite designed to take your bold product
              shots and turn them into visuals that stand out, sell more, and
              build brand trust.
            </h2>
            <p className="text-lg mb-8">
              Shotclear outperforms generic image tools. Why? Because we&apos;re
              laser-focused on product photography. Our specialized AI is
              trained on millions of professional product images, not portraits,
              memes, or general art.
            </p>
            <p className="text-lg">
              Behind Shotclear is a team of background generation, AI
              specialists obsessed with helping your product look polished,
              premium, and brand-worthy—without ever stepping into a studio.
            </p>
          </div>
        </section>

        {/* AI Product Photography Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-sofia-sans-condensed font-bold uppercase mb-8">
              Shotclear is the AI Product Photography That Actually Understands
              Products
            </h2>
            <p className="text-lg mb-12">
              Shotclear is trained specifically for product visuals, not
              portraits, memes, or general art. From lighting and reflections to
              textures and angles, our AI is purpose-built to make your product
              look clean, premium, and click-worthy. No guesswork. No gimmicks.
              Just great, fast results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  src="/brain.svg"
                  alt="Brain Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Trained on Real Ecommerce Product Data
                </h3>
                <p>
                  Our models are fine-tuned on millions of real-world product
                  images, selfies or stock.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  src="/picture.svg"
                  alt="Picture Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Studio-Quality Lighting Simulation
                </h3>
                <p>
                  Advanced, accurate shadow handling, unseen lighting, and
                  reflections to mimic a clean, well-lit studio environment
                  without creating a rig.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  src="/timer.svg"
                  alt="Timer Icon"
                  width={50}
                  height={50}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">
                  Multiple Outputs in Seconds
                </h3>
                <p>
                  Generate several high-quality variations. Perfect for Amazon,
                  Instagram, or anything. Lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Generate First Images Section */}
        <section className="py-16 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-sofia-sans-condensed font-bold uppercase mb-4">
              Generate Your First Images For Free
            </h2>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              Try Shotclear Now
            </button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-sofia-sans-condensed font-bold uppercase mb-12 text-center">
              From Upload to &apos;Wow!&apos; in Seconds
            </h2>
            <div className="space-y-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-sofia-sans-condensed font-bold mb-2">
                  1. Upload Your Product Image
                </h3>
                <p>
                  No need for fancy lighting or backgrounds. Just drop in what
                  you have.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-sofia-sans-condensed font-bold mb-2">
                  2. Pick Your Style or Scene
                </h3>
                <p>
                  Choose from preset environments like studio, lifestyle,
                  minimal, or describe your own.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-2xl font-sofia-sans-condensed font-bold mb-2">
                  3. Let AI Do the Work
                </h3>
                <p>
                  Shotclear removes the background, enhances the image, and
                  places your product in a clean, scroll-stopping scene.
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-2xl font-sofia-sans-condensed font-bold mb-2">
                  4. Download Instantly
                </h3>
                <p>
                  Export high-res images ready for your store, ad campaign, or
                  socials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-lg mb-12">
              Choose the right plan for what you need
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Starter</h3>
                <p className="text-3xl font-bold mb-4">$0/month</p>
                <p>For Individuals</p>
                <ul className="list-disc list-inside mt-4 text-left">
                  <li>3 image generations</li>
                  <li>Basic background swap</li>
                </ul>
                <button className="mt-6 bg-black text-white px-6 py-2 rounded-full">
                  Start Now
                </button>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <p className="text-3xl font-bold mb-4">$9.99/month</p>
                <p>For Individuals and small teams</p>
                <ul className="list-disc list-inside mt-4 text-left">
                  <li>50 image generations</li>
                  <li>Background swap & upscaler</li>
                </ul>
                <button className="mt-6 bg-black text-white px-6 py-2 rounded-full">
                  Go Pro
                </button>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold mb-4">Custom</p>
                <p>For big organizations</p>
                <ul className="list-disc list-inside mt-4 text-left">
                  <li>Contact us</li>
                </ul>
                <button className="mt-6 bg-black text-white px-6 py-2 rounded-full">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Deserves Better Section */}
        <section className="py-16 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-sofia-sans-condensed font-bold uppercase mb-4">
              Your Product Deserves Better Than &quot;Just Okay&quot; Photos
            </h2>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
              Try Shotclear Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
