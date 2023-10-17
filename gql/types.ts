export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  _DateTime: { input: any; output: any; }
};

/** This union type holds all content models. */
export type AllModels = HomepageProjects | Project | Service;

export type ApplePodcast = {
  __typename?: 'ApplePodcast';
  _id: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

/** Prepr Asset model. */
export type Asset = {
  __typename?: 'Asset';
  /** Unique identifier for each asset. */
  _id: Scalars['String']['output'];
  _type: Scalars['String']['output'];
  alignment?: Maybe<AssetAlignment>;
  author?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  mime_type?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  original_name?: Maybe<Scalars['String']['output']>;
  /** Mux Playback ID for Audio & Video assets. */
  playback_id?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Prepr Asset model. */
export type AssetCoverArgs = {
  animated?: InputMaybe<Scalars['Boolean']['input']>;
  end?: InputMaybe<Scalars['Float']['input']>;
  fit_mode?: InputMaybe<Scalars['String']['input']>;
  flip_h?: InputMaybe<Scalars['Boolean']['input']>;
  flip_v?: InputMaybe<Scalars['Boolean']['input']>;
  fps?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  rotate?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Float']['input']>;
  time?: InputMaybe<Scalars['Float']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};


/** Prepr Asset model. */
export type AssetUrlArgs = {
  as_file?: InputMaybe<Scalars['Boolean']['input']>;
  crop?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  preset?: InputMaybe<Scalars['String']['input']>;
  quality?: InputMaybe<Scalars['Int']['input']>;
  res?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetAlignment {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

/** Collection of assets used in a content item. */
export type Assets = {
  __typename?: 'Assets';
  _type?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<Asset>>>;
};

/** A component is a predefined set of fields that can be used in models. You can think of a component as a flexible, reusable template where you define fields once, and then fill them with different content every time you use it. */
export type Component = {
  _context?: Maybe<Context>;
  /** Unique identifier for each content component instance. */
  _id: Scalars['String']['output'];
};

export type ContentItems = {
  __typename?: 'ContentItems';
  items?: Maybe<Array<Maybe<AllModels>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum ContentItemsSortInput {
  ChangedOn = 'changed_on',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnDesc = 'created_on_DESC',
  /** Sort content items by most viewed. */
  Popular = 'popular',
  PublishOn = 'publish_on',
  PublishOnDesc = 'publish_on_DESC'
}

export type ContentItemsWhereInput = {
  _channels_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _customer_relation?: InputMaybe<CustomerRelationWhereInput>;
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _stories_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _stories_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _typename_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Context = {
  __typename?: 'Context';
  countries?: Maybe<Array<Scalars['String']['output']>>;
  group_id?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  segments?: Maybe<Array<Scalars['String']['output']>>;
  variant_id?: Maybe<Scalars['String']['output']>;
};

/** Represents a geolocation point with latitude and longitude. */
export type Coordinates = {
  __typename?: 'Coordinates';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** The Customer Relation type is specifying the kind of relationship between the customer and your content. */
export enum CustomerRelationType {
  Bookmarked = 'BOOKMARKED',
  Clicked = 'CLICKED',
  Commented = 'COMMENTED',
  Liked = 'LIKED',
  Purchased = 'PURCHASED',
  Shared = 'SHARED',
  Subscribed = 'SUBSCRIBED',
  Viewed = 'VIEWED',
  Voted = 'VOTED'
}

export type CustomerRelationWhereInput = {
  _type?: InputMaybe<CustomerRelationType>;
  id?: InputMaybe<Scalars['String']['input']>;
  reference_id?: InputMaybe<Scalars['String']['input']>;
};

export type FacebookPost = {
  __typename?: 'FacebookPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Single HomepageProjects. */
export type HomepageProjects = Model & {
  __typename?: 'HomepageProjects';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<HomepageProjects>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  homepageprojects: Array<Project>;
  prepr_display_name?: Maybe<Scalars['String']['output']>;
};

/** ImagesRow component. */
export type ImagesRow = Component & {
  __typename?: 'ImagesRow';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  image?: Maybe<Array<Maybe<Asset>>>;
};

export type InstagramPost = {
  __typename?: 'InstagramPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** A model is the content structure of a content item that is used in multiple locations in your CMS. A model consists of a number of fields to store your content. Common examples of models are articles, landing pages and products. */
export type Model = {
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Single Project. */
export type Project = Model & {
  __typename?: 'Project';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Project>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  is_featured?: Maybe<Scalars['Boolean']['output']>;
  next_project: Array<Project>;
  project_body?: Maybe<Array<Maybe<_Prepr_Types>>>;
  project_category: Array<Service>;
  project_client_quote?: Maybe<Scalars['String']['output']>;
  project_client_quote_name?: Maybe<Scalars['String']['output']>;
  project_cover?: Maybe<Asset>;
  project_description?: Maybe<Scalars['String']['output']>;
  project_name?: Maybe<Scalars['String']['output']>;
  project_realization?: Maybe<Scalars['String']['output']>;
  project_table: Array<TableRow>;
};


/** Single Project. */
export type ProjectProject_TableArgs = {
  personalize?: Scalars['Boolean']['input'];
  personalize_for_country?: InputMaybe<Scalars['String']['input']>;
  personalize_for_segments?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum ProjectSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  ProjectClientQuoteAsc = 'project_client_quote_ASC',
  ProjectClientQuoteDesc = 'project_client_quote_DESC',
  ProjectClientQuoteNameAsc = 'project_client_quote_name_ASC',
  ProjectClientQuoteNameDesc = 'project_client_quote_name_DESC',
  ProjectDescriptionAsc = 'project_description_ASC',
  ProjectDescriptionDesc = 'project_description_DESC',
  ProjectNameAsc = 'project_name_ASC',
  ProjectNameDesc = 'project_name_DESC',
  ProjectRealizationAsc = 'project_realization_ASC',
  ProjectRealizationDesc = 'project_realization_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC'
}

export type ProjectWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<ProjectWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  is_featured?: InputMaybe<Scalars['Boolean']['input']>;
  next_project?: InputMaybe<ProjectWhereInput>;
  project_category?: InputMaybe<ServiceWhereInput>;
  /** Matches if the field is equal to the given value. */
  project_client_quote?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  project_client_quote_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  project_client_quote_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  project_client_quote_name?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  project_client_quote_name_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  project_client_quote_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_client_quote_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  project_client_quote_name_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_client_quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  project_client_quote_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  project_description?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  project_description_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  project_description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  project_description_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  project_name?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  project_name_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  project_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  project_name_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field is equal to the given value. */
  project_realization?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  project_realization_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  project_realization_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  project_realization_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  project_realization_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Projects items. */
export type Projects = {
  __typename?: 'Projects';
  items: Array<Project>;
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve content items from all models. */
  ContentItems?: Maybe<ContentItems>;
  /** Retrieve HomepageProjects. */
  HomepageProjects?: Maybe<HomepageProjects>;
  /** Recommendation recipe suitable for recommending Projects which are similar to the giving item */
  PeopleAlsoViewed_Projects?: Maybe<Projects>;
  /** Recommendation recipe suitable for recommending Services which are similar to the giving item */
  PeopleAlsoViewed_Services?: Maybe<Services>;
  /** Recommendation recipe suitable for recommending globally popular Projects */
  Popular_Projects?: Maybe<Projects>;
  /** Recommendation recipe suitable for recommending globally popular Services */
  Popular_Services?: Maybe<Services>;
  /** Retrieve a single Project. */
  Project?: Maybe<Project>;
  /** Retrieve multiple Projects. */
  Projects?: Maybe<Projects>;
  /** Retrieve a single Service. */
  Service?: Maybe<Service>;
  /** Retrieve multiple Services. */
  Services?: Maybe<Services>;
  /** Recommendation recipe suitable for recommending Projects which are similar to the giving item */
  Similar_Projects?: Maybe<Projects>;
  /** Recommendation recipe suitable for recommending Services which are similar to the giving item */
  Similar_Services?: Maybe<Services>;
};


export type QueryContentItemsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  people_also_viewed_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ContentItemsSortInput>;
  where?: InputMaybe<ContentItemsWhereInput>;
};


export type QueryHomepageProjectsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPeopleAlsoViewed_ProjectsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryPeopleAlsoViewed_ServicesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryPopular_ProjectsArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryPopular_ServicesArgs = {
  events?: InputMaybe<Array<InputMaybe<_Event>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ProjectSortInput>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServicesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: Scalars['String']['input'];
  locales?: InputMaybe<Array<Scalars['String']['input']>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<ServiceSortInput>;
  where?: InputMaybe<ServiceWhereInput>;
};


export type QuerySimilar_ProjectsArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProjectWhereInput>;
};


export type QuerySimilar_ServicesArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  rules?: InputMaybe<SimilarRulesInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ServiceWhereInput>;
};

export type Quote = {
  __typename?: 'Quote';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
};

export type Resource = {
  __typename?: 'Resource';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SearchOptionsInput = {
  includeNumeric?: InputMaybe<Scalars['Boolean']['input']>;
  includeReferences?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Single Service. */
export type Service = Model & {
  __typename?: 'Service';
  /** Count of bookmark events. */
  _bookmarks?: Maybe<Scalars['Int']['output']>;
  /** The time the content item was changed. */
  _changed_on: Scalars['String']['output'];
  /** Count of clicktrough events. */
  _clicktroughs?: Maybe<Scalars['Int']['output']>;
  /** Count of comment events. */
  _comments?: Maybe<Scalars['Int']['output']>;
  _context?: Maybe<Context>;
  /** The time the content item was created. */
  _created_on: Scalars['String']['output'];
  /** Id of your Prepr Environment. */
  _environment_id: Scalars['String']['output'];
  /** Unique identifier for each content item. */
  _id: Scalars['String']['output'];
  /** Count of like events. */
  _likes?: Maybe<Scalars['Int']['output']>;
  _locale: Scalars['String']['output'];
  _locales: Array<Scalars['String']['output']>;
  /** This field returns all localizations for this content item. */
  _localizations: Array<Service>;
  /** The time for when the content item is or will be published. */
  _publish_on?: Maybe<Scalars['String']['output']>;
  /** Count of purchase events. */
  _purchases?: Maybe<Scalars['Int']['output']>;
  /** Calculated time to read in minutes. */
  _read_time?: Maybe<Scalars['Int']['output']>;
  /** Count of share events. */
  _shares?: Maybe<Scalars['Int']['output']>;
  /** Unique within Type, string identifier for each content item. */
  _slug?: Maybe<Scalars['String']['output']>;
  /** Count of subscribe events. */
  _subscribes?: Maybe<Scalars['Int']['output']>;
  /** Count of view events. */
  _views?: Maybe<Scalars['Int']['output']>;
  /** Count of vote events. */
  _votes?: Maybe<Scalars['Int']['output']>;
  service_name?: Maybe<Scalars['String']['output']>;
};

export enum ServiceSortInput {
  ChangedOn = 'changed_on',
  ChangedOnAsc = 'changed_on_ASC',
  ChangedOnDesc = 'changed_on_DESC',
  CreatedOn = 'created_on',
  CreatedOnAsc = 'created_on_ASC',
  CreatedOnDesc = 'created_on_DESC',
  PublishOn = 'publish_on',
  PublishOnAsc = 'publish_on_ASC',
  PublishOnDesc = 'publish_on_DESC',
  ServiceNameAsc = 'service_name_ASC',
  ServiceNameDesc = 'service_name_DESC'
}

export type ServiceWhereInput = {
  _changed_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _changed_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _created_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches if the Id field is equal to one of the items in the given list. */
  _id_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the Id field is not equal to one of the items in the given list. */
  _id_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The `_or` filter returns a filter value if at least one of the clause in the _or is true. This beta filter currently supports the `Id`, `Slug`, `Created On`, `Changed On, `Published On`, `Text`, `Integer`, `Float` and `DateTime` field types. */
  _or?: InputMaybe<Array<ServiceWhereInput>>;
  _publish_on_gt?: InputMaybe<Scalars['_DateTime']['input']>;
  _publish_on_lt?: InputMaybe<Scalars['_DateTime']['input']>;
  /** Matches any content item containing the given text term (full-text search). */
  _search?: InputMaybe<Scalars['String']['input']>;
  _search_options?: InputMaybe<SearchOptionsInput>;
  _slug_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _slug_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with all items from the given list. */
  _tags_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item tagged with at least one item from the given list. */
  _tags_any?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches any content item that is tagged. */
  _tags_has?: InputMaybe<Scalars['Boolean']['input']>;
  /** Matches any content item not tagged with an item from the given list. */
  _tags_nany?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Matches if the field is equal to the given value. */
  service_name?: InputMaybe<Scalars['String']['input']>;
  /** Full fuzzy text search, not case sensitive. */
  service_name_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field ends with the given value. */
  service_name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** Excludes with full fuzzy text search, not case sensitive. */
  service_name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** Matches if the field starts with the given value. */
  service_name_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** List of Services items. */
export type Services = {
  __typename?: 'Services';
  items: Array<Service>;
  total: Scalars['Int']['output'];
};

export type SimilarRulesInput = {
  /** Adjust the weight of AI generated entities in the recommendation algorithm. */
  entities?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust the weight of content references in the recommendation algorithm. */
  references?: InputMaybe<Scalars['Float']['input']>;
  /** Adjust the weight of tags in the recommendation algorithm. */
  tags?: InputMaybe<Scalars['Float']['input']>;
};

export type SoundCloudPost = {
  __typename?: 'SoundCloudPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SpotifyPlaylist = {
  __typename?: 'SpotifyPlaylist';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** TableRow component. */
export type TableRow = Component & {
  __typename?: 'TableRow';
  _context?: Maybe<Context>;
  _id: Scalars['String']['output'];
  table_body?: Maybe<Scalars['String']['output']>;
  table_header?: Maybe<Scalars['String']['output']>;
};

export type Text = {
  __typename?: 'Text';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  format?: Maybe<TextFormat>;
  html?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export enum TextFormat {
  Code = 'Code',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Html = 'HTML'
}

export type TikTokPost = {
  __typename?: 'TikTokPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type TwitterPost = {
  __typename?: 'TwitterPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type VimeoPost = {
  __typename?: 'VimeoPost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type YouTubePost = {
  __typename?: 'YouTubePost';
  _id: Scalars['String']['output'];
  _type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

/** Event type is specifying the kind of event the customer has with your content. */
export enum _Event {
  Bookmark = 'Bookmark',
  Clickthrough = 'Clickthrough',
  Comment = 'Comment',
  Like = 'Like',
  Purchase = 'Purchase',
  Share = 'Share',
  Subscribe = 'Subscribe',
  View = 'View',
  Vote = 'Vote'
}

/** This union type contains all components and remote sources. */
export type _Prepr_Types = ApplePodcast | Assets | Coordinates | FacebookPost | ImagesRow | InstagramPost | NavigationItem | Quote | Resource | SoundCloudPost | SpotifyPlaylist | TableRow | Text | TikTokPost | TwitterPost | VimeoPost | YouTubePost;
