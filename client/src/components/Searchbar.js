import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-item: left;
  border: none;
  outline: none;
  margin: 1rem 0;
`;

const InputWrapper = styled.div`
  display: flex;
  background-color: white;
  border: none;
  border-radius: 20px;
  outline: none;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 16%);
  jusitfy-content: center;
  align-content: center;
`;

const SearchInput = styled.input`
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-left: 1rem;
  min-width: 270px;
  font-size: 1rem;
  outline: none;
  flex: 1;
  &:placeholder {
    color: #9eaebc;
  }
`;

const SearchSubmit = styled.button`
  display: flex;
  border: 1px solid #8645ff;
  background-color: #8645ff;
  align-self: flex-end;
  border-radius: 0 20px 20px 0;
  outline: none;
  padding: 1rem;
  &:active {
    transform: translateY(0px) scale(0.95);
  }
`;

const SeachResultContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-item: left;
  padding: 0 20px 0;
  outline: none;
`;

function Searchbar({
  searchInput,
  onChange,
  placeholder,
  src,
  onClick,
  searchResults,
}) {
  return (
    <Container>
      <InputWrapper>
        <SearchInput
          type="search"
          value={searchInput}
          placeholder={placeholder}
          onChange={onChange}
        />

        <SearchSubmit onClick={onClick}>
          <img src={src} />
        </SearchSubmit>
      </InputWrapper>
      <SeachResultContainer>
        {searchResults.map((searchResult) => (
          <div key={searchResult}>{searchResult}</div>
        ))}
      </SeachResultContainer>
    </Container>
  );
}

Searchbar.propTypes = {
  searchInput: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  src: PropTypes.any,
  onClick: PropTypes.func,
  searchResults: PropTypes.array,
};

export default Searchbar;
