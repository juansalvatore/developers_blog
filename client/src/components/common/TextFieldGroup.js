import React from 'react'
import { TextField, FormHelperText } from '@material-ui/core/'

import PropTypes from 'prop-types'

const TextFieldGroup = ({
  name,
  label,
  value,
  type,
  onChange,
  error,
  disabled,
}) => {
  return (
    <div>
      <TextField
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        error={error ? true : false}
        disabled={disabled ? true : false}
      />
      <FormHelperText error={true}>{error}</FormHelperText>
    </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,,
  value: PropTypes.string.isRequired,,
  type: PropTypes.string.isRequired,,
  onChange: PropTypes.func.isRequired,,
  error: PropTypes.string,
  disabled: PropTypes.bool,,
}

export default TextFieldGroup
