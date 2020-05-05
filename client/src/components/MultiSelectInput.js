import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '../assets/CloseIcon';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: left;
  justify-content: flex-start;
  border: 1.5px solid #707070;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0px;
`;

const TagContainer = styled.ul`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  border: none;
  margin: 0;
  padding: 0;
`;

const Option = styled.li`
  background: #f2d22e;
  display: flex;
  color: white;
  border: none;
  font-family: 'Roboto';
  font-size: 1rem;
  text-align: center;
  list-style: none;
  padding: 4px;
  margin: 2px;
  cursor: pointer;
  border-radius: 10px;
`;

const Input = styled.input`
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 1rem;
  flex: 1;
  &:placeholder {
    color: #9eaebc;
  }
  &:focus {
    outline-color: #9eaebc;
  }
`;

function MultiSelectInput({ value, onChange, placeholder, src }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();

      const normalizedValue = event.target.value.trim().toLowerCase();
      if (normalizedValue.length === 0) {
        return;
      }
      if (value.includes(normalizedValue)) {
        return alert('already exists');
      }
      onChange([...value, normalizedValue]);
      setInputValue('');
    }
  };

  const handleRemove = (tag) => {
    const tagsClone = [...value];
    const index = tagsClone.indexOf(tag);
    tagsClone.splice(index, 1);
    onChange(tagsClone);
  };

  return (
    <>
      <InputWrapper>
        <img src={src} />
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
        />
      </InputWrapper>
      <TagContainer>
        {value.map((tag) => (
          <Option key={tag} onClick={() => handleRemove(tag)}>
            {tag}
            <CloseIcon />
          </Option>
        ))}
      </TagContainer>
    </>
  );
}

MultiSelectInput.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  src: PropTypes.any,
};
export default MultiSelectInput;
