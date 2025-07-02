import React from 'react';

const Title = ({title, className}) => {
    return (
      <h1
        className={`${className} text-2xl md:text-3xl lg:text-[2.25rem] text-primary poppins-semibold`}
      >
        {title}
      </h1>
    );
};

export default Title;