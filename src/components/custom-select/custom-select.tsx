import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {nanoid} from 'nanoid';
import {useState} from 'react';

interface CustomSelectProps {
  selectName: string;
  selectItems: string[];
}

function CustomSelect({selectName, selectItems}: CustomSelectProps): JSX.Element {
  // const [value, setValue] = useState('');

  const handleSelectChange = (evt: SelectChangeEvent<string>) => {
    const value = evt.target.value;
    console.log(value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 400 }} size="small">
      <InputLabel id="select-small-label">{selectName}</InputLabel>
      <Select
        labelId="select-small-label"
        id="select-small"
        label={selectName}
        onChange={handleSelectChange}
      >
        {
          selectItems.map((selectItem) => (
            <MenuItem key={nanoid()} value={selectItem}>{selectItem}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
