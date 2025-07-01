import './desktop-app.css'
import type { IApp } from "../store/apps.ts";

interface Props {
  app: IApp;
  onClick: (app: IApp) => void;
}

function DesktopApp(props: Props) {
  return (
    <article className="app" onClick={() => props.onClick(props.app)}>
      <img src={props.app.src} alt="Desktop app"/>
      <span>{props.app.title}</span>
    </article>
  )
}

export default DesktopApp