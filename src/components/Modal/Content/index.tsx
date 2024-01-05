import { PropsWithChildren } from 'react'

interface ContentProps {
  className?: string
  id: string
}

const Content = ({
  children,
  className,
  id,
}: PropsWithChildren<ContentProps>) => {
  return (
    <>
      <dialog id={id} className="modal">
        <div className={`modal-box flex flex-col gap-8 ${className}`}>
          <div className="px-3 py-1.5">{children}</div>
          <div className="flex justify-around">
            <form method="dialog">
              <button className="rounded-md border border-[#9747ff] px-3 py-2 hover:bg-gray-200">
                취소
              </button>
            </form>
            <button className="rounded-md border border-[#9747ff] px-3 py-2 hover:bg-gray-200">
              확인
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button />
        </form>
      </dialog>
    </>
  )
}

export default Content
