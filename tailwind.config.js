module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/components/**/*.jsx", "./src/pages/**/*.jsx"],
  },
  theme: {
    colors: {
      fonts: {
        primary: '#aafaff',
        title: '#fff',
        text: '#4A5568',
        inputbg: '#F7FAFC',
        inputbd: '#CBD5E0',
        lighter: '#EDF2F7',
        bgbutton: '#667EEA',
        displaycolor: '#2D3748',
      },
      header: {
        from: '#A0AEC0',
        to: '#718096',
      }
    },
    borderRadius: {
      default: '10px',
      input: '4px',
    },
    boxShaddow: {
      default: '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)'
    },
  }
};
