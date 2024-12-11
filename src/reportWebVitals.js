// src/reportWebVitals.js

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getLCP }) => {
      getCLS(onPerfEntry); // Cumulative Layout Shift
      getFID(onPerfEntry); // First Input Delay
      getLCP(onPerfEntry); // Largest Contentful Paint
    });
  }
};

export default reportWebVitals;
