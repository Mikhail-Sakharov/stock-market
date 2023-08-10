import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import {nanoid} from 'nanoid';
import {CollectionType} from '../../types/colletion-type.enum';

interface CustomSelectProps {
  selectLabel: string;
  selectItems: string[];
  setValue: (state: CollectionType) => void;
}

function CustomSelect({selectLabel, selectItems, setValue}: CustomSelectProps): JSX.Element {
  const handleSelectChange = (evt: SelectChangeEvent<string>) => {
    const value = evt.target.value as CollectionType;
    setValue(value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 400 }} size="small">
      <InputLabel id="select-small-label">{selectLabel}</InputLabel>
      <Select
        labelId="select-small-label"
        id="select-small"
        label={selectLabel}
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
