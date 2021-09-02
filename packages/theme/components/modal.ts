import { fontSizes } from '@/theme/styles/fonts';
import { css } from 'styled-components';

const modal = css`
  .modal-open {
    overflow: hidden;
  }

  .modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
  }

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    // display: none;
    visibility: hidden;
    width: 100%;
    height: 100%;
    overflow: hidden;
    outline: 0;
  }

  .modal-dialog {
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;
  }

  .modal.fade .modal-dialog {
    transition: transform 0.3s ease-out;
    transform: translate(0, -50px);
  }

  @media (prefers-reduced-motion: reduce) {
    .modal.fade .modal-dialog {
      transition: none;
    }
  }

  .modal.show .modal-dialog {
    transform: none;
  }

  .modal.modal-static .modal-dialog {
    transform: scale(1.02);
  }

  .modal-dialog-scrollable {
    display: flex;
    max-height: calc(100% - 1rem);
  }

  .modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 1rem);
    overflow: hidden;
  }

  .modal-dialog-scrollable .modal-header,
  .modal-dialog-scrollable .modal-footer {
    flex-shrink: 0;
  }

  .modal-dialog-scrollable .modal-body {
    overflow-y: auto;
  }

  .modal-dialog-centered {
    display: flex;
    align-items: center;
    min-height: calc(100% - 1rem);
  }

  .modal-dialog-centered::before {
    display: block;
    height: calc(100vh - 1rem);
    height: min-content;
    content: '';
  }

  .modal-dialog-centered.modal-dialog-scrollable {
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .modal-dialog-centered.modal-dialog-scrollable .modal-content {
    max-height: none;
  }

  .modal-dialog-centered.modal-dialog-scrollable::before {
    content: none;
  }

  .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
  }

  .modal-backdrop.fade {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .modal-backdrop.show {
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
  }

  .modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }

  .modal-header .close {
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
  }

  .modal-title {
    margin-bottom: 0;
    line-height: 1.5;
  }

  .modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
  }

  .modal-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
  }

  .modal-footer > * {
    margin: 0.25rem;
  }

  .modal-scrollbar-measure {
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 500px;
      margin: 1.75rem auto;
    }
    .modal-dialog-scrollable {
      max-height: calc(100% - 3.5rem);
    }
    .modal-dialog-scrollable .modal-content {
      max-height: calc(100vh - 3.5rem);
    }
    .modal-dialog-centered {
      min-height: calc(100% - 3.5rem);
    }
    .modal-dialog-centered::before {
      height: calc(100vh - 3.5rem);
      height: min-content;
    }
    .modal-sm {
      max-width: 300px;
    }
  }

  @media (min-width: 992px) {
    .modal-lg,
    .modal-xl {
      max-width: 800px;
    }
  }

  @media (min-width: 1200px) {
    .modal-xl {
      max-width: 1140px;
    }
  }
`;

export default modal;
