import Box from '@mui/material/Box'
const colorOptions = {
  width: "14px",
  height: "14px",
  marginRight: "4px",
  border: "1px solid #DDD",
  backgroundColor: "#F5B05F",
  borderRadius: "50%"

}

type Props = {}

const ColorOptions = (props: Props) => {
  return (
    <Box display="flex" marginTop="8px">
      <Box sx={colorOptions} />
      <Box sx={colorOptions} />
      <Box sx={colorOptions} />
      <Box sx={colorOptions} />
      <Box sx={colorOptions} />
    </Box>
  )
}

export default ColorOptions