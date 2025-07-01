import './window.css'
import type { IApp } from "../store/apps.ts";
import classNames from "classnames";
import { useRef, useState, useEffect } from "react";

interface Props {
  config: IApp;
}

function Window(props: Props) {
  const windowRef = useRef(null);
  const [position, setPosition] = useState({ x: 24, y: 24 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    setDragging(_ => true);
    const rect = windowRef.current.getBoundingClientRect();
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const onMouseMove = (e) => {
    if (dragging) setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const onMouseUp = () => {
    setDragging(_ => false);
  };

  const handleMinimize = () => {
    console.log('minimize')
  }

  const handleMaximize = () => {
    console.log('maximize')
  }

  const handleClose = () => {
    console.log('close')

    // abans de tancar eliminem els events d'escolta
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  }

  // afegim events per evitar problemes quan el cursor surt del component
  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [dragging]);

  return (
    <article className='window' data-uuid={props.config.uuid} ref={windowRef} style={{ top: position.y, left: position.x }}>
      <header onMouseDown={onMouseDown}>
        <img src={props.config.src} alt="Icon"/>
        <span className="title">{props.config.title}</span>

        <div className="actions">
          <button className='minimize' onClick={handleMinimize}>_</button>
          <button className='maximize' onClick={handleMaximize}>-</button>
          <button className='close' onClick={handleClose}>&times;</button>
        </div>
      </header>

      <div className="content">{props.children}</div>
    </article>
  )
}

export default Window
