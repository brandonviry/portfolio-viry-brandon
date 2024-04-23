
import "@/ui/components/button/Button.css"
import { ReactNode } from "react"
export default function Button({ ...props }: { nom: string ,url:string , className: string}) {
  return (
    <div className="button">
       <a href={props.url} className={props.className}>{props.nom}</a>
    </div>
  )
}
