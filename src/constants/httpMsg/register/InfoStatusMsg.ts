import { HttpRes } from '../_httpResTemplate';

export interface InfoData {
  uid: string;
  phone: string;
  email: string;
  roles: string[];
  name: string;
  avatar_url: string;
  gender: number;
  join_time: string;
  groups: string[];
  lark_union_id: string;
}

export type getInfoResponse = HttpRes<InfoData>;
