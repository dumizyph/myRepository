import React from 'react';

const Logo = () => {
  const logoStyle = {
    width: '200px',
    height: '200px',
    animation: 'spin 5s infinite linear',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  return (
    <>
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div >
        <img
          src="/images/zyphalonLogoAnimation.gif"
          alt="Company Logo"
          style={{height:"auto",width:200}}
          // style={logoStyle}
        />
      </div>
    </>
  );
};

export default Logo;
