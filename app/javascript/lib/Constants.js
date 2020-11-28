export const TABLES = {
  managed_drafts: 'managed_drafts',
  joinable_drafts: 'joinable_drafts',
  joined_drafts: 'joined_drafts'
}

export const MENU_ITEMS = [
  {
    key: 'managed_drafts',
    content: 'Managed Drafts',
  },
  {
    key: 'joinable_drafts',
    content: 'Joinable Drafts',
  },
  {
    key: 'joined_drafts',
    content: 'Joined Drafts',
  },
]

export const DRAFTS_TABLE_HEADER = {
  key: 'header',
  items: [
    {
      content: 'Name',
      key: 'name',
    },
    {
      content: 'Manager',
      key: 'manager',
    },
    {
      content: 'Email',
      key: 'email',
    },
    {
      content: 'Actions',
      key: 'actions',
    }
  ],
}