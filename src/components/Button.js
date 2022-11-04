import React from 'react'
import { StyledButton } from './ButtonStyles'

export const Button = (props, {className}) => {
    
    const { label, disabled = false, onClick } = props //destructured props

    let icon = '';

    if (label == 'View') {
        //icon = 'fa-solid fa-up-right-and-down-left-from-center';
        icon = 'fa-solid fa-chevron-down';
    } else if (label == 'Collapse') {
        //icon = 'fa-solid fa-up-right-and-down-left-from-center';
        icon = 'fa-solid fa-chevron-left';
    } else if (label == 'Edit') {
        icon = 'fa-solid fa-pencil';
    } else if (label == 'New') {
        icon = 'fa-solid fa-plus';
    } else if (label == 'Save') {
        icon = 'fa-regular fa-floppy-disk';
    } else if (label == 'Add' || label == 'Add Note') {
        icon = 'fa-solid fa-plus';
    } else if (label == 'Cancel') {
        icon = 'fa-solid fa-xmark';
    } else if (label == 'Delete') {
        icon = 'fa-solid fa-trash-can';
    } else if (label == 'Confirm') {
        icon = 'fa-solid fa-check';
    } else if (label == 'Submit') {
        icon = 'fa-solid fa-check';
    }

  return (
    <StyledButton className={className} onClick={onClick} disabled={disabled}>
            <i class={icon}></i>&nbsp;
            {label}
    </StyledButton>
  )
}
