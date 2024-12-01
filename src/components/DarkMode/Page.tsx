import { ColorModeButton } from "@/components/ui/color-mode"
import style from './../Hero/Hero.module.css'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeButton className={style['darkmode-button']} />
      {children}
    </>
  )
}