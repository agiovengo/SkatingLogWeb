export interface IEntryView {
  basicDescription: string;
  classification: IClassification;
  danceLevel: number;
  detailedDescription: string;
  entryDateTime: Date;
  entryId: number;
  freestyleLevel: number;
  location: ILocation;
  startDateTime: Date;
  stopDateTime: Date;
  subclass: ISubclass;
  totalTimeMinutes: number;
}

export interface IEntry {
  basicDescription: string;
  classificationId: number;
  danceLevel: number;
  detailedDescription: string;
  entryDateTime: Date;
  entryId: number;
  freestyleLevel: number;
  locationId: number;
  startDateTime: Date;
  stopDateTime: Date;
  subclassId: number;
  totalTimeMinutes: number;
}

export interface IClassification {
  id: number;
  description: string;
}

export interface ILocation {
  id: number;
  description: string;
}

export interface ISubclass {
  id: number;
  description: string;
}
