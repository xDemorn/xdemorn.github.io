import { useStore } from "../store/apps.ts";

function Footer() {
  const store = useStore()

  return <footer>{store.windows.map((app, index) => <div key={index}>
    <img src={app.src} alt="Icon"/>
    <span>{app.title}</span>
  </div>)}</footer>
}

export default Footer