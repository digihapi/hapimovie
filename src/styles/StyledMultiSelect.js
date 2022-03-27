import ReactSelect from "react-select";
import styled from "styled-components";

export const StyledMultiSelect = styled(ReactSelect)`
	.Select__multi-value__label {
		align-items: center;
		font-family: "Roboto", sans-serif;
		font-size: 28px;
	}

	.Select__input {
		display: inline-flex;
		font-family: "Roboto", sans-serif !important;
		font-size: 22px !important;
		color: #fff !important;
	}

	& .Select__placeholder {
		font-family: "Roboto", sans-serif;
		font-size: 22px;
	}

	.Select__control {
		min-height: 60px;
		width: 100%;
		border: 1px solid #a1a1a1;
		border-radius: 0;
		cursor: pointer;
		padding-left: 20px;
		background-color: #000 !important;
	}

	.Select__control:hover {
		border-color: #a1a1a1;
	}

	.Select__control--is-focused {
		box-shadow: 0 0 0 1px black;
		outline: none;
	}

	.Select__menu {
		color: #3c3d3e;
	}
`;
