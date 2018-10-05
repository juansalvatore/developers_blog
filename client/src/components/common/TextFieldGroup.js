import React from 'react'
import { TextField, FormHelperText } from '@material-ui/core/'
import styled from 'styled-components'

import PropTypes from 'prop-types'

const TextFieldGroup = ({
  name,
  label,
  value,
  type,
  onChange,
  error,
  disabled,
  info,
}) => {
  return (
    <Wrapper>
      <TextField
        name={name}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        error={error ? true : false}
        disabled={disabled ? true : false}
      />
      <FormHelperText
        style={{ marginTop: '5px', position: 'relative' }}
        error={error ? true : false}
      >
        {error ? error : info}
      </FormHelperText>
    </Wrapper>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  disabled: PropTypes.bool,
}

TextFieldGroup.defaultProps = {
  type: 'text',
}

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
`

export default TextFieldGroup
