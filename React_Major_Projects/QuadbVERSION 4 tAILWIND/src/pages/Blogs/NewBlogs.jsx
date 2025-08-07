import React from 'react'
import img1 from '../../assets/Images/image1.jpeg'
import Button from '../../components/Button/Button'

function NewBlogs() {

    const textGradient = {
        background: 'linear-gradient(90deg, rgb(240, 246, 0), rgb(0, 168, 170) 30%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
    }

  return (
    <div className='flex flex-col justify-center items-center container mx-auto pt-36 text-white mb-8'>
        <div className='mb-16'>
            <h1 className='leading-[76.89px] text-[36px] sm:text-[40px] md:text-[48px] lg:text-[54.92px] font-normal font-nephilm' style={textGradient}>Latest Blogs.</h1>
            <p className='w-[90%] leading-[16px] sm:leading-[20.46px] md1:leading-[24.46px] lg:leading-[27.46px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20.6px] font-normal font-proxima'>Figma ipsum component variant main layer. Project export frame ipsum clip. Bullet component undo figma editor ellipse.</p>
        </div>

        <div className='justify-center grid grid-cols-2 md:grid-cols-3  gap-3'>

            <div className="relative col-span-2 md:col-span-1 py-28 md:py-52 px-36 dxs:px-40 sm1:px-56 sm:px-64 md:px-28 xg:px-40 xl:px-52 z-10 w-full" style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%, 0 25%)' }}>
                <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: `url(${img1})`, filter: 'grayscale(40%)', zIndex: 1 }}></div>
                <div className="absolute inset-0 bg-black opacity-30" style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%, 0 25%)', zIndex: 2 }}></div>
                <div className="z-20">
                    <div className="absolute left-5 bottom-4 py-4 z-20 flex flex-col justify-start items-start gap-2">
                        <p className="text-[13.29px] leading-[14.54px] font-proxima font-normal">Subheading</p>
                        <h1 className="text-[20.59px] leading-[24.71px] font-nephilm font-normal">Blog Title</h1>
                        <p className="text-[16.02px] leading-[19.51px] font-proxima font-normal">Title</p>
                        <p className="mb-2 no:hidden md:flex text-[12.65px] leading-[16.85px] font-nephilm font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className='no:hidden md:flex'>
                            <Button name={'READ MORE'} width={160}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-[70%] sm1:py-[50%] md:py-[22%] px-[20%] z-10 w-full" style={{ clipPath: 'polygon(0 0, 70% 0, 100% 25%, 100% 100%, 0 100%)' }}>
                <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: `url(${img1})`, filter: 'grayscale(40%)', zIndex: 1 }}></div>
                <div className="absolute inset-0 bg-black opacity-30" style={{ clipPath: 'polygon(0 0, 70% 0, 100% 25%, 100% 100%, 0 100%)', zIndex: 2 }}></div>
                <div className="z-20">
                    <div className="absolute left-5 bottom-4 py-4 z-20 flex flex-col justify-start items-start gap-2">
                        <p className="text-[13.29px] leading-[14.54px] font-proxima font-normal">Subheading</p>
                        <h1 className="text-[20.59px] leading-[24.71px] font-nephilm font-normal">Blog Title</h1>
                        <p className="text-[16.02px] leading-[19.51px] font-proxima font-normal">Title</p>
                        <p className="mb-2 no:hidden md:flex text-[12.65px] leading-[16.85px] font-nephilm font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className='no:hidden md:flex'>
                            <Button name={'READ MORE'} width={160}/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="relative row-span-2 py-[60%] sm1:py-[40%] md:py-[22%] px-[20%] z-10 w-full" style={{ clipPath: 'polygon(0 0, 75% 0, 100% 18%, 100% 100%, 0 100%)' }}>
                <div className="absolute inset-0 bg-center bg-no-repeat" style={{ backgroundImage: `url(${img1})`, filter: 'grayscale(40%)', zIndex: 1 }}></div>
                <div className="absolute inset-0 bg-black opacity-30" style={{ clipPath: 'polygon(0 0, 75% 0, 100% 18%, 100% 100%, 0 100%)', zIndex: 2 }}></div>
                <div className="z-20">
                    <div className="absolute left-5 bottom-4 py-4 z-20 flex flex-col justify-start items-start gap-2">
                        <p className="text-[13.29px] leading-[14.54px] font-proxima font-normal">Subheading</p>
                        <h1 className="text-[20.59px] leading-[24.71px] font-nephilm font-normal">Blog Title</h1>
                        <p className="text-[16.02px] leading-[19.51px] font-proxima font-normal">Title</p>
                        <p className="mb-2 no:hidden md:flex text-[12.65px] leading-[16.85px] font-nephilm font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className='no:hidden md:flex'>
                            <Button name={'READ MORE'} width={160}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative col-span-1 row-span-2 md:row-span-1 md:col-span-2 py-[50%] md:py-[30%] xg:py-[22%] px-[20%]  z-10 w-full" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 25%)' }}>
                <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${img1})`, filter: 'grayscale(40%)', zIndex: 1 }}></div>
                <div className="absolute inset-0 bg-black opacity-30" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 25%)', zIndex: 2 }}></div>
                <div className="z-20">
                    <div className="absolute left-12 md:bottom-0 xg:bottom-4 py-4 z-20 flex flex-col justify-start items-start gap-2">
                        <p className="text-[13.29px] leading-[14.54px] font-proxima font-normal">Subheading</p>
                        <h1 className="text-[20.59px] leading-[24.71px] font-nephilm font-normal">Blog Title</h1>
                        <p className="text-[16.02px] leading-[19.51px] font-proxima font-normal">Title</p>
                        <p className="mb-2 no:hidden md:flex text-[12.65px] leading-[16.85px] font-nephilm font-normal">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div className='no:hidden md:flex'>
                            <Button name={'READ MORE'} width={160}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NewBlogs
