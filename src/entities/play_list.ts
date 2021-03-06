import { VendorUser } from "./vendor_user";

export interface PlayListTag {
  readonly name: string;
}

export interface PlayList {
  readonly id: string;
  readonly name: string;
  readonly coverImageUrl: string;
  readonly description: string;
  readonly creator: VendorUser;
  readonly songsCount: number;
}

export function buildPlayList(playListData: any, creator: VendorUser): PlayList {
  return {
    id: playListData['id'].toString(),
    name: playListData['name'],
    coverImageUrl: playListData['coverImgUrl'],
    description: playListData['description'],
    creator,
    songsCount: playListData['trackCount']
  };
}

export interface PlayListDetail {
  readonly playList: PlayList;
  readonly createTime: Date;
  readonly updateTime: Date;
  readonly tags: Array<PlayListTag>;
  readonly trackIds: Array<string>;
}