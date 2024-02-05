import { Ribbon1, Ribbon2, Ribbon3 } from '@/assets/images'
import { FunctionComponent, SVGProps } from 'react'

interface RibbonsProps {
  ribbon: string
}

const Ribbons = ({ ribbon }: RibbonsProps) => {
  const ribbonType: Record<
    string,
    FunctionComponent<SVGProps<SVGSVGElement>>
  > = {
    ribbon1: Ribbon1,
    ribbon2: Ribbon2,
    ribbon3: Ribbon3,
  }

  const ribbonStyles: Record<string, string> = {
    ribbon1: `w-[60%] h-[60%] -translate-x-[68%] -translate-y-[21.5%]`,
    ribbon2: `w-[55.5%] h-[55.5%] -translate-x-[52%] -translate-y-[34%]`,
    ribbon3: 'w-[56%] h-[56%] -translate-x-[53%] -translate-y-[35%]',
  }

  const RibbonType = ribbonType[ribbon]

  return (
    <RibbonType
      className={`absolute left-1/2 top-2/3 ${ribbonStyles[ribbon]}`}
    />
  )
}

export default Ribbons
