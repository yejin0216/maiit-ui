interface PortalContextManagerType {
  get(): void;
  set(): HTMLDivElement;
}

const portalContextManager: PortalContextManagerType = {
  get() {},
  set() {
    const portalContext = document.createElement('div');
    portalContext.classList.add('modal-view-container');

    const view = document.createElement('div');
    view.classList.add('portal', 'view');
    portalContext.appendChild(view);

    return portalContext;
  },
};

export default portalContextManager;
