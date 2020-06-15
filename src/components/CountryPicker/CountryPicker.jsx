import React, { Component, useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { countries } from "../../api";

const CountryPicker = () => {
  const [fetchCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries);
    };
    fetchCountries();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.countries}>
      <NativeSelect>
        <option value="global"> Global</option>
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
