import './App.css'
import { useStore } from "./store/apps.ts";
import DesktopApp from "./components/desktop-app.tsx";
import Window from "./core/window.tsx";
import Footer from './core/footer.tsx';

function App() {
  const appsOnDesktop = [
    {
      uuid: crypto.randomUUID(),
      title: 'My Computer',
      src: 'icons/trash.svg'
    },
    {
      uuid: crypto.randomUUID(),
      title: 'Recycle Bin',
      src: 'icons/trash.svg'
    }
  ];

  const store = useStore();

  const handleClickApp = (app: IApp) => {
    console.log('clicked app with uuid:', app.uuid)
    store.open(app);
  }

  return (
    <>
      <main>
        {appsOnDesktop.map(app => <DesktopApp app={app} onClick={handleClickApp} key={app.uuid} />)}
        {store.windows.map(app => <Window key={app.uuid} config={app}>Index: {app.uuid}</Window>)}
      </main>

      <Footer />
    </>
  )
}

export default App
