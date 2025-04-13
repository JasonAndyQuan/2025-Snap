const data = { 
  // This data was fetched thru Spotify API 
  // (https://developer.spotify.com/documentation/web-api/)
  albums: [
    {
      album_type: "album",
      total_tracks: 14,
      external_urls: {
        spotify: "https://open.spotify.com/album/03guxdOi12XJbnvxvxbpwG",
      },
      href: "https://api.spotify.com/v1/albums/03guxdOi12XJbnvxvxbpwG?locale=en-US%2Cen%3Bq%3D0.9",
      id: "03guxdOi12XJbnvxvxbpwG",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2734d070fdf58fad8c54c5beb85",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e024d070fdf58fad8c54c5beb85",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048514d070fdf58fad8c54c5beb85",
          height: 64,
          width: 64,
        },
      ],
      name: "Submarine",
      release_date: "2024-05-31",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:03guxdOi12XJbnvxvxbpwG",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
          },
          href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
          id: "2sSGPbdZJkaSE2AbcGOACx",
          name: "The Marías",
          type: "artist",
          debut: "2016",
          members : ["Maria Zardoya", "Josh Conway", "Jesse Perlman, Edward james"],
          uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/03guxdOi12XJbnvxvxbpwG/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 14,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 81000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3zJakbnIw0ufiVnIFkLfA1",
            },
            href: "https://api.spotify.com/v1/tracks/3zJakbnIw0ufiVnIFkLfA1",
            id: "3zJakbnIw0ufiVnIFkLfA1",
            name: "Ride",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:3zJakbnIw0ufiVnIFkLfA1",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 188400,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1jlBePA3tcycCoANSSZbgj",
            },
            href: "https://api.spotify.com/v1/tracks/1jlBePA3tcycCoANSSZbgj",
            id: "1jlBePA3tcycCoANSSZbgj",
            name: "Hamptons",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:1jlBePA3tcycCoANSSZbgj",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 209426,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3SH1vOTwgg5Ma1NhHaXvrA",
            },
            href: "https://api.spotify.com/v1/tracks/3SH1vOTwgg5Ma1NhHaXvrA",
            id: "3SH1vOTwgg5Ma1NhHaXvrA",
            name: "Echo",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:3SH1vOTwgg5Ma1NhHaXvrA",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 160000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/19fKJrO9XdOf6Xla2QHecO",
            },
            href: "https://api.spotify.com/v1/tracks/19fKJrO9XdOf6Xla2QHecO",
            id: "19fKJrO9XdOf6Xla2QHecO",
            name: "Run Your Mouth",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:19fKJrO9XdOf6Xla2QHecO",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 206973,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3HVRZxCp3BWYuYe8L8BMNH",
            },
            href: "https://api.spotify.com/v1/tracks/3HVRZxCp3BWYuYe8L8BMNH",
            id: "3HVRZxCp3BWYuYe8L8BMNH",
            name: "Real Life",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3HVRZxCp3BWYuYe8L8BMNH",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 225106,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4yj9o2kdVcZfT57IALrsZA",
            },
            href: "https://api.spotify.com/v1/tracks/4yj9o2kdVcZfT57IALrsZA",
            id: "4yj9o2kdVcZfT57IALrsZA",
            name: "Blur",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:4yj9o2kdVcZfT57IALrsZA",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 231786,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4gtIYSYu8u2ItBqrhCaChL",
            },
            href: "https://api.spotify.com/v1/tracks/4gtIYSYu8u2ItBqrhCaChL",
            id: "4gtIYSYu8u2ItBqrhCaChL",
            name: "Paranoia",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:4gtIYSYu8u2ItBqrhCaChL",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 179520,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0phzfJn8NeT1LkbqfV2peI",
            },
            href: "https://api.spotify.com/v1/tracks/0phzfJn8NeT1LkbqfV2peI",
            id: "0phzfJn8NeT1LkbqfV2peI",
            name: "Lejos de Ti",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:0phzfJn8NeT1LkbqfV2peI",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 237133,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3vxvz0JoRDvnx2jG9oPljA",
            },
            href: "https://api.spotify.com/v1/tracks/3vxvz0JoRDvnx2jG9oPljA",
            id: "3vxvz0JoRDvnx2jG9oPljA",
            name: "Love You Anyway",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:3vxvz0JoRDvnx2jG9oPljA",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 181546,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3L0JDlycMhSA7R0M0OfNIY",
            },
            href: "https://api.spotify.com/v1/tracks/3L0JDlycMhSA7R0M0OfNIY",
            id: "3L0JDlycMhSA7R0M0OfNIY",
            name: "Ay No Puedo",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:3L0JDlycMhSA7R0M0OfNIY",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 236906,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3siwsiaEoU4Kuuc9WKMUy5",
            },
            href: "https://api.spotify.com/v1/tracks/3siwsiaEoU4Kuuc9WKMUy5",
            id: "3siwsiaEoU4Kuuc9WKMUy5",
            name: "No One Noticed",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:3siwsiaEoU4Kuuc9WKMUy5",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 194160,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1N2NENvgrnemh4AuV2hawv",
            },
            href: "https://api.spotify.com/v1/tracks/1N2NENvgrnemh4AuV2hawv",
            id: "1N2NENvgrnemh4AuV2hawv",
            name: "Vicious Sensitive Robot",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:1N2NENvgrnemh4AuV2hawv",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 156240,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7eQ0SV1eQXSZHBA1x4mcYu",
            },
            href: "https://api.spotify.com/v1/tracks/7eQ0SV1eQXSZHBA1x4mcYu",
            id: "7eQ0SV1eQXSZHBA1x4mcYu",
            name: "If Only",
            preview_url: null,
            track_number: 13,
            type: "track",
            uri: "spotify:track:7eQ0SV1eQXSZHBA1x4mcYu",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],

            disc_number: 1,
            duration_ms: 224840,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0InIeZW4P6VO7dUGRM4AKH",
            },
            href: "https://api.spotify.com/v1/tracks/0InIeZW4P6VO7dUGRM4AKH",
            id: "0InIeZW4P6VO7dUGRM4AKH",
            name: "Sienna",
            preview_url: null,
            track_number: 14,
            type: "track",
            uri: "spotify:track:0InIeZW4P6VO7dUGRM4AKH",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2024 Nice Life Recording Company and Atlantic Recording Corporation",
          type: "C",
        },
        {
          text: "℗ 2024 Nice Life Recording Company and Atlantic Recording Corporation",
          type: "P",
        },
      ],
      external_ids: {
        upc: "075679659644",
      },
      genres: ["rnb", "indie"],
      label: "Nice Life/Atlantic",
      popularity: 85,
    },
    {
      album_type: "album",
      total_tracks: 13,
      external_urls: {
        spotify: "https://open.spotify.com/album/5TkaDC4mYSLBvdG6UrIB0v",
      },
      href: "https://api.spotify.com/v1/albums/5TkaDC4mYSLBvdG6UrIB0v?locale=en-US%2Cen%3Bq%3D0.9",
      id: "5TkaDC4mYSLBvdG6UrIB0v",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273ec93734d42345154b422c8d5",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ec93734d42345154b422c8d5",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851ec93734d42345154b422c8d5",
          height: 64,
          width: 64,
        },
      ],
      name: "CINEMA",
      release_date: "2021-06-25",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:5TkaDC4mYSLBvdG6UrIB0v",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
          },
          href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
          id: "2sSGPbdZJkaSE2AbcGOACx",
          name: "The Marías",
          type: "artist",
          debut: "2016",
          members : ["Maria Zardoya", "Josh Conway", "Jesse Perlman, Edward james"],
          uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/5TkaDC4mYSLBvdG6UrIB0v/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 13,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 82493,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0ZjTXCk5QKDR0wGGPgqSS3",
            },
            href: "https://api.spotify.com/v1/tracks/0ZjTXCk5QKDR0wGGPgqSS3",
            id: "0ZjTXCk5QKDR0wGGPgqSS3",
            name: "Just a Feeling",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:0ZjTXCk5QKDR0wGGPgqSS3",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 199906,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5WVWQQpBJqljbZtxo19CxS",
            },
            href: "https://api.spotify.com/v1/tracks/5WVWQQpBJqljbZtxo19CxS",
            id: "5WVWQQpBJqljbZtxo19CxS",
            name: "Calling U Back",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:5WVWQQpBJqljbZtxo19CxS",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 181893,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4zXZ5Mq2L6jnsOsTssgRh8",
            },
            href: "https://api.spotify.com/v1/tracks/4zXZ5Mq2L6jnsOsTssgRh8",
            id: "4zXZ5Mq2L6jnsOsTssgRh8",
            name: "Hush",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:4zXZ5Mq2L6jnsOsTssgRh8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 191800,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/410rGaFDJPwjsr9m9RPCkz",
            },
            href: "https://api.spotify.com/v1/tracks/410rGaFDJPwjsr9m9RPCkz",
            id: "410rGaFDJPwjsr9m9RPCkz",
            name: "All I Really Want Is You",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:410rGaFDJPwjsr9m9RPCkz",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 33160,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1HJxrABnErE3PIfil5NqIJ",
            },
            href: "https://api.spotify.com/v1/tracks/1HJxrABnErE3PIfil5NqIJ",
            id: "1HJxrABnErE3PIfil5NqIJ",
            name: "Hable con Ella",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:1HJxrABnErE3PIfil5NqIJ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 178493,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3EzlgdxyFvjeAGzR5WxHB8",
            },
            href: "https://api.spotify.com/v1/tracks/3EzlgdxyFvjeAGzR5WxHB8",
            id: "3EzlgdxyFvjeAGzR5WxHB8",
            name: "Little by Little",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:3EzlgdxyFvjeAGzR5WxHB8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 253213,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1ShRHPAiiIrh0arZbSFmx1",
            },
            href: "https://api.spotify.com/v1/tracks/1ShRHPAiiIrh0arZbSFmx1",
            id: "1ShRHPAiiIrh0arZbSFmx1",
            name: "Heavy",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:1ShRHPAiiIrh0arZbSFmx1",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 167386,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5dFG12OQz10CbUFZIYH0gv",
            },
            href: "https://api.spotify.com/v1/tracks/5dFG12OQz10CbUFZIYH0gv",
            id: "5dFG12OQz10CbUFZIYH0gv",
            name: "Un Millón",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:5dFG12OQz10CbUFZIYH0gv",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 146973,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3WOZcIibmurJult4Z7Wfce",
            },
            href: "https://api.spotify.com/v1/tracks/3WOZcIibmurJult4Z7Wfce",
            id: "3WOZcIibmurJult4Z7Wfce",
            name: "Spin Me Around",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:3WOZcIibmurJult4Z7Wfce",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 248693,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3Mqx9OWTEhBEeOEuUDklei",
            },
            href: "https://api.spotify.com/v1/tracks/3Mqx9OWTEhBEeOEuUDklei",
            id: "3Mqx9OWTEhBEeOEuUDklei",
            name: "The Mice Inside This Room",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:3Mqx9OWTEhBEeOEuUDklei",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 202920,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/76vbQVnCEHe02OP4EWvApz",
            },
            href: "https://api.spotify.com/v1/tracks/76vbQVnCEHe02OP4EWvApz",
            id: "76vbQVnCEHe02OP4EWvApz",
            name: "To Say Hello",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:76vbQVnCEHe02OP4EWvApz",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 177013,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4raL05JS5aNmXwClc2ATA8",
            },
            href: "https://api.spotify.com/v1/tracks/4raL05JS5aNmXwClc2ATA8",
            id: "4raL05JS5aNmXwClc2ATA8",
            name: "Fog as a Bullet",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:4raL05JS5aNmXwClc2ATA8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 326760,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0ZpgDIYEJ7H2g8zkIEDQJz",
            },
            href: "https://api.spotify.com/v1/tracks/0ZpgDIYEJ7H2g8zkIEDQJz",
            id: "0ZpgDIYEJ7H2g8zkIEDQJz",
            name: "Talk to Her",
            preview_url: null,
            track_number: 13,
            type: "track",
            uri: "spotify:track:0ZpgDIYEJ7H2g8zkIEDQJz",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2021 Nice Life Recording Company and Atlantic Recording Corporation",
          type: "C",
        },
        {
          text: "℗ 2021 Nice Life Recording Company and Atlantic Recording Corporation",
          type: "P",
        },
      ],
      external_ids: {
        upc: "075679792389",
      },
      genres: ["rnb", "indie"],
      label: "Nice Life/Atlantic",
      popularity: 76,
    },
    {
      album_type: "single",
      total_tracks: 4,
      external_urls: {
        spotify: "https://open.spotify.com/album/0EhZEM4RRz0yioTgucDhJq",
      },
      href: "https://api.spotify.com/v1/albums/0EhZEM4RRz0yioTgucDhJq?locale=en-US%2Cen%3Bq%3D0.9",
      id: "0EhZEM4RRz0yioTgucDhJq",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02b657fbb27b17e7bd4691c2b2",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851b657fbb27b17e7bd4691c2b2",
          height: 64,
          width: 64,
        },
      ],
      name: "How Sweet",
      release_date: "2024-05-24",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:0EhZEM4RRz0yioTgucDhJq",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
          },
          href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
          id: "6HvZYsbFfjnjFrWF950C9d",
          name: "NewJeans",
          type: "artist",
          debut: "2022",
          members : ["Hanni","Haerin","Minji","Hyein","Danielle"],
          uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/0EhZEM4RRz0yioTgucDhJq/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 4,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 219026,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/38tXZcL1gZRfbqfOG0VMTH",
            },
            href: "https://api.spotify.com/v1/tracks/38tXZcL1gZRfbqfOG0VMTH",
            id: "38tXZcL1gZRfbqfOG0VMTH",
            name: "How Sweet",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:38tXZcL1gZRfbqfOG0VMTH",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 200266,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/19D8LNpWwIPpi6hs9BG7dq",
            },
            href: "https://api.spotify.com/v1/tracks/19D8LNpWwIPpi6hs9BG7dq",
            id: "19D8LNpWwIPpi6hs9BG7dq",
            name: "Bubble Gum",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:19D8LNpWwIPpi6hs9BG7dq",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 219013,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/54tBIDmNdxGp04gPNWCCbi",
            },
            href: "https://api.spotify.com/v1/tracks/54tBIDmNdxGp04gPNWCCbi",
            id: "54tBIDmNdxGp04gPNWCCbi",
            name: "How Sweet (Instrumental)",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:54tBIDmNdxGp04gPNWCCbi",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 200266,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/54uNtM77iZ5gawWBQGnEar",
            },
            href: "https://api.spotify.com/v1/tracks/54uNtM77iZ5gawWBQGnEar",
            id: "54uNtM77iZ5gawWBQGnEar",
            name: "Bubble Gum (Instrumental)",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:54uNtM77iZ5gawWBQGnEar",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2024 ADOR Co., Ltd.",
          type: "C",
        },
        {
          text: "℗ 2024 ADOR Co., Ltd.",
          type: "P",
        },
      ],
      external_ids: {
        upc: "196922889738",
      },
      genres: ["kpop"],
      label: "ADOR",
      popularity: 70,
    },
    {
      album_type: "single",
      total_tracks: 2,
      external_urls: {
        spotify: "https://open.spotify.com/album/5V729UqvhwNOcMejx0m55I",
      },
      href: "https://api.spotify.com/v1/albums/5V729UqvhwNOcMejx0m55I?locale=en-US%2Cen%3Bq%3D0.9",
      id: "5V729UqvhwNOcMejx0m55I",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2733d98a0ae7c78a3a9babaf8af",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e023d98a0ae7c78a3a9babaf8af",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048513d98a0ae7c78a3a9babaf8af",
          height: 64,
          width: 64,
        },
      ],
      name: "NewJeans 'Super Shy'",
      release_date: "2023-07-07",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:5V729UqvhwNOcMejx0m55I",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
          },
          href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
          id: "6HvZYsbFfjnjFrWF950C9d",
          name: "NewJeans",
          type: "artist",
          debut: "2022",
          members : ["Hanni","Haerin","Minji","Hyein","Danielle"],
          uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/5V729UqvhwNOcMejx0m55I/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 2,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 108986,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6rdkCkjk6D12xRpdMXy0I2",
            },
            href: "https://api.spotify.com/v1/tracks/6rdkCkjk6D12xRpdMXy0I2",
            id: "6rdkCkjk6D12xRpdMXy0I2",
            name: "New Jeans",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:6rdkCkjk6D12xRpdMXy0I2",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 154666,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5sdQOyqq2IDhvmx2lHOpwd",
            },
            href: "https://api.spotify.com/v1/tracks/5sdQOyqq2IDhvmx2lHOpwd",
            id: "5sdQOyqq2IDhvmx2lHOpwd",
            name: "Super Shy",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:5sdQOyqq2IDhvmx2lHOpwd",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2023 ADOR Co., Ltd.",
          type: "C",
        },
        {
          text: "℗ 2023 ADOR Co., Ltd.",
          type: "P",
        },
      ],
      external_ids: {
        upc: "196922462702",
      },
      genres: ["kpop"],
      label: "ADOR",
      popularity: 73,
    },
    {
      album_type: "single",
      total_tracks: 4,
      external_urls: {
        spotify: "https://open.spotify.com/album/1HMLpmZAnNyl9pxvOnTovV",
      },
      href: "https://api.spotify.com/v1/albums/1HMLpmZAnNyl9pxvOnTovV?locale=en-US%2Cen%3Bq%3D0.9",
      id: "1HMLpmZAnNyl9pxvOnTovV",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2739d28fd01859073a3ae6ea209",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048519d28fd01859073a3ae6ea209",
          height: 64,
          width: 64,
        },
      ],
      name: "NewJeans 1st EP 'New Jeans'",
      release_date: "2022-08-01",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:1HMLpmZAnNyl9pxvOnTovV",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
          },
          href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
          id: "6HvZYsbFfjnjFrWF950C9d",
          name: "NewJeans",
          type: "artist",
          debut: "2022",
          members : ["Hanni","Haerin","Minji","Hyein","Danielle"],
          uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/1HMLpmZAnNyl9pxvOnTovV/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 4,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 180066,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2pIUpMhHL6L9Z5lnKxJJr9",
            },
            href: "https://api.spotify.com/v1/tracks/2pIUpMhHL6L9Z5lnKxJJr9",
            id: "2pIUpMhHL6L9Z5lnKxJJr9",
            name: "Attention",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:2pIUpMhHL6L9Z5lnKxJJr9",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 179026,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0a4MMyCrzT0En247IhqZbD",
            },
            href: "https://api.spotify.com/v1/tracks/0a4MMyCrzT0En247IhqZbD",
            id: "0a4MMyCrzT0En247IhqZbD",
            name: "Hype Boy",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:0a4MMyCrzT0En247IhqZbD",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 235562,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2DwUdMJ5uxv20EhAildreg",
            },
            href: "https://api.spotify.com/v1/tracks/2DwUdMJ5uxv20EhAildreg",
            id: "2DwUdMJ5uxv20EhAildreg",
            name: "Cookie",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:2DwUdMJ5uxv20EhAildreg",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d",
                },
                href: "https://api.spotify.com/v1/artists/6HvZYsbFfjnjFrWF950C9d",
                id: "6HvZYsbFfjnjFrWF950C9d",
                name: "NewJeans",
                type: "artist",
                uri: "spotify:artist:6HvZYsbFfjnjFrWF950C9d",
              },
            ],
            disc_number: 1,
            duration_ms: 177946,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5expoVGQPvXuwBBFuNGqBd",
            },
            href: "https://api.spotify.com/v1/tracks/5expoVGQPvXuwBBFuNGqBd",
            id: "5expoVGQPvXuwBBFuNGqBd",
            name: "Hurt",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:5expoVGQPvXuwBBFuNGqBd",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2022 ADOR Co., Ltd.",
          type: "C",
        },
        {
          text: "℗ 2022 ADOR Co., Ltd.",
          type: "P",
        },
      ],
      external_ids: {
        upc: "192641873096",
      },
      genres: ["kpop"],
      label: "ADOR",
      popularity: 74,
    },
    {
      album_type: "single",
      total_tracks: 6,
      external_urls: {
        spotify: "https://open.spotify.com/album/7vwi3kXdpkaRO3if4N2gBN",
      },
      href: "https://api.spotify.com/v1/albums/7vwi3kXdpkaRO3if4N2gBN?locale=en-US%2Cen%3Bq%3D0.9",
      id: "7vwi3kXdpkaRO3if4N2gBN",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273487f90022857e485ecc685eb",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02487f90022857e485ecc685eb",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851487f90022857e485ecc685eb",
          height: 64,
          width: 64,
        },
      ],
      name: "IVE EMPATHY",
      release_date: "2025-02-03",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:7vwi3kXdpkaRO3if4N2gBN",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
          },
          href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
          id: "6RHTUrRF63xao58xh9FXYJ",
          name: "IVE",
          type: "artist",
          debut: "2021",
          members : ["An Yujin", "Gaeul", "Rei", "Wonyoung", "Liz", "Leeseo"],
          uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/7vwi3kXdpkaRO3if4N2gBN/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 6,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 188266,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4qzV2qURSJBVV9d7BkMx4g",
            },
            href: "https://api.spotify.com/v1/tracks/4qzV2qURSJBVV9d7BkMx4g",
            id: "4qzV2qURSJBVV9d7BkMx4g",
            name: "REBEL HEART",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:4qzV2qURSJBVV9d7BkMx4g",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 189146,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/52fjXTCvI3aLFojY8GTO2u",
            },
            href: "https://api.spotify.com/v1/tracks/52fjXTCvI3aLFojY8GTO2u",
            id: "52fjXTCvI3aLFojY8GTO2u",
            name: "FLU",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:52fjXTCvI3aLFojY8GTO2u",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 174506,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/29Iuo8dqiWQAm1yUfLSBLJ",
            },
            href: "https://api.spotify.com/v1/tracks/29Iuo8dqiWQAm1yUfLSBLJ",
            id: "29Iuo8dqiWQAm1yUfLSBLJ",
            name: "You Wanna Cry",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:29Iuo8dqiWQAm1yUfLSBLJ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 191360,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5byscDL6SmZhKr8MbcoJcb",
            },
            href: "https://api.spotify.com/v1/tracks/5byscDL6SmZhKr8MbcoJcb",
            id: "5byscDL6SmZhKr8MbcoJcb",
            name: "Thank U",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:5byscDL6SmZhKr8MbcoJcb",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 194733,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/49oOgXKqm6xTavBtekzVHg",
            },
            href: "https://api.spotify.com/v1/tracks/49oOgXKqm6xTavBtekzVHg",
            id: "49oOgXKqm6xTavBtekzVHg",
            name: "ATTITUDE",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:49oOgXKqm6xTavBtekzVHg",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 186120,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7tNJeoUZeWrVOCfvpAHWT1",
            },
            href: "https://api.spotify.com/v1/tracks/7tNJeoUZeWrVOCfvpAHWT1",
            id: "7tNJeoUZeWrVOCfvpAHWT1",
            name: "TKO",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:7tNJeoUZeWrVOCfvpAHWT1",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2025 Starship Entertainment co.,ltd",
          type: "C",
        },
        {
          text: "(P) 2025 Starship Entertainment",
          type: "P",
        },
      ],
      external_ids: {
        upc: "199066115046",
      },
      genres: ["kpop"],
      label: "Starship Entertainment",
      popularity: 68,
    },
    {
      album_type: "album",
      total_tracks: 11,
      external_urls: {
        spotify: "https://open.spotify.com/album/38VzP4yWfHdHafITKKRHEB",
      },
      href: "https://api.spotify.com/v1/albums/38VzP4yWfHdHafITKKRHEB?locale=en-US%2Cen%3Bq%3D0.9",
      id: "38VzP4yWfHdHafITKKRHEB",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27325ef3cec1eceefd4db2f91c8",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0225ef3cec1eceefd4db2f91c8",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485125ef3cec1eceefd4db2f91c8",
          height: 64,
          width: 64,
        },
      ],
      name: "I've IVE",
      release_date: "2023-04-10",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:38VzP4yWfHdHafITKKRHEB",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
          },
          href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
          id: "6RHTUrRF63xao58xh9FXYJ",
          name: "IVE",
          type: "artist",
          debut: "2021",
          members : ["An Yujin", "Gaeul", "Rei", "Wonyoung", "Liz", "Leeseo"],
          uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/38VzP4yWfHdHafITKKRHEB/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 11,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 167546,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2avdbiswb0d5AFmyyz68xP",
            },
            href: "https://api.spotify.com/v1/tracks/2avdbiswb0d5AFmyyz68xP",
            id: "2avdbiswb0d5AFmyyz68xP",
            name: "Blue Blood",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:2avdbiswb0d5AFmyyz68xP",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 183853,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/70t7Q6AYG6ZgTYmJWcnkUM",
            },
            href: "https://api.spotify.com/v1/tracks/70t7Q6AYG6ZgTYmJWcnkUM",
            id: "70t7Q6AYG6ZgTYmJWcnkUM",
            name: "I AM",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:70t7Q6AYG6ZgTYmJWcnkUM",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 195440,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7foeH2Emgq8A3LWk3q6dat",
            },
            href: "https://api.spotify.com/v1/tracks/7foeH2Emgq8A3LWk3q6dat",
            id: "7foeH2Emgq8A3LWk3q6dat",
            name: "Kitsch",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:7foeH2Emgq8A3LWk3q6dat",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 181400,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0dRSOmb7pqkkmjXCu5BYbe",
            },
            href: "https://api.spotify.com/v1/tracks/0dRSOmb7pqkkmjXCu5BYbe",
            id: "0dRSOmb7pqkkmjXCu5BYbe",
            name: "Lips",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:0dRSOmb7pqkkmjXCu5BYbe",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 171466,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/171vXOYrexGMVNEMA5rs00",
            },
            href: "https://api.spotify.com/v1/tracks/171vXOYrexGMVNEMA5rs00",
            id: "171vXOYrexGMVNEMA5rs00",
            name: "Heroine",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:171vXOYrexGMVNEMA5rs00",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 190426,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2wsRZURBbDbaQUuVT9piu1",
            },
            href: "https://api.spotify.com/v1/tracks/2wsRZURBbDbaQUuVT9piu1",
            id: "2wsRZURBbDbaQUuVT9piu1",
            name: "Mine",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:2wsRZURBbDbaQUuVT9piu1",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 146893,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1tzeAVyGwvoHcVzDit0UeT",
            },
            href: "https://api.spotify.com/v1/tracks/1tzeAVyGwvoHcVzDit0UeT",
            id: "1tzeAVyGwvoHcVzDit0UeT",
            name: "섬찟 (Hypnosis)",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:1tzeAVyGwvoHcVzDit0UeT",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 202106,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/05aq7OhxdoLiUKOigmiqcj",
            },
            href: "https://api.spotify.com/v1/tracks/05aq7OhxdoLiUKOigmiqcj",
            id: "05aq7OhxdoLiUKOigmiqcj",
            name: "NOT YOUR GIRL",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:05aq7OhxdoLiUKOigmiqcj",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 199226,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5vYsQareJoW2jRJjiTFo6K",
            },
            href: "https://api.spotify.com/v1/tracks/5vYsQareJoW2jRJjiTFo6K",
            id: "5vYsQareJoW2jRJjiTFo6K",
            name: "궁금해 (Next Page)",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:5vYsQareJoW2jRJjiTFo6K",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 194680,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3cw6T3OEgqLiqEDLDQPSnE",
            },
            href: "https://api.spotify.com/v1/tracks/3cw6T3OEgqLiqEDLDQPSnE",
            id: "3cw6T3OEgqLiqEDLDQPSnE",
            name: "Cherish",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:3cw6T3OEgqLiqEDLDQPSnE",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],
            disc_number: 1,
            duration_ms: 224746,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3L7pilDxJhZz1fP6t4D9P9",
            },
            href: "https://api.spotify.com/v1/tracks/3L7pilDxJhZz1fP6t4D9P9",
            id: "3L7pilDxJhZz1fP6t4D9P9",
            name: "Shine With Me",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:3L7pilDxJhZz1fP6t4D9P9",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2023 Starship Entertainment co.,ltd",
          type: "C",
        },
        {
          text: "(P) 2023 Starship Entertainment",
          type: "P",
        },
      ],
      external_ids: {
        upc: "197188383084",
      },
      genres: ["kpop"],
      label: "Starship Entertainment",
      popularity: 68,
    },
    {
      album_type: "single",
      total_tracks: 2,
      external_urls: {
        spotify: "https://open.spotify.com/album/0LMT3Tdqs2Zy8VIxwuf47X",
      },
      href: "https://api.spotify.com/v1/albums/0LMT3Tdqs2Zy8VIxwuf47X?locale=en-US%2Cen%3Bq%3D0.9",
      id: "0LMT3Tdqs2Zy8VIxwuf47X",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2734c37365dd7a3ab4f4c0a5683",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e024c37365dd7a3ab4f4c0a5683",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048514c37365dd7a3ab4f4c0a5683",
          height: 64,
          width: 64,
        },
      ],
      name: "Supernova Love",
      release_date: "2024-11-08",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:0LMT3Tdqs2Zy8VIxwuf47X",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
          },
          href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
          id: "6RHTUrRF63xao58xh9FXYJ",
          name: "IVE",
          type: "artist",
          debut: "2021",
          members : ["An Yujin", "Gaeul", "Rei", "Wonyoung", "Liz", "Leeseo"],
          uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai",
          },
          href: "https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai",
          id: "1Cs0zKBU1kc0i8ypK3B9ai",
          name: "David Guetta",
          type: "artist",
          uri: "spotify:artist:1Cs0zKBU1kc0i8ypK3B9ai",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/0LMT3Tdqs2Zy8VIxwuf47X/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 2,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai",
                },
                href: "https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai",
                id: "1Cs0zKBU1kc0i8ypK3B9ai",
                name: "David Guetta",
                type: "artist",
                uri: "spotify:artist:1Cs0zKBU1kc0i8ypK3B9ai",
              },
            ],
            disc_number: 1,
            duration_ms: 199504,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5sTLGx6c7YRwnrWm6O091n",
            },
            href: "https://api.spotify.com/v1/tracks/5sTLGx6c7YRwnrWm6O091n",
            id: "5sTLGx6c7YRwnrWm6O091n",
            name: "Supernova Love",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:5sTLGx6c7YRwnrWm6O091n",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1Cs0zKBU1kc0i8ypK3B9ai",
                },
                href: "https://api.spotify.com/v1/artists/1Cs0zKBU1kc0i8ypK3B9ai",
                id: "1Cs0zKBU1kc0i8ypK3B9ai",
                name: "David Guetta",
                type: "artist",
                uri: "spotify:artist:1Cs0zKBU1kc0i8ypK3B9ai",
              },
            ],
            disc_number: 1,
            duration_ms: 263031,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/13doKbm7qarFphV3aRafJp",
            },
            href: "https://api.spotify.com/v1/tracks/13doKbm7qarFphV3aRafJp",
            id: "13doKbm7qarFphV3aRafJp",
            name: "Supernova Love - Extended Mix",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:13doKbm7qarFphV3aRafJp",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2024 E2W GROUP (KDM Records), under exclusive license to Universal Music GmbH",
          type: "C",
        },
        {
          text: "℗ 2024 E2W GROUP (KDM Records), under exclusive license to Universal Music GmbH",
          type: "P",
        },
      ],
      external_ids: {
        upc: "00602475468639",
      },
      genres: ["kpop"],
      label: "Virgin",
      popularity: 58,
    },
    {
      album_type: "single",
      total_tracks: 6,
      external_urls: {
        spotify: "https://open.spotify.com/album/5J7VAdKdGZGme6wymgopbp",
      },
      href: "https://api.spotify.com/v1/albums/5J7VAdKdGZGme6wymgopbp?locale=en-US%2Cen%3Bq%3D0.9",
      id: "5J7VAdKdGZGme6wymgopbp",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2734d00ac692bae6ce08d2b49ad",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e024d00ac692bae6ce08d2b49ad",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048514d00ac692bae6ce08d2b49ad",
          height: 64,
          width: 64,
        },
      ],
      name: "I'VE MINE",
      release_date: "2023-10-13",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:5J7VAdKdGZGme6wymgopbp",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
          },
          href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
          id: "6RHTUrRF63xao58xh9FXYJ",
          name: "IVE",
          type: "artist",
          debut: "2021",
          members : ["An Yujin", "Gaeul", "Rei", "Wonyoung", "Liz", "Leeseo"],
          uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/5J7VAdKdGZGme6wymgopbp/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 6,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 188733,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6TNx6kHZeVDByUNMVxkAfa",
            },
            href: "https://api.spotify.com/v1/tracks/6TNx6kHZeVDByUNMVxkAfa",
            id: "6TNx6kHZeVDByUNMVxkAfa",
            name: "Off The Record",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:6TNx6kHZeVDByUNMVxkAfa",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 154360,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7uyeEbG6hyApgXuEypGcsZ",
            },
            href: "https://api.spotify.com/v1/tracks/7uyeEbG6hyApgXuEypGcsZ",
            id: "7uyeEbG6hyApgXuEypGcsZ",
            name: "Baddie",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:7uyeEbG6hyApgXuEypGcsZ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 166946,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5c1EubDxHdulbausF5CpX5",
            },
            href: "https://api.spotify.com/v1/tracks/5c1EubDxHdulbausF5CpX5",
            id: "5c1EubDxHdulbausF5CpX5",
            name: "Either Way",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:5c1EubDxHdulbausF5CpX5",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 176760,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5q288Nbf39kqh2HtI2H2op",
            },
            href: "https://api.spotify.com/v1/tracks/5q288Nbf39kqh2HtI2H2op",
            id: "5q288Nbf39kqh2HtI2H2op",
            name: "Holy Moly",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:5q288Nbf39kqh2HtI2H2op",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 157186,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0ANTnEM0En14CMHPxs0MZj",
            },
            href: "https://api.spotify.com/v1/tracks/0ANTnEM0En14CMHPxs0MZj",
            id: "0ANTnEM0En14CMHPxs0MZj",
            name: "OTT",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:0ANTnEM0En14CMHPxs0MZj",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6RHTUrRF63xao58xh9FXYJ",
                },
                href: "https://api.spotify.com/v1/artists/6RHTUrRF63xao58xh9FXYJ",
                id: "6RHTUrRF63xao58xh9FXYJ",
                name: "IVE",
                type: "artist",
                uri: "spotify:artist:6RHTUrRF63xao58xh9FXYJ",
              },
            ],

            disc_number: 1,
            duration_ms: 188213,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1RYK0mKtwjWaNLe7Mi6jYN",
            },
            href: "https://api.spotify.com/v1/tracks/1RYK0mKtwjWaNLe7Mi6jYN",
            id: "1RYK0mKtwjWaNLe7Mi6jYN",
            name: "Payback",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:1RYK0mKtwjWaNLe7Mi6jYN",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2023 Starship Entertainment co.,ltd",
          type: "C",
        },
        {
          text: "(P) 2023 Starship Entertainment",
          type: "P",
        },
      ],
      external_ids: {
        upc: "197189809583",
      },
      genres: ["kpop"],
      label: "Starship Entertainment",
      popularity: 59,
    },
    {
      album_type: "album",
      total_tracks: 14,
      external_urls: {
        spotify: "https://open.spotify.com/album/5T0Gt5JYXh6gEttuB8ujML",
      },
      href: "https://api.spotify.com/v1/albums/5T0Gt5JYXh6gEttuB8ujML?locale=en-US%2Cen%3Bq%3D0.9",
      id: "5T0Gt5JYXh6gEttuB8ujML",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27324f8c3ad20b7c6cfecb5832e",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0224f8c3ad20b7c6cfecb5832e",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485124f8c3ad20b7c6cfecb5832e",
          height: 64,
          width: 64,
        },
      ],
      name: "0.1 flaws and all.",
      release_date: "2023-04-20",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:5T0Gt5JYXh6gEttuB8ujML",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
          },
          href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
          id: "5069JTmv5ZDyPeZaCCXiCg",
          name: "wave to earth",
          type: "artist",
          debut: "2019",
          members : ["Yeonjun", "Soobin", "Beomgyu", "Taehyun", "Kai"],
          uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/5T0Gt5JYXh6gEttuB8ujML/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 14,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 263250,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6H67gFuycHyTOROX2M4bbs",
            },
            href: "https://api.spotify.com/v1/tracks/6H67gFuycHyTOROX2M4bbs",
            id: "6H67gFuycHyTOROX2M4bbs",
            name: "bad",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:6H67gFuycHyTOROX2M4bbs",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 248746,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3URe1bi21ftFK4zh5nO1P1",
            },
            href: "https://api.spotify.com/v1/tracks/3URe1bi21ftFK4zh5nO1P1",
            id: "3URe1bi21ftFK4zh5nO1P1",
            name: "sunny days",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:3URe1bi21ftFK4zh5nO1P1",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 185000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/72UVMFjUAL6KJvwi36VBiz",
            },
            href: "https://api.spotify.com/v1/tracks/72UVMFjUAL6KJvwi36VBiz",
            id: "72UVMFjUAL6KJvwi36VBiz",
            name: "peach eyes",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:72UVMFjUAL6KJvwi36VBiz",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 216374,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7KboPR4TuGQSAEjJNXKwQQ",
            },
            href: "https://api.spotify.com/v1/tracks/7KboPR4TuGQSAEjJNXKwQQ",
            id: "7KboPR4TuGQSAEjJNXKwQQ",
            name: "evening glow",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:7KboPR4TuGQSAEjJNXKwQQ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 59998,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2Fh7LC098S5WtVVtSJrgKg",
            },
            href: "https://api.spotify.com/v1/tracks/2Fh7LC098S5WtVVtSJrgKg",
            id: "2Fh7LC098S5WtVVtSJrgKg",
            name: "pink horizon",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:2Fh7LC098S5WtVVtSJrgKg",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 267998,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1JYtwhnjpVxQeYE9uyU2Lx",
            },
            href: "https://api.spotify.com/v1/tracks/1JYtwhnjpVxQeYE9uyU2Lx",
            id: "1JYtwhnjpVxQeYE9uyU2Lx",
            name: "pink",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:1JYtwhnjpVxQeYE9uyU2Lx",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 259635,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0X9qVaLfmgFFaJaYv72V7A",
            },
            href: "https://api.spotify.com/v1/tracks/0X9qVaLfmgFFaJaYv72V7A",
            id: "0X9qVaLfmgFFaJaYv72V7A",
            name: "calla",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:0X9qVaLfmgFFaJaYv72V7A",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 307750,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5mtTAScDytxMMqZj14NmlN",
            },
            href: "https://api.spotify.com/v1/tracks/5mtTAScDytxMMqZj14NmlN",
            id: "5mtTAScDytxMMqZj14NmlN",
            name: "love.",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:5mtTAScDytxMMqZj14NmlN",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 2,
            duration_ms: 306000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2FZIabCRMEWAYfN69Ijn1U",
            },
            href: "https://api.spotify.com/v1/tracks/2FZIabCRMEWAYfN69Ijn1U",
            id: "2FZIabCRMEWAYfN69Ijn1U",
            name: "homesick",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:2FZIabCRMEWAYfN69Ijn1U",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 2,
            duration_ms: 215250,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/12jbiJhWbCQqRdnCB2QbmX",
            },
            href: "https://api.spotify.com/v1/tracks/12jbiJhWbCQqRdnCB2QbmX",
            id: "12jbiJhWbCQqRdnCB2QbmX",
            name: "dried flower",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:12jbiJhWbCQqRdnCB2QbmX",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 2,
            duration_ms: 212250,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1pOIJTuRBw241sCT6eq2TK",
            },
            href: "https://api.spotify.com/v1/tracks/1pOIJTuRBw241sCT6eq2TK",
            id: "1pOIJTuRBw241sCT6eq2TK",
            name: "sunburn",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:1pOIJTuRBw241sCT6eq2TK",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 2,
            duration_ms: 162750,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5oThdPvhz6t4fdHjjEnrPM",
            },
            href: "https://api.spotify.com/v1/tracks/5oThdPvhz6t4fdHjjEnrPM",
            id: "5oThdPvhz6t4fdHjjEnrPM",
            name: "akira",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:5oThdPvhz6t4fdHjjEnrPM",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 2,
            duration_ms: 229750,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3pUBfXGCqH0imhTQ02wBLr",
            },
            href: "https://api.spotify.com/v1/tracks/3pUBfXGCqH0imhTQ02wBLr",
            id: "3pUBfXGCqH0imhTQ02wBLr",
            name: "nouvelle vague",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3pUBfXGCqH0imhTQ02wBLr",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 2,
            duration_ms: 273000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6B75WGGugFzGfyVWSF38Q1",
            },
            href: "https://api.spotify.com/v1/tracks/6B75WGGugFzGfyVWSF38Q1",
            id: "6B75WGGugFzGfyVWSF38Q1",
            name: "so real",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:6B75WGGugFzGfyVWSF38Q1",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2023 WAVY",
          type: "C",
        },
        {
          text: "(P) 2023 WAVY",
          type: "P",
        },
      ],
      external_ids: {
        upc: "5054197659843",
      },
      genres: ["krnb"],
      label: "WAVY",
      popularity: 77,
    },
    {
      album_type: "album",
      total_tracks: 7,
      external_urls: {
        spotify: "https://open.spotify.com/album/527e8WrlMvJBEmlmt7kJCj",
      },
      href: "https://api.spotify.com/v1/albums/527e8WrlMvJBEmlmt7kJCj?locale=en-US%2Cen%3Bq%3D0.9",
      id: "527e8WrlMvJBEmlmt7kJCj",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273bed6cba62070aabe116791ad",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02bed6cba62070aabe116791ad",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851bed6cba62070aabe116791ad",
          height: 64,
          width: 64,
        },
      ],
      name: "play with earth! 0.03",
      release_date: "2024-09-06",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:527e8WrlMvJBEmlmt7kJCj",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
          },
          href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
          id: "5069JTmv5ZDyPeZaCCXiCg",
          name: "wave to earth",
          type: "artist",
          debut: "2019",
          members : ["Yeonjun", "Soobin", "Beomgyu", "Taehyun", "Kai"],
          uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/527e8WrlMvJBEmlmt7kJCj/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 7,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 111730,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0fVaeDuKVb0vQSn9sGILo4",
            },
            href: "https://api.spotify.com/v1/tracks/0fVaeDuKVb0vQSn9sGILo4",
            id: "0fVaeDuKVb0vQSn9sGILo4",
            name: "are you bored?",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:0fVaeDuKVb0vQSn9sGILo4",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 181000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7K8Cnsgdex1OSnRplCjjPG",
            },
            href: "https://api.spotify.com/v1/tracks/7K8Cnsgdex1OSnRplCjjPG",
            id: "7K8Cnsgdex1OSnRplCjjPG",
            name: "play with earth!",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:7K8Cnsgdex1OSnRplCjjPG",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 200943,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/57KdzjdxoBml2rx0rajGRg",
            },
            href: "https://api.spotify.com/v1/tracks/57KdzjdxoBml2rx0rajGRg",
            id: "57KdzjdxoBml2rx0rajGRg",
            name: "annie.",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:57KdzjdxoBml2rx0rajGRg",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 227423,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6fKQTPHSmxgESEuGwvELDW",
            },
            href: "https://api.spotify.com/v1/tracks/6fKQTPHSmxgESEuGwvELDW",
            id: "6fKQTPHSmxgESEuGwvELDW",
            name: "pueblo - remastered 2024",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:6fKQTPHSmxgESEuGwvELDW",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 246900,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4zPz8sZesUItr39aJcqX1d",
            },
            href: "https://api.spotify.com/v1/tracks/4zPz8sZesUItr39aJcqX1d",
            id: "4zPz8sZesUItr39aJcqX1d",
            name: "beck.",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:4zPz8sZesUItr39aJcqX1d",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 273850,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6AgHEBiPVFjRcQxEkoDVjI",
            },
            href: "https://api.spotify.com/v1/tracks/6AgHEBiPVFjRcQxEkoDVjI",
            id: "6AgHEBiPVFjRcQxEkoDVjI",
            name: "slow dive",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:6AgHEBiPVFjRcQxEkoDVjI",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 262700,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3EAVnk4Dq0DPhlJLG5ljDc",
            },
            href: "https://api.spotify.com/v1/tracks/3EAVnk4Dq0DPhlJLG5ljDc",
            id: "3EAVnk4Dq0DPhlJLG5ljDc",
            name: "holyland",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:3EAVnk4Dq0DPhlJLG5ljDc",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2024 WAVY",
          type: "C",
        },
        {
          text: "(P) 2024 WAVY",
          type: "P",
        },
      ],
      external_ids: {
        upc: "5021732481481",
      },
      genres: ["krnb"],
      label: "WAVY",
      popularity: 64,
    },
    {
      album_type: "single",
      total_tracks: 5,
      external_urls: {
        spotify: "https://open.spotify.com/album/3NRNR4txhuRLhnQUUlqWXH",
      },
      href: "https://api.spotify.com/v1/albums/3NRNR4txhuRLhnQUUlqWXH?locale=en-US%2Cen%3Bq%3D0.9",
      id: "3NRNR4txhuRLhnQUUlqWXH",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2733f203b8d0d8e54fab416a825",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e023f203b8d0d8e54fab416a825",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048513f203b8d0d8e54fab416a825",
          height: 64,
          width: 64,
        },
      ],
      name: "summer flows 0.02",
      release_date: "2020-08-04",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:3NRNR4txhuRLhnQUUlqWXH",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
          },
          href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
          id: "5069JTmv5ZDyPeZaCCXiCg",
          name: "wave to earth",
          type: "artist",
          debut: "2019",
          members : ["Yeonjun", "Soobin", "Beomgyu", "Taehyun", "Kai"],
          uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/3NRNR4txhuRLhnQUUlqWXH/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 5,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 37111,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6dPE7aRoX6dHhECqvf1Mta",
            },
            href: "https://api.spotify.com/v1/tracks/6dPE7aRoX6dHhECqvf1Mta",
            id: "6dPE7aRoX6dHhECqvf1Mta",
            name: "summer flows",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:6dPE7aRoX6dHhECqvf1Mta",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 228500,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/67KfktISVA3XHSRqge5JiB",
            },
            href: "https://api.spotify.com/v1/tracks/67KfktISVA3XHSRqge5JiB",
            id: "67KfktISVA3XHSRqge5JiB",
            name: "ride",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:67KfktISVA3XHSRqge5JiB",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 255998,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5VBjyOQzqlPNgdRPMM6prF",
            },
            href: "https://api.spotify.com/v1/tracks/5VBjyOQzqlPNgdRPMM6prF",
            id: "5VBjyOQzqlPNgdRPMM6prF",
            name: "seasons",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:5VBjyOQzqlPNgdRPMM6prF",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 241500,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3DbZqVaXg8Yi1VBU44i0ns",
            },
            href: "https://api.spotify.com/v1/tracks/3DbZqVaXg8Yi1VBU44i0ns",
            id: "3DbZqVaXg8Yi1VBU44i0ns",
            name: "ocean floor",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:3DbZqVaXg8Yi1VBU44i0ns",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg",
                },
                href: "https://api.spotify.com/v1/artists/5069JTmv5ZDyPeZaCCXiCg",
                id: "5069JTmv5ZDyPeZaCCXiCg",
                name: "wave to earth",
                type: "artist",
                uri: "spotify:artist:5069JTmv5ZDyPeZaCCXiCg",
              },
            ],
            disc_number: 1,
            duration_ms: 229333,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1u46ILAiprkFcGkGkMcGOz",
            },
            href: "https://api.spotify.com/v1/tracks/1u46ILAiprkFcGkGkMcGOz",
            id: "1u46ILAiprkFcGkGkMcGOz",
            name: "surf.",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:1u46ILAiprkFcGkGkMcGOz",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2020 WAVY",
          type: "C",
        },
        {
          text: "℗ 2020 WAVY",
          type: "P",
        },
      ],
      external_ids: {
        upc: "5054197890017",
      },
      genres: ["krnb, indie"],
      label: "ADA Korea",
      popularity: 72,
    },
    {
      album_type: "album",
      total_tracks: 7,
      external_urls: {
        spotify: "https://open.spotify.com/album/5YamV8eSywqu7g1Ms4GoqA",
      },
      href: "https://api.spotify.com/v1/albums/5YamV8eSywqu7g1Ms4GoqA?locale=en-US%2Cen%3Bq%3D0.9",
      id: "5YamV8eSywqu7g1Ms4GoqA",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273acf8ff27be32aec99d6c99a0",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02acf8ff27be32aec99d6c99a0",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851acf8ff27be32aec99d6c99a0",
          height: 64,
          width: 64,
        },
      ],
      name: "STRATEGY",
      release_date: "2024-12-06",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:5YamV8eSywqu7g1Ms4GoqA",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
          },
          href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
          id: "7n2Ycct7Beij7Dj7meI4X0",
          name: "TWICE",
          type: "artist",
          debut:"2015",
          members : ["Nayeon", "Jeongyeon", "Momo", "Sana", "Jihyo", "Minatozaki Sana", "Dahyun", "Chaeyoung", "Tzuyu"],
          uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/5YamV8eSywqu7g1Ms4GoqA/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 7,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/181bsRPaVXVlUKXrxwZfHK",
                },
                href: "https://api.spotify.com/v1/artists/181bsRPaVXVlUKXrxwZfHK",
                id: "181bsRPaVXVlUKXrxwZfHK",
                name: "Megan Thee Stallion",
                type: "artist",
                uri: "spotify:artist:181bsRPaVXVlUKXrxwZfHK",
              },
            ],

            disc_number: 1,
            duration_ms: 201760,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5zQUndaoBtXJ10SsApqtvw",
            },
            href: "https://api.spotify.com/v1/tracks/5zQUndaoBtXJ10SsApqtvw",
            id: "5zQUndaoBtXJ10SsApqtvw",
            name: "Strategy (feat. Megan Thee Stallion)",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:5zQUndaoBtXJ10SsApqtvw",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 174253,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2f92hG26Af9enOtKh5dqnx",
            },
            href: "https://api.spotify.com/v1/tracks/2f92hG26Af9enOtKh5dqnx",
            id: "2f92hG26Af9enOtKh5dqnx",
            name: "Kiss My Troubles Away",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:2f92hG26Af9enOtKh5dqnx",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 182466,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/59rbPbgauxNuF8JjQgCZDR",
            },
            href: "https://api.spotify.com/v1/tracks/59rbPbgauxNuF8JjQgCZDR",
            id: "59rbPbgauxNuF8JjQgCZDR",
            name: "Like It Like It",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:59rbPbgauxNuF8JjQgCZDR",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 166520,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/59m1MNGqo0ebDQ1T71JVm4",
            },
            href: "https://api.spotify.com/v1/tracks/59m1MNGqo0ebDQ1T71JVm4",
            id: "59m1MNGqo0ebDQ1T71JVm4",
            name: "Sweetest Obsession",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:59m1MNGqo0ebDQ1T71JVm4",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 155560,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3Jscz9ODgRCDQKyFtJPIyW",
            },
            href: "https://api.spotify.com/v1/tracks/3Jscz9ODgRCDQKyFtJPIyW",
            id: "3Jscz9ODgRCDQKyFtJPIyW",
            name: "Keeper",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3Jscz9ODgRCDQKyFtJPIyW",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 196426,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7KceQsUwMh1zyW94c3JCMC",
            },
            href: "https://api.spotify.com/v1/tracks/7KceQsUwMh1zyW94c3JCMC",
            id: "7KceQsUwMh1zyW94c3JCMC",
            name: "Magical",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:7KceQsUwMh1zyW94c3JCMC",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 166773,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/22fSzde77hjB052Vo155LF",
            },
            href: "https://api.spotify.com/v1/tracks/22fSzde77hjB052Vo155LF",
            id: "22fSzde77hjB052Vo155LF",
            name: "Strategy",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:22fSzde77hjB052Vo155LF",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2024 JYP Entertainment Corporation",
          type: "C",
        },
        {
          text: "℗ 2024 JYP Entertainment Corporation",
          type: "P",
        },
      ],
      external_ids: {
        upc: "8809928952918",
      },
      genres: ["kpop"],
      label: "Republic Records - TWICE",
      popularity: 72,
    },
    {
      album_type: "album",
      total_tracks: 16,
      external_urls: {
        spotify: "https://open.spotify.com/album/5052Ip89wdW8EGdpjEpNeq",
      },
      href: "https://api.spotify.com/v1/albums/5052Ip89wdW8EGdpjEpNeq?locale=en-US%2Cen%3Bq%3D0.9",
      id: "5052Ip89wdW8EGdpjEpNeq",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273d1961ecb307c9e05ec8f7e82",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02d1961ecb307c9e05ec8f7e82",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851d1961ecb307c9e05ec8f7e82",
          height: 64,
          width: 64,
        },
      ],
      name: "Formula of Love: O+T=<3",
      release_date: "2021-11-12",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:5052Ip89wdW8EGdpjEpNeq",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
          },
          href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
          id: "7n2Ycct7Beij7Dj7meI4X0",
          name: "TWICE",
          type: "artist",
          debut:"2015",
          members : ["Nayeon", "Jeongyeon", "Momo", "Sana", "Jihyo", "Minatozaki Sana", "Dahyun", "Chaeyoung", "Tzuyu"],
          uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/5052Ip89wdW8EGdpjEpNeq/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 16,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 194600,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0BJMgVrnWIvgYsjq8KaPeh",
            },
            href: "https://api.spotify.com/v1/tracks/0BJMgVrnWIvgYsjq8KaPeh",
            id: "0BJMgVrnWIvgYsjq8KaPeh",
            name: "SCIENTIST",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:0BJMgVrnWIvgYsjq8KaPeh",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 219386,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/14k4ALBLN2FjtELYDcQUoi",
            },
            href: "https://api.spotify.com/v1/tracks/14k4ALBLN2FjtELYDcQUoi",
            id: "14k4ALBLN2FjtELYDcQUoi",
            name: "MOONLIGHT",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:14k4ALBLN2FjtELYDcQUoi",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 176160,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2VdU1ksBKcETBr8BYRHUvB",
            },
            href: "https://api.spotify.com/v1/tracks/2VdU1ksBKcETBr8BYRHUvB",
            id: "2VdU1ksBKcETBr8BYRHUvB",
            name: "ICON",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:2VdU1ksBKcETBr8BYRHUvB",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 211426,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/139JUU8fJkQoeHl9nABk9C",
            },
            href: "https://api.spotify.com/v1/tracks/139JUU8fJkQoeHl9nABk9C",
            id: "139JUU8fJkQoeHl9nABk9C",
            name: "CRUEL",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:139JUU8fJkQoeHl9nABk9C",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 187933,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3ax3sc1Rn99YbjyKT0HALS",
            },
            href: "https://api.spotify.com/v1/tracks/3ax3sc1Rn99YbjyKT0HALS",
            id: "3ax3sc1Rn99YbjyKT0HALS",
            name: "REAL YOU",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3ax3sc1Rn99YbjyKT0HALS",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 191253,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4O1WbQwMV0W6Y2dUCvwoBx",
            },
            href: "https://api.spotify.com/v1/tracks/4O1WbQwMV0W6Y2dUCvwoBx",
            id: "4O1WbQwMV0W6Y2dUCvwoBx",
            name: "F.I.L.A (Fall In Love Again)",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:4O1WbQwMV0W6Y2dUCvwoBx",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 170560,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/39kH6C2twlYjyssIW02sbr",
            },
            href: "https://api.spotify.com/v1/tracks/39kH6C2twlYjyssIW02sbr",
            id: "39kH6C2twlYjyssIW02sbr",
            name: "LAST WALTZ",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:39kH6C2twlYjyssIW02sbr",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 187800,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/61iEzLnJzBnMwumWtn0nFp",
            },
            href: "https://api.spotify.com/v1/tracks/61iEzLnJzBnMwumWtn0nFp",
            id: "61iEzLnJzBnMwumWtn0nFp",
            name: "ESPRESSO",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:61iEzLnJzBnMwumWtn0nFp",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 180613,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4BBnKqIS2pj2hX0zm0CZZx",
            },
            href: "https://api.spotify.com/v1/tracks/4BBnKqIS2pj2hX0zm0CZZx",
            id: "4BBnKqIS2pj2hX0zm0CZZx",
            name: "REWIND",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:4BBnKqIS2pj2hX0zm0CZZx",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 217213,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5TYy2SgTQUv6YGWHbryUV8",
            },
            href: "https://api.spotify.com/v1/tracks/5TYy2SgTQUv6YGWHbryUV8",
            id: "5TYy2SgTQUv6YGWHbryUV8",
            name: "CACTUS",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:5TYy2SgTQUv6YGWHbryUV8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 205466,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7kbOwsTp2Uqm1scjRPiVt4",
            },
            href: "https://api.spotify.com/v1/tracks/7kbOwsTp2Uqm1scjRPiVt4",
            id: "7kbOwsTp2Uqm1scjRPiVt4",
            name: "PUSH & PULL (JIHYO, SANA, DAHYUN)",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:7kbOwsTp2Uqm1scjRPiVt4",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 183213,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1bXM8imxd31qCecbHgSk9E",
            },
            href: "https://api.spotify.com/v1/tracks/1bXM8imxd31qCecbHgSk9E",
            id: "1bXM8imxd31qCecbHgSk9E",
            name: "HELLO (NAYEON, MOMO, CHAEYOUNG)",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:1bXM8imxd31qCecbHgSk9E",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 198453,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6bS9w12VuyaqkbNKnw5zZE",
            },
            href: "https://api.spotify.com/v1/tracks/6bS9w12VuyaqkbNKnw5zZE",
            id: "6bS9w12VuyaqkbNKnw5zZE",
            name: "1, 3, 2 (JEONGYEON, MINA, TZUYU)",
            preview_url: null,
            track_number: 13,
            type: "track",
            uri: "spotify:track:6bS9w12VuyaqkbNKnw5zZE",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 195053,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/53Abp3QVXDA9z1VmJsOBXm",
            },
            href: "https://api.spotify.com/v1/tracks/53Abp3QVXDA9z1VmJsOBXm",
            id: "53Abp3QVXDA9z1VmJsOBXm",
            name: "CANDY",
            preview_url: null,
            track_number: 14,
            type: "track",
            uri: "spotify:track:53Abp3QVXDA9z1VmJsOBXm",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 198053,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/308Ir17KlNdlrbVLHWhlLe",
            },
            href: "https://api.spotify.com/v1/tracks/308Ir17KlNdlrbVLHWhlLe",
            id: "308Ir17KlNdlrbVLHWhlLe",
            name: "The Feels",
            preview_url: null,
            track_number: 15,
            type: "track",
            uri: "spotify:track:308Ir17KlNdlrbVLHWhlLe",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6cEuCEZu7PAE9ZSzLLc2oQ",
                },
                href: "https://api.spotify.com/v1/artists/6cEuCEZu7PAE9ZSzLLc2oQ",
                id: "6cEuCEZu7PAE9ZSzLLc2oQ",
                name: "R3HAB",
                type: "artist",
                uri: "spotify:artist:6cEuCEZu7PAE9ZSzLLc2oQ",
              },
            ],

            disc_number: 1,
            duration_ms: 208780,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3uazfRfe8P0L6j82EnHjOW",
            },
            href: "https://api.spotify.com/v1/tracks/3uazfRfe8P0L6j82EnHjOW",
            id: "3uazfRfe8P0L6j82EnHjOW",
            name: "SCIENTIST (R3HAB Remix)",
            preview_url: null,
            track_number: 16,
            type: "track",
            uri: "spotify:track:3uazfRfe8P0L6j82EnHjOW",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2021 JYP Entertainment Company",
          type: "C",
        },
        {
          text: "℗ 2021 JYP Entertainment Company",
          type: "P",
        },
      ],
      external_ids: {
        upc: "738676858457",
      },
      genres: ["kpop"],
      label: "Republic Records - TWICE",
      popularity: 65,
    },
    {
      album_type: "album",
      total_tracks: 7,
      external_urls: {
        spotify: "https://open.spotify.com/album/3NZ94nQbqimcu2i71qhc4f",
      },
      href: "https://api.spotify.com/v1/albums/3NZ94nQbqimcu2i71qhc4f?locale=en-US%2Cen%3Bq%3D0.9",
      id: "3NZ94nQbqimcu2i71qhc4f",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273c3040848e6ef0e132c5c8340",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02c3040848e6ef0e132c5c8340",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851c3040848e6ef0e132c5c8340",
          height: 64,
          width: 64,
        },
      ],
      name: "BETWEEN 1&2",
      release_date: "2022-08-26",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:3NZ94nQbqimcu2i71qhc4f",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
          },
          href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
          id: "7n2Ycct7Beij7Dj7meI4X0",
          name: "TWICE",
          type: "artist",
          debut:"2015",
          members : ["Nayeon", "Jeongyeon", "Momo", "Sana", "Jihyo", "Minatozaki Sana", "Dahyun", "Chaeyoung", "Tzuyu"],
          uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/3NZ94nQbqimcu2i71qhc4f/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 7,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 177466,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0RDqNCRBGrSegk16Avfzuq",
            },
            href: "https://api.spotify.com/v1/tracks/0RDqNCRBGrSegk16Avfzuq",
            id: "0RDqNCRBGrSegk16Avfzuq",
            name: "Talk that Talk",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:0RDqNCRBGrSegk16Avfzuq",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 186946,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3sOEVB8DirQtZc0qhw8lJc",
            },
            href: "https://api.spotify.com/v1/tracks/3sOEVB8DirQtZc0qhw8lJc",
            id: "3sOEVB8DirQtZc0qhw8lJc",
            name: "Queen of Hearts",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:3sOEVB8DirQtZc0qhw8lJc",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 176973,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/63mL1DdcSFfxVJ9XGnSRQz",
            },
            href: "https://api.spotify.com/v1/tracks/63mL1DdcSFfxVJ9XGnSRQz",
            id: "63mL1DdcSFfxVJ9XGnSRQz",
            name: "Basics",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:63mL1DdcSFfxVJ9XGnSRQz",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 215400,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5L9eGmPwQnhIlJY1qDQ3OJ",
            },
            href: "https://api.spotify.com/v1/tracks/5L9eGmPwQnhIlJY1qDQ3OJ",
            id: "5L9eGmPwQnhIlJY1qDQ3OJ",
            name: "Trouble",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:5L9eGmPwQnhIlJY1qDQ3OJ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 189200,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2peoFPokM6eYAIwLm9IQ8E",
            },
            href: "https://api.spotify.com/v1/tracks/2peoFPokM6eYAIwLm9IQ8E",
            id: "2peoFPokM6eYAIwLm9IQ8E",
            name: "Brave",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:2peoFPokM6eYAIwLm9IQ8E",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 195000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0tTotZHPsxyjW3jqNJ1td2",
            },
            href: "https://api.spotify.com/v1/tracks/0tTotZHPsxyjW3jqNJ1td2",
            id: "0tTotZHPsxyjW3jqNJ1td2",
            name: "Gone",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:0tTotZHPsxyjW3jqNJ1td2",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0",
                },
                href: "https://api.spotify.com/v1/artists/7n2Ycct7Beij7Dj7meI4X0",
                id: "7n2Ycct7Beij7Dj7meI4X0",
                name: "TWICE",
                type: "artist",
                uri: "spotify:artist:7n2Ycct7Beij7Dj7meI4X0",
              },
            ],

            disc_number: 1,
            duration_ms: 189346,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7uAKsykguOnXZSh0WpOW5z",
            },
            href: "https://api.spotify.com/v1/tracks/7uAKsykguOnXZSh0WpOW5z",
            id: "7uAKsykguOnXZSh0WpOW5z",
            name: "When We Were Kids",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:7uAKsykguOnXZSh0WpOW5z",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2022 JYP Entertainment Company",
          type: "C",
        },
        {
          text: "℗ 2022 JYP Entertainment Company",
          type: "P",
        },
      ],
      external_ids: {
        upc: "738676859874",
      },
      genres: ["kpop"],
      label: "Republic Records - TWICE",
      popularity: 61,
    },
    {
      album_type: "album",
      total_tracks: 15,
      external_urls: {
        spotify: "https://open.spotify.com/album/2z9lM6LDS58F70IGyQ1XMK",
      },
      href: "https://api.spotify.com/v1/albums/2z9lM6LDS58F70IGyQ1XMK?locale=en-US%2Cen%3Bq%3D0.9",
      id: "2z9lM6LDS58F70IGyQ1XMK",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273e84f43fcd694182cfd25a3e3",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02e84f43fcd694182cfd25a3e3",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851e84f43fcd694182cfd25a3e3",
          height: 64,
          width: 64,
        },
      ],
      name: "NEVER ENOUGH",
      release_date: "2023-04-07",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:2z9lM6LDS58F70IGyQ1XMK",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
          },
          href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
          id: "20wkVLutqVOYrc0kxFs7rA",
          name: "Daniel Caesar",
          type: "artist",
          debut:"2015",
          members : ["Daniel Caesar"],
          uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/2z9lM6LDS58F70IGyQ1XMK/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 15,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 153171,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5MFSkVOqkIgE8NOfPQGm4N",
            },
            href: "https://api.spotify.com/v1/tracks/5MFSkVOqkIgE8NOfPQGm4N",
            id: "5MFSkVOqkIgE8NOfPQGm4N",
            name: "Ocho Rios",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:5MFSkVOqkIgE8NOfPQGm4N",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 154531,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3hMkx0IYvB6t1LLHlpo0Ah",
            },
            href: "https://api.spotify.com/v1/tracks/3hMkx0IYvB6t1LLHlpo0Ah",
            id: "3hMkx0IYvB6t1LLHlpo0Ah",
            name: "Valentina",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:3hMkx0IYvB6t1LLHlpo0Ah",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1zkKkDDra0jlsiJYz57P3P",
                },
                href: "https://api.spotify.com/v1/artists/1zkKkDDra0jlsiJYz57P3P",
                id: "1zkKkDDra0jlsiJYz57P3P",
                name: "Mustafa",
                type: "artist",
                uri: "spotify:artist:1zkKkDDra0jlsiJYz57P3P",
              },
            ],
            disc_number: 1,
            duration_ms: 277518,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0A0WWWsf5pSYW9sGnWaziK",
            },
            href: "https://api.spotify.com/v1/tracks/0A0WWWsf5pSYW9sGnWaziK",
            id: "0A0WWWsf5pSYW9sGnWaziK",
            name: "Toronto 2014 (with Mustafa)",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:0A0WWWsf5pSYW9sGnWaziK",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 216524,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0cE1CAG5yunIjnHWLAZNub",
            },
            href: "https://api.spotify.com/v1/tracks/0cE1CAG5yunIjnHWLAZNub",
            id: "0cE1CAG5yunIjnHWLAZNub",
            name: "Let Me Go",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:0cE1CAG5yunIjnHWLAZNub",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 227520,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0dK28q5xe4s6Q6DKKMg1Nz",
            },
            href: "https://api.spotify.com/v1/tracks/0dK28q5xe4s6Q6DKKMg1Nz",
            id: "0dK28q5xe4s6Q6DKKMg1Nz",
            name: "Do You Like Me?",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:0dK28q5xe4s6Q6DKKMg1Nz",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 225312,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2g5eyjDwIUDiA5mc3nSoVm",
            },
            href: "https://api.spotify.com/v1/tracks/2g5eyjDwIUDiA5mc3nSoVm",
            id: "2g5eyjDwIUDiA5mc3nSoVm",
            name: "Always",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:2g5eyjDwIUDiA5mc3nSoVm",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 244189,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/3WOXIIvvlVcBEIVGi0ho4e",
            },
            href: "https://api.spotify.com/v1/tracks/3WOXIIvvlVcBEIVGi0ho4e",
            id: "3WOXIIvvlVcBEIVGi0ho4e",
            name: "Cool",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:3WOXIIvvlVcBEIVGi0ho4e",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1O9iHQjrVuiAYOJFCBeFSl",
                },
                href: "https://api.spotify.com/v1/artists/1O9iHQjrVuiAYOJFCBeFSl",
                id: "1O9iHQjrVuiAYOJFCBeFSl",
                name: "serpentwithfeet",
                type: "artist",
                uri: "spotify:artist:1O9iHQjrVuiAYOJFCBeFSl",
              },
            ],
            disc_number: 1,
            duration_ms: 241232,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1gUyF1kls2Q5MkuAi9djjx",
            },
            href: "https://api.spotify.com/v1/tracks/1gUyF1kls2Q5MkuAi9djjx",
            id: "1gUyF1kls2Q5MkuAi9djjx",
            name: "Disillusioned (with serpentwithfeet)",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:1gUyF1kls2Q5MkuAi9djjx",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5FxD8fkQZ6KcsSYupDVoSO",
                },
                href: "https://api.spotify.com/v1/artists/5FxD8fkQZ6KcsSYupDVoSO",
                id: "5FxD8fkQZ6KcsSYupDVoSO",
                name: "Omar Apollo",
                type: "artist",
                uri: "spotify:artist:5FxD8fkQZ6KcsSYupDVoSO",
              },
            ],
            disc_number: 1,
            duration_ms: 152170,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7645oxCA3ouOoip7gg2MgI",
            },
            href: "https://api.spotify.com/v1/tracks/7645oxCA3ouOoip7gg2MgI",
            id: "7645oxCA3ouOoip7gg2MgI",
            name: "Buyer's Remorse (feat. Omar Apollo)",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:7645oxCA3ouOoip7gg2MgI",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 268221,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2I1ufYLNqCnkh3KetU1W4u",
            },
            href: "https://api.spotify.com/v1/tracks/2I1ufYLNqCnkh3KetU1W4u",
            id: "2I1ufYLNqCnkh3KetU1W4u",
            name: "Shot My Baby",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:2I1ufYLNqCnkh3KetU1W4u",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 295174,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0Wg0ux2LT0THoTLdeNItWs",
            },
            href: "https://api.spotify.com/v1/tracks/0Wg0ux2LT0THoTLdeNItWs",
            id: "0Wg0ux2LT0THoTLdeNItWs",
            name: "Pain Is Inevitable",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:0Wg0ux2LT0THoTLdeNItWs",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7c0XG5cIJTrrAgEC3ULPiq",
                },
                href: "https://api.spotify.com/v1/artists/7c0XG5cIJTrrAgEC3ULPiq",
                id: "7c0XG5cIJTrrAgEC3ULPiq",
                name: "Ty Dolla $ign",
                type: "artist",
                uri: "spotify:artist:7c0XG5cIJTrrAgEC3ULPiq",
              },
            ],
            disc_number: 1,
            duration_ms: 230379,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5ZOXLQIOCIP784k3CmEnSy",
            },
            href: "https://api.spotify.com/v1/tracks/5ZOXLQIOCIP784k3CmEnSy",
            id: "5ZOXLQIOCIP784k3CmEnSy",
            name: "Homiesexual (with Ty Dolla $ign)",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:5ZOXLQIOCIP784k3CmEnSy",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 164257,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/12H8Prc7lDYkUh5yelc0Nv",
            },
            href: "https://api.spotify.com/v1/tracks/12H8Prc7lDYkUh5yelc0Nv",
            id: "12H8Prc7lDYkUh5yelc0Nv",
            name: "Vince Van Gogh",
            preview_url: null,
            track_number: 13,
            type: "track",
            uri: "spotify:track:12H8Prc7lDYkUh5yelc0Nv",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 174512,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6WkVbo4Qkujo7UPHJOmOWY",
            },
            href: "https://api.spotify.com/v1/tracks/6WkVbo4Qkujo7UPHJOmOWY",
            id: "6WkVbo4Qkujo7UPHJOmOWY",
            name: "Superpowers",
            preview_url: null,
            track_number: 14,
            type: "track",
            uri: "spotify:track:6WkVbo4Qkujo7UPHJOmOWY",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 247805,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3G5VXWj5wPx25khGIFICtg",
            },
            href: "https://api.spotify.com/v1/tracks/3G5VXWj5wPx25khGIFICtg",
            id: "3G5VXWj5wPx25khGIFICtg",
            name: "Unstoppable",
            preview_url: null,
            track_number: 15,
            type: "track",
            uri: "spotify:track:3G5VXWj5wPx25khGIFICtg",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2023 Hollace Inc., under exclusive license to Republic Records, a division of UMG Recordings, Inc.",
          type: "C",
        },
        {
          text: "℗ 2023 Hollace Inc., under exclusive license to Republic Records, a division of UMG Recordings, Inc.",
          type: "P",
        },
      ],
      external_ids: {
        upc: "00602455695284",
      },
      genres: ["indie, rnb"],
      label: "Republic Records",
      popularity: 56,
    },
    {
      album_type: "album",
      total_tracks: 10,
      external_urls: {
        spotify: "https://open.spotify.com/album/4E1XUBMTpLO7GpBzUo65Jp",
      },
      href: "https://api.spotify.com/v1/albums/4E1XUBMTpLO7GpBzUo65Jp?locale=en-US%2Cen%3Bq%3D0.9",
      id: "4E1XUBMTpLO7GpBzUo65Jp",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27305ac3e026324594a31fad7fb",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0205ac3e026324594a31fad7fb",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485105ac3e026324594a31fad7fb",
          height: 64,
          width: 64,
        },
      ],
      name: "Freudian",
      release_date: "2017-08-25",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:4E1XUBMTpLO7GpBzUo65Jp",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
          },
          href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
          id: "20wkVLutqVOYrc0kxFs7rA",
          name: "Daniel Caesar",
          type: "artist",
          debut:"2015",
          members : ["Daniel Caesar"],
          uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/4E1XUBMTpLO7GpBzUo65Jp/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 10,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1U1el3k54VvEUzo3ybLPlM",
                },
                href: "https://api.spotify.com/v1/artists/1U1el3k54VvEUzo3ybLPlM",
                id: "1U1el3k54VvEUzo3ybLPlM",
                name: "Kali Uchis",
                type: "artist",
                uri: "spotify:artist:1U1el3k54VvEUzo3ybLPlM",
              },
            ],
            disc_number: 1,
            duration_ms: 278179,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2uP6t2J5MEwhr9rDkAAzwh",
            },
            href: "https://api.spotify.com/v1/tracks/2uP6t2J5MEwhr9rDkAAzwh",
            id: "2uP6t2J5MEwhr9rDkAAzwh",
            name: "Get You (feat. Kali Uchis)",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:2uP6t2J5MEwhr9rDkAAzwh",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3Y7RZ31TRPVadSFVy1o8os",
                },
                href: "https://api.spotify.com/v1/artists/3Y7RZ31TRPVadSFVy1o8os",
                id: "3Y7RZ31TRPVadSFVy1o8os",
                name: "H.E.R.",
                type: "artist",
                uri: "spotify:artist:3Y7RZ31TRPVadSFVy1o8os",
              },
            ],
            disc_number: 1,
            duration_ms: 209831,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1Q7EgiMOuwDcB0PJC6AzON",
            },
            href: "https://api.spotify.com/v1/tracks/1Q7EgiMOuwDcB0PJC6AzON",
            id: "1Q7EgiMOuwDcB0PJC6AzON",
            name: "Best Part (feat. H.E.R.)",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:1Q7EgiMOuwDcB0PJC6AzON",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 231267,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4s76r7AbquJcTccqJiqdVu",
            },
            href: "https://api.spotify.com/v1/tracks/4s76r7AbquJcTccqJiqdVu",
            id: "4s76r7AbquJcTccqJiqdVu",
            name: "Hold Me Down",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:4s76r7AbquJcTccqJiqdVu",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 181908,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/0bHer4P44xn8jcyMH0EMs8",
            },
            href: "https://api.spotify.com/v1/tracks/0bHer4P44xn8jcyMH0EMs8",
            id: "0bHer4P44xn8jcyMH0EMs8",
            name: "Neu Roses (Transgressor's Song)",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:0bHer4P44xn8jcyMH0EMs8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 185522,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3xqWiKFFYF9Pv7H1nNoZFd",
            },
            href: "https://api.spotify.com/v1/tracks/3xqWiKFFYF9Pv7H1nNoZFd",
            id: "3xqWiKFFYF9Pv7H1nNoZFd",
            name: "Loose",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3xqWiKFFYF9Pv7H1nNoZFd",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 254919,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5jTIePmUbBUVjJnpZeGiM3",
            },
            href: "https://api.spotify.com/v1/tracks/5jTIePmUbBUVjJnpZeGiM3",
            id: "5jTIePmUbBUVjJnpZeGiM3",
            name: "We Find Love",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:5jTIePmUbBUVjJnpZeGiM3",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 241370,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2XjoHA58XD0t3qye8bYGU8",
            },
            href: "https://api.spotify.com/v1/tracks/2XjoHA58XD0t3qye8bYGU8",
            id: "2XjoHA58XD0t3qye8bYGU8",
            name: "Blessed",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:2XjoHA58XD0t3qye8bYGU8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3jk39CGeaaSO3FPKNx1RUx",
                },
                href: "https://api.spotify.com/v1/artists/3jk39CGeaaSO3FPKNx1RUx",
                id: "3jk39CGeaaSO3FPKNx1RUx",
                name: "Syd",
                type: "artist",
                uri: "spotify:artist:3jk39CGeaaSO3FPKNx1RUx",
              },
            ],
            disc_number: 1,
            duration_ms: 226116,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/2FAVcsbVnddtEbJeUBnnaL",
            },
            href: "https://api.spotify.com/v1/tracks/2FAVcsbVnddtEbJeUBnnaL",
            id: "2FAVcsbVnddtEbJeUBnnaL",
            name: "Take Me Away (feat. Syd)",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:2FAVcsbVnddtEbJeUBnnaL",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3GQboECxDT1xqPPWC30p7v",
                },
                href: "https://api.spotify.com/v1/artists/3GQboECxDT1xqPPWC30p7v",
                id: "3GQboECxDT1xqPPWC30p7v",
                name: "Charlotte Day Wilson",
                type: "artist",
                uri: "spotify:artist:3GQboECxDT1xqPPWC30p7v",
              },
            ],
            disc_number: 1,
            duration_ms: 280586,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1K6oXSGIexEyNnv2cS6vKr",
            },
            href: "https://api.spotify.com/v1/tracks/1K6oXSGIexEyNnv2cS6vKr",
            id: "1K6oXSGIexEyNnv2cS6vKr",
            name: "Transform (feat. Charlotte Day Wilson)",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:1K6oXSGIexEyNnv2cS6vKr",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 602296,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/1WFgv04BZTx6gZWQNE6Sp7",
            },
            href: "https://api.spotify.com/v1/tracks/1WFgv04BZTx6gZWQNE6Sp7",
            id: "1WFgv04BZTx6gZWQNE6Sp7",
            name: "Freudian",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:1WFgv04BZTx6gZWQNE6Sp7",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2017 Golden Child Recordings",
          type: "C",
        },
        {
          text: "2017 Golden Child Recordings",
          type: "P",
        },
      ],
      external_ids: {
        upc: "859722261219",
      },
      genres: ["rnb"],
      label: "HV Recordings",
      popularity: 82,
    },
    {
      album_type: "album",
      total_tracks: 10,
      external_urls: {
        spotify: "https://open.spotify.com/album/7lb4ck9tn2ZaJRrYjhyP9A",
      },
      href: "https://api.spotify.com/v1/albums/7lb4ck9tn2ZaJRrYjhyP9A?locale=en-US%2Cen%3Bq%3D0.9",
      id: "7lb4ck9tn2ZaJRrYjhyP9A",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273969c21ea34fe372a3e468947",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02969c21ea34fe372a3e468947",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851969c21ea34fe372a3e468947",
          height: 64,
          width: 64,
        },
      ],
      name: "Case Study 01",
      release_date: "2019-06-28",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:7lb4ck9tn2ZaJRrYjhyP9A",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
          },
          href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
          id: "20wkVLutqVOYrc0kxFs7rA",
          name: "Daniel Caesar",
          type: "artist",
          debut:"2015",
          members : ["Daniel Caesar"],
          uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/7lb4ck9tn2ZaJRrYjhyP9A/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 10,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 261290,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2Ng5xZRhvObLUiTzI0slN6",
            },
            href: "https://api.spotify.com/v1/tracks/2Ng5xZRhvObLUiTzI0slN6",
            id: "2Ng5xZRhvObLUiTzI0slN6",
            name: "ENTROPY",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:2Ng5xZRhvObLUiTzI0slN6",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 194959,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/7lmsi1pVDa3HnfeinsL89t",
            },
            href: "https://api.spotify.com/v1/tracks/7lmsi1pVDa3HnfeinsL89t",
            id: "7lmsi1pVDa3HnfeinsL89t",
            name: "CYANIDE",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:7lmsi1pVDa3HnfeinsL89t",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/05oH07COxkXKIMt6mIPRee",
                },
                href: "https://api.spotify.com/v1/artists/05oH07COxkXKIMt6mIPRee",
                id: "05oH07COxkXKIMt6mIPRee",
                name: "Brandy",
                type: "artist",
                uri: "spotify:artist:05oH07COxkXKIMt6mIPRee",
              },
            ],
            disc_number: 1,
            duration_ms: 214277,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7AzVV4CtTbzLVMc5GDVWZj",
            },
            href: "https://api.spotify.com/v1/tracks/7AzVV4CtTbzLVMc5GDVWZj",
            id: "7AzVV4CtTbzLVMc5GDVWZj",
            name: "LOVE AGAIN",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:7AzVV4CtTbzLVMc5GDVWZj",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8",
                },
                href: "https://api.spotify.com/v1/artists/2RdwBSPQiwcmiDo9kixcl8",
                id: "2RdwBSPQiwcmiDo9kixcl8",
                name: "Pharrell Williams",
                type: "artist",
                uri: "spotify:artist:2RdwBSPQiwcmiDo9kixcl8",
              },
            ],
            disc_number: 1,
            duration_ms: 229401,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/6MoSanzfBHAV8adXz6K1Zn",
            },
            href: "https://api.spotify.com/v1/tracks/6MoSanzfBHAV8adXz6K1Zn",
            id: "6MoSanzfBHAV8adXz6K1Zn",
            name: "FRONTAL LOBE MUZIK (feat. Pharrell Williams)",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:6MoSanzfBHAV8adXz6K1Zn",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 266226,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/40vHPre1xRPeCAuK2CNfs4",
            },
            href: "https://api.spotify.com/v1/tracks/40vHPre1xRPeCAuK2CNfs4",
            id: "40vHPre1xRPeCAuK2CNfs4",
            name: "OPEN UP",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:40vHPre1xRPeCAuK2CNfs4",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/0QWrMNukfcVOmgEU0FEDyD",
                },
                href: "https://api.spotify.com/v1/artists/0QWrMNukfcVOmgEU0FEDyD",
                id: "0QWrMNukfcVOmgEU0FEDyD",
                name: "Jacob Collier",
                type: "artist",
                uri: "spotify:artist:0QWrMNukfcVOmgEU0FEDyD",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/5dtbsNKCK6Q9yZzdhZpaqW",
                },
                href: "https://api.spotify.com/v1/artists/5dtbsNKCK6Q9yZzdhZpaqW",
                id: "5dtbsNKCK6Q9yZzdhZpaqW",
                name: "Sean Leon",
                type: "artist",
                uri: "spotify:artist:5dtbsNKCK6Q9yZzdhZpaqW",
              },
            ],
            disc_number: 1,
            duration_ms: 214011,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/79ld9rq0iOwvgnaDkN0iGP",
            },
            href: "https://api.spotify.com/v1/tracks/79ld9rq0iOwvgnaDkN0iGP",
            id: "79ld9rq0iOwvgnaDkN0iGP",
            name: "RESTORE THE FEELING (feat. Sean Leon & Jacob Collier)",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:79ld9rq0iOwvgnaDkN0iGP",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/0hEurMDQu99nJRq8pTxO14",
                },
                href: "https://api.spotify.com/v1/artists/0hEurMDQu99nJRq8pTxO14",
                id: "0hEurMDQu99nJRq8pTxO14",
                name: "John Mayer",
                type: "artist",
                uri: "spotify:artist:0hEurMDQu99nJRq8pTxO14",
              },
            ],
            disc_number: 1,
            duration_ms: 263794,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/1KA2JLeMi0Mo3hjO0442re",
            },
            href: "https://api.spotify.com/v1/tracks/1KA2JLeMi0Mo3hjO0442re",
            id: "1KA2JLeMi0Mo3hjO0442re",
            name: "SUPERPOSITION (feat. John Mayer)",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:1KA2JLeMi0Mo3hjO0442re",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 318533,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/3EOzLBxti9kA01UvwfbPxs",
            },
            href: "https://api.spotify.com/v1/tracks/3EOzLBxti9kA01UvwfbPxs",
            id: "3EOzLBxti9kA01UvwfbPxs",
            name: "TOO DEEP TO TURN BACK",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:3EOzLBxti9kA01UvwfbPxs",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 230585,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6Ne0WDDrPxzr6gdJ0L0oUS",
            },
            href: "https://api.spotify.com/v1/tracks/6Ne0WDDrPxzr6gdJ0L0oUS",
            id: "6Ne0WDDrPxzr6gdJ0L0oUS",
            name: "COMPLEXITIES",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:6Ne0WDDrPxzr6gdJ0L0oUS",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/20wkVLutqVOYrc0kxFs7rA",
                },
                href: "https://api.spotify.com/v1/artists/20wkVLutqVOYrc0kxFs7rA",
                id: "20wkVLutqVOYrc0kxFs7rA",
                name: "Daniel Caesar",
                type: "artist",
                uri: "spotify:artist:20wkVLutqVOYrc0kxFs7rA",
              },
            ],
            disc_number: 1,
            duration_ms: 394579,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/5Ji2rXNyEQfTIGz1PEkLK9",
            },
            href: "https://api.spotify.com/v1/tracks/5Ji2rXNyEQfTIGz1PEkLK9",
            id: "5Ji2rXNyEQfTIGz1PEkLK9",
            name: "ARE YOU OK?",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:5Ji2rXNyEQfTIGz1PEkLK9",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2019 Daniel Caesar",
          type: "C",
        },
        {
          text: "2019 Daniel Caesar",
          type: "P",
        },
      ],
      external_ids: {
        upc: "193483999333",
      },
      genres: ["rnb"],
      label: "HV Recordings",
      popularity: 66,
    },
    {
      album_type: "album",
      total_tracks: 17,
      external_urls: {
        spotify: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf",
      },
      href: "https://api.spotify.com/v1/albums/3mH6qwIy9crq0I9YQbOuDf?locale=en-US%2Cen%3Bq%3D0.9",
      id: "3mH6qwIy9crq0I9YQbOuDf",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273c5649add07ed3720be9d5526",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851c5649add07ed3720be9d5526",
          height: 64,
          width: 64,
        },
      ],
      name: "Blonde",
      release_date: "2016-08-20",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:3mH6qwIy9crq0I9YQbOuDf",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
          },
          href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
          id: "2h93pZq0e7k5yf4dywlkpM",
          name: "Frank Ocean",
          type: "artist",
          debut:"2011",
          members: ["Frank Ocean"],
          uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/3mH6qwIy9crq0I9YQbOuDf/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 17,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 314075,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/19YKaevk2bce4odJkP5L22",
            },
            href: "https://api.spotify.com/v1/tracks/19YKaevk2bce4odJkP5L22",
            id: "19YKaevk2bce4odJkP5L22",
            name: "Nikes",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:19YKaevk2bce4odJkP5L22",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 249191,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/2ZWlPOoWh0626oTaHrnl2a",
            },
            href: "https://api.spotify.com/v1/tracks/2ZWlPOoWh0626oTaHrnl2a",
            id: "2ZWlPOoWh0626oTaHrnl2a",
            name: "Ivy",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:2ZWlPOoWh0626oTaHrnl2a",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 184516,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3xKsf9qdS1CyvXSMEid6g8",
            },
            href: "https://api.spotify.com/v1/tracks/3xKsf9qdS1CyvXSMEid6g8",
            id: "3xKsf9qdS1CyvXSMEid6g8",
            name: "Pink + White",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:3xKsf9qdS1CyvXSMEid6g8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 86943,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1IdZvb2XK8NmsovQlV6CPn",
            },
            href: "https://api.spotify.com/v1/tracks/1IdZvb2XK8NmsovQlV6CPn",
            id: "1IdZvb2XK8NmsovQlV6CPn",
            name: "Be Yourself",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:1IdZvb2XK8NmsovQlV6CPn",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 257380,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/35xSkNIXi504fcEwz9USRB",
            },
            href: "https://api.spotify.com/v1/tracks/35xSkNIXi504fcEwz9USRB",
            id: "35xSkNIXi504fcEwz9USRB",
            name: "Solo",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:35xSkNIXi504fcEwz9USRB",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 184600,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/4xR3MAscflQ262kMeiKshQ",
            },
            href: "https://api.spotify.com/v1/tracks/4xR3MAscflQ262kMeiKshQ",
            id: "4xR3MAscflQ262kMeiKshQ",
            name: "Skyline To",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:4xR3MAscflQ262kMeiKshQ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 249667,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5GUYJTQap5F3RDQiCOJhrS",
            },
            href: "https://api.spotify.com/v1/tracks/5GUYJTQap5F3RDQiCOJhrS",
            id: "5GUYJTQap5F3RDQiCOJhrS",
            name: "Self Control",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:5GUYJTQap5F3RDQiCOJhrS",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 66786,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2JUqYobT8NvARdPmc4ES2x",
            },
            href: "https://api.spotify.com/v1/tracks/2JUqYobT8NvARdPmc4ES2x",
            id: "2JUqYobT8NvARdPmc4ES2x",
            name: "Good Guy",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:2JUqYobT8NvARdPmc4ES2x",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 307151,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/7eqoqGkKwgOaWNNHx90uEZ",
            },
            href: "https://api.spotify.com/v1/tracks/7eqoqGkKwgOaWNNHx90uEZ",
            id: "7eqoqGkKwgOaWNNHx90uEZ",
            name: "Nights",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:7eqoqGkKwgOaWNNHx90uEZ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 78742,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2qtoRFCOEL1gRn5q9DJC7F",
            },
            href: "https://api.spotify.com/v1/tracks/2qtoRFCOEL1gRn5q9DJC7F",
            id: "2qtoRFCOEL1gRn5q9DJC7F",
            name: "Solo (Reprise)",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:2qtoRFCOEL1gRn5q9DJC7F",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 158478,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/17yrCsl1Ai6CZLBmGj6d6p",
            },
            href: "https://api.spotify.com/v1/tracks/17yrCsl1Ai6CZLBmGj6d6p",
            id: "17yrCsl1Ai6CZLBmGj6d6p",
            name: "Pretty Sweet",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:17yrCsl1Ai6CZLBmGj6d6p",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 68588,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/73D5hBkiVZkopZrmBZTBWf",
            },
            href: "https://api.spotify.com/v1/tracks/73D5hBkiVZkopZrmBZTBWf",
            id: "73D5hBkiVZkopZrmBZTBWf",
            name: "Facebook Story",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:73D5hBkiVZkopZrmBZTBWf",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 85754,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1VZLEW5ZfcAbKZ94XQiSZF",
            },
            href: "https://api.spotify.com/v1/tracks/1VZLEW5ZfcAbKZ94XQiSZF",
            id: "1VZLEW5ZfcAbKZ94XQiSZF",
            name: "Close To You",
            preview_url: null,
            track_number: 13,
            type: "track",
            uri: "spotify:track:1VZLEW5ZfcAbKZ94XQiSZF",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 248807,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2LMkwUfqC6S6s6qDVlEuzV",
            },
            href: "https://api.spotify.com/v1/tracks/2LMkwUfqC6S6s6qDVlEuzV",
            id: "2LMkwUfqC6S6s6qDVlEuzV",
            name: "White Ferrari",
            preview_url: null,
            track_number: 14,
            type: "track",
            uri: "spotify:track:2LMkwUfqC6S6s6qDVlEuzV",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 334570,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1BViPjTT585XAhkUUrkts0",
            },
            href: "https://api.spotify.com/v1/tracks/1BViPjTT585XAhkUUrkts0",
            id: "1BViPjTT585XAhkUUrkts0",
            name: "Seigfried",
            preview_url: null,
            track_number: 15,
            type: "track",
            uri: "spotify:track:1BViPjTT585XAhkUUrkts0",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 177922,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/34xTFwjPQ1dC6uJmleno7x",
            },
            href: "https://api.spotify.com/v1/tracks/34xTFwjPQ1dC6uJmleno7x",
            id: "34xTFwjPQ1dC6uJmleno7x",
            name: "Godspeed",
            preview_url: null,
            track_number: 16,
            type: "track",
            uri: "spotify:track:34xTFwjPQ1dC6uJmleno7x",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 564165,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/5k8LB57xOq8UUNVaKWSqrf",
            },
            href: "https://api.spotify.com/v1/tracks/5k8LB57xOq8UUNVaKWSqrf",
            id: "5k8LB57xOq8UUNVaKWSqrf",
            name: "Futura Free",
            preview_url: null,
            track_number: 17,
            type: "track",
            uri: "spotify:track:5k8LB57xOq8UUNVaKWSqrf",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2016 Boys Don't Cry",
          type: "P",
        },
      ],
      external_ids: {
        upc: "862160000302",
      },
      genres: ["rnb"],
      label: "Boys Don't Cry",
      popularity: 88,
    },
    {
      album_type: "album",
      total_tracks: 17,
      external_urls: {
        spotify: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8",
      },
      href: "https://api.spotify.com/v1/albums/392p3shh2jkxUxY2VHvlH8?locale=en-US%2Cen%3Bq%3D0.9",
      id: "392p3shh2jkxUxY2VHvlH8",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2737aede4855f6d0d738012e2e5",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e027aede4855f6d0d738012e2e5",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048517aede4855f6d0d738012e2e5",
          height: 64,
          width: 64,
        },
      ],
      name: "channel ORANGE",
      release_date: "2012-07-10",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:392p3shh2jkxUxY2VHvlH8",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
          },
          href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
          id: "2h93pZq0e7k5yf4dywlkpM",
          name: "Frank Ocean",
          type: "artist",
          debut:"2011",
          members: ["Frank Ocean"],
          uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/392p3shh2jkxUxY2VHvlH8/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 17,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 45640,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0GAE689kVy7sFT2QWZH1Xa",
            },
            href: "https://api.spotify.com/v1/tracks/0GAE689kVy7sFT2QWZH1Xa",
            id: "0GAE689kVy7sFT2QWZH1Xa",
            name: "Start",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:0GAE689kVy7sFT2QWZH1Xa",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 200746,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7DfFc7a6Rwfi3YQMRbDMau",
            },
            href: "https://api.spotify.com/v1/tracks/7DfFc7a6Rwfi3YQMRbDMau",
            id: "7DfFc7a6Rwfi3YQMRbDMau",
            name: "Thinkin Bout You",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:7DfFc7a6Rwfi3YQMRbDMau",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 39640,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/6jypaMkKsoc5npsVzxhksl",
            },
            href: "https://api.spotify.com/v1/tracks/6jypaMkKsoc5npsVzxhksl",
            id: "6jypaMkKsoc5npsVzxhksl",
            name: "Fertilizer",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:6jypaMkKsoc5npsVzxhksl",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 148760,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/1HwbgJAU9PZ7YbzKgVgoIF",
            },
            href: "https://api.spotify.com/v1/tracks/1HwbgJAU9PZ7YbzKgVgoIF",
            id: "1HwbgJAU9PZ7YbzKgVgoIF",
            name: "Sierra Leone",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:1HwbgJAU9PZ7YbzKgVgoIF",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 262680,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/6MEDfjHxnVNcYmHe3mM6L2",
            },
            href: "https://api.spotify.com/v1/tracks/6MEDfjHxnVNcYmHe3mM6L2",
            id: "6MEDfjHxnVNcYmHe3mM6L2",
            name: "Sweet Life",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:6MEDfjHxnVNcYmHe3mM6L2",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 59760,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3iW3y326xuRpNVXzOMBZy5",
            },
            href: "https://api.spotify.com/v1/tracks/3iW3y326xuRpNVXzOMBZy5",
            id: "3iW3y326xuRpNVXzOMBZy5",
            name: "Not Just Money",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:3iW3y326xuRpNVXzOMBZy5",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3A5tHz1SfngyOZM2gItYKu",
                },
                href: "https://api.spotify.com/v1/artists/3A5tHz1SfngyOZM2gItYKu",
                id: "3A5tHz1SfngyOZM2gItYKu",
                name: "Earl Sweatshirt",
                type: "artist",
                uri: "spotify:artist:3A5tHz1SfngyOZM2gItYKu",
              },
            ],
            disc_number: 1,
            duration_ms: 304760,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/0725YWm6Z0TpZ6wrNk64Eb",
            },
            href: "https://api.spotify.com/v1/tracks/0725YWm6Z0TpZ6wrNk64Eb",
            id: "0725YWm6Z0TpZ6wrNk64Eb",
            name: "Super Rich Kids",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:0725YWm6Z0TpZ6wrNk64Eb",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 184080,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2ohegz9maxzroKBu9YhcCM",
            },
            href: "https://api.spotify.com/v1/tracks/2ohegz9maxzroKBu9YhcCM",
            id: "2ohegz9maxzroKBu9YhcCM",
            name: "Pilot Jones",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:2ohegz9maxzroKBu9YhcCM",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 224146,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/5lcyIeEfwZTs8Ajw3kdF7P",
            },
            href: "https://api.spotify.com/v1/tracks/5lcyIeEfwZTs8Ajw3kdF7P",
            id: "5lcyIeEfwZTs8Ajw3kdF7P",
            name: "Crack Rock",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:5lcyIeEfwZTs8Ajw3kdF7P",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 592920,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/4QhWbupniDd44EDtnh2bFJ",
            },
            href: "https://api.spotify.com/v1/tracks/4QhWbupniDd44EDtnh2bFJ",
            id: "4QhWbupniDd44EDtnh2bFJ",
            name: "Pyramids",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:4QhWbupniDd44EDtnh2bFJ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 234093,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/3GZD6HmiNUhxXYf8Gch723",
            },
            href: "https://api.spotify.com/v1/tracks/3GZD6HmiNUhxXYf8Gch723",
            id: "3GZD6HmiNUhxXYf8Gch723",
            name: "Lost",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:3GZD6HmiNUhxXYf8Gch723",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/0hEurMDQu99nJRq8pTxO14",
                },
                href: "https://api.spotify.com/v1/artists/0hEurMDQu99nJRq8pTxO14",
                id: "0hEurMDQu99nJRq8pTxO14",
                name: "John Mayer",
                type: "artist",
                uri: "spotify:artist:0hEurMDQu99nJRq8pTxO14",
              },
            ],
            disc_number: 1,
            duration_ms: 76280,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1VMdwVq0yaTc4DeqSCi7DO",
            },
            href: "https://api.spotify.com/v1/tracks/1VMdwVq0yaTc4DeqSCi7DO",
            id: "1VMdwVq0yaTc4DeqSCi7DO",
            name: "White",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:1VMdwVq0yaTc4DeqSCi7DO",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 200240,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/0msrDPXxZpts4FRnoX0bFr",
            },
            href: "https://api.spotify.com/v1/tracks/0msrDPXxZpts4FRnoX0bFr",
            id: "0msrDPXxZpts4FRnoX0bFr",
            name: "Monks",
            preview_url: null,
            track_number: 13,
            type: "track",
            uri: "spotify:track:0msrDPXxZpts4FRnoX0bFr",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 175453,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2pMPWE7PJH1PizfgGRMnR9",
            },
            href: "https://api.spotify.com/v1/tracks/2pMPWE7PJH1PizfgGRMnR9",
            id: "2pMPWE7PJH1PizfgGRMnR9",
            name: "Bad Religion",
            preview_url: null,
            track_number: 14,
            type: "track",
            uri: "spotify:track:2pMPWE7PJH1PizfgGRMnR9",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/74V3dE1a51skRkdII8y2C6",
                },
                href: "https://api.spotify.com/v1/artists/74V3dE1a51skRkdII8y2C6",
                id: "74V3dE1a51skRkdII8y2C6",
                name: "André 3000",
                type: "artist",
                uri: "spotify:artist:74V3dE1a51skRkdII8y2C6",
              },
            ],
            disc_number: 1,
            duration_ms: 268813,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/1fOkmYW3ZFkkjIdOZSf596",
            },
            href: "https://api.spotify.com/v1/tracks/1fOkmYW3ZFkkjIdOZSf596",
            id: "1fOkmYW3ZFkkjIdOZSf596",
            name: "Pink Matter",
            preview_url: null,
            track_number: 15,
            type: "track",
            uri: "spotify:track:1fOkmYW3ZFkkjIdOZSf596",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 194840,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4YZbVct8l9MnAVIROnLQdx",
            },
            href: "https://api.spotify.com/v1/tracks/4YZbVct8l9MnAVIROnLQdx",
            id: "4YZbVct8l9MnAVIROnLQdx",
            name: "Forrest Gump",
            preview_url: null,
            track_number: 16,
            type: "track",
            uri: "spotify:track:4YZbVct8l9MnAVIROnLQdx",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM",
                },
                href: "https://api.spotify.com/v1/artists/2h93pZq0e7k5yf4dywlkpM",
                id: "2h93pZq0e7k5yf4dywlkpM",
                name: "Frank Ocean",
                type: "artist",
                uri: "spotify:artist:2h93pZq0e7k5yf4dywlkpM",
              },
            ],
            disc_number: 1,
            duration_ms: 134600,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/05tFLPSXJ1BbqIXy4Jeqfh",
            },
            href: "https://api.spotify.com/v1/tracks/05tFLPSXJ1BbqIXy4Jeqfh",
            id: "05tFLPSXJ1BbqIXy4Jeqfh",
            name: "End",
            preview_url: null,
            track_number: 17,
            type: "track",
            uri: "spotify:track:05tFLPSXJ1BbqIXy4Jeqfh",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2012 The Island Def Jam Music Group",
          type: "C",
        },
        {
          text: "℗ 2012 The Island Def Jam Music Group",
          type: "P",
        },
      ],
      external_ids: {
        upc: "00602537117680",
      },
      genres: ["rnb"],
      label: "Red Zone Entertainment / IDJ",
      popularity: 86,
    },
    {
      album_type: "album",
      total_tracks: 7,
      external_urls: {
        spotify: "https://open.spotify.com/album/2AgyTKA0rFxwXreQZDHoJS",
      },
      href: "https://api.spotify.com/v1/albums/2AgyTKA0rFxwXreQZDHoJS?locale=en-US%2Cen%3Bq%3D0.9",
      id: "2AgyTKA0rFxwXreQZDHoJS",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273511cf98965f9a0f372d21130",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02511cf98965f9a0f372d21130",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851511cf98965f9a0f372d21130",
          height: 64,
          width: 64,
        },
      ],
      name: "Distant Memories",
      release_date: "2023-06-16",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:2AgyTKA0rFxwXreQZDHoJS",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
          },
          href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
          id: "3wKV11EdqfY7lFaUeDUEC1",
          name: "Lilac",
          type: "artist",
          debut: "2018",

          members: ["Lilac"],
          uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/2AgyTKA0rFxwXreQZDHoJS/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 7,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 184118,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7ElYI4vYTiNrHIUQ0UTQG9",
            },
            href: "https://api.spotify.com/v1/tracks/7ElYI4vYTiNrHIUQ0UTQG9",
            id: "7ElYI4vYTiNrHIUQ0UTQG9",
            name: "Nightfall",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:7ElYI4vYTiNrHIUQ0UTQG9",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 157816,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0E5HO4tGYyjT1cjRcBDXIF",
            },
            href: "https://api.spotify.com/v1/tracks/0E5HO4tGYyjT1cjRcBDXIF",
            id: "0E5HO4tGYyjT1cjRcBDXIF",
            name: "Starlight",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:0E5HO4tGYyjT1cjRcBDXIF",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 90415,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/42ehifCo9agOKBqqWrAv0Y",
            },
            href: "https://api.spotify.com/v1/tracks/42ehifCo9agOKBqqWrAv0Y",
            id: "42ehifCo9agOKBqqWrAv0Y",
            name: "Unwind",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:42ehifCo9agOKBqqWrAv0Y",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 144598,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4KFzgWuLSF32228CGSM146",
            },
            href: "https://api.spotify.com/v1/tracks/4KFzgWuLSF32228CGSM146",
            id: "4KFzgWuLSF32228CGSM146",
            name: "Echoes",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:4KFzgWuLSF32228CGSM146",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 145464,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4JcDnoTBiSCgta6pIqB9ZM",
            },
            href: "https://api.spotify.com/v1/tracks/4JcDnoTBiSCgta6pIqB9ZM",
            id: "4JcDnoTBiSCgta6pIqB9ZM",
            name: "End of June",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:4JcDnoTBiSCgta6pIqB9ZM",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 146874,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6OZ2eXvZg0OoyFRBt7LtqQ",
            },
            href: "https://api.spotify.com/v1/tracks/6OZ2eXvZg0OoyFRBt7LtqQ",
            id: "6OZ2eXvZg0OoyFRBt7LtqQ",
            name: "A Distant Memory",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:6OZ2eXvZg0OoyFRBt7LtqQ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 120357,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/07phpVj3wFCYXOhaBNT73V",
            },
            href: "https://api.spotify.com/v1/tracks/07phpVj3wFCYXOhaBNT73V",
            id: "07phpVj3wFCYXOhaBNT73V",
            name: "Cycles",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:07phpVj3wFCYXOhaBNT73V",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2023 Lilac",
          type: "C",
        },
        {
          text: "2023 Lilac",
          type: "P",
        },
      ],
      external_ids: {
        upc: "197802884218",
      },
      genres: ["lofi"],
      label: "Lilac",
      popularity: 12,
    },
    {
      album_type: "album",
      total_tracks: 12,
      external_urls: {
        spotify: "https://open.spotify.com/album/6jzWeIvEp9bG1pPGcaxOKm",
      },
      href: "https://api.spotify.com/v1/albums/6jzWeIvEp9bG1pPGcaxOKm?locale=en-US%2Cen%3Bq%3D0.9",
      id: "6jzWeIvEp9bG1pPGcaxOKm",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2734682330dcfe1c012f8187d29",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e024682330dcfe1c012f8187d29",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048514682330dcfe1c012f8187d29",
          height: 64,
          width: 64,
        },
      ],
      name: "Someday",
      release_date: "2021-12-17",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:6jzWeIvEp9bG1pPGcaxOKm",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
          },
          href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
          id: "3wKV11EdqfY7lFaUeDUEC1",
          name: "Lilac",
          type: "artist",
          debut: "2018",
          members: ["Lilac"],
          uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/6jzWeIvEp9bG1pPGcaxOKm/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 12,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 158832,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0kSbeJz3SoQ7xi7Ajc7ytW",
            },
            href: "https://api.spotify.com/v1/tracks/0kSbeJz3SoQ7xi7Ajc7ytW",
            id: "0kSbeJz3SoQ7xi7Ajc7ytW",
            name: "Constellations",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:0kSbeJz3SoQ7xi7Ajc7ytW",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 183538,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2PTAl9nNYEtKpvArHjwNum",
            },
            href: "https://api.spotify.com/v1/tracks/2PTAl9nNYEtKpvArHjwNum",
            id: "2PTAl9nNYEtKpvArHjwNum",
            name: "Where You Lay",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:2PTAl9nNYEtKpvArHjwNum",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 142126,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4F66ubOIxAgivl4RLxYT4y",
            },
            href: "https://api.spotify.com/v1/tracks/4F66ubOIxAgivl4RLxYT4y",
            id: "4F66ubOIxAgivl4RLxYT4y",
            name: "Safe Inside",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:4F66ubOIxAgivl4RLxYT4y",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 131523,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6ZTTxSKNU4QB4wtwb9Nnlk",
            },
            href: "https://api.spotify.com/v1/tracks/6ZTTxSKNU4QB4wtwb9Nnlk",
            id: "6ZTTxSKNU4QB4wtwb9Nnlk",
            name: "Think of Me",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:6ZTTxSKNU4QB4wtwb9Nnlk",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 128578,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3AVy0RYVcmhTGIT6I7tXqM",
            },
            href: "https://api.spotify.com/v1/tracks/3AVy0RYVcmhTGIT6I7tXqM",
            id: "3AVy0RYVcmhTGIT6I7tXqM",
            name: "Blankets",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3AVy0RYVcmhTGIT6I7tXqM",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 168657,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7B2b5bJvhZAmEvb51HuCv6",
            },
            href: "https://api.spotify.com/v1/tracks/7B2b5bJvhZAmEvb51HuCv6",
            id: "7B2b5bJvhZAmEvb51HuCv6",
            name: "Through The Clouds",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:7B2b5bJvhZAmEvb51HuCv6",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 133961,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3IjFQmi1rRdsSiqdpMdDyG",
            },
            href: "https://api.spotify.com/v1/tracks/3IjFQmi1rRdsSiqdpMdDyG",
            id: "3IjFQmi1rRdsSiqdpMdDyG",
            name: "To Be Where You Are",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:3IjFQmi1rRdsSiqdpMdDyG",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 135211,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5p4O316rHJeTFjIg6FoX8n",
            },
            href: "https://api.spotify.com/v1/tracks/5p4O316rHJeTFjIg6FoX8n",
            id: "5p4O316rHJeTFjIg6FoX8n",
            name: "In Winters Garden",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:5p4O316rHJeTFjIg6FoX8n",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 137083,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1bBAxb90UUG80pwnSnQH3i",
            },
            href: "https://api.spotify.com/v1/tracks/1bBAxb90UUG80pwnSnQH3i",
            id: "1bBAxb90UUG80pwnSnQH3i",
            name: "Dreams of Lavender",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:1bBAxb90UUG80pwnSnQH3i",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 152589,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/393pJQiRtcgcCwWqZ1zO2L",
            },
            href: "https://api.spotify.com/v1/tracks/393pJQiRtcgcCwWqZ1zO2L",
            id: "393pJQiRtcgcCwWqZ1zO2L",
            name: "Balcony",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:393pJQiRtcgcCwWqZ1zO2L",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 180304,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4pMGGyrVMpHz1CfdWa8A0S",
            },
            href: "https://api.spotify.com/v1/tracks/4pMGGyrVMpHz1CfdWa8A0S",
            id: "4pMGGyrVMpHz1CfdWa8A0S",
            name: "Autumns Door",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:4pMGGyrVMpHz1CfdWa8A0S",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 142711,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3T6NjaHyjEwX1w0TViA4fp",
            },
            href: "https://api.spotify.com/v1/tracks/3T6NjaHyjEwX1w0TViA4fp",
            id: "3T6NjaHyjEwX1w0TViA4fp",
            name: "The Flight I'd Never Board",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:3T6NjaHyjEwX1w0TViA4fp",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2021 Lilac",
          type: "C",
        },
        {
          text: "2021 Lilac",
          type: "P",
        },
      ],
      external_ids: {
        upc: "196513730548",
      },
      genres: ["lofi"],
      label: "Lilac",
      popularity: 11,
    },
    {
      album_type: "album",
      total_tracks: 10,
      external_urls: {
        spotify: "https://open.spotify.com/album/6g5QhHxxBw6m3HTiwrNn3G",
      },
      href: "https://api.spotify.com/v1/albums/6g5QhHxxBw6m3HTiwrNn3G?locale=en-US%2Cen%3Bq%3D0.9",
      id: "6g5QhHxxBw6m3HTiwrNn3G",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27311547fa87773828db635cb2d",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0211547fa87773828db635cb2d",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485111547fa87773828db635cb2d",
          height: 64,
          width: 64,
        },
      ],
      name: "Precious",
      release_date: "2020-10-16",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:6g5QhHxxBw6m3HTiwrNn3G",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
          },
          href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
          id: "3wKV11EdqfY7lFaUeDUEC1",
          name: "Lilac",
          type: "artist",
          debut: "2018",
          members: ["Lilac"],
          uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/6g5QhHxxBw6m3HTiwrNn3G/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 10,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 104122,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/29YexmcXIimcj4hn4gb2Sa",
            },
            href: "https://api.spotify.com/v1/tracks/29YexmcXIimcj4hn4gb2Sa",
            id: "29YexmcXIimcj4hn4gb2Sa",
            name: "Waiting for You",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:29YexmcXIimcj4hn4gb2Sa",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 100388,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1Mvr1LemF0aIv5roSq3ca1",
            },
            href: "https://api.spotify.com/v1/tracks/1Mvr1LemF0aIv5roSq3ca1",
            id: "1Mvr1LemF0aIv5roSq3ca1",
            name: "Happy Together",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:1Mvr1LemF0aIv5roSq3ca1",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7uA2p3333eiW9Cknf1twtU",
                },
                href: "https://api.spotify.com/v1/artists/7uA2p3333eiW9Cknf1twtU",
                id: "7uA2p3333eiW9Cknf1twtU",
                name: "invention_",
                type: "artist",
                uri: "spotify:artist:7uA2p3333eiW9Cknf1twtU",
              },
            ],
            disc_number: 1,
            duration_ms: 140400,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0RpeuAN0wyXvhkIs16rNXO",
            },
            href: "https://api.spotify.com/v1/tracks/0RpeuAN0wyXvhkIs16rNXO",
            id: "0RpeuAN0wyXvhkIs16rNXO",
            name: "Candlelight",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:0RpeuAN0wyXvhkIs16rNXO",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 70990,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1Cm06RyI1tL98NsC8QgII1",
            },
            href: "https://api.spotify.com/v1/tracks/1Cm06RyI1tL98NsC8QgII1",
            id: "1Cm06RyI1tL98NsC8QgII1",
            name: "Polaroid",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:1Cm06RyI1tL98NsC8QgII1",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/0wcen0V8FgQu6xYupnZMbB",
                },
                href: "https://api.spotify.com/v1/artists/0wcen0V8FgQu6xYupnZMbB",
                id: "0wcen0V8FgQu6xYupnZMbB",
                name: "softy",
                type: "artist",
                uri: "spotify:artist:0wcen0V8FgQu6xYupnZMbB",
              },
            ],
            disc_number: 1,
            duration_ms: 128571,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3W70cdRDVh5iNFMONd9yRK",
            },
            href: "https://api.spotify.com/v1/tracks/3W70cdRDVh5iNFMONd9yRK",
            id: "3W70cdRDVh5iNFMONd9yRK",
            name: "By the Window",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3W70cdRDVh5iNFMONd9yRK",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 108582,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0O4P5GcgUgm5dzIp7LnoL2",
            },
            href: "https://api.spotify.com/v1/tracks/0O4P5GcgUgm5dzIp7LnoL2",
            id: "0O4P5GcgUgm5dzIp7LnoL2",
            name: "White Peach",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:0O4P5GcgUgm5dzIp7LnoL2",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 116675,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6RoeOe8VkDEJryVsci4Dqd",
            },
            href: "https://api.spotify.com/v1/tracks/6RoeOe8VkDEJryVsci4Dqd",
            id: "6RoeOe8VkDEJryVsci4Dqd",
            name: "Rose Gold",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:6RoeOe8VkDEJryVsci4Dqd",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 112605,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/60UdMCfWHeZ1AtbrH3BlYC",
            },
            href: "https://api.spotify.com/v1/tracks/60UdMCfWHeZ1AtbrH3BlYC",
            id: "60UdMCfWHeZ1AtbrH3BlYC",
            name: "Stay",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:60UdMCfWHeZ1AtbrH3BlYC",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 120624,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/14aRkYJDTtrirjMwnL6Q8m",
            },
            href: "https://api.spotify.com/v1/tracks/14aRkYJDTtrirjMwnL6Q8m",
            id: "14aRkYJDTtrirjMwnL6Q8m",
            name: "Precious",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:14aRkYJDTtrirjMwnL6Q8m",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3wKV11EdqfY7lFaUeDUEC1",
                },
                href: "https://api.spotify.com/v1/artists/3wKV11EdqfY7lFaUeDUEC1",
                id: "3wKV11EdqfY7lFaUeDUEC1",
                name: "Lilac",
                type: "artist",
                uri: "spotify:artist:3wKV11EdqfY7lFaUeDUEC1",
              },
            ],
            disc_number: 1,
            duration_ms: 95950,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/56EplNZdnuNPLkhgWgJtmM",
            },
            href: "https://api.spotify.com/v1/tracks/56EplNZdnuNPLkhgWgJtmM",
            id: "56EplNZdnuNPLkhgWgJtmM",
            name: "Jasmine",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:56EplNZdnuNPLkhgWgJtmM",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2020 Lilac",
          type: "C",
        },
        {
          text: "2020 Lilac",
          type: "P",
        },
      ],
      external_ids: {
        upc: "195595242420",
      },
      genres: ["lofi"],
      label: "Lilac",
      popularity: 10,
    },
    {
      album_type: "album",
      total_tracks: 8,
      external_urls: {
        spotify: "https://open.spotify.com/album/7evVSYUhQhpzygBaKYk1jH",
      },
      href: "https://api.spotify.com/v1/albums/7evVSYUhQhpzygBaKYk1jH?locale=en-US%2Cen%3Bq%3D0.9",
      id: "7evVSYUhQhpzygBaKYk1jH",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2732acd7a42840de586c30986c5",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e022acd7a42840de586c30986c5",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048512acd7a42840de586c30986c5",
          height: 64,
          width: 64,
        },
      ],
      name: "Love Part 2",
      release_date: "2023-05-04",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:7evVSYUhQhpzygBaKYk1jH",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
          },
          href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
          id: "3VQDqjQ4wJyw8PzpGdlZpB",
          name: "Colde",
          type: "artist",
          debut: "2018",
          members : ["Kim Hee-soo"],
          uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/7evVSYUhQhpzygBaKYk1jH/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 8,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 257760,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3C9IPc0plNiiLcjZeFjYt6",
            },
            href: "https://api.spotify.com/v1/tracks/3C9IPc0plNiiLcjZeFjYt6",
            id: "3C9IPc0plNiiLcjZeFjYt6",
            name: "Island",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:3C9IPc0plNiiLcjZeFjYt6",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2auC28zjQyVTsiZKNgPRGs",
                },
                href: "https://api.spotify.com/v1/artists/2auC28zjQyVTsiZKNgPRGs",
                id: "2auC28zjQyVTsiZKNgPRGs",
                name: "RM",
                type: "artist",
                uri: "spotify:artist:2auC28zjQyVTsiZKNgPRGs",
              },
            ],
            disc_number: 1,
            duration_ms: 214933,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4UMKAWKI1ljNHNxkmAAch0",
            },
            href: "https://api.spotify.com/v1/tracks/4UMKAWKI1ljNHNxkmAAch0",
            id: "4UMKAWKI1ljNHNxkmAAch0",
            name: "Don't ever say love me (feat. RM of BTS)",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:4UMKAWKI1ljNHNxkmAAch0",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 207613,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7bpBHd0dSmd6BeNoEGJU2v",
            },
            href: "https://api.spotify.com/v1/tracks/7bpBHd0dSmd6BeNoEGJU2v",
            id: "7bpBHd0dSmd6BeNoEGJU2v",
            name: "I'm Still Here",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:7bpBHd0dSmd6BeNoEGJU2v",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4RkTSLr5Qf79FfUkeaDKbl",
                },
                href: "https://api.spotify.com/v1/artists/4RkTSLr5Qf79FfUkeaDKbl",
                id: "4RkTSLr5Qf79FfUkeaDKbl",
                name: "LEE CHANHYUK",
                type: "artist",
                uri: "spotify:artist:4RkTSLr5Qf79FfUkeaDKbl",
              },
            ],
            disc_number: 1,
            duration_ms: 218173,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5gErFVEgLZy1xmwU8ze2sA",
            },
            href: "https://api.spotify.com/v1/tracks/5gErFVEgLZy1xmwU8ze2sA",
            id: "5gErFVEgLZy1xmwU8ze2sA",
            name: "Heartbreak Club (feat. LEE CHANHYUK)",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:5gErFVEgLZy1xmwU8ze2sA",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 270280,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3hiCH2tRo4jefG9crav24x",
            },
            href: "https://api.spotify.com/v1/tracks/3hiCH2tRo4jefG9crav24x",
            id: "3hiCH2tRo4jefG9crav24x",
            name: "After Everything",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3hiCH2tRo4jefG9crav24x",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4ufh0WuMZh6y4Dmdnklvdl",
                },
                href: "https://api.spotify.com/v1/artists/4ufh0WuMZh6y4Dmdnklvdl",
                id: "4ufh0WuMZh6y4Dmdnklvdl",
                name: "BAEKHYUN",
                type: "artist",
                uri: "spotify:artist:4ufh0WuMZh6y4Dmdnklvdl",
              },
            ],
            disc_number: 1,
            duration_ms: 236666,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1KaQt1oSSar5E4jGXvrXP4",
            },
            href: "https://api.spotify.com/v1/tracks/1KaQt1oSSar5E4jGXvrXP4",
            id: "1KaQt1oSSar5E4jGXvrXP4",
            name: "When Dawn Comes Again (feat. BAEKHYUN)",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:1KaQt1oSSar5E4jGXvrXP4",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 213986,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1IvElUpVg6h5fisml0FBDQ",
            },
            href: "https://api.spotify.com/v1/tracks/1IvElUpVg6h5fisml0FBDQ",
            id: "1IvElUpVg6h5fisml0FBDQ",
            name: "Settle",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:1IvElUpVg6h5fisml0FBDQ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 206000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5ygnxiG2NxnWRsOd2Homc8",
            },
            href: "https://api.spotify.com/v1/tracks/5ygnxiG2NxnWRsOd2Homc8",
            id: "5ygnxiG2NxnWRsOd2Homc8",
            name: "Even Though You Said So Easily",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:5ygnxiG2NxnWRsOd2Homc8",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2023 WAVY",
          type: "C",
        },
        {
          text: "(P) 2023 WAVY",
          type: "P",
        },
      ],
      external_ids: {
        upc: "5054197670466",
      },
      genres: ["krnb"],
      label: "WAVY",
      popularity: 51,
    },
    {
      album_type: "album",
      total_tracks: 7,
      external_urls: {
        spotify: "https://open.spotify.com/album/0Jt7PBbKUFwLNEkk6hpPZd",
      },
      href: "https://api.spotify.com/v1/albums/0Jt7PBbKUFwLNEkk6hpPZd?locale=en-US%2Cen%3Bq%3D0.9",
      id: "0Jt7PBbKUFwLNEkk6hpPZd",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273d2c22d34e2fbcfe81ecf7a54",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02d2c22d34e2fbcfe81ecf7a54",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851d2c22d34e2fbcfe81ecf7a54",
          height: 64,
          width: 64,
        },
      ],
      name: "idealism",
      release_date: "2021-01-25",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:0Jt7PBbKUFwLNEkk6hpPZd",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
          },
          href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
          id: "3VQDqjQ4wJyw8PzpGdlZpB",
          name: "Colde",
          type: "artist",
          debut: "2018",members : ["Kim Hee-soo"],
          uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/0Jt7PBbKUFwLNEkk6hpPZd/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 7,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 224000,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/7yPkaHwI1RILlhFiWrdGkU",
            },
            href: "https://api.spotify.com/v1/tracks/7yPkaHwI1RILlhFiWrdGkU",
            id: "7yPkaHwI1RILlhFiWrdGkU",
            name: "Lighter",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:7yPkaHwI1RILlhFiWrdGkU",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 247999,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3QqI4GmD4fSoC6A6V8rxsI",
            },
            href: "https://api.spotify.com/v1/tracks/3QqI4GmD4fSoC6A6V8rxsI",
            id: "3QqI4GmD4fSoC6A6V8rxsI",
            name: "Wolf",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:3QqI4GmD4fSoC6A6V8rxsI",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 199999,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0dID8jIhtyXv5qKFKuUwoX",
            },
            href: "https://api.spotify.com/v1/tracks/0dID8jIhtyXv5qKFKuUwoX",
            id: "0dID8jIhtyXv5qKFKuUwoX",
            name: "The Museum",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:0dID8jIhtyXv5qKFKuUwoX",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 200000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3Ter87wIQlwg25LMjuf9cB",
            },
            href: "https://api.spotify.com/v1/tracks/3Ter87wIQlwg25LMjuf9cB",
            id: "3Ter87wIQlwg25LMjuf9cB",
            name: "Dream",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:3Ter87wIQlwg25LMjuf9cB",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 117000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5hgpZBL1DB4BrddxYP9CkW",
            },
            href: "https://api.spotify.com/v1/tracks/5hgpZBL1DB4BrddxYP9CkW",
            id: "5hgpZBL1DB4BrddxYP9CkW",
            name: "Tunnel",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:5hgpZBL1DB4BrddxYP9CkW",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 289000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7x63A2ceUzPs7UBAxmVGbf",
            },
            href: "https://api.spotify.com/v1/tracks/7x63A2ceUzPs7UBAxmVGbf",
            id: "7x63A2ceUzPs7UBAxmVGbf",
            name: "A Song Nobody Knows",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:7x63A2ceUzPs7UBAxmVGbf",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 198000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4fxFY3BpB0Ue1yMqqAy60m",
            },
            href: "https://api.spotify.com/v1/tracks/4fxFY3BpB0Ue1yMqqAy60m",
            id: "4fxFY3BpB0Ue1yMqqAy60m",
            name: "Blue Candle",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:4fxFY3BpB0Ue1yMqqAy60m",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2021 WAVY",
          type: "C",
        },
        {
          text: "(P) 2021 WAVY",
          type: "P",
        },
      ],
      external_ids: {
        upc: "190296425332",
      },
      genres: ["krnb"],
      label: "WAVY",
      popularity: 43,
    },
    {
      album_type: "album",
      total_tracks: 8,
      external_urls: {
        spotify: "https://open.spotify.com/album/4hWXKLNdKvCEaytohINtdD",
      },
      href: "https://api.spotify.com/v1/albums/4hWXKLNdKvCEaytohINtdD?locale=en-US%2Cen%3Bq%3D0.9",
      id: "4hWXKLNdKvCEaytohINtdD",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273085a8295daadc48a939d6828",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02085a8295daadc48a939d6828",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851085a8295daadc48a939d6828",
          height: 64,
          width: 64,
        },
      ],
      name: "Wave",
      release_date: "2018-09-13",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:4hWXKLNdKvCEaytohINtdD",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
          },
          href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
          id: "3VQDqjQ4wJyw8PzpGdlZpB",
          name: "Colde",
          type: "artist",
          debut: "2018",members : ["Kim Hee-soo"],
          uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/4hWXKLNdKvCEaytohINtdD/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 8,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 224000,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/0lumHTcnEKub3cPw14zP5k",
            },
            href: "https://api.spotify.com/v1/tracks/0lumHTcnEKub3cPw14zP5k",
            id: "0lumHTcnEKub3cPw14zP5k",
            name: "Freedom",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:0lumHTcnEKub3cPw14zP5k",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 253000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6p6wGpGmRHCWotPCy9qQZx",
            },
            href: "https://api.spotify.com/v1/tracks/6p6wGpGmRHCWotPCy9qQZx",
            id: "6p6wGpGmRHCWotPCy9qQZx",
            name: "Move",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:6p6wGpGmRHCWotPCy9qQZx",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/46KQM3HJyONaKRTbcfNPlU",
                },
                href: "https://api.spotify.com/v1/artists/46KQM3HJyONaKRTbcfNPlU",
                id: "46KQM3HJyONaKRTbcfNPlU",
                name: "Omega Sapien",
                type: "artist",
                uri: "spotify:artist:46KQM3HJyONaKRTbcfNPlU",
              },
            ],
            disc_number: 1,
            duration_ms: 214000,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/5YbtV0U30T6cyAB8g9qzd2",
            },
            href: "https://api.spotify.com/v1/tracks/5YbtV0U30T6cyAB8g9qzd2",
            id: "5YbtV0U30T6cyAB8g9qzd2",
            name: "YAYAYA (feat. Omega Sapien)",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:5YbtV0U30T6cyAB8g9qzd2",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 255000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3mmkoQxrHrmyQ9mV82RUqi",
            },
            href: "https://api.spotify.com/v1/tracks/3mmkoQxrHrmyQ9mV82RUqi",
            id: "3mmkoQxrHrmyQ9mV82RUqi",
            name: "Sunflower",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:3mmkoQxrHrmyQ9mV82RUqi",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 170000,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/5c2u7E9NDywU8F38u6emPe",
            },
            href: "https://api.spotify.com/v1/tracks/5c2u7E9NDywU8F38u6emPe",
            id: "5c2u7E9NDywU8F38u6emPe",
            name: "SPACE",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:5c2u7E9NDywU8F38u6emPe",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 219000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5U9dSNPkjpLKnQXsi1cCvR",
            },
            href: "https://api.spotify.com/v1/tracks/5U9dSNPkjpLKnQXsi1cCvR",
            id: "5U9dSNPkjpLKnQXsi1cCvR",
            name: "Lovestruck",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:5U9dSNPkjpLKnQXsi1cCvR",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/04L3elxyr0XFua2Ek3domW",
                },
                href: "https://api.spotify.com/v1/artists/04L3elxyr0XFua2Ek3domW",
                id: "04L3elxyr0XFua2Ek3domW",
                name: "Sunwoojunga",
                type: "artist",
                uri: "spotify:artist:04L3elxyr0XFua2Ek3domW",
              },
            ],
            disc_number: 1,
            duration_ms: 238000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/614kIm2nffZ9LuuyKQeLlm",
            },
            href: "https://api.spotify.com/v1/tracks/614kIm2nffZ9LuuyKQeLlm",
            id: "614kIm2nffZ9LuuyKQeLlm",
            name: "String (feat. sunwoojunga)",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:614kIm2nffZ9LuuyKQeLlm",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/3VQDqjQ4wJyw8PzpGdlZpB",
                },
                href: "https://api.spotify.com/v1/artists/3VQDqjQ4wJyw8PzpGdlZpB",
                id: "3VQDqjQ4wJyw8PzpGdlZpB",
                name: "Colde",
                type: "artist",
                uri: "spotify:artist:3VQDqjQ4wJyw8PzpGdlZpB",
              },
            ],
            disc_number: 1,
            duration_ms: 259000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1B5tYT93UXHMbk71eiQ5Aj",
            },
            href: "https://api.spotify.com/v1/tracks/1B5tYT93UXHMbk71eiQ5Aj",
            id: "1B5tYT93UXHMbk71eiQ5Aj",
            name: "Please Love Me",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:1B5tYT93UXHMbk71eiQ5Aj",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2018 WAVY",
          type: "C",
        },
        {
          text: "(P) 2018 WAVY",
          type: "P",
        },
      ],
      external_ids: {
        upc: "190296425387",
      },
      genres: ["krnb"],
      label: "WAVY",
      popularity: 35,
    },
    {
      album_type: "single",
      total_tracks: 7,
      external_urls: {
        spotify: "https://open.spotify.com/album/4eguh1dJUXRh0IMiLKRwab",
      },
      href: "https://api.spotify.com/v1/albums/4eguh1dJUXRh0IMiLKRwab?locale=en-US%2Cen%3Bq%3D0.9",
      id: "4eguh1dJUXRh0IMiLKRwab",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27315175a3af8eb08dbc8c77a31",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0215175a3af8eb08dbc8c77a31",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485115175a3af8eb08dbc8c77a31",
          height: 64,
          width: 64,
        },
      ],
      name: "Lose Yourself",
      release_date: "2024-10-15",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:4eguh1dJUXRh0IMiLKRwab",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
          },
          href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
          id: "4TEK9tIkcoxib4GxT3O4ky",
          name: "KISS OF LIFE",
          type: "artist",
          debut: "2023",
          members : ["Julie" ,"Natty","Belle","Haneul"],
          uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/4eguh1dJUXRh0IMiLKRwab/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 7,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 169973,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7zi7dD55ORKCGEjDNwSa1n",
            },
            href: "https://api.spotify.com/v1/tracks/7zi7dD55ORKCGEjDNwSa1n",
            id: "7zi7dD55ORKCGEjDNwSa1n",
            name: "Get Loud",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:7zi7dD55ORKCGEjDNwSa1n",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 172773,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0RbfBh91M6Xh1OL1ZUJYF1",
            },
            href: "https://api.spotify.com/v1/tracks/0RbfBh91M6Xh1OL1ZUJYF1",
            id: "0RbfBh91M6Xh1OL1ZUJYF1",
            name: "R.E.M",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:0RbfBh91M6Xh1OL1ZUJYF1",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 184320,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6Gp5KgUbpWHQPKKSYHXGzY",
            },
            href: "https://api.spotify.com/v1/tracks/6Gp5KgUbpWHQPKKSYHXGzY",
            id: "6Gp5KgUbpWHQPKKSYHXGzY",
            name: "Chemistry",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:6Gp5KgUbpWHQPKKSYHXGzY",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 131786,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2DbDefRFJ5YOfXCKOeCJJh",
            },
            href: "https://api.spotify.com/v1/tracks/2DbDefRFJ5YOfXCKOeCJJh",
            id: "2DbDefRFJ5YOfXCKOeCJJh",
            name: "Igloo",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:2DbDefRFJ5YOfXCKOeCJJh",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 156346,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/18mNgpNYZu7WwbLUH0uIqb",
            },
            href: "https://api.spotify.com/v1/tracks/18mNgpNYZu7WwbLUH0uIqb",
            id: "18mNgpNYZu7WwbLUH0uIqb",
            name: "Too Many Alex",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:18mNgpNYZu7WwbLUH0uIqb",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 170186,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/421MeODimwUOz9IaK8EKU6",
            },
            href: "https://api.spotify.com/v1/tracks/421MeODimwUOz9IaK8EKU6",
            id: "421MeODimwUOz9IaK8EKU6",
            name: "Back To Me",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:421MeODimwUOz9IaK8EKU6",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 185760,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0F1UVfq04oh3d9F05cioVI",
            },
            href: "https://api.spotify.com/v1/tracks/0F1UVfq04oh3d9F05cioVI",
            id: "0F1UVfq04oh3d9F05cioVI",
            name: "No One But Us",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:0F1UVfq04oh3d9F05cioVI",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2024 S2 ENTERTAINMENT INC.,under license to Kakao Entertainment",
          type: "C",
        },
        {
          text: "2024 S2 ENTERTAINMENT INC.,under license to Kakao Entertainment",
          type: "P",
        },
      ],
      external_ids: {
        upc: "8804775370199",
      },
      genres: ["kpop"],
      label: "S2 ENTERTAINMENT INC.",
      popularity: 73,
    },
    {
      album_type: "single",
      total_tracks: 6,
      external_urls: {
        spotify: "https://open.spotify.com/album/5k34rAvlw3WV7Kh6dAZnxG",
      },
      href: "https://api.spotify.com/v1/albums/5k34rAvlw3WV7Kh6dAZnxG?locale=en-US%2Cen%3Bq%3D0.9",
      id: "5k34rAvlw3WV7Kh6dAZnxG",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2732ff7c76b0790cd3ad63cfc0c",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e022ff7c76b0790cd3ad63cfc0c",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048512ff7c76b0790cd3ad63cfc0c",
          height: 64,
          width: 64,
        },
      ],
      name: "KISS OF LIFE",
      release_date: "2023-07-05",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:5k34rAvlw3WV7Kh6dAZnxG",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
          },
          href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
          id: "4TEK9tIkcoxib4GxT3O4ky",
          name: "KISS OF LIFE",
          type: "artist",
          debut: "2023",
          members : ["Julie" ,"Natty","Belle","Haneul"],
          uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/5k34rAvlw3WV7Kh6dAZnxG/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 6,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 182240,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/76qqDJijAjFph7sjUxNVG8",
            },
            href: "https://api.spotify.com/v1/tracks/76qqDJijAjFph7sjUxNVG8",
            id: "76qqDJijAjFph7sjUxNVG8",
            name: "Shhh",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:76qqDJijAjFph7sjUxNVG8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 203040,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7n6L2QVQ0eDqXUVRZ8qpY8",
            },
            href: "https://api.spotify.com/v1/tracks/7n6L2QVQ0eDqXUVRZ8qpY8",
            id: "7n6L2QVQ0eDqXUVRZ8qpY8",
            name: "Bye My Neverland",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:7n6L2QVQ0eDqXUVRZ8qpY8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 179866,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0NoeYUnwpb9R26mpylHcR9",
            },
            href: "https://api.spotify.com/v1/tracks/0NoeYUnwpb9R26mpylHcR9",
            id: "0NoeYUnwpb9R26mpylHcR9",
            name: "Sugarcoat (NATTY Solo)",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:0NoeYUnwpb9R26mpylHcR9",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 171013,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3pJbio7BQLvqNne62Xe73I",
            },
            href: "https://api.spotify.com/v1/tracks/3pJbio7BQLvqNne62Xe73I",
            id: "3pJbio7BQLvqNne62Xe73I",
            name: "Countdown (BELLE Solo)",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:3pJbio7BQLvqNne62Xe73I",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 170053,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6MiodzZmp1bKamgF3qhmre",
            },
            href: "https://api.spotify.com/v1/tracks/6MiodzZmp1bKamgF3qhmre",
            id: "6MiodzZmp1bKamgF3qhmre",
            name: "Kitty Cat (JULIE Solo)",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:6MiodzZmp1bKamgF3qhmre",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 180306,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0VTUCVuiOcMnCdGf63ywHu",
            },
            href: "https://api.spotify.com/v1/tracks/0VTUCVuiOcMnCdGf63ywHu",
            id: "0VTUCVuiOcMnCdGf63ywHu",
            name: "Play Love Games (HANEUL Solo)",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:0VTUCVuiOcMnCdGf63ywHu",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2023 S2 ENTERTAINMENT INC.,under license to Kakao Entertainment",
          type: "C",
        },
        {
          text: "2023 S2 ENTERTAINMENT INC.,under license to Kakao Entertainment",
          type: "P",
        },
      ],
      external_ids: {
        upc: "8804775288852",
      },
      genres: ["kpop"],
      label: "S2 ENTERTAINMENT INC.",
      popularity: 64,
    },
    {
      album_type: "single",
      total_tracks: 7,
      external_urls: {
        spotify: "https://open.spotify.com/album/6yDtQxvq1XRC7Y5qtS03Xx",
      },
      href: "https://api.spotify.com/v1/albums/6yDtQxvq1XRC7Y5qtS03Xx?locale=en-US%2Cen%3Bq%3D0.9",
      id: "6yDtQxvq1XRC7Y5qtS03Xx",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27396d36aec71bf25f59df5cc96",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0296d36aec71bf25f59df5cc96",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485196d36aec71bf25f59df5cc96",
          height: 64,
          width: 64,
        },
      ],
      name: "Born to be XX",
      release_date: "2023-11-08",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:6yDtQxvq1XRC7Y5qtS03Xx",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
          },
          href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
          id: "4TEK9tIkcoxib4GxT3O4ky",
          name: "KISS OF LIFE",
          type: "artist",
          debut: "2023",
          members : ["Julie" ,"Natty","Belle","Haneul"],
          uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/6yDtQxvq1XRC7Y5qtS03Xx/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 7,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 160386,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7AGq5qaaF9awHDaKuCvVjj",
            },
            href: "https://api.spotify.com/v1/tracks/7AGq5qaaF9awHDaKuCvVjj",
            id: "7AGq5qaaF9awHDaKuCvVjj",
            name: "Bad News",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:7AGq5qaaF9awHDaKuCvVjj",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 195960,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/70efTlnBNM8BvfhfPiqOBN",
            },
            href: "https://api.spotify.com/v1/tracks/70efTlnBNM8BvfhfPiqOBN",
            id: "70efTlnBNM8BvfhfPiqOBN",
            name: "Nobody Knows",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:70efTlnBNM8BvfhfPiqOBN",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 159480,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4eYHnUeE6mVXKg6S7kOatk",
            },
            href: "https://api.spotify.com/v1/tracks/4eYHnUeE6mVXKg6S7kOatk",
            id: "4eYHnUeE6mVXKg6S7kOatk",
            name: "My 808",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:4eYHnUeE6mVXKg6S7kOatk",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 209866,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3qqwxYn7GZhwRa93L388oA",
            },
            href: "https://api.spotify.com/v1/tracks/3qqwxYn7GZhwRa93L388oA",
            id: "3qqwxYn7GZhwRa93L388oA",
            name: "TTG",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:3qqwxYn7GZhwRa93L388oA",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 178226,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5JjVCxjqX1zwZc5MRa39ly",
            },
            href: "https://api.spotify.com/v1/tracks/5JjVCxjqX1zwZc5MRa39ly",
            id: "5JjVCxjqX1zwZc5MRa39ly",
            name: "Gentleman",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:5JjVCxjqX1zwZc5MRa39ly",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 211666,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/76QiMQU5Nu61OWrxbp6RI8",
            },
            href: "https://api.spotify.com/v1/tracks/76QiMQU5Nu61OWrxbp6RI8",
            id: "76QiMQU5Nu61OWrxbp6RI8",
            name: "Says It",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:76QiMQU5Nu61OWrxbp6RI8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4TEK9tIkcoxib4GxT3O4ky",
                },
                href: "https://api.spotify.com/v1/artists/4TEK9tIkcoxib4GxT3O4ky",
                id: "4TEK9tIkcoxib4GxT3O4ky",
                name: "KISS OF LIFE",
                type: "artist",
                uri: "spotify:artist:4TEK9tIkcoxib4GxT3O4ky",
              },
            ],
            disc_number: 1,
            duration_ms: 160373,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/67deH3jRhQXDBmNKIvb2PV",
            },
            href: "https://api.spotify.com/v1/tracks/67deH3jRhQXDBmNKIvb2PV",
            id: "67deH3jRhQXDBmNKIvb2PV",
            name: "Bad News (ENG Ver.)",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:67deH3jRhQXDBmNKIvb2PV",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2023 S2 ENTERTAINMENT INC.,under license to Kakao Entertainment",
          type: "C",
        },
        {
          text: "2023 S2 ENTERTAINMENT INC.,under license to Kakao Entertainment",
          type: "P",
        },
      ],
      external_ids: {
        upc: "8804775322891",
      },
      genres: ["kpop"],
      label: "S2 ENTERTAINMENT INC.",
      popularity: 61,
    },
    {
      album_type: "single",
      total_tracks: 6,
      external_urls: {
        spotify: "https://open.spotify.com/album/2xPdgNkM4yIQmP7axJ1T1o",
      },
      href: "https://api.spotify.com/v1/albums/2xPdgNkM4yIQmP7axJ1T1o?locale=en-US%2Cen%3Bq%3D0.9",
      id: "2xPdgNkM4yIQmP7axJ1T1o",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2738ea860a3e6904b875629d672",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e028ea860a3e6904b875629d672",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048518ea860a3e6904b875629d672",
          height: 64,
          width: 64,
        },
      ],
      name: "YOUNG-LUV.COM",
      release_date: "2022-02-21",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:2xPdgNkM4yIQmP7axJ1T1o",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
          },
          href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
          id: "01XYiBYaoMJcNhPokrg0l0",
          name: "STAYC",
          type: "artist",
          debut: "2020",
          members : ["Sumin", "Sieun", "Soo", "J", "Yoon", "Isa"],
          uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/2xPdgNkM4yIQmP7axJ1T1o/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 6,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 213426,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3gFcGnU4kTdMYLXDjH1TK8",
            },
            href: "https://api.spotify.com/v1/tracks/3gFcGnU4kTdMYLXDjH1TK8",
            id: "3gFcGnU4kTdMYLXDjH1TK8",
            name: "RUN2U",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:3gFcGnU4kTdMYLXDjH1TK8",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 181466,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5mr1d04qe0s5ux5fQQcH2p",
            },
            href: "https://api.spotify.com/v1/tracks/5mr1d04qe0s5ux5fQQcH2p",
            id: "5mr1d04qe0s5ux5fQQcH2p",
            name: "SAME SAME",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:5mr1d04qe0s5ux5fQQcH2p",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 190613,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/51XWwKV6VHCuFftFQLp4iA",
            },
            href: "https://api.spotify.com/v1/tracks/51XWwKV6VHCuFftFQLp4iA",
            id: "51XWwKV6VHCuFftFQLp4iA",
            name: "247",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:51XWwKV6VHCuFftFQLp4iA",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 206080,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7HGKvoju3ucB7UqVt1GoJu",
            },
            href: "https://api.spotify.com/v1/tracks/7HGKvoju3ucB7UqVt1GoJu",
            id: "7HGKvoju3ucB7UqVt1GoJu",
            name: "YOUNG LUV",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:7HGKvoju3ucB7UqVt1GoJu",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 207226,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1q97NRLZfQlXYvZJAQ7tln",
            },
            href: "https://api.spotify.com/v1/tracks/1q97NRLZfQlXYvZJAQ7tln",
            id: "1q97NRLZfQlXYvZJAQ7tln",
            name: "BUTTERFLY",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:1q97NRLZfQlXYvZJAQ7tln",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 173733,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4wqvBkHI3a75Fmlirlq3uD",
            },
            href: "https://api.spotify.com/v1/tracks/4wqvBkHI3a75Fmlirlq3uD",
            id: "4wqvBkHI3a75Fmlirlq3uD",
            name: "I WANT U BABY",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:4wqvBkHI3a75Fmlirlq3uD",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2022 High Up Entertainment,under license to Kakao Entertainment",
          type: "C",
        },
        {
          text: "2022 High Up Entertainment,under license to Kakao Entertainment",
          type: "P",
        },
      ],
      external_ids: {
        upc: "8804775224935",
      },
      genres: ["kpop"],
      label: "High Up Entertainment",
      popularity: 54,
    },
    {
      album_type: "album",
      total_tracks: 14,
      external_urls: {
        spotify: "https://open.spotify.com/album/6eTCq3XOz0rVJnelXro3Vk",
      },
      href: "https://api.spotify.com/v1/albums/6eTCq3XOz0rVJnelXro3Vk?locale=en-US%2Cen%3Bq%3D0.9",
      id: "6eTCq3XOz0rVJnelXro3Vk",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2730cac27fa1830d50ff4a7a20d",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e020cac27fa1830d50ff4a7a20d",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048510cac27fa1830d50ff4a7a20d",
          height: 64,
          width: 64,
        },
      ],
      name: "Metamorphic",
      release_date: "2024-07-01",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:6eTCq3XOz0rVJnelXro3Vk",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
          },
          href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
          id: "01XYiBYaoMJcNhPokrg0l0",
          name: "STAYC",
          type: "artist",
          debut: "2020",
          members : ["Sumin", "Sieun", "Soo", "J", "Yoon", "Isa"],
          uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/6eTCq3XOz0rVJnelXro3Vk/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 14,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 128744,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3itibY53OwV21OP7m6VHbX",
            },
            href: "https://api.spotify.com/v1/tracks/3itibY53OwV21OP7m6VHbX",
            id: "3itibY53OwV21OP7m6VHbX",
            name: "Twenty",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:3itibY53OwV21OP7m6VHbX",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 150769,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3BhyxulZ13uWZS6LqiYiCj",
            },
            href: "https://api.spotify.com/v1/tracks/3BhyxulZ13uWZS6LqiYiCj",
            id: "3BhyxulZ13uWZS6LqiYiCj",
            name: "Cheeky Icy Thang",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:3BhyxulZ13uWZS6LqiYiCj",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 168106,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5iL9B1OKNfpJSgkbvKngXI",
            },
            href: "https://api.spotify.com/v1/tracks/5iL9B1OKNfpJSgkbvKngXI",
            id: "5iL9B1OKNfpJSgkbvKngXI",
            name: "1 Thing",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:5iL9B1OKNfpJSgkbvKngXI",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 163312,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0wiliykhEfTSmGaJvYmEe3",
            },
            href: "https://api.spotify.com/v1/tracks/0wiliykhEfTSmGaJvYmEe3",
            id: "0wiliykhEfTSmGaJvYmEe3",
            name: "Give It 2 Me",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:0wiliykhEfTSmGaJvYmEe3",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 134348,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1L0WXikXzwL95TDHTUuWQE",
            },
            href: "https://api.spotify.com/v1/tracks/1L0WXikXzwL95TDHTUuWQE",
            id: "1L0WXikXzwL95TDHTUuWQE",
            name: "Find ( Sieun & Seeun & J )",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:1L0WXikXzwL95TDHTUuWQE",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 171753,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2oIstUxIrFHP4DODJiGDkt",
            },
            href: "https://api.spotify.com/v1/tracks/2oIstUxIrFHP4DODJiGDkt",
            id: "2oIstUxIrFHP4DODJiGDkt",
            name: "Let Me Know",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:2oIstUxIrFHP4DODJiGDkt",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 185711,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2nZFLtfsBxQWHkFCHkepTH",
            },
            href: "https://api.spotify.com/v1/tracks/2nZFLtfsBxQWHkFCHkepTH",
            id: "2nZFLtfsBxQWHkFCHkepTH",
            name: "Nada",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:2nZFLtfsBxQWHkFCHkepTH",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 166223,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6q3mMMdxQCjrfUME0YZnSU",
            },
            href: "https://api.spotify.com/v1/tracks/6q3mMMdxQCjrfUME0YZnSU",
            id: "6q3mMMdxQCjrfUME0YZnSU",
            name: "Fakin’ ( Sumin & Yoon )",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:6q3mMMdxQCjrfUME0YZnSU",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 161287,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4JSCXX9t09nio3UEPw4AWe",
            },
            href: "https://api.spotify.com/v1/tracks/4JSCXX9t09nio3UEPw4AWe",
            id: "4JSCXX9t09nio3UEPw4AWe",
            name: "Roses ( ISA )",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:4JSCXX9t09nio3UEPw4AWe",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 200241,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/13nOpaV3IK7P2jw9FDA7tW",
            },
            href: "https://api.spotify.com/v1/tracks/13nOpaV3IK7P2jw9FDA7tW",
            id: "13nOpaV3IK7P2jw9FDA7tW",
            name: "Beauty Bomb",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:13nOpaV3IK7P2jw9FDA7tW",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 210810,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0QRx48SDQDGJ6QKT0qMRbm",
            },
            href: "https://api.spotify.com/v1/tracks/0QRx48SDQDGJ6QKT0qMRbm",
            id: "0QRx48SDQDGJ6QKT0qMRbm",
            name: "Gummy Bear",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:0QRx48SDQDGJ6QKT0qMRbm",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 178557,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3BV4FnxsvjkH8eDRwhpMZK",
            },
            href: "https://api.spotify.com/v1/tracks/3BV4FnxsvjkH8eDRwhpMZK",
            id: "3BV4FnxsvjkH8eDRwhpMZK",
            name: "Stay WITH me",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:3BV4FnxsvjkH8eDRwhpMZK",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 184615,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/44iPFLk5ZdXu8wivdlTcJB",
            },
            href: "https://api.spotify.com/v1/tracks/44iPFLk5ZdXu8wivdlTcJB",
            id: "44iPFLk5ZdXu8wivdlTcJB",
            name: "Flexing On My Ex",
            preview_url: null,
            track_number: 13,
            type: "track",
            uri: "spotify:track:44iPFLk5ZdXu8wivdlTcJB",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/01XYiBYaoMJcNhPokrg0l0",
                },
                href: "https://api.spotify.com/v1/artists/01XYiBYaoMJcNhPokrg0l0",
                id: "01XYiBYaoMJcNhPokrg0l0",
                name: "STAYC",
                type: "artist",
                uri: "spotify:artist:01XYiBYaoMJcNhPokrg0l0",
              },
            ],
            disc_number: 1,
            duration_ms: 164208,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4qlPrmKOUDKvdFyZuinm98",
            },
            href: "https://api.spotify.com/v1/tracks/4qlPrmKOUDKvdFyZuinm98",
            id: "4qlPrmKOUDKvdFyZuinm98",
            name: "Trouble Maker",
            preview_url: null,
            track_number: 14,
            type: "track",
            uri: "spotify:track:4qlPrmKOUDKvdFyZuinm98",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2024 High Up Entertainment,under license to Kakao Entertainment",
          type: "C",
        },
        {
          text: "2024 High Up Entertainment,under license to Kakao Entertainment",
          type: "P",
        },
      ],
      external_ids: {
        upc: "8804775339462",
      },
      genres: ["kpop"],
      label: "High Up Entertainment",
      popularity: 51,
    },
    {
      album_type: "album",
      total_tracks: 7,
      external_urls: {
        spotify: "https://open.spotify.com/album/3oGLMzJCwhyBqy50CHoMwP",
      },
      href: "https://api.spotify.com/v1/albums/3oGLMzJCwhyBqy50CHoMwP?locale=en-US%2Cen%3Bq%3D0.9",
      id: "3oGLMzJCwhyBqy50CHoMwP",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b27317f0c1c66fda271daa665122",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e0217f0c1c66fda271daa665122",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d0000485117f0c1c66fda271daa665122",
          height: 64,
          width: 64,
        },
      ],
      name: "Vanishing Journey",
      release_date: "2021-05-16",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:3oGLMzJCwhyBqy50CHoMwP",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2ZVKeej6s975bMSdzxjIhu",
          },
          href: "https://api.spotify.com/v1/artists/2ZVKeej6s975bMSdzxjIhu",
          id: "2ZVKeej6s975bMSdzxjIhu",
          name: "Elijah Lee",
          type: "artist",
          debut: "2019",
          members: ["Elijah Lee"],
          uri: "spotify:artist:2ZVKeej6s975bMSdzxjIhu",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/3oGLMzJCwhyBqy50CHoMwP/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 7,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2ZVKeej6s975bMSdzxjIhu",
                },
                href: "https://api.spotify.com/v1/artists/2ZVKeej6s975bMSdzxjIhu",
                id: "2ZVKeej6s975bMSdzxjIhu",
                name: "Elijah Lee",
                type: "artist",
                uri: "spotify:artist:2ZVKeej6s975bMSdzxjIhu",
              },
            ],
            disc_number: 1,
            duration_ms: 146925,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/33kQJiqhOOSkfs7dz3SQ1O",
            },
            href: "https://api.spotify.com/v1/tracks/33kQJiqhOOSkfs7dz3SQ1O",
            id: "33kQJiqhOOSkfs7dz3SQ1O",
            name: "Night Drive",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:33kQJiqhOOSkfs7dz3SQ1O",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2ZVKeej6s975bMSdzxjIhu",
                },
                href: "https://api.spotify.com/v1/artists/2ZVKeej6s975bMSdzxjIhu",
                id: "2ZVKeej6s975bMSdzxjIhu",
                name: "Elijah Lee",
                type: "artist",
                uri: "spotify:artist:2ZVKeej6s975bMSdzxjIhu",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/4Q4RI9i7blNnSW4QZCMIwL",
                },
                href: "https://api.spotify.com/v1/artists/4Q4RI9i7blNnSW4QZCMIwL",
                id: "4Q4RI9i7blNnSW4QZCMIwL",
                name: "Epona",
                type: "artist",
                uri: "spotify:artist:4Q4RI9i7blNnSW4QZCMIwL",
              },
            ],
            disc_number: 1,
            duration_ms: 154017,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6HA1KCmcUzv1acd6dkAGVz",
            },
            href: "https://api.spotify.com/v1/tracks/6HA1KCmcUzv1acd6dkAGVz",
            id: "6HA1KCmcUzv1acd6dkAGVz",
            name: "Birdcage",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:6HA1KCmcUzv1acd6dkAGVz",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2ZVKeej6s975bMSdzxjIhu",
                },
                href: "https://api.spotify.com/v1/artists/2ZVKeej6s975bMSdzxjIhu",
                id: "2ZVKeej6s975bMSdzxjIhu",
                name: "Elijah Lee",
                type: "artist",
                uri: "spotify:artist:2ZVKeej6s975bMSdzxjIhu",
              },
            ],
            disc_number: 1,
            duration_ms: 136625,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2eb9nOUDIWk2OIehMrxRzd",
            },
            href: "https://api.spotify.com/v1/tracks/2eb9nOUDIWk2OIehMrxRzd",
            id: "2eb9nOUDIWk2OIehMrxRzd",
            name: "Trapped In My Mind",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:2eb9nOUDIWk2OIehMrxRzd",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2ZVKeej6s975bMSdzxjIhu",
                },
                href: "https://api.spotify.com/v1/artists/2ZVKeej6s975bMSdzxjIhu",
                id: "2ZVKeej6s975bMSdzxjIhu",
                name: "Elijah Lee",
                type: "artist",
                uri: "spotify:artist:2ZVKeej6s975bMSdzxjIhu",
              },
            ],
            disc_number: 1,
            duration_ms: 137000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2awjdhQVnlq92TUJewA0i5",
            },
            href: "https://api.spotify.com/v1/tracks/2awjdhQVnlq92TUJewA0i5",
            id: "2awjdhQVnlq92TUJewA0i5",
            name: "Calm",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:2awjdhQVnlq92TUJewA0i5",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2ZVKeej6s975bMSdzxjIhu",
                },
                href: "https://api.spotify.com/v1/artists/2ZVKeej6s975bMSdzxjIhu",
                id: "2ZVKeej6s975bMSdzxjIhu",
                name: "Elijah Lee",
                type: "artist",
                uri: "spotify:artist:2ZVKeej6s975bMSdzxjIhu",
              },
            ],
            disc_number: 1,
            duration_ms: 134088,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3Qcp71jYONlRaFML01JsDI",
            },
            href: "https://api.spotify.com/v1/tracks/3Qcp71jYONlRaFML01JsDI",
            id: "3Qcp71jYONlRaFML01JsDI",
            name: "Introspection",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:3Qcp71jYONlRaFML01JsDI",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2ZVKeej6s975bMSdzxjIhu",
                },
                href: "https://api.spotify.com/v1/artists/2ZVKeej6s975bMSdzxjIhu",
                id: "2ZVKeej6s975bMSdzxjIhu",
                name: "Elijah Lee",
                type: "artist",
                uri: "spotify:artist:2ZVKeej6s975bMSdzxjIhu",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/6bA2OonnJsG1tN9yClu2aC",
                },
                href: "https://api.spotify.com/v1/artists/6bA2OonnJsG1tN9yClu2aC",
                id: "6bA2OonnJsG1tN9yClu2aC",
                name: "mell-ø",
                type: "artist",
                uri: "spotify:artist:6bA2OonnJsG1tN9yClu2aC",
              },
            ],
            disc_number: 1,
            duration_ms: 124285,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6coXUkoUmWTTtMZXMlLAvI",
            },
            href: "https://api.spotify.com/v1/tracks/6coXUkoUmWTTtMZXMlLAvI",
            id: "6coXUkoUmWTTtMZXMlLAvI",
            name: "Coming Home",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:6coXUkoUmWTTtMZXMlLAvI",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2ZVKeej6s975bMSdzxjIhu",
                },
                href: "https://api.spotify.com/v1/artists/2ZVKeej6s975bMSdzxjIhu",
                id: "2ZVKeej6s975bMSdzxjIhu",
                name: "Elijah Lee",
                type: "artist",
                uri: "spotify:artist:2ZVKeej6s975bMSdzxjIhu",
              },
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/0wcen0V8FgQu6xYupnZMbB",
                },
                href: "https://api.spotify.com/v1/artists/0wcen0V8FgQu6xYupnZMbB",
                id: "0wcen0V8FgQu6xYupnZMbB",
                name: "softy",
                type: "artist",
                uri: "spotify:artist:0wcen0V8FgQu6xYupnZMbB",
              },
            ],
            disc_number: 1,
            duration_ms: 153664,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6TMReTmyRjLJKgrxHGKbRU",
            },
            href: "https://api.spotify.com/v1/tracks/6TMReTmyRjLJKgrxHGKbRU",
            id: "6TMReTmyRjLJKgrxHGKbRU",
            name: "Sigh of Relief",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:6TMReTmyRjLJKgrxHGKbRU",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2021 Lofi Records",
          type: "C",
        },
        {
          text: "2021 Lofi Publishing",
          type: "P",
        },
      ],
      external_ids: {
        upc: "5054285894682",
      },
      genres: ["lofi"],
      label: "Lofi Records",
      popularity: 45,
    },
    {
      album_type: "single",
      total_tracks: 6,
      external_urls: {
        spotify: "https://open.spotify.com/album/1Iu5sceGmML4CeQ2f5Q6aO",
      },
      href: "https://api.spotify.com/v1/albums/1Iu5sceGmML4CeQ2f5Q6aO?locale=en-US%2Cen%3Bq%3D0.9",
      id: "1Iu5sceGmML4CeQ2f5Q6aO",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273a64b06c0eb30ce15c3e6edc1",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02a64b06c0eb30ce15c3e6edc1",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851a64b06c0eb30ce15c3e6edc1",
          height: 64,
          width: 64,
        },
      ],
      name: "Superclean, Vol. II",
      release_date: "2018-09-28",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:1Iu5sceGmML4CeQ2f5Q6aO",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
          },
          href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
          id: "2sSGPbdZJkaSE2AbcGOACx",
          name: "The Marías",
          type: "artist",
          debut: "2016",
          members : ["Maria Zardoya", "Josh Conway", "Jesse Perlman, Edward james"],
          uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/1Iu5sceGmML4CeQ2f5Q6aO/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 6,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 247455,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1mbuSss0OVqfS00y7yCNCZ",
            },
            href: "https://api.spotify.com/v1/tracks/1mbuSss0OVqfS00y7yCNCZ",
            id: "1mbuSss0OVqfS00y7yCNCZ",
            name: "Ruthless",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:1mbuSss0OVqfS00y7yCNCZ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 258713,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/16gJmoOqRt2lKmlXtDpWgH",
            },
            href: "https://api.spotify.com/v1/tracks/16gJmoOqRt2lKmlXtDpWgH",
            id: "16gJmoOqRt2lKmlXtDpWgH",
            name: "Cariño",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:16gJmoOqRt2lKmlXtDpWgH",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 311035,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5P9PQR7CM5YPEU2I3EypWM",
            },
            href: "https://api.spotify.com/v1/tracks/5P9PQR7CM5YPEU2I3EypWM",
            id: "5P9PQR7CM5YPEU2I3EypWM",
            name: "ABQ",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:5P9PQR7CM5YPEU2I3EypWM",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 73235,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3XCpEFU4uXsBq5WmVQQKC9",
            },
            href: "https://api.spotify.com/v1/tracks/3XCpEFU4uXsBq5WmVQQKC9",
            id: "3XCpEFU4uXsBq5WmVQQKC9",
            name: "Loverboy",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:3XCpEFU4uXsBq5WmVQQKC9",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 182900,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/02wNtFxlr9dLmZXKT5TIF5",
            },
            href: "https://api.spotify.com/v1/tracks/02wNtFxlr9dLmZXKT5TIF5",
            id: "02wNtFxlr9dLmZXKT5TIF5",
            name: "Over the Moon",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:02wNtFxlr9dLmZXKT5TIF5",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2sSGPbdZJkaSE2AbcGOACx",
                },
                href: "https://api.spotify.com/v1/artists/2sSGPbdZJkaSE2AbcGOACx",
                id: "2sSGPbdZJkaSE2AbcGOACx",
                name: "The Marías",
                type: "artist",
                uri: "spotify:artist:2sSGPbdZJkaSE2AbcGOACx",
              },
            ],
            disc_number: 1,
            duration_ms: 227234,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4pnXcQSeFwrr3GPHEmeS7m",
            },
            href: "https://api.spotify.com/v1/tracks/4pnXcQSeFwrr3GPHEmeS7m",
            id: "4pnXcQSeFwrr3GPHEmeS7m",
            name: "Clueless",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:4pnXcQSeFwrr3GPHEmeS7m",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2018 Superclean Records",
          type: "C",
        },
        {
          text: "2018 Superclean Records",
          type: "P",
        },
      ],
      external_ids: {
        upc: "193078439763",
      },
      genres: ["rnb"],
      label: "Superclean Records",
      popularity: 69,
    },
    {
      album_type: "album",
      total_tracks: 10,
      external_urls: {
        spotify: "https://open.spotify.com/album/4Fk0oNk3vdmFjuTlpmKIQU",
      },
      href: "https://api.spotify.com/v1/albums/4Fk0oNk3vdmFjuTlpmKIQU?locale=en-US%2Cen%3Bq%3D0.9",
      id: "4Fk0oNk3vdmFjuTlpmKIQU",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b273f76c269513e225b012635866",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e02f76c269513e225b012635866",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00004851f76c269513e225b012635866",
          height: 64,
          width: 64,
        },
      ],
      name: "Pollen",
      release_date: "2023-02-10",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:4Fk0oNk3vdmFjuTlpmKIQU",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
          },
          href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
          id: "1ybAN3utgdoUL1MUCtH4QM",
          name: "Tennis",
          type: "artist",
          debut: "2010",
          members : ["Alaina Moore", "Patrick Riley"],
          uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/4Fk0oNk3vdmFjuTlpmKIQU/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 10,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 234000,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/397MnnXkJ3TTlqey1oWM51",
            },
            href: "https://api.spotify.com/v1/tracks/397MnnXkJ3TTlqey1oWM51",
            id: "397MnnXkJ3TTlqey1oWM51",
            name: "Forbidden Doors",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:397MnnXkJ3TTlqey1oWM51",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 241813,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0zlZYbwzkot31xqXHnv6Hv",
            },
            href: "https://api.spotify.com/v1/tracks/0zlZYbwzkot31xqXHnv6Hv",
            id: "0zlZYbwzkot31xqXHnv6Hv",
            name: "Glorietta",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:0zlZYbwzkot31xqXHnv6Hv",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 254133,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/00wi8vEbJgzq62wfz1UMkX",
            },
            href: "https://api.spotify.com/v1/tracks/00wi8vEbJgzq62wfz1UMkX",
            id: "00wi8vEbJgzq62wfz1UMkX",
            name: "Let's Make a Mistake Tonight",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:00wi8vEbJgzq62wfz1UMkX",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 113400,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/16aHQF9UlwO1JmwKBpCe2N",
            },
            href: "https://api.spotify.com/v1/tracks/16aHQF9UlwO1JmwKBpCe2N",
            id: "16aHQF9UlwO1JmwKBpCe2N",
            name: "One Night with The Valet",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:16aHQF9UlwO1JmwKBpCe2N",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 233666,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/2hPAh53x8nBcW3OaZFde0i",
            },
            href: "https://api.spotify.com/v1/tracks/2hPAh53x8nBcW3OaZFde0i",
            id: "2hPAh53x8nBcW3OaZFde0i",
            name: "Pollen Song",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:2hPAh53x8nBcW3OaZFde0i",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 234066,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3PG8Cjr1Bp8zUZ5xnhkLo5",
            },
            href: "https://api.spotify.com/v1/tracks/3PG8Cjr1Bp8zUZ5xnhkLo5",
            id: "3PG8Cjr1Bp8zUZ5xnhkLo5",
            name: "Hotel Valet",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:3PG8Cjr1Bp8zUZ5xnhkLo5",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 180600,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5ptQSBAsxMc7qQI6qu4b4G",
            },
            href: "https://api.spotify.com/v1/tracks/5ptQSBAsxMc7qQI6qu4b4G",
            id: "5ptQSBAsxMc7qQI6qu4b4G",
            name: "Paper",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:5ptQSBAsxMc7qQI6qu4b4G",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 237533,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0VHckty1kuhEgCKDdaJA7x",
            },
            href: "https://api.spotify.com/v1/tracks/0VHckty1kuhEgCKDdaJA7x",
            id: "0VHckty1kuhEgCKDdaJA7x",
            name: "Gibraltar",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:0VHckty1kuhEgCKDdaJA7x",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 206133,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/23uiQVHOl25WrZdTm0XYdl",
            },
            href: "https://api.spotify.com/v1/tracks/23uiQVHOl25WrZdTm0XYdl",
            id: "23uiQVHOl25WrZdTm0XYdl",
            name: "Never Been Wrong",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:23uiQVHOl25WrZdTm0XYdl",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM",
                },
                href: "https://api.spotify.com/v1/artists/1ybAN3utgdoUL1MUCtH4QM",
                id: "1ybAN3utgdoUL1MUCtH4QM",
                name: "Tennis",
                type: "artist",
                uri: "spotify:artist:1ybAN3utgdoUL1MUCtH4QM",
              },
            ],
            disc_number: 1,
            duration_ms: 191600,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4KAHFxWcNeR6pAef5DC4ZM",
            },
            href: "https://api.spotify.com/v1/tracks/4KAHFxWcNeR6pAef5DC4ZM",
            id: "4KAHFxWcNeR6pAef5DC4ZM",
            name: "Pillow For a Cloud",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:4KAHFxWcNeR6pAef5DC4ZM",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "(C) 2023 Mutually Detrimental marketed and distributed by Thirty Tigers",
          type: "C",
        },
        {
          text: "(P) 2023 Mutually Detrimental marketed and distributed by Thirty Tigers",
          type: "P",
        },
      ],
      external_ids: {
        upc: "197187247981",
      },
      genres: ["indie"],
      label: "Mutually Detrimental",
      popularity: 43,
    },
    {
      album_type: "album",
      total_tracks: 12,
      external_urls: {
        spotify: "https://open.spotify.com/album/6rsQnwaoJHxXJRCDBPkBRw",
      },
      href: "https://api.spotify.com/v1/albums/6rsQnwaoJHxXJRCDBPkBRw?locale=en-US%2Cen%3Bq%3D0.9",
      id: "6rsQnwaoJHxXJRCDBPkBRw",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2730c8ac83035e9588e8ad34b90",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e020c8ac83035e9588e8ad34b90",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048510c8ac83035e9588e8ad34b90",
          height: 64,
          width: 64,
        },
      ],
      name: "Favourite Worst Nightmare (Standard Version)",
      release_date: "2007-04-24",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:6rsQnwaoJHxXJRCDBPkBRw",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
          },
          href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
          id: "7Ln80lUS6He07XvHI8qqHH",
          name: "Arctic Monkeys",
          type: "artist",
          debut: "2002",
          members : ["Alex Turner", "Jamie Cook", "Nick O'Malley", "Matt Helders"],
          uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/6rsQnwaoJHxXJRCDBPkBRw/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 12,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 170253,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5rTIpPWeO0IL4HWlGWrz5G",
            },
            href: "https://api.spotify.com/v1/tracks/5rTIpPWeO0IL4HWlGWrz5G",
            id: "5rTIpPWeO0IL4HWlGWrz5G",
            name: "Brianstorm",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:5rTIpPWeO0IL4HWlGWrz5G",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 160640,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/4OkPamOn5GofkOQu64Z4eR",
            },
            href: "https://api.spotify.com/v1/tracks/4OkPamOn5GofkOQu64Z4eR",
            id: "4OkPamOn5GofkOQu64Z4eR",
            name: "Teddy Picker",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:4OkPamOn5GofkOQu64Z4eR",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 134733,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/45QyGXbqTWaFUrIKe2ugs3",
            },
            href: "https://api.spotify.com/v1/tracks/45QyGXbqTWaFUrIKe2ugs3",
            id: "45QyGXbqTWaFUrIKe2ugs3",
            name: "D Is for Dangerous",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:45QyGXbqTWaFUrIKe2ugs3",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 167440,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/11DdPGqDsM3ux1gVAqUIln",
            },
            href: "https://api.spotify.com/v1/tracks/11DdPGqDsM3ux1gVAqUIln",
            id: "11DdPGqDsM3ux1gVAqUIln",
            name: "Balaclava",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:11DdPGqDsM3ux1gVAqUIln",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 173493,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7e8utCy2JlSB8dRHKi49xM",
            },
            href: "https://api.spotify.com/v1/tracks/7e8utCy2JlSB8dRHKi49xM",
            id: "7e8utCy2JlSB8dRHKi49xM",
            name: "Fluorescent Adolescent",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:7e8utCy2JlSB8dRHKi49xM",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 181480,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7ABWRukVQcXrIrDKDx5Gek",
            },
            href: "https://api.spotify.com/v1/tracks/7ABWRukVQcXrIrDKDx5Gek",
            id: "7ABWRukVQcXrIrDKDx5Gek",
            name: "Only Ones Who Know",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:7ABWRukVQcXrIrDKDx5Gek",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 205240,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/13NCxLOlvQ4Tnexgfp03Gs",
            },
            href: "https://api.spotify.com/v1/tracks/13NCxLOlvQ4Tnexgfp03Gs",
            id: "13NCxLOlvQ4Tnexgfp03Gs",
            name: "Do Me a Favour",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:13NCxLOlvQ4Tnexgfp03Gs",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 189680,
            explicit: true,
            external_urls: {
              spotify: "https://open.spotify.com/track/7gPd55hW5pVjTm3H9S1Wbv",
            },
            href: "https://api.spotify.com/v1/tracks/7gPd55hW5pVjTm3H9S1Wbv",
            id: "7gPd55hW5pVjTm3H9S1Wbv",
            name: "This House Is a Circus",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:7gPd55hW5pVjTm3H9S1Wbv",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 274200,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0ZUXj43fteJjwvGoLMntte",
            },
            href: "https://api.spotify.com/v1/tracks/0ZUXj43fteJjwvGoLMntte",
            id: "0ZUXj43fteJjwvGoLMntte",
            name: "If You Were There, Beware",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:0ZUXj43fteJjwvGoLMntte",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 143213,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/48ucaKjccruxDbi3Au5ZaH",
            },
            href: "https://api.spotify.com/v1/tracks/48ucaKjccruxDbi3Au5ZaH",
            id: "48ucaKjccruxDbi3Au5ZaH",
            name: "The Bad Thing",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:48ucaKjccruxDbi3Au5ZaH",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 187133,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/3BcQFPRZuuUClWStz29WjN",
            },
            href: "https://api.spotify.com/v1/tracks/3BcQFPRZuuUClWStz29WjN",
            id: "3BcQFPRZuuUClWStz29WjN",
            name: "Old Yellow Bricks",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:3BcQFPRZuuUClWStz29WjN",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],
            disc_number: 1,
            duration_ms: 253586,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/58ge6dfP91o9oXMzq3XkIS",
            },
            href: "https://api.spotify.com/v1/tracks/58ge6dfP91o9oXMzq3XkIS",
            id: "58ge6dfP91o9oXMzq3XkIS",
            name: "505",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:58ge6dfP91o9oXMzq3XkIS",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "© 2007 Domino Recording Company Ltd. under exclusive license to Warner Records Inc. for the United States, and WEA International Inc. for Canada.",
          type: "C",
        },
        {
          text: "℗ 2007 Domino Recording Company Ltd. under exclusive license to Warner Records Inc. for the United States, and WEA International Inc. for Canada.",
          type: "P",
        },
      ],
      external_ids: {
        upc: "093624996446",
      },
      genres: ["indie"],
      label: "Domino/Warner Records",
      popularity: 76,
    },
    {
      album_type: "album",
      total_tracks: 12,
      external_urls: {
        spotify: "https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu",
      },
      href: "https://api.spotify.com/v1/albums/78bpIziExqiI9qztvNFlQu?locale=en-US%2Cen%3Bq%3D0.9",
      id: "78bpIziExqiI9qztvNFlQu",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
          height: 640,
          width: 640,
        },
        {
          url: "https://i.scdn.co/image/ab67616d00001e024ae1c4c5c45aabe565499163",
          height: 300,
          width: 300,
        },
        {
          url: "https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163",
          height: 64,
          width: 64,
        },
      ],
      name: "AM",
      release_date: "2013-09-09",
      release_date_precision: "day",
      type: "album",
      uri: "spotify:album:78bpIziExqiI9qztvNFlQu",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
          },
          href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
          id: "7Ln80lUS6He07XvHI8qqHH",
          name: "Arctic Monkeys",
          type: "artist",
          debut: "2002",
          members : ["Alex Turner", "Jamie Cook", "Nick O'Malley", "Matt Helders"],
          uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
        },
      ],
      tracks: {
        href: "https://api.spotify.com/v1/albums/78bpIziExqiI9qztvNFlQu/tracks?offset=0&limit=50&locale=en-US,en;q%3D0.9",
        limit: 50,
        next: null,
        offset: 0,
        previous: null,
        total: 12,
        items: [
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 272394,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5FVd6KXrgO9B3JPmC8OPst",
            },
            href: "https://api.spotify.com/v1/tracks/5FVd6KXrgO9B3JPmC8OPst",
            id: "5FVd6KXrgO9B3JPmC8OPst",
            name: "Do I Wanna Know?",
            preview_url: null,
            track_number: 1,
            type: "track",
            uri: "spotify:track:5FVd6KXrgO9B3JPmC8OPst",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 201726,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2AT8iROs4FQueDv2c8q2KE",
            },
            href: "https://api.spotify.com/v1/tracks/2AT8iROs4FQueDv2c8q2KE",
            id: "2AT8iROs4FQueDv2c8q2KE",
            name: "R U Mine?",
            preview_url: null,
            track_number: 2,
            type: "track",
            uri: "spotify:track:2AT8iROs4FQueDv2c8q2KE",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 206051,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/6wNUBZNWFxdUGof6vkaykE",
            },
            href: "https://api.spotify.com/v1/tracks/6wNUBZNWFxdUGof6vkaykE",
            id: "6wNUBZNWFxdUGof6vkaykE",
            name: "One For The Road",
            preview_url: null,
            track_number: 3,
            type: "track",
            uri: "spotify:track:6wNUBZNWFxdUGof6vkaykE",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 207356,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/7nzsY8vlnKdvGOEE0rjAXZ",
            },
            href: "https://api.spotify.com/v1/tracks/7nzsY8vlnKdvGOEE0rjAXZ",
            id: "7nzsY8vlnKdvGOEE0rjAXZ",
            name: "Arabella",
            preview_url: null,
            track_number: 4,
            type: "track",
            uri: "spotify:track:7nzsY8vlnKdvGOEE0rjAXZ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 185406,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/1j9rezdE3YeC7yktZXC1em",
            },
            href: "https://api.spotify.com/v1/tracks/1j9rezdE3YeC7yktZXC1em",
            id: "1j9rezdE3YeC7yktZXC1em",
            name: "I Want It All",
            preview_url: null,
            track_number: 5,
            type: "track",
            uri: "spotify:track:1j9rezdE3YeC7yktZXC1em",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 243131,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5TTGoX70AFrTvuEtqHK37S",
            },
            href: "https://api.spotify.com/v1/tracks/5TTGoX70AFrTvuEtqHK37S",
            id: "5TTGoX70AFrTvuEtqHK37S",
            name: "No. 1 Party Anthem",
            preview_url: null,
            track_number: 6,
            type: "track",
            uri: "spotify:track:5TTGoX70AFrTvuEtqHK37S",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 215011,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/75n7mraeMycQOl2sDGYaTe",
            },
            href: "https://api.spotify.com/v1/tracks/75n7mraeMycQOl2sDGYaTe",
            id: "75n7mraeMycQOl2sDGYaTe",
            name: "Mad Sounds",
            preview_url: null,
            track_number: 7,
            type: "track",
            uri: "spotify:track:75n7mraeMycQOl2sDGYaTe",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 181049,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/4atMrAadB7dS8xn9vfk9PQ",
            },
            href: "https://api.spotify.com/v1/tracks/4atMrAadB7dS8xn9vfk9PQ",
            id: "4atMrAadB7dS8xn9vfk9PQ",
            name: "Fireside",
            preview_url: null,
            track_number: 8,
            type: "track",
            uri: "spotify:track:4atMrAadB7dS8xn9vfk9PQ",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 161123,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/086myS9r57YsLbJpU0TgK9",
            },
            href: "https://api.spotify.com/v1/tracks/086myS9r57YsLbJpU0TgK9",
            id: "086myS9r57YsLbJpU0TgK9",
            name: "Why'd You Only Call Me When You're High?",
            preview_url: null,
            track_number: 9,
            type: "track",
            uri: "spotify:track:086myS9r57YsLbJpU0TgK9",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 193030,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/0NdTUS4UiNYCNn5FgVqKQY",
            },
            href: "https://api.spotify.com/v1/tracks/0NdTUS4UiNYCNn5FgVqKQY",
            id: "0NdTUS4UiNYCNn5FgVqKQY",
            name: "Snap Out Of It",
            preview_url: null,
            track_number: 10,
            type: "track",
            uri: "spotify:track:0NdTUS4UiNYCNn5FgVqKQY",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 257563,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/2LGdO5MtFdyphi2EihANZG",
            },
            href: "https://api.spotify.com/v1/tracks/2LGdO5MtFdyphi2EihANZG",
            id: "2LGdO5MtFdyphi2EihANZG",
            name: "Knee Socks",
            preview_url: null,
            track_number: 11,
            type: "track",
            uri: "spotify:track:2LGdO5MtFdyphi2EihANZG",
            is_local: false,
          },
          {
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
                },
                href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
                id: "7Ln80lUS6He07XvHI8qqHH",
                name: "Arctic Monkeys",
                type: "artist",
                uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
              },
            ],

            disc_number: 1,
            duration_ms: 183956,
            explicit: false,
            external_urls: {
              spotify: "https://open.spotify.com/track/5XeFesFbtLpXzIVDNQP22n",
            },
            href: "https://api.spotify.com/v1/tracks/5XeFesFbtLpXzIVDNQP22n",
            id: "5XeFesFbtLpXzIVDNQP22n",
            name: "I Wanna Be Yours",
            preview_url: null,
            track_number: 12,
            type: "track",
            uri: "spotify:track:5XeFesFbtLpXzIVDNQP22n",
            is_local: false,
          },
        ],
      },
      copyrights: [
        {
          text: "2013 Domino Recording Co Ltd",
          type: "C",
        },
        {
          text: "2013 Domino Recording Co Ltd",
          type: "P",
        },
      ],
      external_ids: {
        upc: "887828031795",
      },
      genres: ["indie"],
      label: "Domino Recording Co",
      popularity: 90,
    },
  ],
};
export default data;