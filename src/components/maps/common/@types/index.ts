type TRequestStatus = 'INVALID_REQUEST' | 'OK';
type TBusinessStatus = 'OPERATIONAL';

interface IGeoMetry {
  lat: number;
  lng: number;
}

interface IPhoto {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

interface IReview {
  author_name: string;
  author_url: string;
  language: string;
  original_language: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
  translated: boolean;
}

interface ITimePeriod {
  close: {
    date: string;
    day: number;
    time: string;
    truncated: boolean; // 생략되었는지
  };
  open: {
    date: string;
    day: number;
    time: string;
    truncated: boolean;
  };
}

interface IAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface IPlaceDetail {
  html_attributions: [];
  result: {
    address_components: IAddressComponent[];
    adr_address: string;
    business_status: TBusinessStatus;
    current_opening_hours: {
      open_now: boolean;
      periods: ITimePeriod[];
      weekday_text: string[];
    };
    editorial_summary: { language: string; overview: string };
    formatted_address: string;
    formatted_phone_number: string;
    geometry: { location: IGeoMetry };
    viewport: {
      northeast: IGeoMetry;
      southwest: IGeoMetry;
    };

    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    international_phone_number: string;
    name: string;
    opening_hours: { open_now: boolean; periods: { day: number; time: string }[]; weekday_text: string[] };
    photos: IPhoto[];
    place_id: string;
    plus_code: { compound_code: string; global_code: string };
    rating: number;
    reference: string;
    reviews: IReview[];
    types: string[];
    url: string;
    user_ratings_total: number;
    utc_offset: number;
    vicinity: string;
    website: string;
  };
  status: TRequestStatus;
}
