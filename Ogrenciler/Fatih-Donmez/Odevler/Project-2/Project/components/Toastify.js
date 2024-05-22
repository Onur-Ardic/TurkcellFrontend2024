class Toast {
  constructor(message, type = 'success', delay = 50000) {
    this.message = message;
    this.type = type;
    this.delay = delay;
    this.createToast();
  }

  createToast() {
    const toastContainer = document.getElementById('toastContainer');

    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${this.type} border-0`;
    toast.role = 'alert';
    toast.ariaLive = 'assertive';
    toast.ariaAtomic = 'true';
    toast.style.minWidth = '300px';

    const toastHeader = document.createElement('div');
    toastHeader.className =
      'toast-header d-flex justify-content-between align-items-center ';

    const strong = document.createElement('strong');
    strong.className = 'me-4';
    strong.textContent = 'Bildirim';
    const wrapperDiv = document.createElement('div');
    wrapperDiv.className = 'd-flex';

    const small = document.createElement('small');
    small.className = 'text-muted ms-4';
    small.textContent = 'şimdi';

    wrapperDiv.appendChild(small);

    toastHeader.appendChild(strong);
    toastHeader.appendChild(wrapperDiv);

    const toastBody = document.createElement('div');
    toastBody.className = 'toast-body';
    toastBody.textContent = this.message;

    toast.appendChild(toastHeader);
    toast.appendChild(toastBody);

    toastContainer.appendChild(toast);

    const bootstrapToast = new bootstrap.Toast(toast, {
      autohide: true,
      delay: this.delay,
    });
    bootstrapToast.show();

    toast.addEventListener('hidden.bs.toast', () => {
      toast.remove();
    });
  }
}

export default Toast;
