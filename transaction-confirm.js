(function () {
  'use strict';

  if (window.__transactionConfirmInstalled) return;
  window.__transactionConfirmInstalled = true;

  const message = 'Sudah sesuai dengan kondisi di lapangan? Pastikan seluruh data sudah akurat sebelum melanjutkan.';
  const style = document.createElement('style');
  style.textContent = `
    .tx-confirm-overlay{position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(10,25,17,.58)}
    .tx-confirm-overlay[hidden]{display:none!important}
    .tx-confirm-dialog{width:min(460px,100%);padding:22px;border:1px solid #dce6dc;border-radius:16px;background:#fff;color:#24382d;box-shadow:0 22px 70px rgba(0,0,0,.28);font:14px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif}
    .tx-confirm-dialog h2{margin:0 0 10px;color:#20553d;font-size:17px;line-height:1.35}
    .tx-confirm-dialog p{margin:0 0 17px;color:#43584a;font-size:13px}
    .tx-confirm-check{display:flex;align-items:flex-start;gap:10px;margin:0 0 20px;padding:12px;border:1px solid #dce6dc;border-radius:9px;background:#f5f8f4;font-size:12px;cursor:pointer}
    .tx-confirm-check input{width:17px;height:17px;margin:1px 0 0;flex:0 0 auto;accent-color:#216542}
    .tx-confirm-actions{display:flex;justify-content:flex-end;gap:9px}
    .tx-confirm-actions button{min-height:39px;padding:8px 13px;border:1px solid #cbd8cd;border-radius:8px;background:#fff;color:#284333;font:700 12px system-ui,-apple-system,"Segoe UI",sans-serif;cursor:pointer}
    .tx-confirm-actions .tx-confirm-continue{border-color:#216542;background:#216542;color:white}
    .tx-confirm-actions .tx-confirm-continue:disabled{opacity:.48;cursor:not-allowed}
    @media(max-width:480px){.tx-confirm-dialog{padding:18px}.tx-confirm-actions button{flex:1}}
  `;
  document.head.appendChild(style);

  const overlay = document.createElement('div');
  overlay.className = 'tx-confirm-overlay';
  overlay.hidden = true;
  overlay.innerHTML = `<section class="tx-confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="txConfirmTitle" aria-describedby="txConfirmMessage"><h2 id="txConfirmTitle">Konfirmasi transaksi</h2><p id="txConfirmMessage"></p><label class="tx-confirm-check"><input type="checkbox" id="txConfirmCheck"><span>Saya sudah memeriksa dan memastikan data transaksi ini akurat.</span></label><div class="tx-confirm-actions"><button type="button" data-tx-cancel>Periksa kembali</button><button type="button" class="tx-confirm-continue" data-tx-continue disabled>Lanjutkan transaksi</button></div></section>`;
  overlay.querySelector('#txConfirmMessage').textContent = message;
  document.body.appendChild(overlay);

  const checkbox = overlay.querySelector('#txConfirmCheck');
  const continueButton = overlay.querySelector('[data-tx-continue]');
  const cancelButton = overlay.querySelector('[data-tx-cancel]');
  const confirmedButtons = new WeakSet();
  let pendingAction = null;
  let lastFocused = null;

  function closeDialog() {
    overlay.hidden = true;
    pendingAction = null;
    if (lastFocused && lastFocused.isConnected) lastFocused.focus();
  }

  function askConfirmation(action) {
    pendingAction = action;
    lastFocused = document.activeElement;
    checkbox.checked = false;
    continueButton.disabled = true;
    overlay.hidden = false;
    checkbox.focus();
  }

  checkbox.addEventListener('change', function () {
    continueButton.disabled = !checkbox.checked;
  });
  cancelButton.addEventListener('click', closeDialog);
  continueButton.addEventListener('click', function () {
    if (!checkbox.checked || typeof pendingAction !== 'function') return;
    const action = pendingAction;
    overlay.hidden = true;
    pendingAction = null;
    action();
  });
  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) closeDialog();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !overlay.hidden) closeDialog();
  });

  document.addEventListener('submit', function (event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (form.dataset.txConfirmed === '1') {
      delete form.dataset.txConfirmed;
      return;
    }
    if (/^(loginForm|formGantiPassword)$/i.test(form.id || '')) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const submitter = event.submitter;
    askConfirmation(function () {
      form.dataset.txConfirmed = '1';
      if (typeof form.requestSubmit === 'function') {
        if (submitter && submitter.isConnected) form.requestSubmit(submitter);
        else form.requestSubmit();
      } else {
        delete form.dataset.txConfirmed;
        window.alert('Browser ini belum mendukung konfirmasi transaksi. Perbarui browser lalu coba lagi.');
      }
    });
  }, true);

  const actionWords = /\b(simpan|kirim|submit|catat|setujui|acc|tolak|upload|unggah|batalkan|batal acc|hapus|mutasi|koreksi|nonaktifkan|aktifkan|terima|konfirmasi|buat akun|tambah unit|tambah gudang)\b/i;
  document.addEventListener('click', function (event) {
    const button = event.target.closest && event.target.closest('button, input[type="button"], input[type="submit"]');
    if (!button || button.disabled || button.dataset.txConfirmControl === '1') return;
    if (button.type === 'submit') return; // Submit forms are checked at the submit event.
    if (confirmedButtons.has(button)) {
      confirmedButtons.delete(button);
      return;
    }
    const label = [button.innerText, button.value, button.getAttribute('aria-label'), button.title].filter(Boolean).join(' ');
    if (!actionWords.test(label)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    askConfirmation(function () {
      confirmedButtons.add(button);
      button.click();
    });
  }, true);
})();
