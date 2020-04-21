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
  &:focus {
    outline: grey;
  }
`;

const Option = styled.li`
  background: #f2d22e;
  display: flex;
  color: white;
  border: none;
  font-family: Roboto sans-serife;
  font-size: 1rem;
  text-align: center;
  list-style: none;
  padding: 4px;
  margin: 2px;
  cursor: pointer;
  border-radius: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  font-size: 1rem;
  flex: 1;
  outline: none;
  &:placeholder {
    color: #9eaebc;
  }
`;

function MultiSelectInput() {
  const [tags, setTags] = React.useState([]);
  const deleteTags = (valueDelete) => {
    setTags(tags.filter((value) => value != valueDelete));
  };
  const addTags = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  };

  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Press enter to add your Hobbies"
        onKeyUp={addTags}
      />
      <TagContainer>
        {tags.map((tag, value) => (
          <Option key={value} onClick={() => deleteTags(value)}>
            {tag}
            <CloseIcon />
          </Option>
        ))}
      </TagContainer>
    </InputWrapper>
  );
}
export default MultiSelectInput;
