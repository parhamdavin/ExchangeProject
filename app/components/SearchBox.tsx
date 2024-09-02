import React, { ChangeEvent } from 'react';

interface SearchBoxProps {
  onSearch: (value: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="جستجو..."
      className="p-2 border  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      onChange={handleChange}
    />
  );
};

export default SearchBox;
