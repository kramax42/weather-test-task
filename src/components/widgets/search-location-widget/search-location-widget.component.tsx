import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import { locationApi } from '@/api/location.api';
import { INPUT_DEBOUNCE_DURATION_MS } from '@/constants/search-loaction.config';
import { useDebounce, useOnClickOutside } from '@/hooks';
import { updateLocation } from '@/store/sagas/location/location.action';
import { locationSelector } from '@/store/selectors';
import { Location } from '@/types/common';

import {
  Container,
  Input,
  NotFound,
  SearchButton,
  SearchIcon,
  SuggestedLocations,
  SuggestedLocationsNotFound,
} from './search-location-widget.styled';
import { SuggestedLocation } from './suggested-location';

export function SearchLocationWidget() {
  const dispatch = useDispatch();
  const { city } = useSelector(locationSelector);

  const [suggestedLocations, setSuggestedLocations] = useState<Location[]>([]);
  const [input, setInput] = useState<string>(city);
  const debouncedInput: string = useDebounce<string>(
    input,
    INPUT_DEBOUNCE_DURATION_MS,
  );
  const [isInputChangedOnce, setIsInputChangedOnce] = useState<boolean>(false);

  const containerRef = useRef(null);

  const handleClickOutside = () => {
    setSuggestedLocations([]);
  };

  useOnClickOutside(containerRef, handleClickOutside);

  const onChangeCityInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);

    if (!isInputChangedOnce) {
      setIsInputChangedOnce(true);
    }
  };

  useEffect(() => {
    if (debouncedInput) {
      (async () => {
        const locations = await locationApi.getSuggestedLocations(
          debouncedInput,
        );
        setSuggestedLocations(locations);
      })();
    } else {
      setSuggestedLocations([]);
    }
  }, [debouncedInput]);

  const onClickSuggestedLocation =
    ({ longitude, latitude }: Location) =>
    () => {
      dispatch(
        updateLocation({
          longitude,
          latitude,
        }),
      );

      setSuggestedLocations([]);
      setInput('');
    };

  const onClickSearchButton = () => {
    if (suggestedLocations[0]) {
      const { longitude, latitude } = suggestedLocations[0];

      dispatch(
        updateLocation({
          longitude,
          latitude,
        }),
      );

      setSuggestedLocations([]);
      setInput('');
    }
  };

  const onKeyDownEnter = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      onClickSearchButton();
    }
  };

  const isLocationsFound = () => suggestedLocations.length;
  const isLocationsNotFound = () => input && !suggestedLocations.length;

  return (
    <Container ref={containerRef}>
      <SearchIcon />
      <Input
        data-test="search-location-input"
        placeholder="Enter the city"
        value={input}
        onChange={onChangeCityInput}
        onKeyDown={onKeyDownEnter}
      />

      {isLocationsFound() && isInputChangedOnce && (
        <SuggestedLocations>
          {suggestedLocations.map((suggestedLocation) => (
            <SuggestedLocation
              key={uniqid()}
              location={suggestedLocation}
              onClick={onClickSuggestedLocation(suggestedLocation)}
            />
          ))}
        </SuggestedLocations>
      )}

      {isLocationsNotFound() && isInputChangedOnce && (
        <SuggestedLocationsNotFound>
          <NotFound>Location not found</NotFound>
        </SuggestedLocationsNotFound>
      )}

      <SearchButton type="submit" onClick={onClickSearchButton}>
        Search
      </SearchButton>
    </Container>
  );
}
