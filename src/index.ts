import * as Api from './api';

/**
 * 获取歌曲详情
 */
export async function getSongDetail(vendor: Api.Vendors, id: number | string) {
  try {
    let req = await Api.getSongDetail(vendor, id).catch(() => {
      return null;
    });
    if (req.status && req.data) return req.data;
    return null;
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}

/**
 * 批量获取任意歌曲详情
 */
export async function getBSongDetail(arr: Api.BSongArrayOpt[]) {
  try {
    let req = await Api.getAnyVendorSongDetail(arr).catch(() => {
      return null;
    });
    if (req.status && req.data) return req.data;
    return null;
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}

/**
 * 获取歌曲播放链接
 */
export async function getSongUrl(vendor: Api.Vendors, id: number | string, br: number = 192) {
  try {
    let req = await Api.getSongUrl(vendor, id, br).catch(() => {
      return null;
    });
    if (req.status && req.data.url) return req.data;
    return null;
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}

/**
 * 获取歌曲歌词
 */
export async function getLyric(vendor: Api.Vendors, id: number | string) {
  try {
    let req = await Api.getLyric(vendor, id).catch(() => {
      return null;
    });
    if (req.status && req.data) return req.data;
    return null;
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}

/**
 * 搜索
 * @param keyword 关键字
 * @param limit 条数
 * @param offset 页码
 */
export async function searchSong(keyword: string, offset: number = 0, limit: number = 5) {
  try {
    let gets = [
      Api.provider.netease.searchSong({ keyword, limit, offset: offset * limit, type: 1 }),
      Api.provider.qq.searchSong({ keyword, limit, offset })
    ];
    let req = await Promise.all(gets);
    let status = false;
    let neteaseTotal = 0,
      qqTotal = 0;
    let songs = [];
    if (req[0].status) {
      status = true;
      neteaseTotal = req[0].data.total;
      songs.push(...req[0].data.songs);
    }
    if (req[1].status) {
      status = true;
      qqTotal = req[1].data.total;
      songs.push(...req[1].data.songs);
    }
    return {
      status,
      data: {
        songs,
        neteaseTotal,
        qqTotal
      }
    };
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}

/**
 * 搜索歌单
 */
export async function searchSheet(keyword: string, offset: number = 0, limit: number = 5) {
  try {
    let gets = [
      Api.provider.netease.searchSong({ keyword, limit, offset: offset * limit, type: 1000 }),
      Api.provider.qq.searchSong({ keyword, limit, offset, remoteplace: 'txt.yqq.playlist' })
    ];
    let req = await Promise.all(gets);
    let status = false;
    let neteaseTotal = 0,
      qqTotal = 0;
    let sheets = [];
    if (req[0].status) {
      status = true;
      neteaseTotal = req[0].data.total;
      sheets.push(...req[0].data.sheets);
    }
    if (req[1].status) {
      status = true;
      qqTotal = req[1].data.total;
      sheets.push(...req[1].data.sheets);
    }
    return {
      status,
      data: {
        sheets,
        neteaseTotal,
        qqTotal
      }
    };
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}

/**
 * 搜索专辑
 */
export async function searchAlbum(keyword: string, offset: number = 0, limit: number = 5) {
  try {
    let gets = [
      Api.provider.netease.searchSong({ keyword, limit, offset, type: 10 }),
      Api.provider.qq.searchSong({ keyword, limit, offset, remoteplace: 'txt.yqq.album' })
    ];
    let req = await Promise.all(gets);
    let status = false;
    let neteaseTotal = 0,
      qqTotal = 0;
    let albums = [];
    if (req[0].status) {
      status = true;
      neteaseTotal = req[0].data.total;
      albums.push(...req[0].data.albums);
    }
    if (req[1].status) {
      status = true;
      qqTotal = req[1].data.total;
      albums.push(...req[1].data.songs);
    }
    return {
      status,
      data: {
        albums,
        neteaseTotal,
        qqTotal
      }
    };
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}

/**
 * 获取歌单详情
 */
export async function getPlaylistDetail(
  vendor: Api.Vendors,
  id: number | string,
  offset: number = 0,
  limit: number = 65535
) {
  try {
    return await Api.getPlaylistDetail(vendor, id, offset, limit);
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}

/**
 * 获取专辑详情
 */
export async function getAlbumDetail(vendor: Api.Vendors, id: number | string) {
  try {
    return await Api.getAlbumDetail(vendor, id);
  } catch (e) {
    console.error(e.toString());
    return null;
  }
}