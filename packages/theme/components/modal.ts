import { fontSizes } from '@/theme/styles/fonts';

const modal = `
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

// .view {
//   will-change: transform;
//   width: 100%;
//   position: absolute;
//   left: 0;
//   top: 0;
//   transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
// }

.view.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  // transform: scale(1.15);
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);

  pointer-events: none;
  // opacity: 0;
  // will-change: transform, opacity;
}

// .view.modal.visible {
//   pointer-events: auto;
//   opacity: 1;
//   transform: scale(1);
  
  // transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946)
  // ,opacity 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
// }

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

.modal-view-details {
  background: #fff;
  z-index: 2;
  position: fixed;
  left: 50%;
  top: 30%;
  // padding: 32px 32px 24px;
  min-width: 350px;
  max-width: 60%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
}

.modal-view-details header {
  padding: 16px 24px;
  font-size: ${fontSizes.xl}
}

.modal-view-details .modal-view--body {
  padding: 8px 24px;
  font-size: ${fontSizes.lg}
}

.modal-view-details footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 24px;
}

.modal-view-details footer button + button {
  margin-left: 10px;
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
  // position: absolute;
  // bottom: 10px;
  // right: 10px;
  // background: none;
  // color: #3c78d8;
  // border-radius: 2px;
  // border: none;
  // font-size: 16px;
  // padding: 6px 10px;
  // text-transform: uppercase;
  display: inline-flex;
  appearance: none;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  outline: transparent solid 2px;
  outline-offset: 2px;
  width: auto;
  line-height: 1.2;
}
`;

export default modal;
