export interface IEntryView {
  startDateTime: Date;
  stopDateTime: Date;
  recordType: string;
  location: string;
  basicDescription: string;
  detailedDescription: string;
  levelState: string;
  onIce: string;
  totalTimeMinutes: number;
}

export interface ILogEntry {
  entryId: number;
  createdDateTime: Date;
  startDateTime: Date;
  stopDateTime: Date;
  recordTypeId: number;
  locationId: number;
  basicDescription: string;
  detailedDescription: string;
  levelStateId: number;
  isOnIce: boolean;
  totalTimeMinutes: number;
}

export interface IAddLogEntry
{
  startDateTime: Date;
  stopDateTime: Date;
  recordTypeId: number;
  locationId: number;
  basicDescription: string;
  detailedDescription: string;
  isOnIce: boolean;
}

export interface ILocation {
  id: number;
  description: string;
}

export interface IRecordType {
  id: number;
  description: string;
}

export interface ILevelState {
  id: number;
  date: Date;
  freestyleLevel: string;
  danceLevel: string;
  pairsLevel: string;
}

export interface IListContainer {
 levelStates: ILevelState[];
 recordTypes: IRecordType[];
 locations: ILocation[];
}

export interface IUserRegistrationDto
{
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserLoginDto
{
  username: string;
  password: string;
}
