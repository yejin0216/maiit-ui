const modal = `
.modal-view-container {
  // width: 100%;
  // height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 10;
  pointer-events: none;
}

.modal-view-container {
  position: fixed;
  top: 0;
  left: 0;
}

.view.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  -webkit-transform: scale(1.15);
  transform: scale(1.15);

  -webkit-transition: -webkit-transform 0.1s
      cubic-bezier(0.465, 0.183, 0.153, 0.946),
    opacity 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  transition: transform 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946),
    opacity 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946);

  pointer-events: none;
  opacity: 0;
  will-change: transform, opacity;
}

.view.modal.visible {
  pointer-events: auto;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);

  -webkit-transition: -webkit-transform 0.3s
      cubic-bezier(0.465, 0.183, 0.153, 0.946),
    opacity 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946),
    opacity 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
}

.modal-view-details {
  background: #fff;
  z-index: 2;
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 32px 32px 24px;
  min-width: 350px;
  max-width: 60%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
}

.modal-view-details h1 {
  margin: 0.2em 0 0.4em 0;
  padding: 0;
  line-height: 1;
  font-size: 24px;
  color: #111;
}

.modal-view-details p {
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 1em 0;
  color: #666;
}

.modal-view-details button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: none;
  color: #3c78d8;
  border-radius: 2px;
  border: none;
  font-size: 16px;
  padding: 6px 10px;
  text-transform: uppercase;
}

.modal:after {
  position: fixed;
  background: #00000073;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: block;
  content: "";
}

.view {
  will-change: transform;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transition: -webkit-transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
}
`;

export default modal;
