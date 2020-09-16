import React from 'react';

const FormBlock = ({ label, handleChange, value, type }) => {
  return (
    <label className="block">
      <span className="block text-fonts-text mt-5 mb-3 text-lg">
        {label}
      </span>
      <input
        className="w-full p-4 bg-fonts-inputbg text-2xl rounded-input border border-solid border-fonts-inputbd"
        type={type}
        value={value || ''}
        onChange={handleChange}
      />
    </label>
  );
};

const SearchFlights = ({ fields, submit }) => {
  return (
    <div className="bg-fonts-title rounded shadow -mb-64 lg:-mb-20">
      <form onSubmit={submit}>
        <div className="p-8">
          <div className="flex items-center">
            <label>
              <input
                value="go-and-return"
                type="radio"
                name="trajetory"
              />

              <span className="mr-5 ml-2 text-lg">
                ida e volta:
              </span>
            </label>

            <label>
              <input
                value="go"
                type="radio"
                name="trajetory"
              />

              <span className="mr-5 ml-2 text-lg">
                só ida
              </span>
            </label>

            <label>
              <input
                return="return"
                type="radio"
                name="trajetory"
              />

              <span className="mr-5 ml-2 text-lg">
                só volta
              </span>
            </label>
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:gap-5">
            {fields.map((field, index) => (
              <FormBlock
                key={index}
                label={field.label}
                handleChange={field.handleChange}
                value={field.value}
                type={field.type}
              />
            ))}
          </div>
        </div>
        <div className="py-5 px-8 bg-fonts-lighter rounded-b flex justify-end">
          <button
            className="bg-fonts-bgbutton text-fonts-title rounded-input text-lg p-5"
            type="submit"
          >
            Busque as viagens
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchFlights;
