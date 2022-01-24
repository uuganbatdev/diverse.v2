import React ,{useState, Fragment} from 'react'
import Project1 from '../../assets/project.png'
import White from '../../assets/whitelogo.png'
import Mont from '../../assets/MONT.png'
import Monnom from '../../assets/Monnom.png'
import ARDMs from '../../assets/ArdMoney.png'
import DAXL from '../../assets/dax-logo-light.png'
import DAXLs from '../../assets/dax-logo.png'
import {FaAngleRight , FaAngleLeft, FaWindowClose} from 'react-icons/fa'
import { Dialog, Transition } from '@headlessui/react'



export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(-1);
    const [isOpen, setIsOpen] = useState(false)


    function showProjectDetail(index) {
        if (index === selectedProject) {
            setSelectedProject(-1);
        } else {
            setSelectedProject(index);
        }
    }


    function openModal(index) {
        setIsOpen(true)
        setSelectedProject(index);
    }

    function closeModal() {
        setIsOpen(false)
        setSelectedProject(-1);
    }

    return (
        <div className='container mx-auto pb-40 lg:py-40'>
            <div className='flex flex-col px-5 md:px-0 lg:flex-row items-center'>
                <div style={{ fontFamily: 'MagistralRegular' }} className='flex lg:pr-24 flex-col w-full lg:w-1/2'>
                    <h2 className='text-5xl font-bold mb-10' style={{ fontFamily: 'Magistral' }}>Төслүүд</h2>
                    <div>
                        <h3 className='font-bold text-2xl'>Хөгжүүлэлт</h3>
                        <p className='mt-2'>Бид хэрэглэгчдийнхээ онцлогийг шинжлэн, хэрэгцээнд зориулсан дизайн, брэндинг, вэбсайт, вэб болон утасны апп, блокчэйн дээр суурилсан токен, dapp-н ухаалаг гэрээг хөгжүүлж байна. Бид Монголын анхны төгрөгтэй 1:1 үнэ цэнтэй стэйблкойн болон Монголын анхны төвлөрсөн бус санхүүгийн систем болох ArdMoney төслийг гардан хэрэгжүүлж байгаа болно.</p>
                    </div>
                    <div className='mt-5'>
                        <h3 className='font-bold text-2xl' >Зөвлөх</h3>
                        <p className='mt-2'>Блокчэйн болон бусад дэвшилтэт технологийн шийдлийг таны бизнест тохируулан боловсруулж, зөвлөж өгөх болно. Манай харилцагчид мөн бидний улирал бүр гаргах технологийн тайлангуудыг хамгийн түрүүнд хүлээн авдаг.</p>
                    </div>
                </div>
                <div className='w-full mt-14 lg:w-1/2  relative '>
                    <div className='w-full hidden sm:flex flex-wrap'>
                        {
                            projectImages.map((img, index) => (
                                <div key={index} className='w-full sm:w-1/2 flex justify-center'>
                                    <div onClick={() => showProjectDetail(index)}
                                        className={` ${selectedProject === index ? 'rounded-xl scale-110 sm:border border-black z-30' : 'hover:scale-110 hover:shadow-none sm:shadow-md'} bg-white w-full  h-52 flex  transition transform  cursor-pointer justify-center items-center  `}>
                                        {img.component}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full flex sm:hidden flex-wrap'>
                        {
                            projectImages.map((img, index) => (
                                <div key={index} className='w-full sm:w-1/2 flex justify-center'>
                                    <div onClick={() => openModal(index)}
                                        className={` ${selectedProject === index ? 'rounded-xl scale-110 sm:border border-black z-30' : 'hover:scale-110 hover:shadow-none sm:shadow-md'} bg-white w-full  h-52 flex  transition transform  cursor-pointer justify-center items-center  `}>
                                        {img.component}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`absolute transition h-full   text-white top-0 ${selectedProject == -1 ? '-z-10 opacity-0' : 'z-20 opacity-100'}  w-full h-full bg-black rounded-xl`}>
                        {
                            selectedProject !== -1 ? (
                                <div className={`w-full h-full flex  ${selectedProject >= 2 ? 'flex-col-reverse' : 'flex-col'}`}>
                                    <div className='flex'>
                                        {(selectedProject === 0 || selectedProject === 2) && <BlankSpace />}
                                        <div className='w-1/2 pt-10 pl-14 md:pl-20 xl:pl-24'>
                                            <ul className='list-disc'>
                                            {
                                                projects[selectedProject].listsLeft.map(list => (
                                                    <li>{list}</li>
                                                ))
                                            }
                                            </ul>
                                        </div>
                                        {(selectedProject === 1 || selectedProject === 3) && <BlankSpace />}
                                    </div>
                                    <div className={`px-10 h-1/2  flex flex-col justify-center`}>
                                        <h3>{projects[selectedProject].name}</h3>
                                        <p className='mt-2'>{projects[selectedProject].description}</p>
                                    </div>
                                </div>
                            ) : (<></>)
                        }
                    </div>
                </div>
                <Transition appear show={isOpen} as={Fragment} >
                    <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto bg-white" onClose={closeModal} >
                        <div className="min-h-screen text-center">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                                <div className='h-screen sm:p-10 w-screen '>
                                    <div className='text-left text-lg py-5 px-5' style={{ fontFamily: 'MagistralRegular' }} onClick={() => closeModal()}>
                                        <div className='shadow-md inline p-2'>
                                            Буцах
                                        </div>
                                    </div>
                                    {
                                        projects[selectedProject] ? (
                                            <div className='px-5' style={{ fontFamily: 'MagistralRegular' }}>
                                                <div className='text-3xl' style={{ fontFamily: 'Magistral' }}>{projects[selectedProject].name}</div>
                                                <div className='text-left mt-5'  >{projects[selectedProject].description}</div>
                                                <ul className='list-disc text-left px-5 mt-8'>
                                                    {
                                                        projects[selectedProject].listsLeft.map(list => (
                                                            <li>{list}</li>
                                                        ))
                                                    }
                                                </ul>
                                                <div className=' mt-10'>
                                                    <a href={projects[selectedProject].link} target='_blank' className='underline text-lg '>
                                                        {projects[selectedProject].link}
                                                    </a>
                                                </div>
                                            </div>
                                        ) : (<></>)
                                    }

                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    )
}

function BlankSpace() {
    return (
        <div className='w-1/2 h-52  transform scale-110'></div>
    )
}

const projectImages = [
    {
        component: <img className='w-40 h-40' src={DAXLs} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={Monnom} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={Mont} alt="dax" />
    },
    {
        component: <img className='w-40 h-40' src={ARDMs} alt="dax" />
    },
]


const projects = [
    {
        name: 'DAX',
        link: 'https://dax.mn/',
        description: 'Монголын том 4 биржийн нэг. Хамгийн анх Ард Санхүүгийн Нэгдэлийн крипто арилжааны биржийг',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    {
        name: 'MONNOM',
        link: 'https://monnom.mn/',
        description: '“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг.',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    {
        name: 'MONT',
        link: 'https://stablecoin.mn/',
        description: 'Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    {
        name: 'ARDMONEY',
        link: 'https://ardmoney.com/',
        description: 'Монголын анхны DAO төсөл. Төвлөрсөн бус санхүүг Монголын болон Төв Азийн зах зээлд авчирч, крипто хэрэглэгчдийн хэрэглээнд нэвтрэх зорилготой.',
        listsLeft: [
            'Development',
            'Code',
            'FrontEnd',
            'BackEnd',
            'Designs',
        ],
        listsRight: [
            'Code',
            'BackEnd',
            'Designs',
            'Designs',
        ],
    },
    // {
    //     name: 'MONNOM',
    //     link: 'https://monnom.mn/',
    //     description: '“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг.',
    //     development: 'Development',
    //     development1: 'Code',
    //     development2: 'FrontEnd',
    //     development3: 'BackEnd',
    //     development4: 'Designs',
    //     development5: 'Designs',
    //     development6: 'Designs',
    // },
    // {
    //     name: 'MONT',
    //     link: 'https://www.stablecoin.mn/',
    //     description: 'Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.',
    //     development: 'BackEnd',
    //     development1: 'Website front-end',
    //     development2: 'Token smart contracts',
    //     development3: 'Website front-end',
    //     development4: 'Design',
    //     development5: 'Branding',
    //     development6: 'Ecosystem consulting',
    // },
    // {
    //     name: 'MONNOM',
    //     link: 'https://monnom.mn/',
    //     description: '“Monnom” аппликейшн нь цахим, аудио, хэвлэмэл номыг онлайнаар худалдаалдаг номын төвлөрсөн платформ юм. Бид 2021 оноос үйл ажиллагаагаа явуулж эхэлсэн ба Монгол хэл дээрх бүх төрлийн номыг цахим, аудио, хэвлэмэл гэсэн гурван хэлбэрээр хэрэглэгчдэд хүргэдэг.',
    //     development: 'Development',
    //     development1: 'Code',
    //     development2: 'FrontEnd',
    //     development3: 'BackEnd',
    //     development4: 'Designs',
    //     development5: 'Designs',
    //     development6: 'Designs',
    // },
    // {
    //     name: 'MONT',
    //     link: 'https://www.stablecoin.mn/',
    //     description: 'Монголын анхны Стэйблкойн. Монгол төгрөгтэй үнэ цэнээ аргамжсан энэхүү койн нь крипто арилжаанд төгрөгийг төлөөлөх хамгийн зөв хэрэгсэл болно. Энэхүү койны ухаалаг гэрээг Diverse Solutions хөгжүүлж, хэрэглээнд нэвтрүүлсэн болно.',
    //     development: 'BackEnd',
    //     development1: 'Website front-end',
    //     development2: 'Token smart contracts',
    //     development3: 'Website front-end',
    //     development4: 'Design',
    //     development5: 'Branding',
    //     development6: 'Ecosystem consulting',
    // },
    // {
    //     name: 'ARDMONEY',
    //     link: 'https://www.ardmoney.com/',
    //     description: 'Монголын анхны DAO төсөл. Төвлөрсөн бус санхүүг Монголын болон Төв Азийн зах зээлд авчирч, крипто хэрэглэгчдийн хэрэглээнд нэвтрэх зорилготой.',
    //     development: 'Branding',
    //     development1: 'Ecosystem',
    //     development2: 'Website front-end',
    //     development3: 'Website back-end',
    //     development4: 'Designs',
    //     development5: 'Token smart contracts',
    //     development6: 'DAP smart contracts ',
    // },
]
