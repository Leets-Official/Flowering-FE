import { Carousel } from '@material-tailwind/react'

interface CarouselStylesType {
  defaultProps: {
    prevArrow: (args: {
      loop: boolean
      handlePrev: () => void
      activeIndex: number
      firstIndex: boolean
    }) => React.ReactNode | void
    nextArrow: (args: {
      loop: boolean
      handleNext: () => void
      activeIndex: number
      lastIndex: boolean
    }) => React.ReactNode | void
    navigation: (args: {
      setActiveIndex: React.Dispatch<React.SetStateAction<number>>
      activeIndex: number
      length: number
    }) => React.ReactNode | void
    transition: object
    autoplay: boolean
    autoplayDelay: number
    loop: boolean
    className: string
  }
  styles: {
    base: {
      carousel: object
      slide: object
    }
  }
}

interface Theme {
  carousel: CarouselStylesType
}

const theme: Theme = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }) => {
        return (
          <button
            onClick={handlePrev}
            disabled={!loop && firstIndex}
            className="!absolute left-1 top-[47%] grid h-[100%] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-black transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          ></button>
        )
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="!absolute right-1 top-[47%] grid h-[100%] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-black transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        ></button>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-3">
          {new Array(length).fill('').map((_, i) => (
            <span
              key={i}
              className={`block h-2 w-2 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? 'bg-[#959595]' : 'bg-[#DDDDDD]'
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: true,
      autoplayDelay: 5000,
      transition: {
        type: 'tween',
        duration: 0.7,
      },
      loop: true,
      className: '',
    },
    styles: {
      base: {
        carousel: {
          position: 'relative',
          width: 'w-full',
          height: 'h-full',
          overflowX: 'overflow-x-hidden',
          display: 'flex',
        },

        slide: {
          width: 'w-full',
          height: 'h-full',
          display: 'inline-block',
          flex: 'flex-none',
        },
      },
    },
  },
}

const MerryGoRound = () => {
  const getImageUrl = (name: string | null) => {
    return new URL(`/src/assets/images/login/${name}.png`, import.meta.url).href
  }

  return (
    <div className="font-base mx-6 w-full rounded-[37px] text-center text-black">
      <Carousel {...theme.carousel.defaultProps} styles={theme}>
        <div className="flex flex-col items-center justify-center">
          <img src={getImageUrl('login_1')} className="w-[95%]" />
          <>&nbsp;</>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={getImageUrl('login_2')} className="w-[95%]" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={getImageUrl('login_3')} className="w-[95%]" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={getImageUrl('login_4')} className="w-[95%]" />
        </div>
      </Carousel>
    </div>
  )
}

export default MerryGoRound
