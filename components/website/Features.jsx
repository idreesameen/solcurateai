import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section id="features" className="overflow-hidden py-10 sm:py-24 lg:pb-28 lg:pt-20">
        <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 sm:mb-20 sm:text-center md:max-w-6xl">
                <h1 className="font-bold my-5 text-5xl lg:text-[56px] font-clash main-gradient bg-clip-text">Why SulcurateAI?</h1>
            </div>
            <div className="-m-8 flex flex-wrap sm:px-8">
                <div className="w-full p-8 md:w-1/2">
                    <div className="mx-auto sm:text-center"><Image alt="Image" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" className="mb-7 sm:mx-auto" 
                            src="/images/AI-Powered.svg" />
                        <h3 className="font-semibold font-clash my-5 text-xl sm:text-[26px]">AI-Powered Precision</h3>
                        <p className="text-lg font-medium tracking-tight">SulcurateAI leverages large language models (LLM) and the Solana blockchain to ensure fast, reliable, and creative content generation. Our AI understands your brand’s voice, audience preferences, and the latest trends to craft the perfect content every time.</p>
                    </div>
                </div>
                <div className="w-full p-8 md:w-1/2">
                    <div className="mx-auto sm:text-center"><Image alt="Image" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" className="mb-7 sm:mx-auto"
                            src="/images/linkedin.svg" />
                        <h3 className="font-semibold font-clash my-5 text-xl sm:text-[26px]">Multi-Platform Excellence</h3>
                        <p className="text-lg font-medium tracking-tight">From snappy Twitter posts to detailed LinkedIn articles, from catchy Instagram captions to engaging YouTube scripts, SulcurateAI is designed to meet the specific content needs of each social media platform. No matter where you want to make an impact, our AI ensures your message resonates.</p>
                    </div>
                </div>
                <div className="w-full p-8 md:w-1/2">
                    <div className="mx-auto sm:text-center"><Image alt="Image" loading="lazy" width="70" height="70" decoding="async" data-nimg="1" className="mb-7 sm:mx-auto"
                            src="/images/Efficiency.png" />
                        <h3 className="font-semibold font-clash my-5 text-xl sm:text-[26px]">Efficiency at Scale</h3>
                        <p className="text-lg font-medium tracking-tight">Say goodbye to writer’s block and hours spent brainstorming content ideas. With SulcurateAI, you can generate high-quality, ready-to-post content in seconds, allowing you to focus on what really matters—growing your brand.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features