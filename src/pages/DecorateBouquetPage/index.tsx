import { useLocation, useNavigate } from 'react-router'
import {
  WrapperWhiteBackImage,
  WrapperWhiteFrontLeftImage,
  WrapperWhiteFrontRightImage,
  WrapperBlackItem,
  WrapperWhiteItem,
  WrapperBlackBackImage,
  WrapperBlackFrontLeftImage,
  WrapperBlackFrontRightImage,
} from '@/assets/images'
import { Header } from '@/components'
import { Ribbons, FlowerFrame, TabContents } from './components'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'
import { startTransition, useRef, useEffect, useState } from 'react'
import { useGetItems } from '@/apis/hooks'

const DecorateBouquetPage = () => {
  const navigate = useNavigate()
  const tabRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const bouquetInfo = { ...location.state }

  const [currentWrapper, setCurrentWrapper] = useState<string>(
    bouquetInfo.bouquetDesign.wrapper,
  )

  const { data: items } = useGetItems()

  const myItems = items.decoItems
    .filter((item) => item.owned)
    .map((item) => item.type)

  const getCardImageUrl = (name: string) => {
    return new URL(`/src/assets/images/${name}.png`, import.meta.url).href
  }

  const getRibbonImageUrl = (name: string) => {
    return new URL(`/src/assets/images/ribbons/${name}.png`, import.meta.url)
      .href
  }

  useEffect(() => {
    if (tabRef.current) {
      // tabRef.current.click()
    }
  }, [])

  const handleRibbonClick = (wrapper: string) => {
    setCurrentWrapper(wrapper)
  }

  const tabContents = [
    {
      label: '첫번째',
      value: 'item1',
      content: <TabContents myItems={myItems} />,
    },
    {
      label: '두번째',
      value: 'item2',
      content: <TabContents myItems={myItems} />,
    },
    {
      label: '세번째',
      value: 'item3',
      content: <TabContents myItems={myItems} />,
    },
    {
      label: '포장지',
      value: 'wrapper',
      content: (
        <div className={`flex w-full justify-center gap-6 px-2`}>
          <div
            className={`flex aspect-square w-[20%] rounded-full ${currentWrapper === 'black' && 'drop-shadow-[1px_1px_13.6px_rgba(0,0,0,0.5)]'}`}
            onClick={() => handleRibbonClick('black')}
          >
            <WrapperBlackItem className="h-full w-full" />
          </div>
          <div
            className={`flex aspect-square w-[20%] rounded-full ${currentWrapper === 'white' && 'drop-shadow-[1px_1px_13.6px_rgba(0,0,0,0.5)]'}`}
            onClick={() => handleRibbonClick('white')}
          >
            <WrapperWhiteItem className="h-full w-full" />
          </div>
        </div>
      ),
    },
    {
      label: '포장끈',
      value: 'ribbon',
      content: (
        <div className={`flex w-full justify-center gap-6 px-2`}>
          {['ribbonItem1', 'ribbonItem2', 'ribbonItem3'].map((item, index) => (
            <div
              key={index}
              className="flex aspect-square w-[20%] rounded-full shadow-[1px_1px_7.1px_rgba(0,0,0,0.5)]"
            >
              <img src={getRibbonImageUrl(item)} alt="item" />
            </div>
          ))}
        </div>
      ),
    },
  ]

  return (
    <div className="flex h-screen w-full flex-col">
      <Header
        leftIcon="GoBackIcon"
        onGoBack={() => startTransition(() => navigate(-1))}
      />
      <div className="relative flex h-full w-full items-center justify-center">
        <FlowerFrame flowers={bouquetInfo.bouquets[0].flowers} />
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-1/2 z-[15] w-[60%] -translate-x-[55.5%] -translate-y-[16%]">
            {currentWrapper === 'white' ? (
              <WrapperWhiteFrontLeftImage className="h-full w-full" />
            ) : (
              <WrapperBlackFrontLeftImage className="h-full w-full" />
            )}
          </div>
          <div className="absolute left-1/2 top-1/2 z-30 w-[65%] -translate-x-[44%] -translate-y-[10%]">
            {currentWrapper === 'white' ? (
              <WrapperWhiteFrontRightImage className="h-full w-full" />
            ) : (
              <WrapperBlackFrontRightImage className="h-full w-full" />
            )}
            <Ribbons ribbon={bouquetInfo.bouquetDesign.ribbon} />
          </div>
          <div className="absolute left-1/2 top-1/2 z-40 w-[33%] -translate-x-[18%] translate-y-[45%]">
            <p className="absolute left-1/3 top-1/3 flex  -translate-x-[75%] -translate-y-[15%] -rotate-[5deg] gap-px font-bodoni text-xs text-[#FFA6EE] sm:text-sm md:text-base desktop:text-sm">
              <span>{`1 st`}</span>
            </p>
            <img
              src={getCardImageUrl('flower_card')}
              alt="flower_card"
              className="w-full"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 z-0 w-[70%] -translate-x-[48%] -translate-y-[60%]">
          {currentWrapper === 'white' ? (
            <WrapperWhiteBackImage className="h-full w-full" />
          ) : (
            <WrapperBlackBackImage className="h-full w-full" />
          )}
        </div>
      </div>
      <Tabs
        value="html"
        className="bg-tab-gradient relative z-50 flex h-[23%] shrink-0 flex-col"
      >
        <TabsHeader
          className="justify-center bg-transparent px-7 py-0"
          indicatorProps={{
            className:
              'bg-white rounded-b-none shadow-sm rounded-t-2xl active:text-red-200',
          }}
        >
          {tabContents.map(({ label, value }, index) => (
            <Tab
              key={value}
              value={value}
              className="font-xs rounded-t-2xl bg-gray-400 py-1 text-black"
              ref={index === 0 ? tabRef : null}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="h-full bg-white">
          {tabContents.map(({ value, content }) => (
            <TabPanel
              key={value}
              value={value}
              className="flex h-full w-full items-center justify-center overflow-visible"
            >
              {content}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  )
}

export default DecorateBouquetPage
