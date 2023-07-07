import { useCallback } from "react";
import ReactSlider from "react-slider";

const MySlider = (props) => {
  const { color, name, marks, setValue } = props;

  const sliderClass = `${color}-slider horizontal-slider`;
  const thumbClass = `${color}-thumb thumb`;
  const trackClass = `track ${color}-track`;

  const handleChange = useCallback((value) => {
    setValue(value);
  });

  return (
    <>
      <h2>{name}</h2>
      <ReactSlider
        className={sliderClass}
        thumbClassName={thumbClass}
        trackClassName={trackClass}
        renderThumb={(props, state) => {
          let displayed = "";
          marks.values.forEach((value, index) => {
            if (state.valueNow >= value) {
              displayed = marks.labels[index];
            }
          });

          return <div {...props}>{displayed}</div>;
        }}
        marks={marks.values}
        markClassName="customSlider-mark"
        onAfterChange={handleChange}
      />
    </>
  );
};

export default MySlider;
