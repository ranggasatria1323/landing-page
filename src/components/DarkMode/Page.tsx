import { ColorModeButton } from "@/components/ui/color-mode"
import './../../App.css'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ColorModeButton />
      {children}
    </>
  )
}