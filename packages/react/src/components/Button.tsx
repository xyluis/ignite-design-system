import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$ignite-500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite-300',
        },

        '&:disabled': {
          backgroundColor: '$gray-200',
        },
      },

      secondary: {
        color: '$ignite-300',
        border: '2px solid $ignite-500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite-500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray-200',
          borderColor: '$gray-200',
        },
      },

      tertiary: {
        color: '$gray-100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray-600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType
}

Button.displayName = 'Button'
