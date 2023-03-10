import React from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';

type Skill = {
  id: number,
  label: string
};

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React'];

const skillsOption = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoCompletePage = () => {
  const [value, setValue] = React.useState<string | null>(null);
  const [skill, setSkill] = React.useState<Skill | null>(null);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOption}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>

  );
};
export default MuiAutoCompletePage;
