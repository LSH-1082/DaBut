import React from 'react';
import styled from 'styled-components';
import { Range, getTrackBackground } from 'react-range';

const SelectRange = ({ min, max, step, values, onChange }) => {
    return (
        <Range
            draggableTrack
            step={step}
            min={min}
            max={max}
            values={values}
            onChange={onChange}
            renderTrack={({ props, children }) => (
                <StyledRangeTrack {...props} min={min} max={max} values={values}>
                    {children}
                </StyledRangeTrack>
            )}
            renderThumb={({ props }) => <StyledRangeThumb {...props} />}
        />
    );
};

const StyledRangeTrack = styled.div`
  position: relative;
  height: 5px;
  width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
  border-radius: 10px;
  background: ${props =>
    getTrackBackground({
        values: props.values,
        colors: ['#EB604A', '#AEAEAE'],
        min: props.min,
        max: props.max,
    })};
  align-self: center;
  cursor: default !important;
`;

const StyledRangeThumb = styled.div`
    display: flex;
    margin-top: 5px;
  position: absolute;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  box-shadow: rgba(157, 157, 157, 0.2) 0px 4px 10px 0px;
  border: 2px solid rgb(230, 230, 230);
  background-color: rgb(255, 255, 255);
  backface-visibility: hidden;
  outline: none;
  cursor: default !important;
`;

export default SelectRange;
