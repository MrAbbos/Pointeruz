import React from "react";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "transparent",
    borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
    borderColor: state.isFocused ? "#21bca0" : "#fff",
    padding: "4px",
    boxShadow: state.isFocused ? null : null,
    "&:hover": {
      borderColor: state.isFocused ? "#21bca0" : "#fff",
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
};

const MySelect = (props) => {
  if (props.allowSelectAll) {
    return (
      <ReactSelect
        styles={customStyles}
        placeholder={props.placeholder}
        {...props}
        options={[props.allOption, ...props.options]}
        onChange={(selected) => {
          if (
            selected !== null &&
            selected.length > 0 &&
            selected[selected.length - 1].value === props.allOption.value
          ) {
            return props.onChange(props.options);
          }
          return props.onChange(selected);
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          backgroundColor: "#000",
          colors: {
            ...theme.colors,
            // primary25: "#000",
            primary: "#21bca0",
          },
        })}
      />
    );
  }

  return <ReactSelect {...props} />;
};

MySelect.propTypes = {
  options: PropTypes.array,
  value: PropTypes.any,
  onChange: PropTypes.func,
  allowSelectAll: PropTypes.bool,
  allOption: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

MySelect.defaultProps = {
  allOption: {
    label: "Select all",
    value: "*",
  },
};

export default MySelect;
