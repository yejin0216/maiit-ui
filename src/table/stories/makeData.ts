import namor from 'namor';

export interface IPersonData {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: string;
}

const newPerson = (): IPersonData => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single',
  };
};

const makeData = (lens: number): IPersonData[] => {
  const range = Array.from({ length: lens }, i => i);
  return range.map(d => {
    return {
      ...newPerson(),
    };
  });
};

export default makeData;
