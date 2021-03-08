export interface FeaturedPlaylistData {
    featuredPlaylists: PlaylistData;
}

export interface PlaylistData {
    name: string;
    content: PlaylistContent[];
}

export interface PlaylistContent {
    id: string;
    kind: string;
    name: string;
    url: string;
    curator_name: string;
    artwork: string;
}
