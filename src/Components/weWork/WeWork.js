import React from 'react'

const WeWork = () => {
    return (
        <div className='w-full  '>
            <div className='container pt-10 pb-20 sm:pb-40 mx-auto hidden xl:block'>
                <div className='flex justify-between px-5 w-full space-x-10'>
                    {/* <span id='WeWork' class="relative w-128 h-72 flex-col inline-flex justify-center  rounded-2xl " style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}> */}
                    <span id='WeWork' class="relative w-128 h-80 pt-5 shadow-md">
                        <h3 className=' text-4xl w-3/12 mx-10 font-bold' style={{ fontFamily: 'Magistral' }}>Smart Contract</h3>
                        <p className=' w-3/4 mx-10 py-5' style={{ fontFamily: 'MagistralRegular' }}>Developing smart contracts in accordance with the current standards.</p>
                    </span>
                    {/* <span class="relative w-128 h-72 flex-col inline-flex justify-center mt-36  rounded-2xl " style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}> */}
                    <span class="relative w-128 h-80 flex-col pt-5  mt-36  shadow-md " >
                        <h3 className=' text-4xl w-3/12 mx-10 font-bold' style={{ fontFamily: 'Magistral' }}>Decentralized Applications</h3>
                        <p className=' w-3/4 mx-10 py-5' style={{ fontFamily: 'MagistralRegular' }}>Security and Transparency have been a problem to solve in any system. Decentralized applications built on blockchain technology has transparency and trust built into the system and provide a solution to the aforementioned problem.</p>
                    </span>
                    {/* <span class="relative w-128 h-72 flex-col inline-flex justify-center  rounded-2xl " style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}> */}
                    <span class="relative w-128 h-80 flex-col pt-5  shadow-md " >
                        <h3 className=' text-4xl w-3/12 mx-10 font-bold' style={{ fontFamily: 'Magistral' }}>Blockchain Consultation</h3>
                        <p className=' w-3/4 mx-10 py-5' style={{ fontFamily: 'MagistralRegular' }}>Recommend for those who are exploring blockchain and groundbreaking information technology as part of a solution to their products, services.</p>
                    </span>
                </div>
            </div>
            {/* mobile */}
            <div className='container mx-auto block xl:hidden'>
                <div>
                
                </div>
                {/* <div className='flex flex-col justify-center items-center px-5'>
                    <span class="w-full flex-col flex justify-center rounded-2xl">
                        <h1 className='text-2xl text-left font-bold' style={{ fontFamily: 'Magistral' }}>Smart Contract</h1>
                        <p className=' w-full mx-1' style={{ fontFamily: 'MagistralRegular' }}>Ухаалаг гэрээг ERC-20, BEP-20, ERC-1557, SPL стандартын дагуу хөгжүүлж байна.</p>
                    </span>
                    <span class="w-full pt-10 flex-col flex rounded-2xl">
                        <h1 className='text-2xl w-9/12 font-bold' style={{ fontFamily: 'Magistral' }}>Blockchain architecture</h1>
                        <p className=' w-full' style={{ fontFamily: 'MagistralRegular' }}>Бид харилцагчдынхаа хэрэглээнд тохирсон Dapp-н блокчэйн архитехтурыг гаргаж, хамгийн дэвшилтэт шийдлийг хүргэх болно.</p>
                    </span>
                    <span class="w-full pt-10 flex-col flex justify-center rounded-2xl">
                        <h1 className='text-2xl text-left font-bold w-3/12' style={{ fontFamily: 'Magistral' }}>Blockchain зөвлөгөө</h1>
                        <p className=' w-full mx-1' style={{ fontFamily: 'MagistralRegular' }}>Бид харилцагчдынхаа бизнесийн онцлог, хэрэгцээг харгалзан үзэж, блокчэйн шийдлийн гарааны болон цаашдын төлөвлөгөөнд зөвлөж байна.</p>

                    </span>
                </div> */}
            </div>
        </div>
    )
}
export default WeWork
