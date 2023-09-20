import Image from 'next/image';

const Hero = () => {
    return (
        <main className=''>
            {/* hero backgroung  */}
            <div className='relative h-screen w-screen overflow-hidden'>
                <Image src='/rays.png' fill className='object-cover' alt='rays' />

                {/* hero side elements */}
                <div className='absolute top-[70px] left-[30px] md:left-[100px] lg:left-[220px] w-14 h-14 md:h-20 md:w-20'>
                    <Image src='/intro-cube 1.png' fill className='object-contain' alt='cube' />
                </div>

                <div className='absolute top-[78%] lg:top-[600px] left-[8%] lg:left-[200px] w-32 h-32 md:w-56 md:h-56 lg:h-[176px] lg:w-[188px]'>
                    <Image src='/intro-cubes 1.png' fill className='object-contain' alt='cube' />
                </div>

                <div className='absolute top-[70px] left-[250px] md:left-[530px] lg:left-[1100px] w-36 h-36 md:w-72 md:h-72 lg:h-[260px] lg:w-[200px]'>
                    <Image src='/intro-stairs 1.png' fill className='object-contain' alt='cube' />
                </div>

                <div className='absolute top-[78%] lg:top-[540px] left-[60%] md:left-[50%] lg:left-[1035px] w-36 h-48 md:w-72 md:h-72 lg:h-[330px] lg:w-[280px] shadow-[0px_4px_4px_0px_#00000040]'>
                    <Image src='/intro-pillar 1.png' fill className='object-contain' alt='cube' />
                </div>

                {/* hero center elements  */}
                <h1 className='uppercase font-extrabold text-[80px] md:text-[180px] lg:text-[193px] leading-[166px] tracking-[0.5px] text-center absolute top-[35%] left-[8%] md:top-[38%] md:left-[4%] lg:top-[250px] lg:left-[350px] text-white font-agrandir'>
                    Cash
                </h1>

                <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-52 h-52 md:h-[453px] md:w-[370px]'>
                    <Image src='/intro-phone 1.png' fill className='object-contain' alt='cube' />
                </div>

                <h1 className='uppercase font-extrabold text-[80px] md:text-[180px] lg:text-[193px] leading-[166px] tracking-[0.5px] text-center absolute top-[45%] left-[20%] md:top-[53%] md:left-[18%] lg:top-[420px] lg:left-[450px] text-white font-agrandir'>
                    App
                </h1>
            </div>
        </main>
    )
}

export default Hero;