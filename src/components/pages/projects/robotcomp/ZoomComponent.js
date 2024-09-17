import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./Modal.css"

function ZoomComponent({ url, alt, className, buttonTop, buttonLeft }) {
  return (
    <TransformWrapper
      defaultScale={1}
      minScale={1}
      maxScale={4}
      wheel={{ disabled: true }}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <>
          <div style={{
                position: "relative",
                top: buttonTop,
                left: buttonLeft,
                zIndex: 20,
              }}>
            <button className="zoom-button" onClick={() => {zoomIn();}} style={{ marginRight: "10px" }}>Zoom In</button>
            <button className="zoom-button" onClick={() => {zoomOut();}} style={{ marginRight: "10px" }}>Zoom Out</button>
            <button className="zoom-button" onClick={() => {resetTransform();}}>Reset</button>
          </div>
          <TransformComponent>
            <img src={url} alt={alt} className={className} />
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
}

export default ZoomComponent;