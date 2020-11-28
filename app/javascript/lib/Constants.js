export const TABLES = {
  managed_drafts: 'managed_drafts',
  joinable_drafts: 'joinable_drafts',
  joined_drafts: 'joined_drafts'
}

export const MENU_ITEMS = [
  {
    eventKey: 'managed_drafts',
    label: 'Managed Drafts',
  },
  {
    eventKey: 'joinable_drafts',
    label: 'Joinable Drafts',
  },
  {
    eventKey: 'joined_drafts',
    label: 'Joined Drafts',
  },
]

export const DRAFTS_TABLE_HEADERS = [
  {
    content: 'Name',
    key: 'name',
    width: 70
  },
  {
    content: 'Manager',
    key: 'manager',
    width: 200
  },
  {
    content: 'Email',
    key: 'email',
    width: 200
  }
]