import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  argTypes: {
    children: {
      control: false,
    },
  },
  args: {
    children: <Text>This is just a simple box</Text>,
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
