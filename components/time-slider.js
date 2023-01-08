import {
  Flex,
  Text,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb
} from '@chakra-ui/react'

export default function TimeSlider({ name, defaultValue, callback }) {
  let sliderValue = defaultValue
  const minValue = 1
  const maxValue = 15
  const onChange = v => {
    sliderValue = v
    callback(v)
  }
  return (
    <Flex
      key={name}
      py={5}
      px={20}
      mx={10}
      flexDir="column"
      borderWidth="2px"
      borderRadius="5px"
      borderColor="#14141E"
      bgColor="#36363F"
      wrap="wrap"
    >
      <Text mb={10} fontSize="xl" fontWeight="light">
        {name}
      </Text>
      <Slider
        value={defaultValue}
        min={minValue}
        max={maxValue}
        colorScheme="red"
        onChange={v => onChange(v)}
      >
        <SliderMark value={1} mt={2} fontSize="sm">
          1
        </SliderMark>
        <SliderMark value={3} mt={2} fontSize="sm">
          3
        </SliderMark>
        <SliderMark value={5} mt={2} fontSize="sm">
          5
        </SliderMark>
        <SliderMark value={7} mt={2} fontSize="sm">
          7
        </SliderMark>
        <SliderMark value={9} mt={2} fontSize="sm">
          9
        </SliderMark>
        <SliderMark value={11} mt={2} fontSize="sm">
          11
        </SliderMark>
        <SliderMark value={13} mt={2} fontSize="sm">
          13
        </SliderMark>
        <SliderMark value={15} mt={2} fontSize="sm">
          15
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="red.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text mt={10} fontSize="xl" fontWeight="light">
        Límite de {sliderValue} días.
      </Text>
    </Flex>
  )
}
