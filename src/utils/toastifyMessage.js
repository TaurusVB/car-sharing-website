import StartToastifyInstance from 'toastify-js';

const toastifyMessage = text => {
  return StartToastifyInstance({
    text,
    className: 'info',
    style: {
      background: '#3470FF',
      position: 'fixed',
      right: '10px',
      top: '18px',
      zIndex: 999999,
      width: '220px',
      padding: '10px',
      fontFamily: 'Manrope',
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      color: '#fff',
      borderRadius: '10px',
      border: '1px solid #fff',
    },
  }).showToast();
};

export default toastifyMessage;
