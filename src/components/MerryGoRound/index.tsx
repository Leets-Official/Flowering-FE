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
            className="!absolute left-0 top-2/4 grid h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-black transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            <div>&lt;</div>
          </button>
        )
      },
      nextArrow: ({ loop, handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="!absolute right-0 top-2/4 grid h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-black transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <div>&gt;</div>
        </button>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-3">
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
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: 'tween',
        duration: 0.5,
      },
      loop: false,
      className: '',
    },
    styles: {
      base: {
        carousel: {
          position: 'relative',
          width: 'w-full',
          height: 'h-[90%]',
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
  return (
    <div className="font-base mx-6 mt-9 h-[358px] rounded-[37px] border-2 border-black pt-[25px] text-center text-black">
      <Carousel {...theme.carousel.defaultProps}>
        <div>
          나의 축하소식을 친구들에게
          <br />
          알려 보세요!
        </div>
        <div>
          자신만의 꽃다발을 만들고
          <br />
          꾸며 보세요!
        </div>
        <div>
          지인에게 편지를 주고 받고
          <br />
          축하 당일에 편지를 열어 보세요!
        </div>
        <div>
          다양한 꽃을 코인으로 구매하고
          <br />
          친구에게 선물해 보세요!
        </div>
      </Carousel>
    </div>
  )
}

export default MerryGoRound
