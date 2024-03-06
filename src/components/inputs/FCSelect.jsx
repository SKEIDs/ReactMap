// @ts-check
import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Select from '@mui/material/Select'

/** @type {import('@mui/material').SxProps} */
const SX = { margin: '3px 0' }

/**
 * @param {import('@mui/material').SelectProps & { variant?: import('@mui/material').FormControlProps['variant'], fcSx?: import('@mui/material').SxProps }} props
 * @returns
 */
export function FCSelect({
  children,
  value,
  label,
  size = 'small',
  fcSx = SX,
  fullWidth = true,
  ...props
}) {
  return (
    <FormControl size={size} fullWidth={fullWidth} sx={fcSx}>
      <InputLabel>{label}</InputLabel>
      <Select
        autoFocus
        value={value || ''}
        fullWidth={fullWidth}
        label={label}
        size={size}
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  )
}

/**
 * @param {{
 *  icon?: React.ReactNode
 *  variant?: import('@mui/material').FormControlProps['variant']
 * } & import('@mui/material').SelectProps} props
 * @returns
 */
export function FCSelectListItem({ icon, ...props }) {
  return (
    <ListItem dense>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <FCSelect {...props} />
    </ListItem>
  )
}
