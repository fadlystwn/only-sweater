import Box from '@mui/material/Box'
const colorOptions = {
  width: "14px",
  height: "14px",
  marginRight: "4px",
  border: "1px solid #DDD",
  borderRadius: "50%",
  cursor: 'pointer'

}

type Props = {
  colors: string[],
  handleClick: (color: string) => void
}

const ColorOptions = (props: Props) => {

  return (
    <Box display="flex" marginTop="8px">
      {props.colors.map((color: string) => {
        return (
          <Box
            style={{ backgroundColor: color }}
            sx={colorOptions}
            onClick={() => props.handleClick(color)}
          />)
      })}
    </Box>
  )
}

export default ColorOptions