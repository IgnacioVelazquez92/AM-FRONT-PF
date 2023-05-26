// import React, { useEffect, useRef } from 'react';
// import { Toast as BootstrapToast } from 'bootstrap';

// const ToastCart = () => {
//   const toastRef = useRef(null);

//   useEffect(() => {
//     const toastElement = toastRef.current;
//     const toastBootstrap = new BootstrapToast(toastElement);

//     return () => {
//       toastBootstrap.dispose();
//     };
//   }, []);

//   const handleToastClick = () => {
//     const toastBootstrap = new BootstrapToast(toastRef.current);
//     toastBootstrap.show();
//   };

//   return (
//     <div className="toast" role="alert" aria-live="assertive" aria-atomic="true" ref={toastRef}>
//       <div className="toast-header">
//         <img src="..." className="rounded me-2" alt="..." />
//         <strong className="me-auto">Bootstrap</strong>
//         <small>11 mins ago</small>
//         <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//       </div>
//       <div className="toast-body">
//         Hello, world! This is a toast message.
//       </div>
//       <button type="button" className="btn btn-primary" onClick={handleToastClick}>
//         Show Toast
//       </button>
//     </div>
//   );
// };

// export default ToastCart;
