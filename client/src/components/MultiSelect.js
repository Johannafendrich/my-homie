import React from 'react';
import styled from '@emotion/styled';
import CloseIcon from '../assets/CloseIcon';

const InputWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-items: center;
  border: 1.5px solid #707070;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px 20px;
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
  margin-right: 5px;
  font-size: 1rem;
  flex: 1;
  &:placeholder {
    color: #9eaebc;
  }
  &:focus {
    outline-color: #9eaebc;
  }
`;

function MultiSelectInput() {
  const [tags, setTags] = React.useState([]);
  const handleKeyUp = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };
  const indexToDelete = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Press enter to add hobbies"
        onKeyUp={handleKeyUp}
      />
      <TagContainer>
        {tags.map((tag, index) => (
          <Option key={index} onClick={() => indexToDelete(index)}>
            {tag}
            <CloseIcon />
          </Option>
        ))}
      </TagContainer>
    </InputWrapper>
  );
}

export default MultiSelectInput;
