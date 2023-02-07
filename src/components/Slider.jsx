import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Slider = () => {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1608126841830-53832c4b326f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1574949143744-9cf6472b68b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1631622483070-8ea904171f11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1511651432281-5cf2a44004f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1499693333536-c0742837bc71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
    },
  ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    
  return (
    <div className='max-w-[1800px] h-[780px] w-full m-auto py-8 px-xl '>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover ease-linear duration-500'>
          <div class="text-center font-bold text-lg text-white px-24 py-24">
            <h1 class="text-3xl py-10">¿Quienes somos?</h1>
            <p class=""><strong className='text-cyan-400'>INTEMEC</strong>, ubicada en Tlaxcala, México, ofrece soluciones de conformado de metales, soldadura, ensamblaje y corte a medida para las industrias automotriz y de electrodomésticos.
            La experiencia en la fabricación representa más de 10 años y el rendimiento histórico incluye reducciones de costos, 100% de tiempo de entrega y menos de 5 ppm
              
            Somos una empresa con certificación ISO 9001-2015 en proceso de ser IATF 16949</p>
            <button className="my-16 btn btn-outline btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">Conocer más</button>
          </div>
        </div>
      
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
            <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'>
                <RxDotFilled />
            </div>
            ))}
        </div>
    </div>
  )
}

export default Slider