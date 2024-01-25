import { useLocation, useNavigate } from 'react-router'
import { WrapperBlackItem, WrapperWhiteItem } from '@/assets/images'
import { Header } from '@/components'
import { FlowerFrame, TabContents, BouquetFrame } from './components'
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
  const [currentRibbon, setCurrentRibbon] = useState<string>(
    bouquetInfo.bouquetDesign.ribbon,
  )

  const { data: items } = useGetItems()

  const myItems = items.decoItems
    .filter((item) => item.owned)
    .map((item) => item.type)

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
          {['ribbon1', 'ribbon2', 'ribbon3'].map((item, index) => (
            <div
              key={index}
              className={`flex aspect-square w-[20%] rounded-full ${currentRibbon === item ? 'shadow-[1px_1px_7.1px_rgba(0,0,0,0.5)]' : ''}`}
              onClick={() => setCurrentRibbon(item)}
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
        <BouquetFrame
          currentWrapper={currentWrapper}
          currentRibbon={currentRibbon}
        />
      </div>
      <Tabs
        value="html"
        className="relative z-50 flex h-[23%] shrink-0 flex-col bg-tab-gradient"
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
