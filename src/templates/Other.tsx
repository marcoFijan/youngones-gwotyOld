import { ReactNode } from 'react'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Other = (props: IMainProps) => (
  <div className="antialiased w-full bg-bg-grey relative">
    {props.meta}

    {/* <div className="max-w-screen-md mx-auto"> */}
    {props.children}
  </div>
)

export { Other }
