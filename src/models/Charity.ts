import { ObjectId } from 'mongodb';
import * as _ from 'lodash';

import { processData } from '../utils/generic-helpers';
import { postData } from '../utils/charity-helpers';
import { CharityItem } from '../entities/CharityItem';
import { Nullable } from '../global'; /* eslint no-use-before-define: 0 */

export interface ICharity {
  readonly id: ObjectId;
  charityLegalName: string;
  charityWebsite: string;
  imageURL?: string;
  smallDescription: string | any;
  longDescription?: string | any;
  addressLine1: string;
  city?: string;
  postcode: number;
  state: string;
  country: string;
  cause?: string[];
  isActive: Nullable<boolean>;
  lastModified: Nullable<Date>;
  dateCreated: Nullable<Date>;
}

export interface IProp {
  key: string;
  value: any;
}

export interface ICharityItem extends ICharity {
  props: IProp[];
}
