import styled from "styled-components";

export const StyledSearchBar = styled.div`
	width: 100%;
	min-height: 60px;
	background: #000;
	box-sizing: border-box;
	color: #fff;
	animation: animateBar 1s;
	align-items: center;
	margin-top: 70px;

	@keyframes animateBar {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const StyledSearchBarContent = styled.div`
  width: 100%;
  height: 55px;
  background: transparent
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: #fff;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #fff;
    z-index: 800;
  }

  .fa-times {
    position: absolute;
    right: 20px;
    top: 12px;
    color: #fff;
    z-index: 800;
    cursor: pointer;
  }

  input {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    position: absolute;
    border-bottom:1px solid #000;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;
    box-sizing: border-box;

    :focus {
      outline: none;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #888;
      opacity: 1; /* Firefox */
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: #fff;
    }
    
    ::-ms-input-placeholder { /* Microsoft Edge */
      color: #fff;
    }
  }
`;
